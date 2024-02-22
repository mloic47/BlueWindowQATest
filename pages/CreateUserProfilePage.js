
export class CreateUserProfilePage {
    async createProfile(page) {
        await page.fill('input[name="name"]', 'John Doe');
        await page.fill('input[name="email"]', 'john@gmail.com');
    }
  
}