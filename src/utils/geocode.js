const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + encodeURIComponent(address) + '&limit=5&appid=38c1586e89f99a532a61a474a6f33e5e'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body.length) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                lat: body[0].lat,
                lon: body[0].lon,
                location: body[0].country
            })
        }
    })
}

module.exports = geocode