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
test('[Login] Verify login with an invalid password', {
    tag: ['@UI', '@SMOKE' ],
    annotation: {
        // type: 'Test Case Link',
        // description: 'JIRA_LINK'
        type: 'Module',
        description: 'Login'
    }
}, async({loginPageFixture, commonUtilsFixture})=>{
    const username = commonUtilsFixture.decrypt(process.env.USER_NAME!);
    await loginPageFixture.launchApplication(); //instead of beforeEachHookFixture fixture, directly calling launchApplication() using loginPageFixture
    await loginPageFixture.login(username, loginData.incorrectPassword);
    await expect(loginPageFixture.invalidLoginErrorPopup).toHaveText(loginData.invalidLoginErrorText);
})

test('[Login] Verify login with an invalid username', {
    tag: ['@UI', '@SMOKE' ],
    annotation: {
        type: 'Module',
        description: 'Login'
    }
}, async({beforeEachHookFixture, loginPageFixture, commonUtilsFixture})=>{
    const password = commonUtilsFixture.decrypt(process.env.PASSWORD!);
    await loginPageFixture.login(loginData.incorrectUsername, password);
    await expect(loginPageFixture.invalidLoginErrorPopup).toHaveText(loginData.invalidLoginErrorText);
})

test('[Login] Verify login with an invalid username and password', {
    tag: ['@UI', '@SANITY' ],
    annotation: {
        type: 'Module',
        description: 'Login'
    }
}, async({beforeEachHookFixture, loginPageFixture, })=>{
    await loginPageFixture.login(loginData.incorrectUsername, loginData.incorrectPassword);
    await expect(loginPageFixture.invalidLoginErrorPopup).toHaveText(loginData.invalidLoginErrorText);
})