interface PalindromeChecker {
  isPalindrome(str: string): boolean;
}

export class PalindromeCheckerImpl implements PalindromeChecker {
  private reverseString(str: string): string {
    return str
      .toLocaleLowerCase()
      .split("")
      .reverse()
      .join("");
  }

  isPalindrome(str: string): boolean {
    const lowerCaseStr = str.toLocaleLowerCase();
    const strWithOutWhitespaces = lowerCaseStr.replace(" ", "");

    if (!strWithOutWhitespaces) return false;

    const reversedStr = this.reverseString(str);
    const reversedStrWithOutWhitespaces = reversedStr.replace(" ", "");

    return strWithOutWhitespaces === reversedStrWithOutWhitespaces;
  }
}
