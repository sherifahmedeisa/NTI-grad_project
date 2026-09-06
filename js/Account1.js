document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('accountForm');
  const nameRegex = /^.{3,}$/;  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/; 
  const validateField = (inputElement, regex) => {
    const value = inputElement.value.trim();
    if (regex.test(value)) {
      inputElement.classList.remove('is-invalid');
      inputElement.classList.add('is-valid');
      return true;
    } else {
      inputElement.classList.remove('is-valid');
      inputElement.classList.add('is-invalid');
      return false;
    }
  };
  const validateRepeatPassword = () => {
    const newPass = document.getElementById('newPassword').value;
    const repeatInput = document.getElementById('repeatPassword');
    const repeatPass = repeatInput.value;
    if (repeatPass.length > 0 && repeatPass === newPass && passwordRegex.test(repeatPass)) {
      repeatInput.classList.remove('is-invalid');
      repeatInput.classList.add('is-valid');
      return true;
    } else {
      repeatInput.classList.remove('is-valid');
      repeatInput.classList.add('is-invalid');
      return false;
    }
  };
  document.getElementById('firstName').addEventListener('input', function () {
    validateField(this, nameRegex);
  });
  document.getElementById('lastName').addEventListener('input', function () {
    validateField(this, nameRegex);
  });
  document.getElementById('displayName').addEventListener('input', function () {
    validateField(this, nameRegex);
  });
  document.getElementById('email').addEventListener('input', function () {
    validateField(this, emailRegex);
  });
  document.getElementById('oldPassword').addEventListener('input', function () {
    validateField(this, passwordRegex);
  });
  document.getElementById('newPassword').addEventListener('input', function () {
    validateField(this, passwordRegex);
    validateRepeatPassword();
  });
  document.getElementById('repeatPassword').addEventListener('input', validateRepeatPassword);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const isFirstNameValid = validateField(document.getElementById('firstName'), nameRegex);
    const isLastNameValid = validateField(document.getElementById('lastName'), nameRegex);
    const isDisplayNameValid = validateField(document.getElementById('displayName'), nameRegex);
    const isEmailValid = validateField(document.getElementById('email'), emailRegex);
    const isOldPasswordValid = validateField(document.getElementById('oldPassword'), passwordRegex);
    const isNewPasswordValid = validateField(document.getElementById('newPassword'), passwordRegex);
    const isRepeatPasswordValid = validateRepeatPassword();
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isDisplayNameValid &&
      isEmailValid &&
      isOldPasswordValid &&
      isNewPasswordValid &&
      isRepeatPasswordValid
    ) {
      window.location.href = 'Account2.html';
    }
  });
});