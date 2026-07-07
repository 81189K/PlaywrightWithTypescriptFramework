import {test, expect} from '../../fixtures/hooksFixture';

// test('API Test-1', async({request})=>{
//     const bookingIDs = await request.get('/booking');
//     console.log(await bookingIDs.json());
// });

// test('API Test-2', async({request})=>{
//     const bookingDetails = await request.get('/booking/1');
//     console.log(await bookingDetails.json());
// });

//run cmd: npx playwright test --project=apiTest
// npm run test_demo_api

test('Verify that the user is able to fetch all the booking IDs using GET API', {
    tag: ['@API', '@SMOKE'],
    annotation: {
        type: "HTTP Method",
        description: "GET"
    }
}, async ({ request }) => {
    const bookingIDsResponse = await request.get('/booking');
    const bookingIDsJsonResponse = await bookingIDsResponse.json();
    console.log(bookingIDsJsonResponse);
    //verify response code/text
    expect(bookingIDsResponse.status()).toBe(200);
    expect(bookingIDsResponse.statusText()).toBe('OK');
    expect(bookingIDsResponse.ok()).toBeTruthy();
    //verify response header
    expect(bookingIDsResponse.headers()['content-type']).toBe('application/json; charset=utf-8');
    //verify response body is not empty
    expect(bookingIDsJsonResponse).not.toBeNull();
});