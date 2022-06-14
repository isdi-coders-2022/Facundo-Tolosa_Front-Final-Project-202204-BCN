describe("Given the Amazing Notes app", () => {
  describe("When the user 'carlos' logs in, creates a note and then delete it", () => {
    it("Then the note won't be at the user page", () => {
      const username = "carlos";
      const password = "carlos";
      const title = "AMAZING NOTES";
      const testNote = {
        title: `${Date.now()}`,
        content: "Content of the test note",
        category: "Sports",
      };

      cy.visit("login");

      cy.get(`[id="username"]`).type(username);

      cy.get(`[id="password"]`).type(`${password}{enter}`);

      cy.get(`[class="logo-desktop"]`).should("contain.text", title);

      cy.get("p").contains("Create a note").click();

      cy.get(`[id="title"]`).type(testNote.title);
      cy.get(`[id="category"]`).select(testNote.category);
      cy.get(`[id="content"]`).type(`${testNote.content}{enter}`);
      cy.get(`[class="submit-input"]`).click();

      cy.get(`[class="title"]`).contains(testNote.title).click();

      cy.get(`[class="content"]`).should("contain.text", testNote.content);
      cy.get(`[class="author"]`).should(
        "contain.text",
        `Note created by ${username}`
      );

      cy.visit(`user/${username}`);

      cy.get(`[class="delete-button"]`).last().click();

      cy.get("ul").last().should("not.contain.text", testNote.title);
    });
  });
});
