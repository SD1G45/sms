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

describe("Create and join new business", () => {
  it("enters the welcome page", () => {

  });

  it("navigates to business/create",  () => {

  });

  it("creates new business account", () => {
    // business name
    // logo
    // phone number
  });
})

describe("Coupons", () => {
  it("enters the coupons page", async () => {
  
  });

  it("navigates to coupons/create", async () => {

  });
})

describe("Campaigns", () => {
  it("enters the campaigns page", async () => {

  });

  it("navigates to campaigns/create", async () => {

  });
})

describe("Keywords", () => {
  it("enters the keywords page", async () => {

  });

  it("navigates to keywords/create", async () => {

  });
})

describe("Customers", () => {
  it("enters the customers page", async () => {

  });
})

describe("Logout process", () => {
  it("presses logout button and logs user out", async () => {

  });
})

describe("Log back in", () => {
  it("logs user back in to verify account registration", () => {

  });
})

afterAll(async () => {
  await cleanDatabase("Tests finished. Database clean");
  await browser?.close();
})