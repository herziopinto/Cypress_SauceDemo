describe ('CSSLocators', () => {

    beforeEach( () => {
        //Visitar a página
        cy.visit('https://www.saucedemo.com/v1/index.html')
        //Preencher o campo username
        cy.get('input#user-name').type('standard_user')
        //Preencher o campo password
        cy.get('input[placeholder="Password"]').type('secret_sauce')
        //Clicar no botão Login
        cy.get('input.btn_action').click()
    })

    it('Verificar se estou na página correta', () => {
        //Verificar se está na página certa
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[1]/div[3]/div').contains('Products')
    })

    it('Funcionalidade Add to Cart', () => {
        //addToCart
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
    })
})