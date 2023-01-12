import { addComma } from "@/util/numberUtil";

describe("util test", () => {
  describe("📏addComma test", () => {
    it("parameter undefined", () => expect(addComma(undefined)).toBe(""));
    it("parameter null", () => expect(addComma(null)).toBe(""));
    it("parameter 1000", () => expect(addComma(1000)).toBe("1,000"));
  });

  describe("object same", () => {
    it("same", () => expect({ a: 1, b: 1 }).toEqual({ a: 1, b: 1 }));
  });
});
