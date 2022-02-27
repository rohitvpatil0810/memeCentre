import axios from "axios";

export default async function handler(req, res) {
  try {
    const data = await axios.get(
      "https://meme-api.herokuapp.com/gimme",
      { param: req.body.param },
      headers
    );
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
