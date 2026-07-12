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

test('Verify that the user is able to fetch the booking details for a given ID using GET API', {
    tag: ['@API', '@SMOKE'],
    annotation: {
        type: "HTTP Method",
        description: "GET"
    }
}, async ({ request }) => {
    const bookingResponse = await request.get(`${apiTestData.GET_ID.request.resource}/${apiTestData.GET_ID.request.ID}`);
    const bookingJsonResponse = await bookingResponse.json();
    console.log(bookingJsonResponse);
    //verify response code/text
    expect(bookingResponse.status()).toBe(apiTestData.GET_ID.response.statusCode);
    expect(bookingResponse.statusText()).toBe(apiTestData.GET_ID.response.statusText);
    expect(bookingResponse.ok()).toBeTruthy();

    //verify response body is not empty
    expect(bookingJsonResponse).not.toBeNull();
});

test('Verify that the user is able to create new booking using POST API', {
    tag: ['@API', '@SMOKE'],
    annotation: {
        type: "HTTP Method",
        description: "POST"
    }
}, async ({ request }) => {
    const createBookingResponse = await request.post(apiTestData.createBooking.request.resource, {
        data: apiTestData.createBooking.request.payload,
        headers: apiTestData.createBooking.request.headers

    });
    const bookingJsonResponse = await createBookingResponse.json();
    console.log(bookingJsonResponse);
    //verify response code
    expect(createBookingResponse.status()).toBe(apiTestData.createBooking.response.statusCode);

    //verify response body
    expect(bookingJsonResponse.booking).toMatchObject(apiTestData.createBooking.request.payload);
});

test('Verify that the user is able to update an existing booking using PUT API', {
    tag: ['@API', '@SMOKE'],
    annotation: {
        type: "HTTP Method",
        description: "PUT"
    }
}, async ({ request }) => {
    const updateBookingResponse = await request.put(apiTestData.updateBooking.request.resource, {
        data: apiTestData.updateBooking.request.payload,
        headers: apiTestData.updateBooking.request.headers

    });
    const bookingJsonResponse = await updateBookingResponse.json();
    console.log(bookingJsonResponse);
    //verify response code
    expect(updateBookingResponse.status()).toBe(apiTestData.updateBooking.response.statusCode);

    //verify response body
    expect(bookingJsonResponse).toMatchObject(apiTestData.updateBooking.request.payload);
});