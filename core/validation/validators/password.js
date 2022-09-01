/**
 * - длина от 8 до 20 символов;
 * - цифры, заглавные и строчные буквы;
 * - соседние клавиши клавиатуры не используются подряд;
 * - нет пробелов.
 * @param value
 * @return {boolean}
 */
export default {
  validate: (value) => {
    let isValidationRequired = true;
    const STANDARD_SEQUENCE =
      '1234567890йцукенгшщзхъфывапролджэячсмитьбю.qwertyuiop[]asdfghjkl;\'zxcvbnm,./abcdefghigklmnopqrstuvwxyzабвгдежзикламнопрстуфхцчшщъыьэюя!"№;%:?*()_+/!@#$%^&*()_+|';
    // eslint-disable-next-line
    const regex = /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)[А-ЯЁа-яёA-Za-z\d#$@!%&*?]{8,20}$/;

    if (!regex.test(value)) {
      isValidationRequired = false;
    }

    if (/\s/.test(value)) {
      isValidationRequired = false;
    }

    if (STANDARD_SEQUENCE.includes(value)) {
      isValidationRequired = false;
    }

    return isValidationRequired;
  }
};
