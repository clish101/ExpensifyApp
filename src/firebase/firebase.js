import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   description: 'The third description',
//   note: 'The third note',
//   amount: 13000,
//   createdAt: 3000,
// });
// database.ref('expenses').on('value', (snapShot) => {
//   let expenses = [];

//   snapShot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });

//   console.log(expenses);
// });

// const expenses = [
//   {
//     description: 'The first description',
//     note: 'The first note',
//     amount: 11000,
//     createdAt: 1000,
//   },
//   {
//     description: 'The second description',
//     note: 'The second note',
//     amount: 12000,
//     createdAt: 2000,
//   },
//   {
//     description: 'The third description',
//     note: 'The third note',
//     amount: 13000,
//     createdAt: 3000,
//   },
// ];

// for (let i = 0; i < expenses.length; i++) {
//   database.ref('expenses').push(expenses[i]);
// }

// database.ref('notes/-MLtcXcHNRR0Rx4jwyZy').update({
//   createdAt: 4200,
// });
// database.ref().on(
//   'value',
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   (e) => {
//     console.log('Shit happen like so ', e);
//   }
// );
// database
//   .ref()
//   .set({
//     name: 'Henry Salim',
//     Age: 26,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google',
//     },

//     location: {
//       city: 'Nairobi',
//       country: 'Kenya',
//     },
//   })
//   .then(() => {
//     console.log('All went well ');
//   })
//   .catch((e) => {
//     console.log('Shit will happen like so ...', e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
// });

// database.ref('Age').set(27);
// database.ref('location/city').set('NewYork');
// database.ref('attributes').set({
//   height: 6.2,
//   weight: '68kgs',
// });

// database
//   .ref()
//   .update({
//     age: 16,
//     name: 'Clinton',
//   })
//   .then(() => {
//     console.log('Age and name has been set to other values');
//   })
//   .catch(() => {
//     console.log('Nothing happened');
//   });
