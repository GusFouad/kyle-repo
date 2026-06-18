/* ── Login page interactions ──────────────────────────────── */

const form       = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const pwInput    = document.getElementById('password');
const emailErr   = document.getElementById('emailError');
const pwErr      = document.getElementById('passwordError');
const submitBtn  = document.getElementById('submitBtn');
const btnText    = submitBtn.querySelector('.btn-text');
const btnSpinner = submitBtn.querySelector('.btn-spinner');
const togglePw   = document.getElementById('togglePw');

/* ── Toggle password visibility ──────────────────────────── */
togglePw.addEventListener('click', () => {
  const isHidden = pwInput.type === 'password';
  pwInput.type = isHidden ? 'text' : 'password';
  togglePw.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
  togglePw.querySelector('svg').innerHTML = isHidden
    ? /* eye-off */
      `<path d="M3 3l14 14M8.5 8.6A4.97 4.97 0 006 13c0 2.76 2.24 5 5 5a4.97 4.97 0 003.4-1.35M10.73 6.07A5 5 0 0115 11c0 .55-.09 1.08-.25 1.58M2 10s3-5 8-5M18 10s-3 5-8 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`
    : /* eye */
      `<path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.4"/>`;
});

/* ── Inline validation helpers ────────────────────────────── */
function validateEmail(val) {
  if (!val) return 'Email is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email address.';
  return '';
}

function validatePassword(val) {
  if (!val) return 'Password is required.';
  if (val.length < 6) return 'Password must be at least 6 characters.';
  return '';
}

function setFieldError(input, errorEl, msg) {
  errorEl.textContent = msg;
  if (msg) {
    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');
  } else {
    input.classList.remove('error');
    input.removeAttribute('aria-invalid');
  }
}

/* Live validation on blur */
emailInput.addEventListener('blur', () => {
  setFieldError(emailInput, emailErr, validateEmail(emailInput.value.trim()));
});

pwInput.addEventListener('blur', () => {
  setFieldError(pwInput, pwErr, validatePassword(pwInput.value));
});

/* Clear error on input */
emailInput.addEventListener('input', () => {
  if (emailErr.textContent) setFieldError(emailInput, emailErr, '');
});
pwInput.addEventListener('input', () => {
  if (pwErr.textContent) setFieldError(pwInput, pwErr, '');
});

/* ── Form submit ──────────────────────────────────────────── */
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const eMsg = validateEmail(emailInput.value.trim());
  const pMsg = validatePassword(pwInput.value);

  setFieldError(emailInput, emailErr, eMsg);
  setFieldError(pwInput,    pwErr,    pMsg);

  if (eMsg || pMsg) return;

  /* Simulate async sign-in */
  submitBtn.disabled = true;
  btnText.hidden     = true;
  btnSpinner.hidden  = false;

  await new Promise(r => setTimeout(r, 1800));

  /* Reset (demo only — real app would redirect) */
  submitBtn.disabled = false;
  btnText.hidden     = false;
  btnSpinner.hidden  = true;

  showToast('Signed in successfully! 🎉');
});

/* ── Toast notification ───────────────────────────────────── */
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('toast--show'));
  setTimeout(() => {
    toast.classList.remove('toast--show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 3000);
}

/* Inject toast styles dynamically */
const toastStyle = document.createElement('style');
toastStyle.textContent = `
  .toast {
    position: fixed;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: linear-gradient(135deg, #1A6BFF, #7C3AED);
    color: #fff;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 0.88rem;
    font-weight: 600;
    box-shadow: 0 8px 24px rgba(26,107,255,0.35);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 9999;
    white-space: nowrap;
  }
  .toast--show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;
document.head.appendChild(toastStyle);

