import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type PomFixturesType = {
    loginPageFixture: LoginPage;
    dashboardPageFixture: DashboardPage;
}

export const test = baseTest.extend<PomFixturesType>({
    loginPageFixture: async({page}, use) => {
        const loginPageObj = new LoginPage(page);
        await use(loginPageObj);
    },

    dashboardPageFixture: async({page}, use) => {
        await use(new DashboardPage(page));
    }
})