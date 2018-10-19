//const request = require('request');
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')
const yargs = require('yargs');
const argv = yargs
		.options({
			address:{
				describe:'Address to get weather information',
				demand:true,
				alias:'a',
				string:true
			}
		})		
		.help()
		.alias('help','h')
		.argv;

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
	if(errorMessage){
		console.log(errorMessage);
	}
	else{
		weather.getWeather(results.latitude,results.longitude,(errorMessage,results)=>{
			if(errorMessage){
				console.log(errorMessage);
			}
			else{
				console.log(results.temperature);
			}
		});
		//console.log(JSON.stringify(results,undefined,2));
	}
});
//console.log(encodedAddress);

//https://api.darksky.net/forecast/d90e57891ea9a036a6b5b5638de3cc69/37.8267,-122.4233