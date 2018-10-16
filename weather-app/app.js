const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDm_uDnlHgdjHFz3fF3X8t06D1JOEw5568&address=mit%20manipal',
    json:true
},(error,response,body)=>{
    console.log(error,body,response);
});