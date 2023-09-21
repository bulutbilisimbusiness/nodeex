'use scrict'

const http=require('node:http')

/* const app=http.createServer((request,response)=>{
    response.end('<h1>welcome to node server</h1>')

})
app.listen(8000,()=>console.log('Server runned :http://127.0.0.1:8000')) */
/* 
const app=http.createServer((req,res)=>{
    if(req.url=='/'){
res.end("<h1>Main Page</h1>")
} else if(req.url=='/second'){
    res.end("<h1>Second Page</h1>")
} else{
    res.end('<h1>Server is running..</h1>')
}
}).listen(8000,()=>console.log("server runned at http://127.0.0.1:8000")) */

/* http.createServer((req,res)=>{
    if(req.url=='/'){
        res.statusCode=404
        res.statusMessage='Not found'

        res.setHeader('Content-Type','text/html')
        res.setHeader('another-header','another-value');

        res.write('Satır1')
        res.write('Satır2')
        res.write('Satır3')
        res.end()

    } else if ( req.url == '/api' ){

        if(req.method=='GET') {
            res.writeHead(200,"Status Message",{
                'Content-Type':'application/json',
                'another-header':'another-value',
            })
            const obj={
                result:true,
                message:"İşlem Başarılı"
            }
            res.end(JSON.stringify(obj))
        } else {
            res.end('Not supporting different method')
        }
    }
    else{
        res.end('Server is running!')
    }
    
}).listen(8000,()=>console.log('http://127.0.0.1:8000')) */
require('dotenv').config()
console.log(process.env.ENV_PORT)
const port=process.env.ENV_PORT ?? 8000
const app=http.createServer((request,response)=>{
    response.end('<h1>welcome to node server</h1>')

})
app.listen(port,()=>console.log(`Server runned :http://127.0.0.1:${port}`))

console.log("NODE_ENV : ",process.env.NODE_ENV);
console.log("ENV_HOST : ",process.env.ENV_HOST + ':' + process.env.ENV_PORT);
console.log("ENV_EXAMPLE_STR : ",process.env.ENV_EXAMPLE_STR)
console.log("ENV_EXAMPLE_TXT : ",process.env.ENV_EXAMPLE_TXT)