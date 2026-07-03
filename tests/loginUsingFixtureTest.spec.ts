import {test} from '../fixtures/commonFixture';

test("Login test using fixture", async({loginPageFixture, commonUtilsFixture}) =>{
  const decryptedUsername = commonUtilsFixture.decrypt(process.env.USER_NAME!);
  const decryptedPassword = commonUtilsFixture.decrypt(process.env.PASSWORD!);

  await loginPageFixture.launchApplication();
  await loginPageFixture.login(decryptedUsername, decryptedPassword);

});
