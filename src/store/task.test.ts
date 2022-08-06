import {div, mul, numberReducer, sub, sum} from "./task";

test('sum of two numbers', () => {
    //data

    const a: number = 10
    const b: number = 20
    //action
    const res = sum(a, b)

    //expect
    expect(res).toBe(30)
})

test('sub of two numbers', () => {
    //data

    const a: number = 20
    const b: number = 10
    //action
    const res = sub(a, b)

    //expect
    expect(res).toBe(10)
})

test('mul of two numbers', () => {
    //data

    const a: number = 20
    const b: number = 10
    //action
    const res = mul(a, b)

    //expect
    expect(res).toBe(200)
})

test('div of two numbers', () => {
    //data

    const a: number = 20
    const b: number = 10
    //action
    const res = div(a, b)

    //expect
    expect(res).toBe(2)
})

test('sum with numberReducer', () => {
    const salary = 1000;
    const res = numberReducer(salary, {type: 'SUM', num: 300})
    expect(res).toBe(1300)
})