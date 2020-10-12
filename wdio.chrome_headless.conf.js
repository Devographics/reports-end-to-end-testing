const _ = require('lodash')
const baseConfig = require('./wdio.base.conf')

exports.config = _.merge({}, baseConfig.config, {
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
        }
    }],
})
