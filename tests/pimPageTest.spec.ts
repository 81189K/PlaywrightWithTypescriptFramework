import {test, expect} from '../fixtures/hooksFixture';
import pimData from '../testdata/pimTestData.json';

test('[PIM]Add and Verify a new Employee in PIM module', async({beforeEachHookFixture, navigationPanelPageFixture, pimPageFixture})=>{
    await navigationPanelPageFixture.openPIMTab();
    await pimPageFixture.addEmployee(pimData.firstName, pimData.middleName, pimData.lastName);
    await expect(pimPageFixture.newEmployeeNameHeading).toHaveText(`${pimData.firstName} ${pimData.lastName}`);
})
