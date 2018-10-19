const request = require('request');
const keys = require('../APIKeys/keys.js');

var getWeather = (latitude,longitude,callback)=>{
	//console.log('HI');
	request({
		url:`https://api.darksky.net/forecast/${keys.forecastApiKey}/${latitude},${longitude}`,
		json:true
	},(error,response,body)=>{
		if(error){
			//console.log('Unable to connect');
			callback('Unable to connect');
		}
		else if(response.statusCode === 400){
			//console.log('Unable to get weather');
			callback('Unable to get weather');
		}
		else if(response.statusCode === 200){
			//console.log(body.currently.temperature);
			callback(undefined,{
				temperature:body.currently.temperature
			});
		}
	//}
	});
};

module.exports = {
	getWeather
};
//37.8267,-122.4233