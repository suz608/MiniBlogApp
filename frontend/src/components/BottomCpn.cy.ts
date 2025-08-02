import BottomCpn from './BottomCpn.vue'

describe('<BottomCpn />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BottomCpn)
  })
})