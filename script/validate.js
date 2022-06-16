const showValidationMessage = (inputElement, formElement, errorElement) => {
  const errorMessage = formElement.querySelector(`.${inputElement.id}-error`);
  errorMessage.textContent = errorElement;
  errorMessage.classList.add("form__error-message_active");
  inputElement.classList.add("form__input-error_active");
};

const hideValidationMessage = (inputElement, formElement) => {
  const errorMessage = formElement.querySelector(`.${inputElement.id}-error`);
  errorMessage.textContent = "";
  errorMessage.classList.remove("form__error-message_active");
  inputElement.classList.remove("form__input-error_active");
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showValidationMessage(
      inputElement,
      formElement,
      inputElement.validationMessage
    );
  } else {
    hideValidationMessage(inputElement, formElement);
  }
};

const hasInvalid = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const buttonToggleState = (inputList, buttonElement) => {
  if (hasInvalid(inputList)) {
    buttonElement.classList.add("form__button_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("form__button_inactive");
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__button");
  buttonToggleState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
      buttonToggleState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();
