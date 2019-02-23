
const axios = require('axios')

module.exports.getContent = () => {
  return axios.post('http://0.0.0.0:3030/batch', {
    content: {
      name: 'ProductList',
      data: {
        title: 'Series',
        items: [
          {
            title: 'Game of thrones',
            imageUrl: 'https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2016%2F05%2FGame-of-Thrones-Season-6-HEADER.jpg&c=sc&w=850&h=560'
          }
        ]
      }
    }
  })
    .then(({ data }) => {
      return data.results.content
    })
}
