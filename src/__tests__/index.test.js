import { revertString } from "../index.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("cba")).toBe("abc"));
});