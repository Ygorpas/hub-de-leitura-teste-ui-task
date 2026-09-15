import { faker } from '@faker-js/faker'

describe('Testes End To End do fluxo de cadastro e login', () => {

  it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {

    const nome = faker.person.fullName()
    const email = faker.internet.email()
    const senha = faker.internet.password({ length: 10 })

    cy.visit('/register.html')

    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#confirm-password').type(senha)
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()

    cy.get('#alert-container')
      .should('be.visible')
      .and('contain', 'Conta criada com sucesso')

    cy.clearLocalStorage()

    cy.visit('/login.html')

    cy.login(email, senha)
  })
})