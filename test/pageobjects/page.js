module.exports = class Page {
    get pageTitle () { return $('.Page__Title') }
    get pageIntro () { return $('.Page__Introduction') }

    get headPreviousLink () { return $('.pagination__previous') }
    get headNextLink () { return $('.pagination__next') }
    get footerPreviousLink () { return $('.PageFooter__Link--previous') }
    get footerNextLink () { return $('.PageFooter__Link--next') }

    open (path) {
        return browser.url(`http://localhost:8000/${path}`)
    }
}
