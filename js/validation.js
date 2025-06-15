document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.needs-validation');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  form.addEventListener('submit', function (event) {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      confirmPassword.setCustomValidity('');
    }

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  });

  // Optional: live validation feedback
  confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === password.value) {
      confirmPassword.setCustomValidity('');
    }
  });
});
