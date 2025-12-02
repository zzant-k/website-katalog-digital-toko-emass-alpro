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

            // Cek apakah kredensial ada di dalam daftar akun yang valid
            const isValid = validAccounts.some(account => 
                account.email === emailInput && account.password === passwordInput
            );

            if (isValid) {
                // Login Sukses
                alert('Login Berhasil!.');
                
                // --- KODE UTAMA UNTUK REDIRECT KE emas.html ---
                window.location.href = 'index2.html'; 
                
            } else {
                // Login Gagal
                alert('Login Gagal. Email atau password salah.');
            }
            
            // Opsional: Bersihkan input password setelah percobaan
            document.getElementById('password').value = '';
        });
    }
});