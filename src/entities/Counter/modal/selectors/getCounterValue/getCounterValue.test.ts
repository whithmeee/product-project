import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("test getCounter", () => {
    test("should return value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: {value: 10}
        }
        expect(getCounterValue(state as StateSchema)).toBe(10);
    });
});