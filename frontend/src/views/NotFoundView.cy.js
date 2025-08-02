import NotFoundView from './NotFoundView.vue'

describe('<NotFoundView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(NotFoundView)
  })
})