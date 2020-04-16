//
// Object destructioring
//

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin',
  }
}

const { name: publisherName = 'Self published' } = book.publisher
console.log(publisherName)

//
// Array destructioring
//

const item = ['Coffes(hot)', '$2.00', '$2.50', '$2.75']

const [mediumCoffee = 'We are out of coffee', , price = '',] = item
console.log(`${mediumCoffee} costs ${price}`)