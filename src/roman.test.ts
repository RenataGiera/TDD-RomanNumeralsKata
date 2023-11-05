import { toRoman } from "../src/roman";

describe("test toRoman function", () => {
  it("should throw an error for a number out of range (0)", () => {
    expect(() => toRoman(0)).toThrow("Number out of range for Roman numerals (1-9999).");
  });
  it("should throw an error for a number out of range (-5)", () => {
    expect(() => toRoman(-5)).toThrow("Number out of range for Roman numerals (1-9999).");
  });
  it("should throw an error for a number out of range (10001)", () => {
    expect(() => toRoman(10001)).toThrow("Number out of range for Roman numerals (1-9999).");
  });
  it("should return Roman number toRoman(\"1\")", () => {
    expect(toRoman(1)).toBe("I");
  });
  it("should return Roman number toRoman(\"10\")", () => {
    expect(toRoman(10)).toEqual("X");
  });
  it("should return Roman number toRoman(\"12\")", () => {
    expect(toRoman(12)).toEqual("XII");
  });
  it("should return Roman number toRoman(\"99\")", () => {
    expect(toRoman(99)).toEqual("XCIX");
  });
  it("should return Roman number toRoman(\"100\")", () => {
    expect(toRoman(100)).toEqual("C");
  });
  it("should return Roman number toRoman(\"139\")", () => {
    expect(toRoman(139)).toEqual("CXXXIX");
  });
  it("should return Roman number toRoman(\"200\")", () => {
    expect(toRoman(200)).toEqual("CC");
  });
  it("should return Roman number toRoman(\"1000\")", () => {
    expect(toRoman(1000)).toEqual("M");
  });
  it("should return Roman number toRoman(\"2590\")", () => {
    expect(toRoman(2590)).toEqual("MMDXC");
  });
  it("should return Roman number toRoman(\"9999\")", () => {
    expect(toRoman(9999)).toEqual("MX̅CMXCIX");
  });

});