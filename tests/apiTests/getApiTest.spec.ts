import {test} from '../../fixtures/hooksFixture';

test('API Test-1', async({request})=>{
    const bookingIDs = await request.get('/booking');
    console.log(await bookingIDs.json());
});

test('API Test-2', async({request})=>{
    const bookingDetails = await request.get('/booking/1');
    console.log(await bookingDetails.json());
});

//run cmd: npx playwright test --project=APITest