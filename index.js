const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express();

const url = 'https://www.theguardian.com/uk'

//pass a url to axios
axios(url)
    .then(response => {
        const html = response.data
        console.log(html)
    })

app.listen(PORT, () =>  console.log(`server runnin on PORT ${PORT}`) )