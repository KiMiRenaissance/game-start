const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const containerJawaban = document.getElementById("row")
const kembali = document.getElementById("btnKembali")

let init = 0

const botSay = (data) => {
    return [
        "Jadi, siapa namamu?",
        `wahh halo ${data?.nama}☺️! Itu nama yang keren. apa kamu senang jika ada orang yang memanggilmu dengan nama itu?`,
        `Hehehe... kamu tahu? aku selalu iri mengetahui manusia bisa bebas berekspresi, sedangkan aku hanya program yang dirangcang oleh mereka. Menurutmu apa yang bisa menghiburku?`,
        `aku rasa menggambar menyenangkan tapi... ayo kita bermain game. bukankah game opsi yang terbaik untuk meninggalkan pekerjaan kita?`,
        `Ah bercanda, pekerjaan merupakan hal wajib untuk kita yang sedang di usia produktif, jadi gimana kita akan bermain game? Apakah di usiamu saat ini masih layak untuk main game? Berapa usiamu sekarang?`,
        `aku rasa berusia ${data?.usia} tahun tidak begitu buruk. 😉`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (jawaban.value.length < 1) return alert('jawab dulu cantik.')
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
        btnKembali.style.display = "none";
            setTimeout(() => {
                containerJawaban.style.display = 'none';
                btnKirim.innerHTML = 'ya, aku suka mendengar namaku.';
                userData.push(jawaban.value)
                jawaban.value = "ya, aku suka mendengar namaku."
                btnKirim.style.fontSize = "3vh"
                btnKirim.style.width = "auto";
                btnKirim.style.height = "auto";
                btnKirim.style.padding = "5px";
            }, [1500])
    } else if (init === 2) {
        botDelay({ canggung: jawaban.value })
            setTimeout(() => {
                containerJawaban.style.display = 'none';
                userData.push(jawaban.value)
                jawaban.value = "Mungkin kegiatan menyenangkan seperti, menggambar."
                btnKirim.innerHTML = 'Mungkin kegiatan menyenangkan seperti, menggambar.';
                btnKirim.style.fontSize = "3vh";
            }, [1500])
    } else if (init === 3) {
        botDelay({ nyocot: jawaban.value })
            setTimeout(() => {
                containerJawaban.style.display = 'none';
                btnKirim.innerHTML = 'Tunggu, apa maksudmu itu!?';
                userData.push(jawaban.value)
                jawaban.value = "Tunggu, apa maksudmu itu!?"
                btnKirim.style.fontSize = "3vh"
            }, [1500])
    } else if (init === 4) {
        botDelay({ gitulah: jawaban.value })
            setTimeout(() => {
                containerJawaban.style.display = 'block';
                jawaban.placeholder = "tulis usiamu di sini!";
                jawaban.type = 'number';
                btnKirim.innerHTML = 'ini usiaku';
                userData.push(jawaban.value)
                jawaban.value = ""
                btnKirim.style.fontSize = ".9em"
            }, [1500])
    } else if (jawaban.value <= 15) {
        containerJawaban.style.display = "none";
        jawaban.style.display = "none";
        jawaban.value = "1000";
        alert(`Aku ingin ${userData[0]} tidak memainkan permainan ini.`)
        pertanyaan.innerHTML = `Maaf ${userData[0]}, aku tidak bisa bermain denganmu.`
        btnKirim.innerHTML = "tetap ikut";
        btnKembali.style.display = "block";
        btnKembali.addEventListener("click", function() {
            window.location.href = 'index.html'
        });
        jawaban.type = 'text';
    } else if (init === 5) {
        botDelay({ usia: jawaban.value })
        btnKembali.style.display = "none";
            setTimeout(() => {
                containerJawaban.style.display = 'none';
                btnKirim.innerHTML = 'Okie dokie...';
                userData.push(jawaban.value)
                jawaban.type = 'text';
                jawaban.value = "Okie dokie...";
                btnKirim.style.fontSize = "3vh";
            }, [1500])
    } else if (init === 6) {
        finishing({ nya: jawaban.value })
        btnKembali.style.display = "none";
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log({ userData: userData })
    btnKirim.style.display = 'none';
    jawaban.style.display = 'none';
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        jawaban.style.display = 'block';
        btnKirim.style.display = 'block';
    }, [1500])
    userData.push(jawaban.value)
    jawaban.value = ""
}

const tombol = document.getElementById('btnKirim');

function finishing() {
    console.log({ userData: userData })
    pertanyaan.innerHTML = `Kalau begitu ayo ikut denganku ${userData[0]}.`;
    containerJawaban.style.display = 'none';
    btnKirim.innerHTML = 'ikuti dia';
    userData.push(jawaban.value)
    jawaban.value = "yangPentingAda"
}

function botEnd() {
    alert(`Ketika ${userData[0]} merasa tidak nyaman dalam permainan, harap tidak dilanjutkan.`)
    alert(`Dev: Sambil putar musik aja kalau gabut, game ini tidak memakai suara.`)
    window.location.href = "!!!.html";
}

const karakter = document.getElementById('karakter');

tombol.addEventListener('click', function() {
    
    karakter.style.display = 'none'; 

    karakter.src = "ngapainjugadiklik.png";

    setTimeout(function() {
        karakter.style.display = 'block';
    }, 50);

    setTimeout(function() {
        karakter.src = "ngapainjugadiklik.gif";
    }, 1400);
});

document.getElementById("jawaban").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        botStart();
    }
});

if (blank.style.display = 'block') {
    alert(`${userData[0]}`)
}