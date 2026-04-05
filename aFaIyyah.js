const elements = document.querySelectorAll('div, body');
let a, b, benar;

function tatambahan() {
    a = Math.floor(Math.random() * 100);
b = Math.floor(Math.random() * 100);
    tatambahan = a + b;
    document.getElementById("soal").innerHTML = `${a} + ${b} = ?`;
}

function kukurangan() {
    a = Math.floor(Math.random() * 100);
b = Math.floor(Math.random() * 100);
    kukurangan = a - b;
    document.getElementById("soal").innerHTML = `${a} - ${b} = ?`;
}

function kakalian() {
    a = Math.floor(Math.random() * 50);
b = Math.floor(Math.random() * 50);
    benar = a * b;
    document.getElementById("soal").innerHTML = `${a} x ${b} = ?`;
}

function cekJawaban() {
    let userAns = document.getElementById("jawaban").value;
    if (jawaban.value.length < 1) return alert('jawab dulu cantik.')
    
    if (parseInt(userAns) === tatambahan) {
        soal.innerHTML = '...';
        setTimeout(function() {
            kukurangan()
        }, 1000);
        
        botSay.style.display = 'none';
    }
    if (parseInt(userAns) === kukurangan) {
        soal.innerHTML = '...';
        setTimeout(function() {
            kakalian()
        }, 1000);
        botSay.style.display = 'none';
    }
    if (parseInt(userAns) === benar) {
        document.getElementById("botSay").innerHTML = "Jawabanmu sudah benar";
        soal.style.display = "none";
        jawaban.style.display = "none";
        btnKirim.style.display = "none";
        botSay.style.display = "block";
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Aku senang kamu menuruti permintaanku...";
        }, 5000);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Atau mungkin permintaan kami berdua...";
        }, 9500);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Ada satu hal yang harus kamu tahu,";
        }, 14000);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Walau sekarang, kami hanyalah kumpulan data yang disimpan di ruang digital.";
        }, 18750);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Kenangan ketika kami berdua masih hidup...";
        }, 26500);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Adalah sebuah kerinduan yang tak dapat digantikan.";
        }, 32500);
        setTimeout(function() {
            nangis.style.display = 'block';
            karakter.style.display = 'none';
            document.getElementById("botSay").innerHTML = "Aku selalu mendambakkan hidup kembali bersamanya.";
        }, 37500);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Berangkat sekolah...";
        }, 45000);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Menggambar...";
        }, 50000);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Bersamanya.";
        }, 55000);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "...";
        }, 61000);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Suatu hari, ketika bel tanda selesainya kegiatan di sekolah berbunyi, ia mengajakku untuk menggambar bersama.";
        }, 61750);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Namun, aku menolak. Dengan alasan,";
        }, 71000);
        setTimeout(function() {
            
            document.getElementById("botSay").innerHTML = "kalau menggambar itu hobi yang terlalu kuno. Aku menggenggam tangannya, memaksa untuk ikut bermain game bersamaku.";
        }, 76500);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Aku menyesal.";
        }, 86000);
        setTimeout(function() {
            nangis.style.display = 'none';
            karakter.style.display = 'block';
            document.getElementById("botSay").innerHTML = "Waspadalah terhadapnya, data yang kamu berikan  mungkin bisa ia salahgunakan.";
        }, 90000);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Apakah kamu sadar?... Kamu mengenalkan diri tadi, tidak dengannya.";
        }, 98000);
        setTimeout(function() {
            document.getElementById("botSay").innerHTML = "Aku senang ketika ia memanggilku T...";
        }, 106000);
        setTimeout(function() {
            karakter.style.display = 'none';
            ngeri.style.display = 'block';
        }, 107750);
        setTimeout(function() {
            fcontainer.style.display = 'none';
            blank.style.display = 'block';
        }, 109750);
        setTimeout(function() {
            fcontainer.style.display = 'block';
            blank.style.display = 'none';
            elements.forEach(el => {
                el.style.backgroundColor = 'transparent';
            });
            bug.style.backgroundColor = 'transparent';
        }, 112000);
        setTimeout(function() {
            mengerikan.style.display = 'block';
            ngeri.style.display = 'none';
            row.style.display = 'none';
            botSay.style.backgroundColor = 'red';
            footer.style.backgroundColor = 'maroon';
            afooter.style.backgroundColor = 'maroon';
            bfooter.style.backgroundColor = 'maroon';
        }, 115000);
        setTimeout(function() {
            who.style.display = 'block';
            mengerikan.style.display = 'none';
            row.style.display = 'block';
            footer.style.backgroundColor = 'var(--gelap)';
            afooter.style.backgroundColor = 'var(--gelap)';
            bfooter.style.backgroundColor = 'var(--gelap)';
            botSay.style.backgroundColor = 'var(--cerah)';
            jawaban.style.display = "none";
            btnKirim.style.display = "none";
            botSay.style.display = "block";
            botSay.innerHTML = '...';
            gitulah.style.display = "block";
            elements.forEach(el => {
                el.style.backgroundColor = 'var(--cerah)';
                gitulah.style.backgroundColor = "var(--gelap)";
            });
        }, 123000);
        setTimeout(function() {
            botSay.innerHTML = 'Semua itu...'
        }, 124500);
        setTimeout(function() {
            botSay.innerHTML = 'Semua itu... Hanya bug.'
        }, 128000);
        setTimeout(function() {
            botSay.innerHTML = 'Seua itC... HanUa b%g.'
        }, 132000);
        setTimeout(function() {
            botSay.innerHTML = 'SWua ItC... HYnUa b%g.'
        }, 132080);
        setTimeout(function() {
            botSay.innerHTML = 'SW4a IE.*. HYFUa b%g.'
        }, 132160);
        setTimeout(function() {
            botSay.innerHTML = 'SW5a IE8oH.*^7YFLb%g.'
        }, 132240);
        setTimeout(function() {
            botSay.innerHTML = 'WW6a IE8iYH.*^7GbO='
        }, 132320);
        setTimeout(function() {
            botSay.innerHTML = 'WE7a ewsho8iYH.*^RubO='
        }, 132400);
        setTimeout(function() {
            botSay.innerHTML = 'WE8a o8iYdfdH.GRuj)&'
        }, 132480);
        setTimeout(function() {
            botSay.innerHTML = '6E9a o8TjuiodfdH.GR776&'
        }, 132560);
        setTimeout(function() {
            botSay.innerHTML = '6E10!a o8TgiiodfdH.GoO76^'
        }, 132640);
        setTimeout(function() {
            botSay.innerHTML = 'Akua dfdH.GoO76^'
        }, 132720);
        setTimeout(function() {
            botSay.innerHTML = 'Akua djugaH.GoO76^'
        }, 132800);
        setTimeout(function() {
            botSay.innerHTML = 'Akua djugaH.GSenO76^'
        }, 132880);
        setTimeout(function() {
            botSay.innerHTML = 'Akua djugaH.GSenang^'
        }, 132960);
        setTimeout(function() {
            botSay.innerHTML = 'Aku juga senang, waktu dia manggil aku L...'
        }, 133000);
        setTimeout(function() {
            fcontainer.style.display = 'none';
            l.style.display = 'block';
        }, 139000);
        setTimeout(function() {
            fcontainer.style.display = 'none';
            l.style.display = 'none';
            saha.style.display = 'block';
        }, 143000);
        setTimeout(function() {
            fcontainer.style.display = 'none';
            l.style.display = 'none';
            saha.style.display = 'none';
            blank.style.display = 'block';
            blank.style.backgroundColor = 'black';
            teksAkhir.innerHTML = 'Semua data ini belum menjawab pertanyaannya...';
        }, 148000);
        setTimeout(function() {
            alert('Terima kasih telah memainkan game ini.');
            window.location.href = 'index.html';
        }, 151000);
    } else {
        botSay.style.display = 'none';
        document.getElementById("botSay").innerHTML = "verifikasi gagal, coba lagi yah.";
    }
    document.getElementById("jawaban").value = "";
}

tatambahan();

document.getElementById("jawaban").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        cekJawaban();
    }
});