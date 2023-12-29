const jsonServer = require('json-server')

const filmReview=jsonServer.create()

// const router =jsonServer.router('dbb.json')
const router =jsonServer.router('dbs.json')


const middleware=jsonServer.defaults()

filmReview.use(middleware)
filmReview.use(router)


const port = 5000 || process.env.port

filmReview.listen(port,()=>{
       console.log("server running");
})