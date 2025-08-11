// Test script to verify Netlify function works locally
const { handler } = require('./netlify/functions/api.ts');

const testEvent = {
  httpMethod: 'GET',
  path: '/api/knowledge',
  headers: {},
  body: null
};

const testContext = {};

handler(testEvent, testContext)
  .then(response => {
    console.log('Test Response:', response.statusCode);
    if (response.body) {
      const data = JSON.parse(response.body);
      if (Array.isArray(data)) {
        console.log('Articles returned:', data.length);
        console.log('First article:', data[0]?.title);
      } else {
        console.log('Response data:', data);
      }
    }
  })
  .catch(error => {
    console.error('Test Error:', error);
  });