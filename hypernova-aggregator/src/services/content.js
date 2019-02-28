
const axios = require('axios')

module.exports.getContent = () => {
  return axios.post('http://0.0.0.0:3030/batch', {
    content: {
      name: 'ProductList',
      data: {
        title: 'Products',
        items: [
          {
            title: 'Product 1',
            imageUrl: 'https://via.placeholder.com/150'
          }
        ]
      }
    }
  })
    .then(({ data }) => {
      return data.results.content
    })
}
