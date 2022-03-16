interface ValidationResponse {
  result: boolean;
  errors?: ValidationError;
}

interface ValidationError {
  message: string;
}

interface PasswordValidator {
  validate(password: string): ValidationResponse;
}

export class PasswordValidatorImpl implements PasswordValidator {
  validate(password: string): ValidationResponse {
    const characterValidation = this.validateCharacterLength(password);
    if (characterValidation.errors) {
      return characterValidation;
    }

    return { result: true };
  }

  private validateCharacterLength(password: string): ValidationResponse {
    if (password.length < 5) {
      return {
        result: false,
        errors: { message: "Password needs to be at least 5 characters long" },
      };
    }

    if (password.length > 15) {
      return {
        result: false,
        errors: { message: "Password can contain at most 15 characters" },
      };
    }

    return {
      result: true,
    };
  }
}
