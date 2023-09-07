import filterArray from "./BonusFilterArray";

describe("pinCodeValidation", () => {
  it("should return [2, 4, 6] because 2, 4, and 6 are present in both arrays", () => {
    const response = filterArray([1, 2, 3, 4, 5, 6], [2, 4, 6, 8]);
    expect(response).toEqual([2, 4, 6]);
  });
});
