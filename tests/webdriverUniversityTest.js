describe("Verify homepage links work correctly", function(){
    it("Check contact button opens contact us page", function(done) {
        browser.setViewportSize({
            width:1200, 
            height:800
        })    
        browser.url('/')        
        expect(browser.getTitle()).to.equal('WebDriverUniversity.com')
        //browser.debug();
        browser.click('#contact-us');
        browser.pause(3000);
    });

    it("Check login button opens login page", function(done){
        browser.url('/')
        browser.click('#login-portal')
        var title = browser.getTitle()
        title.should.equal('WebDriverUniversity.com');        
    })

});