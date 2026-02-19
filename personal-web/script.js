// Tambahkan interaktivitas jika diperlukan
// Contoh: animasi sederhana saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.container').style.opacity = 0;
    setTimeout(function() {
        document.querySelector('.container').style.transition = 'opacity 1s';
        document.querySelector('.container').style.opacity = 1;
    }, 200);
});
