const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePassword.textContent = isPassword ? 'Hide' : 'Show';
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  message.textContent = `Login attempted for ${email}`;
});
