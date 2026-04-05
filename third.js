document.addEventListener('DOMContentLoaded', () => {
    const apiBtn = document.getElementById('api');
    const airBtn = document.getElementById('air');
    const tanahBtn = document.getElementById('tanah');
    const udaraBtn = document.getElementById('udara');
    const hasilEl = document.getElementById('hasil');
    const skorEl = document.getElementById('skor');
    const hpKamuEl = document.getElementById('hp-kamu');
    const hpKomputer1El = document.getElementById('hp-komputer1');
    const hpKomputer2El = document.getElementById('hp-komputer2');
    const berkasEl = document.getElementById('berkas');
    const hasilAkhirEl = document.getElementById('hasil-akhir');
    const ulangiBtn = document.getElementById('ulangi');
    const efek = document.getElementById('efekNyerang');
    const status = document.getElementById('status');


    let hpKamu = 120;
    let hpKomputer1 = 90;
    let hpKomputer2 = 90;

    const elemen = ['api', 'air', 'tanah', 'udara'];
    const aturan = {
        'api': 'tanah',
        'air': 'api',
        'tanah': 'udara',
        'udara': 'air'
    };

    apiBtn.addEventListener('click', () => main('api'));
    airBtn.addEventListener('click', () => main('air'));
    tanahBtn.addEventListener('click', () => main('tanah'));
    udaraBtn.addEventListener('click', () => main('udara'));
    ulangiBtn.addEventListener('click', resetGame);

    function main(pilihanKamu) {
        const pilihanKomputer1 = hpKomputer1 > 0 ? elemen[Math.floor(Math.random() * 4)] : null;
        const pilihanKomputer2 = hpKomputer2 > 0 ? elemen[Math.floor(Math.random() * 4)] : null;
        hasilEl.textContent = `Kamu: ${pilihanKamu} - Groj#X: ${pilihanKomputer1 || 'tidak bereaksi'} - Jkow#Y: ${pilihanKomputer2 || 'tidak bereaksi'}`;
        setTimeout(function() {
            pilihan.style.display = 'none';
            efek.style.display = 'block';
        }, 0);
        setTimeout(function() {
            pilihan.style.display = 'block';
            efek.style.display = 'none';
            
            // Groj#X
            
            if (pilihanKomputer1) {
                if (pilihanKamu === pilihanKomputer1) {
                    hasilEl.textContent += ' - Seri dengan Groj#X!';
                    hpKomputer1 -= 10;
                    hpKamu -= 5;
                } else if (aturan[pilihanKamu] === pilihanKomputer1) {
                    hpKomputer1 -= 20;
                    hasilEl.textContent += ' - Kamu berhasil melawan Groj#X!';
                } else {
                    hpKamu -= 10;
                    hasilEl.textContent += ' - Groj#X berhasil!';
                }
            }
            
            
        // Jkow#Y
            if (pilihanKomputer2) {
                if (pilihanKamu === pilihanKomputer2) {
                    hasilEl.textContent += ' - Seri dengan Jkow#Y!';
                    hpKomputer2 -= 10;
                    hpKamu -= 5;
                } else if (aturan[pilihanKamu] === pilihanKomputer2) {
                    hpKomputer2 -= 20;
                    hasilEl.textContent += ' - Kamu berhasil melawan Jkow#Y!';
                } else {
                    hpKamu -= 10;
                    hasilEl.textContent += ' - Jkow#Y berhasil!';
                }
            }
            
            hpKamuEl.textContent = hpKamu;
            hpKomputer1El.textContent = hpKomputer1;
            hpKomputer2El.textContent = hpKomputer2;
    
            
        if (hpKamu <= 0) {
            berkasEl.style.display = 'block';
            hasilAkhirEl.textContent = 'Kamu kalah!';
            pilihan.style.display = 'none';
            ulangi.style.display = 'block';
        } else if (hpKomputer1 <= 0 && hpKomputer2 <= 0 && hpKamu <= 0) {
            berkasEl.style.display = 'block';
            hasilAkhirEl.textContent = 'Kamu kalah bersama mereka!';
            pilihan.style.display = 'none';
            ulangi.style.display = 'block';
        } else if (hpKomputer1 <= 0 && hpKomputer2 <= 0) {
            berkasEl.style.display = 'block';
            ulangi.style.display = 'block';
            hasilAkhirEl.textContent = '6@v6J8#$oqQAtg!';
            ulangiBtn.innerHTML = 'cukup';
            ulangiBtn.addEventListener("click", function() {
                window.location.href = "wuUbatoNOLkIIUOLeayooFGkuFYkfoRi.html";
            });
            pilihan.style.display = 'none';
        } else if (hpKomputer1 <= 0) {
            status.textContent = 'Groj#X tumbang';
            
        } else if (hpKomputer2 <= 0) {
            status.textContent = 'Jkow#Y tumbang';
            
        }
            
        }, 1750);
    


    

    

    }

    function resetGame() {
        hpKamu = 120;
        hpKomputer1 = 80;
        hpKomputer2 = 80;
        berkasEl.style.display = 'none';
        hasilEl.textContent = '';
        hpKamuEl.textContent = hpKamu;
        hpKomputer1El.textContent = hpKomputer1;
        hpKomputer2El.textContent = hpKomputer2;
        pilihan.style.display = 'block';
        status.textContent = '';
    }
});