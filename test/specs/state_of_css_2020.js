const FeaturePage = require('../pageobjects/feature.page')
const ToolPage = require('../pageobjects/tool.page')

const featurePages = [
    {
        id: 'layout',
        nav: {
            previous: 'Features',
            next: 'Shapes & Graphics'
        },
        features: [
            'grid',
            'flexbox',
            'multi_column',
            'writing_modes',
            'exclusions'
        ]
    },
    /*
    {
        id: 'shapes_and_graphics',
        nav: {
            previous: 'Layout',
            next: 'Interactions'
        },
        features: [
            'shapes',
            'object_fit',
            'clip_path',
            'masks',
            'blend_modes',
            'filter_effects'
        ]
    },
    {
        id: 'interactions',
        nav: {
            previous: 'Shapes & Graphics',
            next: 'Typography'
        },
        features: [
            'scroll_snap',
            'overscroll_behavior',
            'overflow_anchor'
        ]
    }
    */
]

const toolPages = [
    {
        id: 'styled_components',
        section: 'css_in_js',
        nav: {
            previous: 'CSS-in-JS',
            next: 'JSS'
        },
    },
    {
        id: 'jss',
        section: 'css_in_js',
        nav: {
            previous: 'Styled Components',
            next: 'Styled JSX'
        },
    },
    {
        id: 'styled_jsx',
        section: 'css_in_js',
        nav: {
            previous: 'JSS',
            next: 'Radium'
        },
    }
]

describe('State of CSS 2020', () => {
    //
    // Features
    //
    for (const featurePage of featurePages) {
        describe(`${featurePage.id} feature page`, () => {
            const page = new FeaturePage()

            it('should have a title and a description', () => {
                page.open(featurePage.id)

                expect(page.pageTitle).toBeDisplayed()
                expect(page.pageIntro).toBeDisplayed()
            })

            it('should have navigation to previous/next pages', () => {
                if (featurePage.nav.previous) {
                    expect(page.headPreviousLink).toHaveTextContaining(featurePage.nav.previous)
                    expect(page.footerPreviousLink).toHaveTextContaining(featurePage.nav.previous)
                }
                if (featurePage.nav.next) {
                    expect(page.headNextLink).toHaveTextContaining(featurePage.nav.next)
                    expect(page.footerNextLink).toHaveTextContaining(featurePage.nav.next)
                }
            })

            for (const feature of featurePage.features) {
                describe(`${feature} feature block`, () => {
                    let featureBlock

                    it(`should be displayed`, () => {
                        featureBlock = page.getFeatureBlock(feature)
                        expect(featureBlock).toBeDisplayed()
                    })

                    it(`should contain a title and a description`, () => {
                        const title = featureBlock.$(`.Block__Title`)
                        expect(title).toBeDisplayed()
                        expect(title.$(`.BlockTitleText`)).not.toHaveTextContaining(`[en-US]`, {
                            message: 'block title should be translated'
                        })

                        const description = featureBlock.$(`.Block__Description`)
                        expect(description).toBeDisplayed()
                        expect(description).not.toHaveTextContaining(`[en-US]`, {
                            message: 'block description should be translated'
                        })
                    })

                    it(`should indicate completion`, () => {
                        const completion = featureBlock.$(`.CompletionIndicator`)
                        expect(completion).toBeDisplayed()
                    })

                    it(`should be shareable`, () => {
                        const share = featureBlock.$(`.ShareBlock`)
                        expect(share).toBeDisplayed()
                    })

                    it(`should be exportable`, () => {
                        const exportButton = featureBlock.$(`.ExportButton`)
                        expect(exportButton).toBeDisplayed()
                        exportButton.click()

                        const exportModal = $(`div[class*='BlockExport__Content']`)
                        expect(exportModal).toBeDisplayed()

                        // close export modal
                        browser.keys(['Escape'])
                    })
                })
            }
        })
    }

    //
    // Tools
    //
    for (const toolPage of toolPages) {
        describe(`${toolPage.id} tool page`, () => {
            const page = new ToolPage()

            it('should have a title and a description', () => {
                page.open(toolPage.section, toolPage.id)

                const toolTitle = page.toolTitle
                expect(toolTitle).toBeDisplayed()

                const toolDescription = page.toolDescription
                expect(toolDescription).toBeDisplayed()
            })

            it('should have navigation to previous/next pages', () => {
                if (toolPage.nav.previous) {
                    expect(page.headPreviousLink).toHaveTextContaining(toolPage.nav.previous)
                    expect(page.footerPreviousLink).toHaveTextContaining(toolPage.nav.previous)
                }
                if (toolPage.nav.next) {
                    expect(page.headNextLink).toHaveTextContaining(toolPage.nav.next)
                    expect(page.footerNextLink).toHaveTextContaining(toolPage.nav.next)
                }
            })

            describe('experience over years block', () => {
                let experienceOverYearsBlock

                it(`should be displayed`, () => {
                    experienceOverYearsBlock = page.getExperienceOverYearsBlock(toolPage.id)
                    expect(experienceOverYearsBlock).toBeDisplayed()
                })

                it(`should indicate completion`, () => {
                    const completion = experienceOverYearsBlock.$(`.CompletionIndicator`)
                    expect(completion).toBeDisplayed()
                })

                it(`should be shareable`, () => {
                    const share = experienceOverYearsBlock.$(`.ShareBlock`)
                    expect(share).toBeDisplayed()
                })

                it(`should be exportable`, () => {
                    const exportButton = experienceOverYearsBlock.$(`.ExportButton`)
                    expect(exportButton).toBeDisplayed()
                    exportButton.click()

                    const exportModal = $(`div[class*='BlockExport__Content']`)
                    expect(exportModal).toBeDisplayed()

                    // close export modal
                    browser.keys(['Escape'])
                })
            })
        })
    }
})


