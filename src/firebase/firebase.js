import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }


// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//   amount: 15633,
//   description: 'rent',
//   note: 'january',
//   createdAt: 0
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.id,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   })


















// database.ref('notes').push({
//   title: 'todo 3',
//   body: 'call mom'
// })

// database.ref('notes/M53Ec6D9KMB-6bG1d1c').remove()

// const firebaseNotes = {
//   notes: {
//     apolj: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     aljgldsjg: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// }

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((err) => {
//     console.log('Error fetching data', err)
//   })

// database.ref().set({
//   name: 'Björn Carell',
//   age: 32,
//   stressLevel: 26,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Stockholm',
//     country: 'Sweden'
//   }
// }).then(() => {
//   console.log('data was saved!')
// }).catch((err) => {
//   console.log('This faild', err)
// })


// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   'location/country': 'US'
// })











// database.ref().update({
//   job: 'manager',
//   'location/city': 'Malmö'
// })


// database.ref('isSingle').set(null)
// database.ref('isSingle).remove() -- dess två gör samma sak

// database.
//   ref('isSingle').
//   remove().
//   then(() => {
//     console.log('data was removed')
//   }).catch((err) => {
//     console.log('Could not perform tarsk', err)
//   })

// update can only be used with an obejct as argument
// database.ref().update({
//   name: 'Mike',
//   age: 29
// })


