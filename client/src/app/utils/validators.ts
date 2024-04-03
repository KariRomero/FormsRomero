import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const noStateValidator : ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const palabrasProhibidas = ['tierra del fuego', 'catamarca', 'san juan'];
  const value: string = control.value?.toLowerCase() || '';

  for (const word of palabrasProhibidas) {
    if (value.includes(word)) {
      return { noState: true };
    }
  }

  return null;
};
