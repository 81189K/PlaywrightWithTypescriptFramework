import {test, expect} from '../../fixtures/hooksFixture';
import pimData from '../../testdata/pimTestData.json';

test('[PIM] Add and verify a new employee in the PIM module', {
    tag: ['@UI', '@SMOKE' ],
    annotation: {
        type: 'Module',
        description: 'PIM'
    }
}, async({beforeEachHookFixture, navigationPanelPageFixture, pimPageFixture})=>{
    await test.step('Open PIM Module', async()=>{
        await navigationPanelPageFixture.openPIMTab();
    });
    await test.step('Add a new employee', async()=>{
        await pimPageFixture.addEmployee(pimData.firstName, pimData.middleName, pimData.lastName);
    });
    await test.step('Verify newly added employee name', async()=>{
        await expect(pimPageFixture.newEmployeeNameHeading).toHaveText(`${pimData.firstName} ${pimData.lastName}`);
    });
});
