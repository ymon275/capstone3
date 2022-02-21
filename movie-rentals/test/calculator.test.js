import { sum } from "../src/components/calculator/sum";
import { difference } from "../src/components/calculator/difference";
import { divisor } from "../src/components/calculator/divisor";

describe("Calculator", () => {
  describe("when adding two numbers", () => {
    it("expect the sum of the two numbers", () => {
      expect(sum(1, 2)).toBe(3);
    })
  });
  describe("when subtracting two numbers", () => {
    it("should get the difference of the two numbers", () => {
      expect(difference(2, 1)).toBe(1);
    });
  });
  describe("when dividing two numbers", () => {
    describe("when the numbers are valid division", () => {
      it("should equal the dividend", () => {
        expect(divisor(4, 2)).toBe(2);
      });
    });
    describe("when the divisor is zero", () => {
      it("should throw error", () => {
        expect(divisor(4, 0)).toBe("zero is not a valid divisor");
      });
    });
  });
});

