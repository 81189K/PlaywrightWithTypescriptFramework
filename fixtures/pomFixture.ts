import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';
import { NavigationPanelPage } from '../pages/NavigationPanelPage';
import { PimPage } from '../pages/PimPage';


type PomFixturesType = {
    loginPageFixture: LoginPage;
    dashboardPageFixture: DashboardPage;
    userPageFixture: UserPage;
    navigationPanelPageFixture: NavigationPanelPage;
    pimPageFixture: PimPage;
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
    },
    navigationPanelPageFixture: async({page}, use) => {
        await use(new NavigationPanelPage(page));
    },
    pimPageFixture: async({page}, use) => {
        await use(new PimPage(page));
    }
})