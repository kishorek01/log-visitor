const express = require('express')
const app = express()
const port = 3000
const requestIP = require('request-ip');
const log = require('log-to-file');

app.get('/', (req, res) => {
    const ipAddress = requestIP.getClientIp(req);
    // log(ipAddress);
    console.log(req.query.id+ " :: " + ipAddress);
    // res.send(ipAddresses);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})