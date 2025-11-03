import { DeepPartial } from "@reduxjs/toolkit";
import { getCounter } from "./getCounter";
import { StateSchema } from "app/providers/StoreProvider";

describe("test getCounter", () => {
    test("should return value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: {value: 10}
        }
        expect(getCounter(state as StateSchema)).toBe({value: 10});
    });
});