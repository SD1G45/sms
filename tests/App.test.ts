import puppeteer from "puppeteer";
import getRootUrl from "../config/rootUrl";
import { testUser, cleanDatabase } from "./utils/e2eHelpers";

let browser: puppeteer.Browser | undefined;
let page: puppeteer.Page | undefined;
let rootUrl = getRootUrl();

const sleep = async (ms: number) => await new Promise((res) => setTimeout(res, ms));

beforeAll(async () => {
  cleanDatabase("Cleaned database - ready for testing.");

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
  it("is on login page at start", async () => {
    await sleep(1_000);
  
    if (!page) {
      throw new Error("Error while loading App page");
    }
  
    await expect(page).toMatch('Login')
  });

  it("moves to register page on clicking link", async () => {
    if (!page) {
      throw new Error("Error while loading Register page");
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

  it("enters and catches false registration credentials", async () => {
    if (!page) {
      throw new Error("Error while loading App page");
    }

    await page.type("#first-name", testUser.firstName);
    await page.type("#last-name", testUser.lastName);
    await page.type("#email", testUser.email);
    await page.type("#password", testUser.password);
    await page.type("#confirm-password", testUser.badPassowrd);

    const text = await page.$eval('p', element => element.textContent);
    await expect(text).toMatch("Passwords don't match");
  });

  it("enters and passes correct registration credentials", async () => {
    if (!page) {
      throw new Error("Error while loading App page");
    }

    await page.click("#confirm-password", {clickCount: 3});
    await page.keyboard.press("Backspace");
    await page.type("#confirm-password", testUser.password);
    await page.click("#register");

    await page.waitForNavigation();
    await expect(page).toMatch('/');
  });
})


afterAll(async () => {
  await cleanDatabase("Tests finished. Database clean");
  await browser?.close();
})