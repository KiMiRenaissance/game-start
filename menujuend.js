document.addEventListener('DOMContentLoaded', () => {
    const kode1 = document.getElementById('nginput');
    const cekBtn = document.getElementById('btn');
    const status = document.getElementById('status');
    const miwarah = document.getElementById('perintah');
    const ttd = document.getElementById('ttd');

    
    const kodeBenar = 'e';
    
    cekBtn.addEventListener('click', cekKode);
    
    function cekKode() {
        const kode = kode1.value;
        if (kode === kodeBenar) {
            status.textContent = 'memproses kode...';
            kode1.style.display = 'none';
            cekBtn.style.display = 'none';
            miwarah.style.display = 'none';
            ttd.style.display = 'none';
            status.style.display = 'block';
            setTimeout(function() {
                status.textContent = 'Kode sesuai!!';
                kode1.style.display = 'none';
                cekBtn.style.display = 'none';
                miwarah.style.display = 'none';
                ttd.style.display = 'none';
                status.style.display = 'block';
            }, 5000);
            setTimeout(function() {
                window.location.href = "aFaIyyah.html";
        
            }, 10000);
            
        } else if (kode === 'E') {
            status.style.display = 'block';
            status.textContent = 'btw "e" bukan "E". Hidup itu singkat, lebih baik kamu mengecilkan ego besarmu itu.';
            ttd.style.display = 'block';
            ttd.textContent = '- Milano, 2026';
        } else if (kode1.value.length < 1) {
            return alert('jawab dulu cantik.')
        } else {
            ttd.style.display = 'none';
            status.style.display = 'block';
            status.textContent = 'Hei, itu ngajeblag badag. Gimana ari kamu?!';
        }
    }
});