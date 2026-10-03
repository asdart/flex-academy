import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    port: { type: 'string', default: process.env.PORT || '5173' },
    host: { type: 'string', default: '127.0.0.1' }
  }
});
const port = Number(values.port);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('Choose a port between 1 and 65535.');
  process.exit(1);
}
const root = fileURLToPath(new URL('../flex-concepts/dist/', import.meta.url));
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.json': 'application/json; charset=utf-8'
};
const server = createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = resolve(root, `.${pathname}`);
    if (file !== resolve(root) && !file.startsWith(resolve(root) + sep)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    const content = await readFile(file);
    res.writeHead(200, {
      'Content-Type': mime[extname(file)] || 'application/octet-stream',
      'Content-Length': content.length,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch (error) {
    const status = error instanceof URIError ? 400 : ['ENOENT', 'ENOTDIR', 'EISDIR'].includes(error.code) ? 404 : 500;
    res.writeHead(status).end(status === 404 ? 'Not found' : status === 400 ? 'Invalid URL' : 'Server error');
  }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `Port ${port} is in use. Try npm run dev -- --port ${port + 1}`
    : `Could not start preview: ${error.message}`);
  process.exitCode = 1;
});
server.listen(port, values.host, () => {
  const host = values.host === '0.0.0.0' ? 'localhost' : values.host;
  console.log(`\nFlex Academy preview: http://${host}:${port}\n`);
  console.log('  /operator/\n  /build-your-way-out/\n  /business-school/\n');
  console.log('Press Ctrl+C to stop. Reload the browser after editing files.');
});
