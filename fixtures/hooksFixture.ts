import {test as baseTest} from '../fixtures/commonFixture';
import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';


export const test = baseTest.extend<any>({
    beforeEachHookFixture: async(
        {loginPageFixture} : {loginPageFixture: LoginPage},
        use: () => Promise<void>
    )=>{
        await loginPageFixture.launchApplication();
        await use();
    },
    afterEachHookFixture: async(
        {userPageFixture} : {userPageFixture: UserPage},
        use: ()=>Promise<void>
    )=>{
        await use();
        await userPageFixture.logout();
    }
})

export {expect} from '@playwright/test';

//https://chatgpt.com/s/t_6a4b768e035c8191b8734994a30bb709