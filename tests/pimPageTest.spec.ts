import {test, expect} from '../fixtures/hooksFixture';
import pimData from '../testdata/pimTestData.json';

test('[PIM] Add and verify a new employee in the PIM module', {
    tag: ['@UI', '@SMOKE' ],
    annotation: {
        type: 'Module',
        description: 'PIM'
    }
}, async({beforeEachHookFixture, navigationPanelPageFixture, pimPageFixture})=>{
    await navigationPanelPageFixture.openPIMTab();
    await pimPageFixture.addEmployee(pimData.firstName, pimData.middleName, pimData.lastName);
    await expect(pimPageFixture.newEmployeeNameHeading).toHaveText(`${pimData.firstName} ${pimData.lastName}`);
})
