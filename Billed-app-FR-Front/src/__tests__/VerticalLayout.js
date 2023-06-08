/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom"
import VerticalLayout from "../views/VerticalLayout"
import { localStorageMock } from "../__mocks__/localStorage.js"


describe('Given I am connected as Employee', () => {
  test("Then Icons should be rendered", () => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
    const user = JSON.stringify({
      type: 'Employee'
    })
    window.localStorage.setItem('user', user)
    const html = VerticalLayout(120)
    document.body.innerHTML = html
    expect(screen.getByTestId('icon-window')).toBeTruthy()
    expect(screen.getByTestId('icon-mail')).toBeTruthy()
  })

})
describe('Given I am connected as Admin', () => {
  test("Then Icons should not be rendered", () => {
      ///la disparion des deux icons 
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
    const user = JSON.stringify({
      type: 'Admin'
    })
    window.localStorage.setItem('user', user)
    const html = VerticalLayout(120)
    document.body.innerHTML = html
    expect(document.querySelector('div[data-testid="icon-window"]')).toBeNull()
    expect(document.querySelector('div[data-testid="icon-mail"]')).toBeNull()
  })
})
