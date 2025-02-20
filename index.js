const express = require('express')
const app = express()

app.use(express.static('.'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html')
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/404.html')
})

app.listen(5000)
console.log('хеппи коргиг')