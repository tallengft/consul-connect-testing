var express = require('express');
var router = express.Router();
const axios = require('axios').default;

const UPSTREAM_URIS = process.env.UPSTREAM_URIS || 'http://localhost:3000';
const QTY = process.env.UPSTREAM_URIS || 50; //Ammount of times to hit upstream uri's endpoint

let servers = []
let count = []

async function getServers(){
  for(let i=0; i < QTY; i++){
    console.log("Trying Server :" + UPSTREAM_URIS)
    const response = await axios.get(UPSTREAM_URIS)
    const serverData = response.data;
    if (!servers.includes(serverData.server)){
      console.log("Found new server: " + serverData.server)
      servers.push(serverData.server);
      count.push(0)
    }
    const serverIndex = servers.indexOf(serverData.server);
    count[serverIndex] = count[serverIndex] + 1;
  }
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  await getServers();
  res.render('index', { title: 'Client', servers: servers, count: count, qty: QTY});
});

module.exports = router;
