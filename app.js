// ─── Password visibility toggle ────────────────────────────
const togglePw  = document.getElementById('togglePw');
const pwInput   = document.getElementById('password');
const eyeIcon   = document.getElementById('eyeIcon');

const eyeOpen = `
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
  <circle cx="12" cy="12" r="3"/>
`;
const eyeClosed = `
  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8
           a18.45 18.45 0 0 1 5.06-5.94"/>
  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8
           a18.5 18.5 0 0 1-2.16 3.19"/>
  <line x1="1" y1="1" x2="23" y2="23"/>
`;

togglePw.addEventListener('click', () => {
  const show = pwInput.type === 'password';
  pwInput.type = show ? 'text' : 'password';
  eyeIcon.innerHTML = show ? eyeClosed : eyeOpen;
});

// ─── Form validation & submit ───────────────────────────────
const form          = document.getElementById('loginForm');
const emailInput    = document.getElementById('email');
const emailError    = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const submitBtn     = document.getElementById('submitBtn');
const btnText       = document.getElementById('btnText');
const btnSpinner    = document.getElementById('btnSpinner');

function validateEmail(value) {
  if (!value.trim()) return 'Email is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
  return '';
}

function validatePassword(value) {
  if (!value) return 'Password is required.';
  if (value.length < 6) return 'Password must be at least 6 characters.';
  return '';
}

function setError(input, errorEl, msg) {
  errorEl.textContent = msg;
  if (msg) input.classList.add('invalid');
  else     input.classList.remove('invalid');
}

// Live validation on blur
emailInput.addEventListener('blur', () =>
  setError(emailInput, emailError, validateEmail(emailInput.value)));

pwInput.addEventListener('blur', () =>
  setError(pwInput, passwordError, validatePassword(pwInput.value)));

// Clear error on input
emailInput.addEventListener('input', () => {
  if (emailInput.classList.contains('invalid'))
    setError(emailInput, emailError, validateEmail(emailInput.value));
});
pwInput.addEventListener('input', () => {
  if (pwInput.classList.contains('invalid'))
    setError(pwInput, passwordError, validatePassword(pwInput.value));
});

// Submit
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const eErr = validateEmail(emailInput.value);
  const pErr = validatePassword(pwInput.value);
  setError(emailInput, emailError, eErr);
  setError(pwInput, passwordError, pErr);

  if (eErr || pErr) return;

  // Show spinner
  btnText.classList.add('hidden');
  btnSpinner.classList.remove('hidden');
  submitBtn.disabled = true;

  // Simulate async login
  await new Promise(r => setTimeout(r, 1500));

  btnText.textContent = '✓ Signed In!';
  btnText.classList.remove('hidden');
  btnSpinner.classList.add('hidden');
  submitBtn.disabled = false;
  document.querySelector('.card').classList.add('success');
});

