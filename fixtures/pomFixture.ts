import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type PomFixturesType = {
    loginPageFixture: LoginPage;
}

export const test = baseTest.extend<PomFixturesType>({
    loginPageFixture: async({page}, use) => {
        const loginPageObj = new LoginPage(page);
        await use(loginPageObj);
    }
})