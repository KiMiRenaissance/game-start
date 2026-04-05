document.addEventListener('DOMContentLoaded', () => {
    const apiBtn = document.getElementById('api');
    const airBtn = document.getElementById('air');
    const tanahBtn = document.getElementById('tanah');
    const hasilEl = document.getElementById('hasil');
    const skorEl = document.getElementById('skor');
    const hpKamuEl = document.getElementById('hp-kamu');
    const hpKomputerEl = document.getElementById('hp-komputer');
    const berkasEl = document.getElementById('berkas');
    const hasilAkhirEl = document.getElementById('hasil-akhir');
    const ulangiBtn = document.getElementById('ulangi');
    const efek = document.getElementById('efekNyerang');

    let hpKamu = 100;
    let hpKomputer = 100;

    const elemen = ['api', 'air', 'tanah'];
    const aturan = {
        'api': 'tanah',
        'air': 'api',
        'tanah': 'air'
    };

    apiBtn.addEventListener('click', () => main('api'));
    airBtn.addEventListener('click', () => main('air'));
    tanahBtn.addEventListener('click', () => main('tanah'));
    ulangiBtn.addEventListener('click', resetGame);

    function main(pilihanKamu) {
        efek.style.display = 'block';
        apiBtn.style.display = 'none';
        airBtn.style.display = 'none';
        tanahBtn.style.display = 'none';
        setTimeout(function() {
            efek.style.display = 'none';
            apiBtn.style.display = 'block';
            airBtn.style.display = 'block';
            tanahBtn.style.display = 'block';
            const pilihanKomputer = elemen[Math.floor(Math.random() * 3)];
            hasilEl.textContent = `Kamu: ${pilihanKamu} - Jkow#Y: ${pilihanKomputer}`;
    
                if (pilihanKamu === pilihanKomputer) {
                    hpKomputer -= 5;
                    hpKamu -= 5;
                    hasilEl.textContent += ' - Seri!';
                } else if (aturan[pilihanKamu] === pilihanKomputer) {
                    hpKomputer -= 10;
                    hasilEl.textContent += ' - Kamu Menang!';
                } else {
                    hpKamu -= 10;
                    hasilEl.textContent += ' - Jkow#Y Menang!';
                }
    
                hpKamuEl.textContent = hpKamu;
                hpKomputerEl.textContent = hpKomputer;
    
                if (hpKamu <= 0) {
                    berkasEl.style.display = 'block';
                    apiBtn.style.display = 'none';
                    airBtn.style.display = 'none';
                    tanahBtn.style.display = 'none';
                    hasilAkhirEl.textContent = 'Kamu kalah melawan Jkow#Y!';
                } else if (hpKomputer <= 0 && hpKamu <= 0) {
                    berkasEl.style.display = 'block';
                    apiBtn.style.display = 'none';
                    airBtn.style.display = 'none';
                    tanahBtn.style.display = 'none';
                    hasilAkhirEl.textContent = 'Kamu kalah bersamanya!';
                } else if (hpKomputer <= 0) {
                    berkasEl.style.display = 'block';
                    apiBtn.style.display = 'none';
                    airBtn.style.display = 'none';
                    tanahBtn.style.display = 'none';
                    hasilAkhirEl.textContent = 'Kamu berhasil!';
                    ulangiBtn.innerHTML = 'pergi';
                    ulangiBtn.addEventListener("click", function() {
                        window.location.href = 'YILgyiulasgylbglUVYhnldsua.html'
                    });
                }
        }, 2000);
    }

    function resetGame() {
        hpKamu = 100;
        hpKomputer = 100;
        berkasEl.style.display = 'none';
        hasilEl.textContent = '';
        hpKamuEl.textContent = hpKamu;
        hpKomputer.textContent = hpKomputer;
        apiBtn.style.display = 'block';
        airBtn.style.display = 'block';
        tanahBtn.style.display = 'block';
    }
});