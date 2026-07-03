import {test} from '../fixtures/pomFixture'

test("Login test using fixture", async({loginPageFixture}) =>{
  await loginPageFixture.launchApplication();
  await loginPageFixture.login('Admin', 'admin123');

});
