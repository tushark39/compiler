 import React from 'react';
 var axios = require("axios").default;
 const App=()=> {


  var options = {
    method: 'POST',
    url: 'https://ideas2it-hackerearth.p.rapidapi.com/run/',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-key': '98dfabb0d7msh6e2fc218c8f4cbap171633jsn9e5fb87792e0',
      'x-rapidapi-host': 'ideas2it-hackerearth.p.rapidapi.com',
      "Access-Control-Allow-Origin": "*"
    },
    data: {
      client_secret: 'ceaf93f10f7330318aecc742f76bda4fae74b12e',
      time_limit: '10',
      async: '0',
      memory_limit: '262144',
      input: 'null',
      source: 'int main() {   printf("Hello world\n");   return 0; }',
      lang: 'C'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log("Result : ",response.data);
  }).catch(function (error) {
    console.error("Error : ",error);
  });
  return (
    <div className="">
      hi
    </div>
  );
}

export default App;
