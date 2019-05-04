const http=require('http')
let server=http.createServer((req,res)=>{
<<<<<<< HEAD
    res.write('hi from http server')
=======
    res.write('hi from http server!')
>>>>>>> e1cb98b50cb235b1b5cee0819ca16c6ec20dce85
    res.end()
})
server.listen(3000)
console.log('server is listenning at 3000')
