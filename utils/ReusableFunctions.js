// Function to handle dialogs
export class ReusableFunctions {
 
    // Function to handle dialogs
     async handleDialog(page, expectedMessage) {
      await page.once("dialog", async (dialog) => {
        console.log("Dialog message: " + dialog.message());
        expect(dialog.message()).toContain(expectedMessage);
        await dialog.dismiss().catch(() => {});
      });
    };
    
  };