const request = require('request');

const forecast = (latitude, longitude, callback ) => {


    console.log('Started FORECAST');
    const url = 'http://api.weatherstack.com/current?access_key=4c5a8bb840445c38b7516ce6b5697363&query='+ encodeURIComponent(latitude) +','+encodeURIComponent(longitude)+'';

    request({url: url, json: true}, (error, response, body)=>{
        if(error){

            callback('No network connection!', undefined);
        }else if(body.success === false){
            
            callback(body.error.info, undefined);
        }
        else{
            console.log(body);
            callback(undefined, {
                
                temperature: body.current.temperature,
                precip: body.current.precip,
                weather_description: body.current.weather_descriptions[0],
                wind_speed:  body.current.wind_speed,
                humidity: body.current.humidity,
                uv_index: body.current.uv_index,
                visibility: body.current.visibility
            });
        }


    })
    console.log('Finished FORECAST');
}

module.exports = forecast;