import { PasswordValidatorImpl } from "./PasswordValidator";

describe("Password Validator", () => {
  let passwordValidator: PasswordValidatorImpl;

  beforeEach(() => {
    passwordValidator = new PasswordValidatorImpl();
  });

  it("returns error when password contains less than 5 characters", () => {
    const validationResult = passwordValidator.validate("hell");

    expect(validationResult.errors).toBeDefined();
    expect(validationResult.result).toBe(false);
  });

  it("returns error when password contains more than 15 characters", () => {
    const validationResult = passwordValidator.validate(
      "testpasswordmorethan15",
    );

    expect(validationResult.errors).toBeDefined();
    expect(validationResult.result).toBe(false);
  });

  it("returns no errors and true as a result when a password contains between 5 and 15 characters", () => {
    const validationResult = passwordValidator.validate("mypassword");

    expect(validationResult.result).toBe(true);
    expect(validationResult.errors).not.toBeDefined();
  });
});
