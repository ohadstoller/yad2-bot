const yad2 = require("./bot-module");
const runYad2Bot = async () => {
    try {
        let mainPage;
        mainPage = await yad2.browseBot("https://www.yad2.co.il/realestate/forsale");
        const title = await mainPage.getReaEstateTitle();
        console.log(title);
    }
    catch (e) {
        console.log(e);
        throw e;
    }
};
runYad2Bot();
