import puppeteer from "puppeteer";
import getRootUrl from "../config/rootUrl";

let browser: puppeteer.Browser | undefined;
let page: puppeteer.Page | undefined;
let rootUrl = getRootUrl();

const sleep = async (ms: number) => await new Promise((res) => setTimeout(res, ms));

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();

  await page.goto(rootUrl);
}, 30_000);

test("Correctly on login page at start", async () => {
  await sleep(1_000);

  if (!page) {
    throw new Error("Error while loading App page");
  }

  await expect(page).toMatch('Login')
});

afterAll(async () => {
  await browser?.close();
})