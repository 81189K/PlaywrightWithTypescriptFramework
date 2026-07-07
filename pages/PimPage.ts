import {Page, Locator} from '@playwright/test';

export class PimPage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstNameTextBox: Locator;
    readonly middleNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly saveButton: Locator;
    readonly newEmployeeNameHeading: Locator;

    constructor(page: Page){
        this.page = page;
        this.addButton = page.getByRole('button', { name: ' Add' });
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextBox = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.newEmployeeNameHeading = page.locator('.orangehrm-edit-employee-name');
    }

    /**
     * Add a new employee in PIM module
     * 
     * ### Usage
     * 
     * ```typescript
     * await pimPage.login('test', 'user', 'one');
     * ```
     *
     * @param firstName
     * @param middleName
     * @param lastName
     */
    async addEmployee(firstName: string, middleName: string, lastName: string,){
        await this.addButton.click();
        await this.firstNameTextBox.fill(firstName);
        await this.middleNameTextBox.fill(middleName);
        await this.lastNameTextBox.fill(lastName);
        await this.saveButton.click();
    }
}