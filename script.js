// script.js
// Contact Form Validation (client-side)

(() => {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formMessage = document.getElementById('formMessage');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear all error states
  function clearErrors() {
    [nameError, emailError, messageError].forEach(el => el.textContent = '');
    [nameInput, emailInput, messageInput].forEach(inp => {
      inp.classList.remove('input-invalid');
      inp.removeAttribute('aria-invalid');
    });
    formMessage.textContent = '';
    formMessage.className = '';
  }

  // Show error for a field
  function showError(inputEl, errorEl, message) {
    errorEl.textContent = message;
    inputEl.classList.add('input-invalid');
    inputEl.setAttribute('aria-invalid', 'true');
  }

  // Validate fields, return true if valid
  function validate() {
    clearErrors();
    let valid = true;

    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const messageVal = messageInput.value.trim();

    // Name: non-empty, min 2 characters
    if (nameVal.length === 0) {
      showError(nameInput, nameError, 'Name is required.');
      valid = false;
    } else if (nameVal.length < 2) {
      showError(nameInput, nameError, 'Please enter at least 2 characters for name.');
      valid = false;
    }

    // Email: non-empty and match regex
    if (emailVal.length === 0) {
      showError(emailInput, emailError, 'Email is required.');
      valid = false;
    } else if (!emailRegex.test(emailVal)) {
      showError(emailInput, emailError, 'Please enter a valid email address.');
      valid = false;
    }

    // Message: non-empty, min 10 characters
    if (messageVal.length === 0) {
      showError(messageInput, messageError, 'Message is required.');
      valid = false;
    } else if (messageVal.length < 10) {
      showError(messageInput, messageError, 'Message should be at least 10 characters.');
      valid = false;
    }

    return valid;
  }

  // On submit: validate, prevent actual sending, show success or focus first error
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents form from sending (task requires no actual send)
    const isValid = validate();

    if (!isValid) {
      formMessage.textContent = 'Please fix errors above and try again.';
      formMessage.className = 'error';
      // focus the first invalid input for keyboard users
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // If valid: show success message and reset the form (optional)
    formMessage.textContent = 'Form submitted successfully (demo).';
    formMessage.className = 'success';

    form.reset();
  });

  // Live validation on blur/input for better UX
  nameInput.addEventListener('input', () => {
    if (nameError.textContent) {
      // re-validate name only if it previously had an error
      if (nameInput.value.trim().length >= 2) {
        nameError.textContent = '';
        nameInput.classList.remove('input-invalid');
        nameInput.removeAttribute('aria-invalid');
      }
    }
  });

  emailInput.addEventListener('input', () => {
    if (emailError.textContent) {
      if (emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = '';
        emailInput.classList.remove('input-invalid');
        emailInput.removeAttribute('aria-invalid');
      }
    }
  });

  messageInput.addEventListener('input', () => {
    if (messageError.textContent) {
      if (messageInput.value.trim().length >= 10) {
        messageError.textContent = '';
        messageInput.classList.remove('input-invalid');
        messageInput.removeAttribute('aria-invalid');
      }
    }
  });

  // Reset handler: clear errors and messages
  form.addEventListener('reset', () => {
    // small delay to let inputs clear first
    setTimeout(clearErrors, 0);
  });
})();
