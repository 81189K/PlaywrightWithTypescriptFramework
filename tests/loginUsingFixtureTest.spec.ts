import {test} from '../fixtures/pomFixture';
import CommonUtils from '../utils/CommonUtils';

test("Login test using fixture", async({loginPageFixture}) =>{
  const commonUtils = new CommonUtils();
  const decryptedUsername = commonUtils.decrypt(process.env.USER_NAME!);
  const decryptedPassword = commonUtils.decrypt(process.env.PASSWORD!);

  await loginPageFixture.launchApplication();
  await loginPageFixture.login(decryptedUsername, decryptedPassword);

});
