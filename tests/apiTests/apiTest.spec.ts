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

let bookingID: string;
let createdBookingID: string;
test('Verify that the user is able to fetch all the booking IDs using GET API', {
    tag: ['@API', '@SMOKE'],
    annotation: {
        type: "HTTP Method",
        description: "GET"
    }
}, async ({ request }) => {
    const bookingIDsResponse = await request.get(apiTestData.GET.request.resource);
    const bookingIDsJsonResponse = await bookingIDsResponse.json();
    console.log(bookingIDsJsonResponse);
    //verify response code/text
    expect(bookingIDsResponse.status()).toBe(apiTestData.GET.response.statusCode);
    expect(bookingIDsResponse.statusText()).toBe(apiTestData.GET.response.statusText);
    expect(bookingIDsResponse.ok()).toBeTruthy();
    //verify response header
    expect(bookingIDsResponse.headers()['content-type']).toBe(apiTestData.GET.response.headerContentType);
    //verify response body is not empty
    expect(bookingIDsJsonResponse).not.toBeNull();
    bookingID = bookingIDsJsonResponse[1].bookingid;
    console.log(`Booking ID: ${bookingID}`);
});

test('Verify that the user is able to fetch the booking details for a given ID using GET API', {
    tag: ['@API', '@SMOKE'],
    annotation: {
        type: "HTTP Method",
        description: "GET"
    }
}, async ({ request }) => {
    const bookingResponse = await request.get(`${apiTestData.GET.request.resource}/${bookingID}`);
    const bookingJsonResponse = await bookingResponse.json();
    console.log(bookingJsonResponse);
    //verify response code/text
    expect(bookingResponse.status()).toBe(apiTestData.GET.response.statusCode);
    expect(bookingResponse.statusText()).toBe(apiTestData.GET.response.statusText);
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
    createdBookingID = bookingJsonResponse.bookingid;
    console.log(`Created booking ID: ${createdBookingID}`);
});

test('Verify that the user is able to update an existing booking using PUT API: using API Key', {
    tag: ['@API', '@SMOKE'],
    annotation: {
        type: "HTTP Method",
        description: "PUT call using API Key"
    }
}, async ({ request }) => {
    const updateBookingResponse = await request.put(`${apiTestData.updateBooking.request.resource}/${createdBookingID}`, {
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

test('Verify that the user is able to update an existing booking using PUT API: using Basic Authentication', {
    tag: ['@API', '@SMOKE'],
    annotation: {
        type: "HTTP Method",
        description: "PUT call using Basic Authentication"
    }
}, async ({ request, commonApiUtilsFixture }) => {
    const authToken = await commonApiUtilsFixture.createToken();
    expect(authToken).toMatch(/\S+/); //any non-whitespace character
    //update token value in apiTestData
    apiTestData.updateBooking2.request.headers.Cookie = apiTestData.updateBooking2.request.headers.Cookie.replace("{{authToken}}", authToken)
    
    const updateBookingResponse = await request.put(`${apiTestData.updateBooking2.request.resource}/${createdBookingID}`, {
        data: apiTestData.updateBooking2.request.payload,
        headers: apiTestData.updateBooking2.request.headers
    });
    const bookingJsonResponse = await updateBookingResponse.json();
    console.log(bookingJsonResponse);
    //verify response code
    expect(updateBookingResponse.status()).toBe(apiTestData.updateBooking2.response.statusCode);

    //verify response body
    expect(bookingJsonResponse).toMatchObject(apiTestData.updateBooking2.request.payload);
});

test('Verify that the user is able to update an existing booking using PATCH API: using Basic Authentication', {
    tag: ['@API', '@SMOKE'],
    annotation: {
        type: "HTTP Method",
        description: "PATCH call using Basic Authentication"
    }
}, async({ request, commonApiUtilsFixture })=>{
    const authToken = await commonApiUtilsFixture.createToken();
    expect(authToken).toMatch(/\S+/); //any non-whitespace character
    //update token value in apiTestData
    apiTestData.patchBooking.request.headers.Cookie = apiTestData.patchBooking.request.headers.Cookie.replace("{{authToken}}", authToken)
    
    const patchBookingResponse = await request.patch(`${apiTestData.patchBooking.request.resource}/${createdBookingID}`, {
        data: apiTestData.patchBooking.request.payload,
        headers: apiTestData.patchBooking.request.headers
    });
    const bookingJsonResponse = await patchBookingResponse.json();
    console.log(bookingJsonResponse);
    //verify response code
    expect(patchBookingResponse.status()).toBe(apiTestData.patchBooking.response.statusCode);

    //verify response body
    expect(bookingJsonResponse.firstname).toMatch(apiTestData.patchBooking.request.payload.firstname);
    expect(bookingJsonResponse.lastname).toMatch(apiTestData.patchBooking.request.payload.lastname);
});

test('Verify that the user is able to delete an existing booking using DELETE API: using Basic Authentication', {
    tag: ['@API', '@SMOKE'],
    annotation: {
        type: "HTTP Method",
        description: "DELETE call using Basic Authentication"
    }
}, async({ request, commonApiUtilsFixture })=>{
    const authToken = await commonApiUtilsFixture.createToken();
    expect(authToken).toMatch(/\S+/); //any non-whitespace character
    //update token value in apiTestData
    apiTestData.deleteBooking.request.resource = apiTestData.deleteBooking.request.resource.replace("{{ID}}", createdBookingID);
    apiTestData.deleteBooking.request.headers.Cookie = apiTestData.deleteBooking.request.headers.Cookie.replace("{{authToken}}", authToken);
    
    const deleteBookingResponse = await request.delete(apiTestData.deleteBooking.request.resource, {
        headers: apiTestData.deleteBooking.request.headers
    });
    //verify response
    expect(deleteBookingResponse.status()).toBe(apiTestData.deleteBooking.response.statusCode);
    expect(deleteBookingResponse.statusText()).toBe(apiTestData.deleteBooking.response.statusText);

    // verify deletion
    const getBookingResponse = await request.get(`${apiTestData.GET.request.resource}/${createdBookingID}`);
    //verify response code/text
    expect(getBookingResponse.status()).toBe(apiTestData.verifyDeletion.statusCode);
    expect(getBookingResponse.statusText()).toBe(apiTestData.verifyDeletion.statusText);
});