const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // log(ipAddress);
    console.log(req.query.id + " :: " + req.query.ip);
    // res.send(ipAddresses);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})