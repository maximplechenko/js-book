describe('Test WDuni homepage',function(){
    it('Output the height of the carousel',function(){
        browser.url('./');
        browser.pause(2000);
        var divCarouselHeight = browser.getCssProperty('#udemy-promo-thumbnail','height');
        console.log(divCarouselHeight);
    })
})