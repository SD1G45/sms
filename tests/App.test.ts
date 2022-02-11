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

test("Correctly on login page", async () => {
  await sleep(1_000);

  if (!page) {
    throw new Error("Error while loading App page");
  }

  const url = await page.url();
  
  expect(url).toEqual(rootUrl + "login");
})

afterAll(async () => {
  await browser?.close();
})