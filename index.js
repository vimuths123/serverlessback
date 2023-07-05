const serverless = require("serverless-http");
const express = require('express');

const app = express();
const port = 8080;

// Define your routes and middleware here

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

module.exports.handler = serverless(app);
// module.exports.handler = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: "Go Serverless v3.0! Your function executed successfully!",
//         input: event,
//       },
//       null,
//       2
//     ),
//   };
// };
