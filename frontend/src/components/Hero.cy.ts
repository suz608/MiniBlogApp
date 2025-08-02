import Hero from './Hero.vue'

describe('<Hero />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Hero)
  })
})