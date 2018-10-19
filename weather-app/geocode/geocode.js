const request = require('request');
const keys = require('../APIKeys/keys')


var geocodeAddress = (address,callback)=>{

var encodedAddress = encodeURIComponent(address);
request({
    //url:`https://maps.googleapis.com/maps/api/geocode/json?key=${keys.googleMapApiKey}&address=${encodedAddress}`,
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=${keys.mapQuestApiKey}&location=${encodedAddress}`,
    json:true
},(error,response,body)=>{
	if(error){
		//console.log('Unable to connect');
		callback('Unable to connect');
	}
	else if(body.info.statuscode === 400){
		//console.log('Unable to fetch address');
		callback('Unable to fetch address');
	}
	/*else if(body.status === 'ZERO_RESULTS'){
		//console.log('Unable to fetch address');
		callback('Unable to fetch address');
	}*/
	else if(body.info.statuscode === 0){
    //console.log(JSON.stringify(body,undefined,2));
    callback(undefined,{    	
    	latitude:body.results[0].locations[0].latLng.lat,
    	longitude:body.results[0].locations[0].latLng.lng
    	});
	}
	/*else if(body.status === 'OK'){
    //console.log(JSON.stringify(body,undefined,2));
    callback(undefined,{
    	address:body.results[0].formatted_address,
    	latitude:body.results[0].geometry.location.lat,
    	longitude:body.results[0].geometry.location.lng
    	});
	}*/
    else{
    	//console.log('hi');
    	callback(undefined,{
    	latitude:37.8267,
    	longitude:-122.4233
    	});    
    }
    /*console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
    //console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
    //console.log(`Latitude: ${body.results[0].locations[0].latLng.lng}`);*/
	
});
}

module.exports = {
	geocodeAddress
}