import {test} from '../fixtures/hooksFixture';
import {expect} from '@playwright/test';

// test.beforeEach('Before Each Hook', async({loginPageFixture}) => {
//   await loginPageFixture.launchApplication();
// })

// test.afterEach('After Each Hook', async({userPageFixture}) => {
//   await userPageFixture.logout();
// })

test.skip(true, 'Skipping entire file');

test("Login test 1", async({page,beforeEachHookFixture}) =>{
  await expect(page).toHaveTitle(/OrangeHRM/);
  console.log("title check passed");
});

test("Login test 2", async({page, beforeEachHookFixture, afterEachHookFixture}) =>{
  await expect(page).toHaveURL(/dashboard/);
  console.log("url check passed");
});
