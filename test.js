const cheerio = require('cheerio');
const axios = require('axios')
axios.get("SITE").then(res => {
//Cheerio
let $ = cheerio.load(res.data);//You Can Write Codes here.
 
});