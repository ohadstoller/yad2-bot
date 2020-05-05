
import { Yad2Bot } from './bot-module'
const yad2 = new Yad2Bot(this.browser);



const runYad2Bot = async (): Promise<void> => {
  try {
    let mainPage: any = await yad2.browseBot(
      "https://www.yad2.co.il/realestate/forsale"
    );
    const realEstateTitle: string = await mainPage.getReaEstateTitle();

    console.log(realEstateTitle)

    await yad2.closeBot()

  } catch (e) {
    console.log(e);
    throw e;
  }
};

runYad2Bot();



