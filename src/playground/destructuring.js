// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'penguin',
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(`Your favourite book was published by ${publisherName}`);
const item = ['Coffee (iced)', '3.00', '3.50', '3.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} will cost you ${medium} `);
