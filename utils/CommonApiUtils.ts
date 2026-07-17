import { APIRequestContext, expect } from "@playwright/test";
import CommonUtils from "./CommonUtils";
import apiTestData from '../testdata/apiTestData.json';


export default class CommonApiUtils {

    private readonly request: APIRequestContext;

    constructor(request: APIRequestContext){
        this.request = request;
    }

    public async createToken(){
        const commonUtils = new CommonUtils();
        apiTestData.createAuthToken.request.payload.username = commonUtils.decrypt(process.env.API_USER_NAME!);
        apiTestData.createAuthToken.request.payload.password = commonUtils.decrypt(process.env.API_PASSWORD!);

        const createTokenResponse = await this.request.post(apiTestData.createAuthToken.request.resource, {
            headers: apiTestData.createAuthToken.request.headers,
            data: apiTestData.createAuthToken.request.payload
        })

        //verify response
        expect(createTokenResponse.status()).toBe(apiTestData.createAuthToken.response.statusCode);
        expect(createTokenResponse.statusText()).toBe(apiTestData.createAuthToken.response.statusText);
        expect(createTokenResponse.ok()).toBeTruthy();

        const createTokenJsonResponse = await createTokenResponse.json();
        return createTokenJsonResponse.token;
    }
}