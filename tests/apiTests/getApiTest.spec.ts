import {test, expect} from '../../fixtures/hooksFixture';
import apiTestData from '../../testdata/apiTestData.json';

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
    const bookingIDsResponse = await request.get(apiTestData.GET_ALL.request.resource);
    const bookingIDsJsonResponse = await bookingIDsResponse.json();
    console.log(bookingIDsJsonResponse);
    //verify response code/text
    expect(bookingIDsResponse.status()).toBe(apiTestData.GET_ALL.response.statusCode);
    expect(bookingIDsResponse.statusText()).toBe(apiTestData.GET_ALL.response.statusText);
    expect(bookingIDsResponse.ok()).toBeTruthy();
    //verify response header
    expect(bookingIDsResponse.headers()['content-type']).toBe(apiTestData.GET_ALL.response.headerContentType);
    //verify response body is not empty
    expect(bookingIDsJsonResponse).not.toBeNull();
});