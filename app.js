/* ── Login form validation & UX ─────────────────────────────── */

const form        = document.getElementById('loginForm');
const emailInput  = document.getElementById('email');
const passInput   = document.getElementById('password');
const emailError  = document.getElementById('emailError');
const passError   = document.getElementById('passwordError');
const submitBtn   = document.getElementById('submitBtn');
const toggleBtn   = document.getElementById('togglePassword');
const eyeIcon     = document.getElementById('eyeIcon');

/* ── Password visibility toggle ─────────────────────────────── */
const eyeOpen = `
  <path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z"
        stroke="currentColor" stroke-width="1.5"/>
  <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/>`;

const eyeClosed = `
  <path d="M3 3l14 14M8.5 8.6A3 3 0 0013.4 13.5M6.2 6.3C4.4 7.5 3 10 3 10s3 6 7 6
           c1.5 0 2.9-.5 4-1.3M10 4c4 0 7 6 7 6s-.6 1.2-1.7 2.4"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`;

toggleBtn.addEventListener('click', () => {
  const isPassword = passInput.type === 'password';
  passInput.type   = isPassword ? 'text' : 'password';
  eyeIcon.innerHTML = isPassword ? eyeClosed : eyeOpen;
  toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
});

/* ── Validation helpers ──────────────────────────────────────── */
function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function setError(input, errorEl, msg) {
  input.classList.add('is-error');
  errorEl.textContent = msg;
}

function clearError(input, errorEl) {
  input.classList.remove('is-error');
  errorEl.textContent = '';
}

/* live validation on blur */
emailInput.addEventListener('blur', () => {
  if (!emailInput.value.trim()) {
    setError(emailInput, emailError, 'Email is required.');
  } else if (!isValidEmail(emailInput.value)) {
    setError(emailInput, emailError, 'Please enter a valid email address.');
  } else {
    clearError(emailInput, emailError);
  }
});

passInput.addEventListener('blur', () => {
  if (!passInput.value) {
    setError(passInput, passError, 'Password is required.');
  } else if (passInput.value.length < 6) {
    setError(passInput, passError, 'Password must be at least 6 characters.');
  } else {
    clearError(passInput, passError);
  }
});

/* clear error on input */
emailInput.addEventListener('input', () => clearError(emailInput, emailError));
passInput.addEventListener('input',  () => clearError(passInput,  passError));

/* ── Form submit ─────────────────────────────────────────────── */
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  let valid = true;

  if (!emailInput.value.trim()) {
    setError(emailInput, emailError, 'Email is required.'); valid = false;
  } else if (!isValidEmail(emailInput.value)) {
    setError(emailInput, emailError, 'Please enter a valid email address.'); valid = false;
  }

  if (!passInput.value) {
    setError(passInput, passError, 'Password is required.'); valid = false;
  } else if (passInput.value.length < 6) {
    setError(passInput, passError, 'Password must be at least 6 characters.'); valid = false;
  }

  if (!valid) return;

  /* simulate async sign-in */
  submitBtn.classList.add('is-loading');
  submitBtn.disabled = true;
  submitBtn.querySelector('.btn__text').textContent = 'Signing in';

  await new Promise(r => setTimeout(r, 1800));

  submitBtn.classList.remove('is-loading');
  submitBtn.disabled = false;
  submitBtn.querySelector('.btn__text').textContent = 'Sign in';

  /* success flash */
  submitBtn.style.background = 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)';
  submitBtn.querySelector('.btn__text').textContent = '✓ Signed in!';
  setTimeout(() => {
    submitBtn.style.background = '';
    submitBtn.querySelector('.btn__text').textContent = 'Sign in';
  }, 2500);
});

