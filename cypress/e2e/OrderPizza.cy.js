describe("OrderPizza Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/orderpizza"); // Adjust this URL to match your development server
  });

  it("allows entering text into the name input field", () => {
    cy.get("input#name") // Select the name input by its ID
      .type("Murat Şahin Okçu") // Enter a name
      .should("have.value", "Murat Şahin Okçu"); // Assert that the value matches the input
  });

  it("allows selecting multiple ingredients", () => {
    const ingredients = ["Pepperoni", "Domates", "Biber", "Sucuk"];

    ingredients.forEach((ingredient) => {
      cy.get(`input[type="checkbox"][value="${ingredient}"]`) // Select checkboxes by their value
        .check({ force: true }) // Check the checkbox
        .should("be.checked"); // Assert that it's checked
    });

    // Assert that the selected ingredients count does not exceed the maximum
    cy.get('input[type="checkbox"]:checked').should(
      "have.length",
      ingredients.length
    );
  });

  it("allows submitting the form with valid inputs", () => {
    // Fill out the form
    cy.get("input#name").type("John Doe");
    cy.get("input#small").check({ force: true }); // Select small size
    cy.get("#choose-dough").select("thin"); // Select dough type

    // Select 4 ingredients
    const ingredients = ["Pepperoni", "Domates", "Biber", "Sucuk"];
    ingredients.forEach((ingredient) => {
      cy.get(`input[type="checkbox"][value="${ingredient}"]`).check({
        force: true,
      });
    });

    // Set quantity
    cy.get(".quantity-button-container").contains("+").click().click(); // Increase quantity to 3

    // Submit the form
    cy.get("button[type='submit']").click();

    // Assert successful form submission
    cy.url().should("include", "/success"); // Check the redirect URL
  });
});
