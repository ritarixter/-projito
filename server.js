const jsonServer = require('json-server')
const path = require('path')

const STORAGE_PATH = path.join(__dirname, 'storage.json')
const PORT = 5001

const server = jsonServer.create()
server.use(jsonServer.defaults())

//Add custom routes
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

server.use(jsonServer.router(STORAGE_PATH))
server.listen(PORT, () => {
  console.log('JSON Server is running')
})
