const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const togglePw = document.getElementById('togglePw');

/* ── Toggle password visibility ── */
togglePw.addEventListener('click', () => {
  const isText = passwordInput.type === 'text';
  passwordInput.type = isText ? 'password' : 'text';
  togglePw.textContent = isText ? '👁' : '🙈';
});

/* ── Real-time validation ── */
emailInput.addEventListener('input', () => validateEmail(false));
passwordInput.addEventListener('input', () => validatePassword(false));

function validateEmail(showEmpty = true) {
  const val = emailInput.value.trim();
  if (!val) {
    if (showEmpty) setError(emailInput, emailError, 'Email is required.');
    else clearError(emailInput, emailError);
    return false;
  }
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(val)) {
    setError(emailInput, emailError, 'Please enter a valid email address.');
    return false;
  }
  clearError(emailInput, emailError);
  return true;
}

function validatePassword(showEmpty = true) {
  const val = passwordInput.value;
  if (!val) {
    if (showEmpty) setError(passwordInput, passwordError, 'Password is required.');
    else clearError(passwordInput, passwordError);
    return false;
  }
  if (val.length < 6) {
    setError(passwordInput, passwordError, 'Password must be at least 6 characters.');
    return false;
  }
  clearError(passwordInput, passwordError);
  return true;
}

function setError(input, msgEl, msg) {
  input.classList.add('invalid');
  msgEl.textContent = msg;
}

function clearError(input, msgEl) {
  input.classList.remove('invalid');
  msgEl.textContent = '';
}

/* ── Form submit ── */
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailOk = validateEmail(true);
  const passwordOk = validatePassword(true);

  if (emailOk && passwordOk) {
    const btn = form.querySelector('.btn-login');
    const btnText = btn.querySelector('.btn-text');
    btn.disabled = true;
    btnText.textContent = 'Signing in…';

    // Simulate async login
    setTimeout(() => {
      btnText.textContent = '✓ Signed In!';
      btn.style.background = 'linear-gradient(135deg, #86efac, #22c55e)';
      btn.style.color = '#14532d';
    }, 1500);
  }
});

