import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.skip("Example test", async({page}) =>{
  const loginPage = new LoginPage(page);
  await loginPage.launchApplication();
  await loginPage.login('Admin', 'admin123');

});
