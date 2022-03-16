import { PalindromeCheckerImpl } from "./PalindromeChecker";

describe("Palindrome Checker", () => {
  let palindromeChecker: PalindromeCheckerImpl;

  beforeEach(() => {
    palindromeChecker = new PalindromeCheckerImpl();
  });

  it("returns true for the palindrome check of mom", () => {
    const result = palindromeChecker.isPalindrome("mom");

    expect(result).toBeTruthy();
  });

  it("returns false for the palindrone check of hello", () => {
    const result = palindromeChecker.isPalindrome("hello");

    expect(result).toBeFalsy();
  });

  it("ignores case sensitivity and returns true for inconsistens palindromes", () => {
    const result = palindromeChecker.isPalindrome("Madam");

    expect(result).toBeTruthy();
  });

  it("ignores case sensitivity and returns false for non palindromes", () => {
    const result = palindromeChecker.isPalindrome("World");

    expect(result).toBeFalsy();
  });

  it("returns true for palindromes with whitespaces", () => {
    const result = palindromeChecker.isPalindrome("Ta Cat");

    expect(result).toBeTruthy();
  });

  it("returns false for non palindromes with whitespaces", () => {
    const result = palindromeChecker.isPalindrome("Hello World");

    expect(result).toBeFalsy();
  });

  it("returns false for empty string", () => {
    const result = palindromeChecker.isPalindrome("");

    expect(result).toBeFalsy();
  });
});
