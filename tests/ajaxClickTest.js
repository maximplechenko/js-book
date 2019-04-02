describe('ajax button is clickable after loading',function(){
    it.only('click button after timeout sec',function(done){
        browser.url('/Ajax-Loader/index.html');
        this.timeout(60000);
        browser.pause(7000);
        browser.click('#button1');
    });
});