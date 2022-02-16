import puppeteer from "puppeteer";
import getRootUrl from "../config/rootUrl";

let browser: puppeteer.Browser | undefined;
let page: puppeteer.Page | undefined;
let rootUrl = getRootUrl();

const sleep = async (ms: number) => await new Promise((res) => setTimeout(res, ms));

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    args: [
      '--window-size=1920,1080',
      '--start-maximized',
    ],
    defaultViewport: null
  });
  page = await browser.newPage();

  await page.goto(rootUrl);
}, 30_000);

describe("Register process", () => {
  it("Correctly on login page at start", async () => {
    await sleep(1_000);
  
    if (!page) {
      throw new Error("Error while loading App page");
    }
  
    await expect(page).toMatch('Login')
  });

  it("Moves to register page on clicking link", async () => {
    if (!page) {
      throw new Error("Error while loading App page");
    }

    const linkHandlers = await page.$x("//label[contains(., 'New to us? Create an Account')]");

    if (linkHandlers.length > 0) {
      await Promise.all([
        linkHandlers[0].click(),
        page.waitForNavigation()
      ]);
    } else {
      throw new Error("Link not found");
    }
    await expect(page).toMatch('register');
  });
})


afterAll(async () => {
  await browser?.close();
})