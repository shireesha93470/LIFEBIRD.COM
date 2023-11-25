describe("verifying web pages",()=>{
    it("verifying the content in home page", ()=>{
        cy.visit("/")
        cy.wait(5000)

        cy.get('[class="logo"]').should("exist")
        cy.get('.home').should("contain","Home");
        cy.get('.navtext').eq(0).should("contain","PHC");
        cy.get('.navtext').eq(1).should("contain","Specilaist");
        cy.get('.navtext').eq(2).should("contain","medicines");
        cy.get('.navtext').eq(3).should("contain","Signup");

        cy.get('[class="small-round"]').eq(0).should("exist");
        cy.get('[class="small-round"]').eq(1).should("exist");
        cy.get('[class="small-round"]').eq(2).should("exist");
        cy.get('[class="small-round"]').eq(3).should("exist");

        cy.get('[class="main"]').should("exist");

        cy.get('[class="small-cards1"]').eq(0).should("exist");
        cy.get('[class="small-cards1"]').eq(1).should("exist");
        cy.get('[class="small-cards"]').eq(0).should("exist");
        cy.get('[class="small-cards"]').eq(1).should("exist");
        cy.get('[class="small-cards"]').eq(2).should("exist");
        cy.get('[class="small-cards"]').eq(3).should("exist");
        cy.get('[class="small-cards"]').eq(4).should("exist");
        cy.get('[class="small-cards"]').eq(5).should("exist");

        cy.get('[class="footer"]').should("exist");

        cy.get('[class="logo1"]').should("exist");
        cy.get('[class="facebook"]').should("exist");
        cy.get('[class="insta"]').should("exist");
        cy.get('[class="twitter"]').should("exist");



         

        // cy.get('[class="facebook"]').eq(3).should("exist");
        // cy.get('[class="insta"]').eq(4).should("exist");
        // cy.get('[class="twitter"]').eq(5).should("exist");
        



    })
    it("verifying the content in signup page",()=>{
        cy.visit("/signup")
        cy.wait(5000)

        cy.get('[class="main-card"]').should("exist")
        cy.get('[class="sub-card1"]').should("exist")
        cy.get('[class="sub-card2"]').should("exist")
        cy.get('.sub-card2>h1').should("contain","Signup Page")

        cy.get('[class="input"]').eq(0).should("exist");
        cy.get('[class="input"]').eq(1).should("exist");
        cy.get('[class="input"]').eq(2).should("exist");
        cy.get('[class="input"]').eq(3).should("exist");
        cy.get('[class="input"]').eq(4).should("exist");
        cy.get('[class="input"]').eq(5).should("exist");
        cy.get('[class="input"]').eq(6).should("exist");
        cy.get('[class="input"]').eq(7).should("exist");
        cy.get('[class="login"]').should("exist");

        cy.get('.login-text').should("contain","Already a member? ");
        cy.get('.white').should("contain"," Login");


    })

})