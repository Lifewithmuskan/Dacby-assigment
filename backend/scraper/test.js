import axios from "axios";
import * as cheerio from "cheerio";

const test = async()=>{
    try{
    const response = await axios.get("https://news.ycombinator.com/");
    const data=cheerio.load(response.data);
    console.log("Top 10 Headlines");

    data(".titleline a").each((index,element)=>{
        if(index < 10 ){
            const title= data(element).text();
            console.log(`${index+1}.${title}`)
        }
    });
    }
    catch(error){
        console.log(error)

    }
}

test();