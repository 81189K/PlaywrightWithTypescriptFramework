import { Locator, Page } from "@playwright/test";

export class NavigationPanelPage {
    readonly page: Page;
    readonly pimLink: Locator;
    readonly orangeHrmLogo: Locator;
    readonly navigationPanel: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimLink = page.getByRole('link', {name: 'PIM'});
        this.orangeHrmLogo = page.getByRole('link', {name: 'client brand banner'});
        this.navigationPanel = page.locator('div.oxd-sidepanel-body');
    }

    /**
     * Open PIM module
     * 
     * ### Usage
     * 
     * ```typescript
     * await navigationPanelPage.openPIMTab();
     * ```
     */
    async openPIMTab(){
        await this.pimLink.click();
    }
}