document.addEventListener('DOMContentLoaded', () => {
    const guntingBtn = document.getElementById('gunting');
    const kertasBtn = document.getElementById('kertas');
    const batuBtn = document.getElementById('batu');
    const hasilEl = document.getElementById('hasil');
    const skorEl = document.getElementById('skor');
    const rondeEl = document.getElementById('ronde');
    const berkasEl = document.getElementById('berkas');
    const hasilAkhirEl = document.getElementById('hasil-akhir');
    const ulangiBtn = document.getElementById('ulangi');
    const efek = document.getElementById('efekNyerang');

    let skorKamu = 0;
    let skorKomputer = 0;
    let ronde = 0;
    const maxRonde = 5;

    const pilihan = ['gunting', 'kertas', 'batu'];

    guntingBtn.addEventListener('click', () => main('gunting'));
    kertasBtn.addEventListener('click', () => main('kertas'));
    batuBtn.addEventListener('click', () => main('batu'));
    ulangiBtn.addEventListener('click', resetGame);

    function main(pilihanKamu) {
        if (ronde >= maxRonde) return;
        efek.style.display = ' block';
        guntingBtn.style.display = 'none';
        kertasBtn.style.display = 'none';
        batuBtn.style.display = 'none';
        setTimeout(function() {
            const pilihanKomputer = pilihan[Math.floor(Math.random() * 3)];
            hasilEl.textContent = `Kamu: ${pilihanKamu} - Groj#X: ${pilihanKomputer}`;
            efek.style.display = 'none';
            guntingBtn.style.display = 'block';
            kertasBtn.style.display = 'block';
            batuBtn.style.display = 'block';

    
            if (pilihanKamu === pilihanKomputer) {
                hasilEl.textContent += ' - Seri!';
                
            } else if (
                (pilihanKamu === 'gunting' && pilihanKomputer === 'kertas') ||
                (pilihanKamu === 'kertas' && pilihanKomputer === 'batu') ||
                (pilihanKamu === 'batu' && pilihanKomputer === 'gunting')
            ) {
                skorKamu++;
                hasilEl.textContent += ' - Kamu Menang!';
            } else {
                skorKomputer++;
                hasilEl.textContent += ' - Groj#X Menang!';
            }

        }, 5000);
    
    setTimeout(function() {
        ronde++;
        rondeEl.textContent = `Ronde: ${ronde}`;
        skorEl.textContent = `Skor: Kamu ${skorKamu} - Groj#X ${skorKomputer}`;
    
        if (ronde >= maxRonde) {
          berkasEl.style.display = 'block';
            if (skorKamu > skorKomputer) {
                hasilAkhirEl.textContent = 'Kamu berhasil!';
                ulangiBtn.innerHTML = 'pergi';
                guntingBtn.style.display = 'none';
                kertasBtn.style.display = 'none';
                batuBtn.style.display = 'none';
                ulangiBtn.addEventListener("click", function() {
                    window.location.href = 'suULGHOhasBsuO.html'
                });
            } else if (skorKamu < skorKomputer) {
                hasilAkhirEl.textContent = 'Kamu kalah melawan Groj#X!';
                guntingBtn.style.display = 'none';
                kertasBtn.style.display = 'none';
                batuBtn.style.display = 'none';
            } else {
                hasilAkhirEl.textContent = 'Seri!';
                guntingBtn.style.display = 'none';
                kertasBtn.style.display = 'none';
                batuBtn.style.display = 'none';
            }
        }
    }, 5000);
}

    function resetGame() {
        skorKamu = 0;
        skorKomputer = 0;
        ronde = 0;
        berkasEl.style.display = 'none';
        hasilEl.textContent = '';
        skorEl.textContent = 'Skor: Kamu 0 - Groj#X 0';
        rondeEl.textContent = 'Ronde: 0';
        guntingBtn.style.display = 'block';
        kertasBtn.style.display = 'block';
        batuBtn.style.display = 'block';
    }
});