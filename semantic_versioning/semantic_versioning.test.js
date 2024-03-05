import { semanticVersioning } from "./semantic_versioning_solution";

describe("Semantic Versioning", () => {
  it("should return an empty string for empty input", () => {
    const input = [];
    const expected = "";

    expect(semanticVersioning(input)).toBe(expected);
  });

  it("should return the single version for input with one version", () => {
    const input = ["1.2.3"];
    const expected = "1.2.3";

    expect(semanticVersioning(input)).toBe(expected);
  });

  it("should return the highest version for input with equal versions", () => {
    const input = ["11.2.3", "11.2.3", "11.2.3"];
    const expected = "11.2.3";

    expect(semanticVersioning(input)).toBe(expected);
  });

  it("should return the highest version for input with descending order", () => {
    const input = ["3.2.1", "2.1.0", "1.0.0"];
    const expected = "3.2.1";

    expect(semanticVersioning(input)).toBe(expected);
  });

  it("should return the highest version for input with different version lengths", () => {
    const input = ["1.10.3", "1.2.3", "1.0.10"];
    const expected = "1.10.3";

    expect(semanticVersioning(input)).toBe(expected);
  });

  it("should return the highest version", () => {
    const input = ["1.2.3", "1.2.3", "1.3.5", "1.3.4", "1.0.0", "1.3.4"];
    const expected = "1.3.5";

    expect(semanticVersioning(input)).toBe(expected);
  });

  it("should return the highest version", () => {
    const input = ["1.2.3", "9.30.257", "9.30.256", "1.3.5", "1.3.4", "9.0.0"];
    const expected = "9.30.257";

    expect(semanticVersioning(input)).toBe(expected);
  });

  it("should return the highest version", () => {
    const input = [
      "1.0.0",
      "10.0.0",
      "4.4.4",
      "11.0.0",
      "11.333.929",
      "11.334.929",
    ];
    const expected = "11.334.929";

    expect(semanticVersioning(input)).toBe(expected);
  });
});
