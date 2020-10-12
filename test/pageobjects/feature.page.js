const Page = require('./page')

class FeaturePage extends Page {
    open (featuresId) {
        return super.open(`features/${featuresId.replace(/_/g, '-')}`)
    }

    getFeatureBlock(feature) {
        return $(`#${feature}`)
    }
}

module.exports = FeaturePage
