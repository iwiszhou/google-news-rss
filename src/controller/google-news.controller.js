import * as googleNewsAPI from "../service/google-news-api.js";

export const googleNewsRssHandler = async (req, res) => {
  const countryCode = req.query.gl;
  const language = req.query.hl;
  console.log(req.query.q + " " + countryCode + " " + language);
  let news = await googleNewsAPI.getNews(
    googleNewsAPI.SEARCH,
    req.query.q,
    `${language}-${countryCode}`
  );
  // console.log(news);
  res.send(news);
};
