import {sum} from "./tasks"

test("get sum", () => {
    expect(sum(3, 5, 7, 6, 4, 9)).toBe(34);
})