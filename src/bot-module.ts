import * as puppeteer from 'puppeteer';
import { Page } from './Types'

class Yad2Bot {
    constructor(private browser) {
        this.browser = browser
    }

    async browseBot(domain: string): Promise<object> {
        this.browser = await puppeteer.launch({ headless: true, devtools: false });
        let page = await this.browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 })
        await page.goto(domain, { timeout: 100 * 60 * 12 });
        return this.browseMainPage(page)
    }
    async closeBot(): Promise<void> {
        console.log('Closing bot.. Bye Bye..')
        await this.browser.close()
    }



    async browseMainPage(puppeteerPage: Page): Promise<object> {
        return {
            getReaEstateTitle: async (): Promise<string> => {
                await puppeteerPage.waitForSelector('div[class="feed_header"] h1')
                const title: string = await puppeteerPage.evaluate((el: { innerHTML: string; }) => el.innerHTML, await puppeteerPage.$('div[class=feed_header] h1'));
                const titleSplit = title.split("")
                const titleRev = titleSplit.reverse()
                const titleJoin = titleRev.join("")
                return titleJoin
            },
            reverseString: async (string: string): Promise<string> => {
                return string.split('').reverse().join('')
            }
        }
    }
}

export { Yad2Bot }




