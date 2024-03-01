const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=8bd732a24b9641f5b0b174346230109&q=' + lat + ',' + lon +'&aqi=no'

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (!body) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'The tempature is ' + body.current.temp_c + " C")
        }
    })
}

module.exports = forecast