const request = require('request');

const geocode = (address, callback) =>{

    console.log('Started GEOCODE');
    const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=585153a5e71f22f4934efc58f419f4bb&query=' + encodeURIComponent(address) + '&limit=1';

    request({url: geocodeURL, json: true}, (error, response, body) =>{

        if(error){
            
            callback("No Network connection!", undefined);
        }else if(body.error){

            callback(body.error.context.query.message, undefined);
        }else if(body.data.length === 0){
            callback('Please enter the search term', undefined);
            
        }else{
           
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                label: body.data[0].label
            });
           
        }

    })
    console.log('Finished GEOCODE');
}

module.exports = geocode;