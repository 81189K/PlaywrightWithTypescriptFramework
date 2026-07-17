import {test as baseTest} from '../fixtures/pomFixture';
import CommonApiUtils from '../utils/CommonApiUtils';
import CommonUtils from '../utils/CommonUtils';

type CommonFixturetype = {
    commonUtilsFixture: CommonUtils,
    commonApiUtilsFixture: CommonApiUtils
}

export const test = baseTest.extend<CommonFixturetype>({
    commonUtilsFixture:  async({}, use)=>{
        await use(new CommonUtils())
    },
    commonApiUtilsFixture: async({request}, use)=>{
        await use(new CommonApiUtils(request))
    }
})