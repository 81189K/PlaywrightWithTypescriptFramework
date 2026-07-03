import {test} from '../fixtures/pomFixture'

test("Login test using fixture", async({loginPageFixture}) =>{
  await loginPageFixture.launchApplication();
  await loginPageFixture.login(process.env.USER_NAME!, process.env.PASSWORD!);

});
