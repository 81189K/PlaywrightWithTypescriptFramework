import {test as baseTest} from '../fixtures/pomFixture';
import CommonUtils from '../utils/CommonUtils';

type CommonFixturetype = {
    commonUtilsFixture: CommonUtils
}

export const test = baseTest.extend<CommonFixturetype>({
    commonUtilsFixture:  async({}, use)=>{
        await use(new CommonUtils())
    }
})