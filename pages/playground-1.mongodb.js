/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/


db.getCollection('users').insertMany([
    { 'email': 'user1@example.com', 'passwordHash': '<hashed_password_1>' },
    { 'email': 'user2@example.com', 'passwordHash': '<hashed_password_2>' },
    // Add more users here
  ]);
 
  db.getCollection('questions').insertMany([
    {
      'category': 'History',
      'questions': [
        {
          'questionText': 'Who discovered America?',
          'options': ['Christopher Columbus', 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei'],
          'correctOption': 'Christopher Columbus'
        },
        // Add more questions here
      ]
    },
    {
      'category': 'Geography',
      'questions': [
        {
          'questionText': 'What is the capital of France?',
          'options': ['Paris', 'London', 'Berlin', 'Madrid'],
          'correctOption': 'Paris'
        },
        // Add more questions here
      ]
    },
    // Add more categories here
  ]);
  