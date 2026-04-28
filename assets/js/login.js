/**
 * Login JS - Handle user authentication
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    const validAccounts = [
        { email: 'user@example.com', password: '123' },
        { email: 'admin@toko.com', password: 'admin' },
        { email: 'fauzan@dev.com', password: '456' }
    ];

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const emailInput = document.getElementById('email').value.trim();
            const passwordInput = document.getElementById('password').value.trim();

            const isValid = validAccounts.some(account => 
                account.email === emailInput && account.password === passwordInput
            );

            if (isValid) {
                alert('Login Berhasil!');
                // Redirect to the home page (index.html)
                window.location.href = '../index.html'; 
            } else {
                alert('Login Gagal. Email atau password salah.');
            }
            
            document.getElementById('password').value = '';
        });
    }
});
