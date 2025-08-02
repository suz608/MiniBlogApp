import Hello from './Hello.vue'

describe('<Hello />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Hello)
  })
})