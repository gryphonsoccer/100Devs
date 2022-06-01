const express = require('express')
const app = express()
const PORT = 8000

const energySource = {
    'solar':{
        source:'renewable',
        marketLeader:'LONGi Solar',
        website:'https://www.longi.com/us/'
    },
    'oil':{
        source:'non-renewable',
        marketLeader:'Exxon Mobil',
        website:'https://corporate.exxonmobil.com/'
    },
    'wind':{
        source:'renewable',
        marketLeader:'Vestas',
        website:'https://us.vestas.com/en-us'
    },
    'unknown':{
        source:'unknown',
        marketLeader:'unknown',
        website:'unknown'
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:energySourceName',(req,res)=>{
    const energySourcesName = req.params.energySourceName
    console.log(energySourcesName)
    if(energySource[energySourcesName]){
        res.json(energySource[energySourcesName])
    }else{
        res.json(energySource['unknown'])
    }
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`The server is listening on ${PORT}`)
})
