import react from "react"
import Counter from "../Counter"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("header renders with correct text",() => {
  const {getByTestId} = render(<Counter/>)
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter")

})

test("counter initially starts with text of 0",() => {
  const {getByTestId} = render(<Counter/>);
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

})

test("input contains initial value of 1",() => {
  const {getByTestId} = render(<Counter/>);
  const inputEle = getByTestId("input");

  expect(inputEle.value).toBe("1")
})

test("add button renders with plus sign",() => {
  const {getByTestId} = render(<Counter/>);
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+")
})


test("add button renders with plus sign",() => {
  const {getByTestId} = render(<Counter/>);
  const subtractBtn = getByTestId("subtract-btn");

  expect(subtractBtn.textContent).toBe("-")
})