import puppeteer from "puppeteer";
import getRootUrl from "../config/rootUrl";
import { testUser, cleanDatabase, testBusiness, testCoupon } from "./utils/e2eHelpers";

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
    await page.type("#confirm-password", testUser.badPassword);

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
  sleep(1_000);
  it("enters the welcome page", async () => {
    if (!page) {
      throw new Error("Error while loading Welcome page");
    }

    await page.waitForNavigation();
    await expect(page).toMatch('/welcome');
  });

  it("navigates to business/create",  async () => {
    if (!page) {
      throw new Error("Error while loading Welcome page");
    }

    await page.click("#create");
    await page.waitForNavigation();
    await expect(page).toMatch('/business/create');
  });

  it("choose new business name", async () => {
    if (!page) {
      throw new Error("Error while loading /business/create page");
    }

    await page.type("#business-name", testBusiness.name);
    await page.click("#next");
    await page.waitForNavigation();

    const url = await page.url();
    await expect(url).toContain("step=1");
  });

  it("chooses new business logo", async () => {
    if (!page) {
      throw new Error("Error while loading /business/create page");
    }

    await page.click("#upload");
    // TODO: choose and upload image
    await page.click("#cancel");
    await page.click("#next");
    await page.waitForNavigation();

    const url = await page.url();
    await expect(url).toContain("step=2");
  });

  it("chooses new businesss phone number", async () => {
    if (!page) {
      throw new Error("Error while loading /business/create page");
    }

    await page.type("#search", testUser.areaCode);
    await page.click("#search");
    await page.keyboard.press("Enter");
    // Need to mock this
    //await page.click("#radio");
    //await page.click("#create-account");
    await page.waitForNavigation();
    await expect(page).toMatch("/");
  });
})

describe("Coupons", () => {
  it("enters the coupons page", async () => {
    if (!page) {
      throw new Error("Error while loading / page");
    }

    const coupons = await page.$x("//a[contains(text(), 'Coupons')]");
    if (coupons.length > 0) {
      await coupons[0].click();
    } else {
      throw new Error("Coupons nav button not found");
    }
    await page.waitForNavigation();
    await expect(page).toMatch("/coupons");
  });

  it("navigates to coupons/create using SideNav", async () => {
    if (!page) {
      throw new Error("Error while loading /coupons page");
    }

    const create = await page.$x("//td[contains(text(), 'Create New')]");
    if (create.length > 0) {
      await create[0].click();
    } else {
      throw new Error("Create New SideNav button not found");
    }
    await page.waitForNavigation();
    await expect(page).toMatch("/coupons/create");
  });

  it("successfully creates a new coupon", async () => {
    if (!page) {
      throw new Error("Error while loading /coupons/create page");
    }

    await page.type("#title", testCoupon.title);
    await page.type("#message", testCoupon.message);
    await page.type("#expiration-date", testCoupon.expirationDate);
    await page.type("#expiration-time", testCoupon.expirationTime);
    await page.click("#create-coupon");
    await page.screenshot({ path: "coupon.png" });
  });
})

describe("Campaigns", () => {
  it("enters the campaigns page", async () => {
    if (!page) {
      throw new Error("Error while loading / page");
    }

    const coupons = await page.$x("//a[contains(text(), 'Campaigns')]");
    if (coupons.length > 0) {
      await coupons[0].click();
    } else {
      throw new Error("Campaigns nav button not found");
    }
    await page.waitForNavigation();
    await expect(page).toMatch("/campaigns");
  });

  it("navigates to campaigns/create using SideNav", async () => {
    if (!page) {
      throw new Error("Error while loading / page");
    }

    const create = await page.$x("//td[contains(text(), 'Create New')]");
    if (create.length > 0) {
      await create[0].click();
    } else {
      throw new Error("Create New SideNav button not found");
    }
    await page.waitForNavigation();
    await expect(page).toMatch("/campaigns/create");
  });
})

describe("Keywords", () => {
  it("enters the keywords page", async () => {
    if (!page) {
      throw new Error("Error while loading / page");
    }

    const coupons = await page.$x("//a[contains(text(), 'Keywords')]");
    if (coupons.length > 0) {
      await coupons[0].click();
    } else {
      throw new Error("Keywords nav button not found");
    }
    await page.waitForNavigation();
    await expect(page).toMatch("/keywords");
  });

  it("navigates to keywords/create", async () => {
    if (!page) {
      throw new Error("Error while loading / page");
    }

    const create = await page.$x("//td[contains(text(), 'Create New')]");
    if (create.length > 0) {
      await create[0].click();
    } else {
      throw new Error("Create New SideNav button not found");
    }
    await page.waitForNavigation();
    await expect(page).toMatch("/keywords/create");
  });
})

describe("Customers", () => {
  it("enters the customers page", async () => {
    if (!page) {
      throw new Error("Error while loading / page");
    }

    const coupons = await page.$x("//a[contains(text(), 'Customers')]");
    if (coupons.length > 0) {
      await coupons[0].click();
    } else {
      throw new Error("Customers nav button not found");
    }
    await page.waitForNavigation();
    await expect(page).toMatch("/customers");
  });
})

describe("Logout process", () => {
  it("presses logout button and logs user out", async () => {
    if (!page) {
      throw new Error("Error while loading / page");
    }

    const create = await page.$x("//td[contains(text(), 'Create New')]");
    if (create.length > 0) {
      await create[0].click();
    } else {
      throw new Error("Create New SideNav button not found");
    }
    await page.waitForNavigation();
    await expect(page).toMatch("/customers/create");
  });
})

describe("Log back in", () => {
  it("logs user back in to verify account registration", async () => {

  });
})

afterAll(async () => {
  await cleanDatabase("Tests finished. Database clean");
  await browser?.close();
})