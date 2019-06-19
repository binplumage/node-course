const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/59d5184149f0afbc6ed906a0a2bdabf2/' + latitude + ',' + longitude + '?lang=zh-tw&units=si'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect weather service!')
        } else if (body.error) {
            callback('Unable to find lcoation.')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
