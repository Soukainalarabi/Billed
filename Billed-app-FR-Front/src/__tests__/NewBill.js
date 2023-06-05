/**
 * @jest-environment jsdom
 */

import { fireEvent, createEvent, screen, waitFor } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"
import mockStore from "../__mocks__/store.js";
import { localStorageMock } from "../__mocks__/localStorage.js";
import { ROUTES } from "../constants/routes"
import router from "../app/Router.js";
import { ROUTES_PATH } from "../constants/routes.js";
jest.mock("../app/store", () => mockStore)



describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page", () => {
    test("i can upload a png image ", async () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.NewBill)
      const fileInput = document.querySelector(`input[data-testid="file"]`)
      fireEvent.change(fileInput, createEvent('input', fileInput, {
        target: {
          files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
        },
      }))
      expect(fileInput.files[0]).not.toBeNull()
      expect(fileInput.files[0].type).toContain("png")
    })
    test("i can upload a jpeg image ", async () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.NewBill)
      const fileInput = document.querySelector(`input[data-testid="file"]`)
      fireEvent.change(fileInput, createEvent('input', fileInput, {
        target: {
          files: [new File(['(⌐□_□)'], 'chucknorris.jpeg', { type: 'image/jpeg' })],
        },
      }))
      expect(fileInput.files[0]).not.toBeNull()
      expect(fileInput.files[0].type).toContain("jpeg")

    })
    test("i can upload a jpg image ", async () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.NewBill)
      const fileInput = document.querySelector(`input[data-testid="file"]`)
      fireEvent.change(fileInput, createEvent('input', fileInput, {
        target: {
          files: [new File(['(⌐□_□)'], 'chucknorris.jpg', { type: 'image/jpg' })],
        },
      }))
      expect(fileInput.files[0]).not.toBeNull()
      expect(fileInput.files[0].type).toContain("jpg")
    })
    test("i can't upload a pdf file ", async () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.NewBill)
      const fileInput = document.querySelector(`input[data-testid="file"]`)
      fireEvent.change(fileInput, createEvent('input', fileInput, {
        target: {
          files: [new File(['(⌐□_□)'], 'chucknorris.pdf', { type: 'application/pdf' })],
        },
      }))
      expect(fileInput.files[0]).toBeNull()
    })
    test("tester handleSubmit ", async () => {

      const spy = jest.spyOn(mockStore, "bills")
      const html = NewBillUI()
      document.body.innerHTML = html
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.NewBill)
      const form = document.querySelector(`form[data-testid="form-new-bill"]`)
      fireEvent.submit(form, { target: form })
      expect(spy).toHaveBeenCalled()





    })
  })
})
