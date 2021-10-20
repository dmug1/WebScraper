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
        //console.log(html)

        const $ = cheerio.load(html) // whenever $ is used we are accessing html, like jquery

        const articles = []

        $('.fc-item__title', html).each(function() { //get each of the items class fc-item__titele
           const title = $(this).text()
           const suburl = $(this).find('a').attr('href')
           articles.push({                             //push the findins to artitlces array
                title,
                suburl
           })



        }
        )
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () =>  console.log(`server runnin on PORT ${PORT}`) )