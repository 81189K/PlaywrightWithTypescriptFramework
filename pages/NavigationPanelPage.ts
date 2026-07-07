import { Locator, Page } from "@playwright/test";

export class NavigationPanelPage {
    readonly page: Page;
    readonly pimLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimLink = page.getByRole('link', {name: 'PIM'});
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