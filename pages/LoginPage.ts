import { Page, Locator } from "@playwright/test";


export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    /**
     * To open URL into Browser
     */
    async launchApplication() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    /**
     * Authenticates a user by filling credentials and submitting the form.
     * 
     * ### Usage
     * 
     * ```typescript
     * await loginPage.login('test_user', 'SecurePassword123!');
     * ```
     * 
     * ### Details
     * 
     * This method waits for actionability checks on the username and password inputs, focuses them, fills the provided values, and subsequently clicks the login button. 
     * 
     * Ensure that the target elements (`usernameInput`, `passwordInput`, and `loginButton`) are properly initialized locators before calling this method.
     * 
     * @param username - The username or email address to authenticate with.
     * @param password - The password associated with the user account.
     */
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}