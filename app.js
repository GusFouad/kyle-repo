// ===== PASSWORD TOGGLE =====
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

const eyeOpenSVG = `
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
  <circle cx="12" cy="12" r="3"/>
`;
const eyeClosedSVG = `
  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
  <line x1="1" y1="1" x2="23" y2="23"/>
`;

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  eyeIcon.innerHTML = isPassword ? eyeClosedSVG : eyeOpenSVG;
});

// ===== FORM VALIDATION & SUBMIT =====
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const submitBtn = document.getElementById('submitBtn');
const btnLoader = document.getElementById('btnLoader');
const btnText = document.querySelector('.btn-text');
const alert = document.getElementById('alert');

function showError(input, errorEl, message) {
  input.classList.add('invalid');
  errorEl.textContent = message;
}

function clearError(input, errorEl) {
  input.classList.remove('invalid');
  errorEl.textContent = '';
}

function showAlert(message, type = 'error') {
  alert.textContent = message;
  alert.className = 'alert ' + type;
}

function hideAlert() {
  alert.className = 'alert';
}

// Clear errors on input
emailInput.addEventListener('input', () => clearError(emailInput, emailError));
passwordInput.addEventListener('input', () => clearError(passwordInput, passwordError));

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  hideAlert();

  let valid = true;
  const emailVal = emailInput.value.trim();
  const passwordVal = passwordInput.value;

  // Email validation
  if (!emailVal) {
    showError(emailInput, emailError, 'Email is required.');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    showError(emailInput, emailError, 'Please enter a valid email address.');
    valid = false;
  } else {
    clearError(emailInput, emailError);
  }

  // Password validation
  if (!passwordVal) {
    showError(passwordInput, passwordError, 'Password is required.');
    valid = false;
  } else if (passwordVal.length < 6) {
    showError(passwordInput, passwordError, 'Password must be at least 6 characters.');
    valid = false;
  } else {
    clearError(passwordInput, passwordError);
  }

  if (!valid) return;

  // Simulate async sign-in
  submitBtn.disabled = true;
  btnText.hidden = true;
  btnLoader.hidden = false;

  await new Promise(resolve => setTimeout(resolve, 1500));

  submitBtn.disabled = false;
  btnText.hidden = false;
  btnLoader.hidden = true;

  showAlert('Signed in successfully! Redirecting…', 'success');
});

