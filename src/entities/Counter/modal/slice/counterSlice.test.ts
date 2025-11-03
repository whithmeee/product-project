import { counterActions, counterReducer } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("test counterSlice", () => {
    test("counter decrement", () => {
        const state:CounterSchema = { value: 10 } 
        expect(counterReducer(state, counterActions.decrement())).toEqual({value: 9});
    });

      test("counter increment", () => {
        const state:CounterSchema = { value: 10 } 
        expect(counterReducer(state, counterActions.increment())).toEqual({value: 11});
    });
})