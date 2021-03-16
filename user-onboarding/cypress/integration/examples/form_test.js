
describe("Quotes App", () => {
    // schedule something to happen before each test
    // before each test, we navigate to http://localhost:3000
    //Each test needs fresh state
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    //use the "it" keyword for tests
    it("sanity checks", () => {
        //assertion(s)
        expect(5).to.equal(5)
        expect(1 + 2).to.equal(3)
        // expect({}).to.equal({})
        //You can use equal for primitive values, but use eql for objects/arrays.
        expect({}).to.eql({})
        expect({}).to.not.equal({})
    })

    //Helpers to avoid repetition
    const nameInput = () => cy.get("input[name='name']"),
          emailInput = () => cy.get("input[name='email']"),
          passwordInput = () => cy.get("input[name='password']"),
          tosInput = () => cy.get("input[name='tos']"),
          buttonInput = () => cy.get("button")

    it("the proper elements exist", () => {
        // Checking to make sure all of my inputs exist
        // cy.get("input[name='name']").should("exist")
        // cy.get("input[name='email']").should("exist")
        // cy.get("input[name='password']").should("exist")
        // cy.get("input[name='tos']").should("exist")
        // cy.get("button").should("exist")

        //Doing the same thing using variables to make it neater.
        nameInput().should("exist")
        emailInput().should("exist")
        passwordInput().should("exist")
        tosInput().should("exist")
        buttonInput().should("exist")
    })

    describe("Filling out inputs, testing checkbox and buttons", () => {

        it("Submit button is disabled", () => {
            buttonInput().should("be.disabled")
        })

        it("Can type inside of the inputs", () => {
            nameInput()
                .should("have.value", "")
                .type("Wolverine")
                .should("have.value", "Wolverine")
            emailInput()
                .should("have.value", "")
                .type("logan@jeanlovesme.com")
                .should("have.value", "logan@jeanlovesme.com")
            passwordInput()
                .should("have.value", "")
                .type("CyclopsIsAPunk")
                .should("have.value", "CyclopsIsAPunk")
        })

        it("Can check the checkbox", () => {
            tosInput().check().uncheck()
        })

        it("The submit button enables when all fields are filled out correctly", () => {
            nameInput().type("Wolverine")
            emailInput().type("logan@jeanlovesme.com")
            passwordInput().type("CyclopsIsAPunk")
            tosInput().check()
            buttonInput().should("be.enabled")
        })
    })

    describe("adding new data", () => {
        it("Can add new data", () => {
            nameInput().type("Wolverine")
            emailInput().type("logan@jeanlovesme.com")
            passwordInput().type("CyclopsIsAPunk")
            tosInput().check()
            buttonInput().click()
        })
    })

    describe("Check form validation if one input is left empty", () => {
        it("Tos unchecked", () => {
            nameInput().type("Wolverine")
            emailInput().type("logan@jeanlovesme.com")
            passwordInput().type("CyclopsIsAPunk")
            tosInput().check().uncheck()
        })

        it("Password too short", () => {
            nameInput().type("Wolverine")
            emailInput().type("logan@jeanlovesme.com")
            passwordInput().type("Bub")
            tosInput().check()
        })
    })
})