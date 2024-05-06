describe('Assertions', () =>{

    it('Assertions Implícitas', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Should, And
        //cy.url().should('include', 'orangehrmlive')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain', 'opensource')

        //cy.url().should('include', 'orangehrmlive')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain', 'opensource')

        //URL
        cy.url().should('include', 'orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'opensource')

        //Title
        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')

        //Links
        cy.xpath('//a').should('have.length', '5')

        //Logo
        cy.get('.orangehrm-login-logo > img').should('be.visible')
        .and('exist')

        //Verificar se o valor está sendo digitado corretamente
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Username"]').should('have.value', 'Admin')
    })
})

//Alteração no código