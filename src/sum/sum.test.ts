import sum from "./";

describe("sum",() => {
    it("1+3=4", () => {
        expect(sum(1, 3)).toBe(4);
    });
});
