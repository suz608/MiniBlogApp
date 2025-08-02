import LogSignButton from './LogSignButton.vue'

describe('<LogSignButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(LogSignButton)
  })
})