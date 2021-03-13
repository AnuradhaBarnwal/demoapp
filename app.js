const axios = require('axios');

axios.get('https://newsapi.org/v2/everything?q=Apple&from=2021-03-10&sortBy=popularity&apiKey=5c1824358a744e86aa599e73bdc2ac5f')
  .then(response => {
    console.log(response.data.articles);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });