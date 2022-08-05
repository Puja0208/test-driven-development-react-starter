import react from "react"
import Counter from "../Counter"
import { render,fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

let getByTestId;

beforeEach(() => {
  const component = render(<Counter/>)
  getByTestId = component.getByTestId;

})

test("header renders with correct text",() => {
  
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter")

})

test("counter initially starts with text of 0",() => {
  ;
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

})

test("input contains initial value of 1",() => {
  ;
  const inputEle = getByTestId("input");

  expect(inputEle.value).toBe("1")
})

test("add button renders with plus sign",() => {
  ;
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+")
})


test("add button renders with plus sign",() => {
  ;
  const subtractBtn = getByTestId("subtract-btn");

  expect(subtractBtn.textContent).toBe("-")
})

test("change value of input works correctly",() => {
  ;
  const inputEle = getByTestId("input");

  expect(inputEle.value).toBe("1")

  fireEvent.change(inputEle,{
    target:{
      value:"5"
    }
  })

  expect(inputEle.value).toBe("5");

})

test("clicking on plus button adds 1 to counter",() => {
  ;
  const btnEle = getByTestId("add-btn");
  const counterEl = getByTestId("counter")

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(btnEle);

  expect(counterEl.textContent).toBe("1")
})

test("clicking on subtract button subtracts 1 from counter",() => {
  ;
  const btnEle = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter")

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(btnEle);

  expect(counterEl.textContent).toBe("-1")
})

test("changing input value then clicking on add works correctly ",() => {
  ;
  const btnEle = getByTestId("add-btn");
  const counterEl = getByTestId("counter")
  const inputEle = getByTestId("input")

  fireEvent.change(inputEle,{
    target:{
      value: 5
    }
  })

  fireEvent.click(btnEle);

  expect(counterEl.textContent).toBe("5")
})

test("changing input value then clicking on subtract works correctly ",() => {
  ;
  const btnEle = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter")
  const inputEle = getByTestId("input")

  fireEvent.change(inputEle,{
    target:{
      value: "5"
    }
  })

  fireEvent.click(btnEle);

  expect(counterEl.textContent).toBe("-5")
})

test("adding and subtracting leads to correct counter number",() => {
  ;
  const subtractBtnEle = getByTestId("subtract-btn");
  const addBtnEle = getByTestId("add-btn");
  const counterEl = getByTestId("counter")
  const inputEle = getByTestId("input")

  fireEvent.change(inputEle,{
    target:{
      value: "5"
    }
  })

  fireEvent.click(addBtnEle)
  fireEvent.click(addBtnEle)
  fireEvent.click(addBtnEle)
  fireEvent.click(addBtnEle)
  fireEvent.click(subtractBtnEle)
  fireEvent.click(subtractBtnEle)

  expect(counterEl.textContent).toBe("10")

})

test(
  "counter contains correct class name",() => {
    ;
    const counterEl = getByTestId("counter");
    const inputEle = getByTestId("input");
    const subtractBtnEle = getByTestId("subtract-btn");
    const addBtnEle = getByTestId("add-btn");

    expect(counterEl.className).toBe(
      ""
    )
    fireEvent.change(inputEle,{
      target:{
        value: "50"
      }
    })

    fireEvent.click(addBtnEle)

    expect(counterEl.className).toBe(
      ""
    )
    fireEvent.click(addBtnEle)

    expect(counterEl.className).toBe(
      "green"
    )

    fireEvent.click(addBtnEle)

    expect(counterEl.className).toBe(
      "green"
    )
    
    fireEvent.click(subtractBtnEle)
    fireEvent.click(subtractBtnEle)

    expect(counterEl.className).toBe(
      ""
    )

    fireEvent.click(subtractBtnEle)
    fireEvent.click(subtractBtnEle)
    fireEvent.click(subtractBtnEle)
    fireEvent.click(subtractBtnEle)


    expect(counterEl.className).toBe(
      "red"
    )

  }
)


