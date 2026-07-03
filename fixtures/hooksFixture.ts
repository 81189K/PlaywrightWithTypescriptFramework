import {test as baseTest} from '../fixtures/commonFixture';

export const test = baseTest.extend<any>({
    beforeEachHookFixture: async({loginPageFixture}, use)=>{
        await loginPageFixture.launchApplication();
        await use();
    },
    afterEachHookFixture: async({userPageFixture}, use)=>{
        await use();
        await userPageFixture.logout();
    }
})