module.exports.meme = () => {
  fetch("https://meme-api.herokuapp.com/gimme")
    .then((res) => res)
    .then((data) => {
      console.log(data);
      return data;
    });
};
