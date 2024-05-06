describe ('SwagLabs', () => {

    it('Login com credenciais válidas', () => {
        //Entrando no site
        cy.visit('https://www.saucedemo.com/v1/index.html')

        //Digitando o username
        cy.get('input#user-name').type('standard_user')
        cy.get('input#user-name').should('have.value', 'standard_user')

        //Digitando o Password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce')

        //efetuando o login com sucesso
        cy.get('[class="btn_action"]').click()
    })

    it('Login com username inválido', () => {
        //Entrando no site
        cy.visit('https://www.saucedemo.com/v1/index.html')

        //Digitando o username
        cy.get('input#user-name').type('fabio lopes')
        cy.get('input#user-name').should('have.value', 'fabio lopes')

        //Digitando o Password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce')

        //efetuando o login com sucesso
        cy.get('[class="btn_action"]').click()
    })

    it('Login senha inválida', () => {
        //Entrando no site
        cy.visit('https://www.saucedemo.com/v1/index.html')

        //Digitando o username
        cy.get('input#user-name').type('standard_user')
        cy.get('input#user-name').should('have.value', 'standard_user')

        //Digitando o Password
        cy.get('#password').type('sauce1234')
        cy.get('#password').should('have.value', 'sauce1234')

        //efetuando o login com sucesso
        cy.get('[class="btn_action"]').click()
    })

    it('Login com usename vazio', () => {
        //Entrando no site
        cy.visit('https://www.saucedemo.com/v1/index.html')

        //Digitando o username
        cy.get('input#user-name')

        //Digitando o Password
        cy.get('#password').type('secret_sauce')
        cy.get('#password').should('have.value', 'secret_sauce')

        //efetuando o login com sucesso
        cy.get('[class="btn_action"]').click()
    })

    it('Login com senha vazia', () => {
        //Entrando no site
        cy.visit('https://www.saucedemo.com/v1/index.html')

        //Digitando o username
        cy.get('input#user-name').type('standard_user')
        cy.get('input#user-name').should('have.value', 'standard_user')

        //Digitando o Password
        cy.get('#password')
        
        //efetuando o login com sucesso
        cy.get('[class="btn_action"]').click()
    })

    it('Add to cart', () => { //preciso alterar algumas funções
       
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('input#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[class="btn_action"]').click()

        //add item ao carrinho 
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        let num = 1
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[2]/div[3]/button').click()
        num += 1
        
        //conferindo se o botão remove existe
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').should('exist')

        //verificando se o intem se encontra no carrinho
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').should('have.text', 'REMOVE')

        //conferindo se o item do carrinho existe - precisa alterar para verificar o número 1
        cy.get('.fa-layers-counter').should('exist')

        //conferindo se o numero do carrinho é maior do que um
        cy.get('.fa-layers-counter').should('have.text', num)
    })

    it('Removendo um item do carrinho', () => { //precisando incluir assertion do carrinho 
       
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('input#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[class="btn_action"]').click()

        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[2]/div[3]/button').click()

        //entrando no carrinho de compras para escolher o item que quer excluir
        cy.get('[class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x "]').click()

        //removendo um item do carrinho
        cy.xpath('/html/body/div/div[2]/div[3]/div/div[1]/div[3]/div[2]/div[2]/button').click()
    })

    it('Checkout com sucesso', () => {
       
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('input#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[class="btn_action"]').click()

        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[2]/div[3]/button').click()

        //entrando no carrinho de compras para escolher o item que quer excluir
        cy.get('[class="svg-inline--fa fa-shopping-cart fa-w-18 fa-3x "]').click()

        //finalizando compra - clicando no botal checkout
        cy.get('[class="btn_action checkout_button"]').click()

        //preenchendo os campos first Name, Last Name e zip postal code 
        cy.get('#first-name').type('Fabio')
        cy.get('#first-name').should('have.value', 'Fabio')

        cy.get('#last-name').type('Lopes')
        cy.get('#last-name').should('have.value', 'Lopes')

        cy.get('#postal-code').type('4715105')
        cy.get('#postal-code').should('have.value', '4715105')

        //clicando no botão continuar
        cy.get('[class="btn_primary cart_button"]').click()

        //Finalizando a compra 
        cy.get('[class="btn_action cart_button"]').click()
    })

})