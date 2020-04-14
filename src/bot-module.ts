const puppeteer = require("puppeteer");

class Yad2Bot {
    constructor(public browser: any, public puppeteerPage: object) {
        this.browser = browser
        this.puppeteerPage = puppeteerPage;
    }

    async browseBot(domain: string): Promise<object> {
        this.browser = await puppeteer.launch({ headless: false, devtools: false });
        let page = await this.browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 })
        await page.goto(domain, { timeout: 100 * 60 * 2 });
        return this.browseMainPage(page)
    }
    async browseMainPage(puppeteerPage): Promise<object> {
        return {
            getReaEstateTitle: async (): Promise<string> => {
                await puppeteerPage.waitForSelector('div[class="feed_header"] h1')
                const realEstateHeaderText: string = await puppeteerPage.evaluate((el: { innerHTML: string; }) => el.innerHTML, await puppeteerPage.$('div[class=feed_header] h1'));
                return realEstateHeaderText
            }

        }
    }
}

module.exports = new Yad2Bot(this.browser, this.puppeteerPage);





