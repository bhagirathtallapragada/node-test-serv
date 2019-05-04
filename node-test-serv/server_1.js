const http=require('http')
let server=http.createServer((req,res)=>{
    res.write('hi from http server!')
    res.end()
})
server.listen(3000)
console.log('server is listenning at 3000')
