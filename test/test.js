const timeout = 5000;
const width = 1920;
const height = 1080;

let page;

beforeEach(async () => {
    page = await global.__BROWSER__.newPage();
    await page.setViewport({ width, height });
    await page.goto('https://google.com', {waitUntil: 'domcontentloaded'});

}, timeout);

afterEach(async () =>{
    await page.close();
});

describe(
    '/ (Home Page)',
    () => {
        it('search company in google', async () => {
            await page.click("[name='q']");
            await page.type("[name='q']", 'finik.pro');
            await page.click(".FPdoLc > center:nth-child(1) > input:nth-child(1)");
            await page.waitForSelector(".q");
            await page.screenshot({path: 'google.png'});
        });

        it('should load without error', async () => {
            await page.click("[name='q']");
            await page.type("[name='q']", 'finik.pro');
            await page.click(".FPdoLc > center:nth-child(1) > input:nth-child(1)");
            await page.waitForSelector(".q");
            await page.screenshot({path: 'google.png'});
            await page.delete()
        });
    },
    timeout,
);