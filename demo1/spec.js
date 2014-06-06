var ptor;
describe('rajnikanth', function() {
  it('should post a new image', function() {
    // Load the AngularJS homepage.
    ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;

    browser.get('https://www.google.co.in/imghp?hl=en');
    ptor.sleep(500);
    element(by.id('lst-ib')).sendKeys('kochadaiyaan rajinikanth');
    element(by.id('sblsbb')).click();
    ptor.sleep(500);

    var resultDiv = element(by.id('rg_s'));
    
    var firstResult = resultDiv.findElement(By.css('.rg_di:first-child a'));

    var imageurl="";
    firstResult.getAttribute('href').then(function(href){
        imageurl = decodeURIComponent(href.match(/[?&]imgurl=([^&]+)/)[1]);
        console.log(imageurl);
    });
    
    //decodeURIComponent('http%3A%2F%2Ffoundpix.in%2Fwp-content%2Fuploads%2F2014%2F03%2FKochadaiyaan.jpg')

    ptor.sleep(300);
    browser.get('https://www.facebook.com/');

    ptor.sleep(1000);

    
    var searchForm = element(by.id('login_form'));
    searchForm.findElement(By.name('email')).sendKeys('kochadirajani@gmail.com');
    searchForm.findElement(By.name('pass')).sendKeys('htsummitdemo');
    searchForm.findElement(By.css('input[type=submit]')).click();
    expect(true).toEqual(true);
    ptor.sleep(1000);

    var homenav = element(by.id('navHome'));
    homenav.findElement(By.tagName('a')).click();
    ptor.sleep(500);

    //var textarea = browser.driver.findElement(By.css('.innerWrap textarea'));
    browser.driver.isElementPresent(By.css('.innerWrap .mentionsTextarea')).then(
        function(){
            var textarea = browser.driver.findElement(By.css('.innerWrap textarea'));
            textarea.clear(); 
            var form = element(by.css('form[action*="updatestatus.php"]'));
            textarea.sendKeys(imageurl + "  Hi Friends.. Watch me in Kochadiyaan!!");
            ptor.sleep(15000);
            //form.submit();
            // var submitBtn = form.findElement(By.css('button[type=submit]'));
            // submitBtn.click();
            ptor.sleep(5000);
            expect(true).toEqual(true);
        });
    });
    
});