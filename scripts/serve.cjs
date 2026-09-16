// Optional local preview. GitHub Pages serves the HTML directly.
const http=require('http'),fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),args=process.argv.slice(2);
const port=Number(args[args.indexOf('--port')+1])||4173;
http.createServer((req,res)=>{
 let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch(e){res.writeHead(400);return res.end();}
 const p=path.resolve(root,'.'+(name==='/'?'/index.html':name));
 if(!p.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
 fs.readFile(p,(err,data)=>{if(err){res.writeHead(404);return res.end('No encontrado');}
 res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.pdf':'application/pdf'})[path.extname(p)]||'text/plain; charset=utf-8');res.setHeader('Cache-Control','no-store');res.end(data);});
}).listen(port,'0.0.0.0',()=>console.log('Vista local lista'));
