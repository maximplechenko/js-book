describe("Verify homepage links work correctly", function(){
    it("Check contact button opens contact us page", function(done) {
        browser.setViewportSize({
            width:1200, 
            height:800
        })    
        browser.url('http://www.webdriveruniversity.com/')
        var title = browser.getTitle()
            console.log('Title is: ' + title);
        
        browser.click('#contact-us')
        browser.pause(3000)
    });

    it("Check login button opens login page", function(done){
    browser.url('http://www.webdriveruniversity.com/')
    browser.click('#login-portal')
    var title = browser.getTitle()
    console.log('Title is: ' + title);

        
    })

});