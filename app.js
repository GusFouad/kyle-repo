// ── Toggle password visibility ─────────────────────────────
const togglePw  = document.getElementById('togglePw');
const pwInput   = document.getElementById('password');
const eyeIcon   = document.getElementById('eyeIcon');

const eyeOpen = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
const eyeOff  = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>`;

togglePw.addEventListener('click', () => {
  const isHidden = pwInput.type === 'password';
  pwInput.type = isHidden ? 'text' : 'password';
  eyeIcon.innerHTML = isHidden ? eyeOff : eyeOpen;
});

// ── Validation helpers ─────────────────────────────────────
function showError(inputEl, msgEl, message) {
  inputEl.classList.add('invalid');
  msgEl.textContent = message;
}

function clearError(inputEl, msgEl) {
  inputEl.classList.remove('invalid');
  msgEl.textContent = '';
}

const emailInput    = document.getElementById('email');
const emailError    = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

emailInput.addEventListener('input', () => {
  if (emailInput.validity.valid || emailInput.value === '') {
    clearError(emailInput, emailError);
  }
});

pwInput.addEventListener('input', () => {
  if (pwInput.value.length >= 6 || pwInput.value === '') {
    clearError(pwInput, passwordError);
  }
});

// ── Form submission ────────────────────────────────────────
const form      = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitBtn');
const btnText   = submitBtn.querySelector('.btn-text');
const btnSpinner = submitBtn.querySelector('.btn-spinner');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  let valid = true;

  // Email validation
  if (!emailInput.value.trim()) {
    showError(emailInput, emailError, 'Email is required.');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Please enter a valid email address.');
    valid = false;
  } else {
    clearError(emailInput, emailError);
  }

  // Password validation
  if (!pwInput.value) {
    showError(pwInput, passwordError, 'Password is required.');
    valid = false;
  } else if (pwInput.value.length < 6) {
    showError(pwInput, passwordError, 'Password must be at least 6 characters.');
    valid = false;
  } else {
    clearError(pwInput, passwordError);
  }

  if (!valid) return;

  // Simulate async sign-in
  submitBtn.disabled = true;
  btnText.hidden = true;
  btnSpinner.hidden = false;

  await new Promise(r => setTimeout(r, 1800));

  btnSpinner.hidden = true;
  btnText.hidden = false;
  btnText.textContent = '✓ Signed in!';
  submitBtn.disabled = false;
  document.querySelector('.card').classList.add('success');

  setTimeout(() => {
    btnText.textContent = 'Sign in';
    document.querySelector('.card').classList.remove('success');
  }, 3000);
});

