import axios from "axios";
import * as cheerio from "cheerio";
import Story from "../models/Story.js";

const scrapeStories = async () => {
  try {
    await Story.deleteMany();
    const response = await axios.get("https://news.ycombinator.com/");

    const data = cheerio.load(response.data);

    const stories = [];

    data(".athing").each((index, element) => {
      
        const title = data(element)
          .find(".titleline a")
          .text();

        const url = data(element)
          .find(".titleline a")
          .attr("href");

        const subtext = data(element).next();
        const points = subtext.find(".score").text();
        const author = subtext.find(".hnuser").text();
        const postedAt = subtext.find(".age").text();

        stories.push({
          title,
          url,
          points,
          author,
          postedAt,
        });
      
    });

    await Story.insertMany(stories);

    console.log("Top 10 stories scraped successfully");
  } catch (error) {
    console.log(error);
  }
};

export default scrapeStories;