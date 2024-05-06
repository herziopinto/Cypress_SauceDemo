describe('Verificação do título da Página', () => {
  it('TC01 - Verificar o título da página - Positivo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'OrangeHRM')
  })

  it('TC02 - Verificar o título da página - Negativo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'OrangeHRM123')
  })
})