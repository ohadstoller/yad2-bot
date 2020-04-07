const puppeteer = require("puppeteer");

class Yad2Bot {
    constructor(public browser: any) {
        this.browser = browser
        // this.puppeteerPage = puppeteerPage;
    }

    async browseBot(domain: string): Promise<object> {
        this.browser = await puppeteer.launch({ headless: false, devtools: false });
        let page = await this.browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 })
        await page.goto(domain, { timeout: 600000 });
        return this.browseMainPage(page)
    }
    async browseMainPage(puppeteerPage): Promise<object> {
        return {
            getReaEstateTitle: async (): Promise<string> => {

                await puppeteerPage.waitForSelector('div[class="feed_header"] h1')
                const realEstateHeaderText: string = await puppeteerPage.evaluate(el => el.innerHTML, await puppeteerPage.$('div[class=feed_header] h1'));



                return realEstateHeaderText




            }

        }
    }
}

module.exports = new Yad2Bot(this.browser);




