const puppeteer = require("puppeteer");
class Yad2Bot {
    constructor(browser, puppeteerPage) {
        this.browser = browser;
        this.puppeteerPage = puppeteerPage;
        this.browser = browser;
        this.puppeteerPage = puppeteerPage;
    }
    async browseBot(domain) {
        this.browser = await puppeteer.launch({ headless: false, devtools: false });
        let page = await this.browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
        await page.goto(domain, { timeout: 100 * 60 * 2 });
        return this.browseMainPage(page);
    }
    async browseMainPage(puppeteerPage) {
        return {
            getReaEstateTitle: async () => {
                await puppeteerPage.waitForSelector('div[class="feed_header"] h1');
                const realEstateHeaderText = await puppeteerPage.evaluate((el) => el.innerHTML, await puppeteerPage.$('div[class=feed_header] h1'));
                return realEstateHeaderText;
            }
        };
    }
}
module.exports = new Yad2Bot(this.browser, this.puppeteerPage);
