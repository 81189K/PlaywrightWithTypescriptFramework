import {test, expect} from '../fixtures/hooksFixture';
import loginData from '../testdata/loginTestData.json';
// import {expect} from '@playwright/test'; // from hooksFixture.


//ignore the project's authenticated state and starts with an empty context.
test.use({
    storageState:{
        cookies:[],
        origins:[]
    }
})


/*** Read data from json file */
test('Login with invalid password', async({loginPageFixture, commonUtilsFixture})=>{
    const username = commonUtilsFixture.decrypt(process.env.USER_NAME!);
    await loginPageFixture.launchApplication(); //instead of beforeEachHookFixture fixture, directly calling launchApplication() using loginPageFixture
    await loginPageFixture.login(username, loginData.incorrectPassword);
    await expect(loginPageFixture.invalidLoginErrorPopup).toHaveText(loginData.invalidLoginErrorText);
})

test('Login with invalid username', async({beforeEachHookFixture, loginPageFixture, commonUtilsFixture})=>{
    const password = commonUtilsFixture.decrypt(process.env.PASSWORD!);
    await loginPageFixture.login(loginData.incorrectUsername, password);
    await expect(loginPageFixture.invalidLoginErrorPopup).toHaveText(loginData.invalidLoginErrorText);
})

test('Login with both invalid username and password', async({beforeEachHookFixture, loginPageFixture, })=>{
    await loginPageFixture.login(loginData.incorrectUsername, loginData.incorrectPassword);
    await expect(loginPageFixture.invalidLoginErrorPopup).toHaveText(loginData.invalidLoginErrorText);
})