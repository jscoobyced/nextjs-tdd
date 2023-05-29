import Home from './home'

describe('<Home />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Home />)

    cy.get('div').should('be.empty')

  })
})

export {}
