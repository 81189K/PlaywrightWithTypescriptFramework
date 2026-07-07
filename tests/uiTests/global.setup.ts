import { test } from '../../fixtures/commonFixture';
import { expect } from '@playwright/test';

test('Global Setup for Auto Login', async ({ page, loginPageFixture, dashboardPageFixture, commonUtilsFixture }) => {
    const decryptedUsername = commonUtilsFixture.decrypt(process.env.USER_NAME!);
    const decryptedPassword = commonUtilsFixture.decrypt(process.env.PASSWORD!);

    await loginPageFixture.launchApplication();
    await loginPageFixture.login(decryptedUsername, decryptedPassword);

    await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`);
    await expect(dashboardPageFixture.dashboardTitleText).toHaveText('Dashboard');

    await page.context().storageState({
        path: `./playwright/.auth/auth.json`
    })
})

// 1. Create global.setup.ts file
// 2. Update playwight.config.ts