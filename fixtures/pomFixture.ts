import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';


type PomFixturesType = {
    loginPageFixture: LoginPage;
    dashboardPageFixture: DashboardPage;
    userPageFixture: UserPage;
}

export const test = baseTest.extend<PomFixturesType>({
    loginPageFixture: async({page}, use) => {
        const loginPageObj = new LoginPage(page);
        await use(loginPageObj);
    },
    dashboardPageFixture: async({page}, use) => {
        await use(new DashboardPage(page));
    },
    userPageFixture: async({page}, use) => {
        await use(new UserPage(page));
    }
})