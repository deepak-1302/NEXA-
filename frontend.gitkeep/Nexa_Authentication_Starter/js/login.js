(() => {
	const form = document.getElementById('loginForm');
	const email = document.getElementById('email');
	const pw = document.getElementById('pw');
	const toggle = document.getElementById('toggle');
	const submit = form.querySelector('.submit');
	const emailError = document.getElementById('emailError');
	const pwError = document.getElementById('pwError');
	const formMessage = document.getElementById('formMessage');

	function resetErrors() {
		emailError.textContent = '';
		pwError.textContent = '';
		formMessage.textContent = '';
	}

	function validate() {
		let ok = true;
		resetErrors();

		const eVal = email.value.trim();
		const pVal = pw.value;

		const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!eVal) {
			emailError.textContent = 'Email is required';
			ok = false;
		} else if (!emailRe.test(eVal)) {
			emailError.textContent = 'Enter a valid email address';
			ok = false;
		}

		if (!pVal) {
			pwError.textContent = 'Password is required';
			ok = false;
		} else if (pVal.length < 8) {
			pwError.textContent = 'Password must be at least 8 characters';
			ok = false;
		}

		return ok;
	}

	toggle.addEventListener('click', () => {
		const isPassword = pw.type === 'password';
		pw.type = isPassword ? 'text' : 'password';
		toggle.textContent = isPassword ? 'Hide' : 'Show';
		toggle.setAttribute('aria-pressed', String(isPassword));
		pw.focus();
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (!validate()) return;

		// Simulate async login
		submit.disabled = true;
		submit.textContent = 'Signing in…';
		formMessage.textContent = '';

		setTimeout(() => {
			submit.disabled = false;
			submit.textContent = 'Login';
			window.location.href = '/dashboard/dashboard.html';
		}, 900);
	});

	// Real-time validation (optional)
	email.addEventListener('input', () => { if (emailError.textContent) validate(); });
	pw.addEventListener('input', () => { if (pwError.textContent) validate(); });
})();