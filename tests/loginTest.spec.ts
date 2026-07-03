import {test} from '../fixtures/commonFixture';
import {expect} from '@playwright/test';

test.beforeEach('Before Each Hook', async({loginPageFixture}) => {
  await loginPageFixture.launchApplication();
})

// test.afterEach('After Each Hook', async({userPageFixture}) => {
//   await userPageFixture.logout();
// })

test("Login test 1", async({page}) =>{
  await expect(page).toHaveTitle(/OrangeHRM/);
});

test("Login test 2", async({page}) =>{
  await expect(page).toHaveURL(/dashboard/);
});
