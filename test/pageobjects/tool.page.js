const Page = require('./page')

class ToolPage extends Page {
    get toolTitle () { return $('.ToolHeader__Title') }
    get toolDescription () { return $('.ToolHeader__Description') }

    getExperienceOverYearsBlock(toolId) {
        return $(`.Block--${toolId}_experience`)
    }

    open (section, toolId) {
        return super.open(`${section.replace(/_/g, '-')}/${toolId}`)
    }
}

module.exports = ToolPage
