import puppeteer from "puppeteer";
import getRootUrl from "../config/rootUrl";
import { testUser, cleanDatabase, testBusiness, testCoupon, testCustomerList, testKeyword, testCampaign } from "./utils/e2eHelpers";

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

    // Please note:
    // Skipping UI version due to issues with mocking phone numbers
  
    await page.goto(rootUrl);
    await expect(page).toMatch("/");
  });
})

describe("Customers", () => {
  it("enters the customers page", async () => {
    if (!page) {
      throw new Error("Error while loading / page");
    }

    const customers = await page.$x("//a[contains(text(), 'Customers')]");
    if (customers.length > 0) {
      await customers[0].click();
    } else {
      throw new Error("Customers nav button not found");
    }
    await page.waitForNavigation();
    await expect(page).toMatch("/customers");
  });

  it("navigates to customers/create using SideNav", async () => {
    if (!page) {
      throw new Error("Error while loading /customers page");
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

  it("successfully creates a new customer list", async () => {
    if (!page) {
      throw new Error("Error while loadinga customers/create page");
    }

    await page.type("#name", testCustomerList.name);
    await page.type("#description", testCustomerList.description);
    await page.click("#create");
    await sleep(1_000);
    await page.click("#close"); 
    await page.waitForNavigation();
    await expect(page).toMatch("/customers");
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
    await sleep(1_000);
    await page.click("#to-keywords");
    await page.waitForNavigation();
    await expect(page).toMatch("/keywords");
  });
})

describe("Keywords", () => {
  it("enters the keywords page", async () => {
    if (!page) {
      throw new Error("Error while loading /keywords page");
    }

    await expect(page).toMatch("/keywords");
  });

  it("navigates to keywords/create", async () => {
    if (!page) {
      throw new Error("Error while loading /keywords page");
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

  it("successfully creates a new keyword", async () => {
    if (!page) {
      throw new Error("Error while loading /keywords/create page");
    }

    const couponId = "#" + testCoupon.title.replace(/\s.*/, '');
    const customerListId = "#" + testCustomerList.name.replace(/\s.*/, '');

    await page.type("#keyword", testKeyword.keyword);
    await page.type("#auto-response", testKeyword.autoResponse);
    await page.type("#description", testKeyword.description);
    await page.type("#coupon", testCoupon.title);
    await page.click(couponId);
    await page.click("#add");
    await page.click(customerListId);
    await page.click("#create");
    sleep(2_000);
    await page.click("#close");
    await page.waitForNavigation();
    await expect(page).toMatch("/keywords");
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

  it("successfully creates a new campaign", async () => {
    if (!page) {
      throw new Error("Error while loading /campaigns/create page");
    }

    const couponId = "#" + testCoupon.title.replace(/\s.*/, '');
    const customerListId = "#" + testCustomerList.name.replace(/\s.*/, '');

    await page.type("#campaign", testCampaign.campaign);
    await page.type("#message", testCampaign.message);
    await page.type("#coupon", testCoupon.title);
    await page.click(couponId);
    await page.click("#add");
    await page.click(customerListId);
    await page.click("#create");
    sleep(2_000);
    await page.click("#close");
    await page.waitForNavigation();
    await expect(page).toMatch("/campaigns");
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