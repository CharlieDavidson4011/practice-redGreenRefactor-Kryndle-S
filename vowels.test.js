const { countVowels } = require("../vowels");

describe("countVowels function", () => {
    test("Positive: counts vowels correctly in a normal string", () => {
        expect(countVowels("hello")).toBe(2);
        expect(countVowels("Education")).toBe(5);
    });

    test("Negative: handles non-string input gracefully", () => {
        expect(countVowels(123)).toBe(0);
        expect(countVowels(null)).toBe(0);
    });

    test("Edge: empty string returns 0", () => {
        expect(countVowels("")).toBe(0);
    });
});

