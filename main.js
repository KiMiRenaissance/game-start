main.style.display = 'none';

window.addEventListener('click', () => {
    menu.style.display = 'none';
    main.style.display = 'block';
    main.style.display = 'flex';
    imgimg.style.display = 'none';
    const audio = document.getElementById("backsound");
    audio.play();
});

const mulai = document.getElementById('mulai')
const konteks = document.getElementById('konteks')
const website = document.getElementById('website')
const back = document.getElementById('kembali')
const donate1 = document.getElementById('donate1')
const donate2 = document.getElementById('donate2')

mulai.addEventListener('click', function() {
    setTimeout(function() {
        main.style.display = 'none';
    }, 1000);
    setTimeout(function() {
        window.location.href = 'part1.html';
    }, 3000);
});

konteks.addEventListener('click', function() {
    setTimeout(function() {
        window.open('https://whoproject.vercel.app', '_blank');
    }, 1000);
});

website.addEventListener('click', function() {
    setTimeout(function() {
        window.open('https://kimirenai.vercel.app', '_blank');
    }, 1000);
});

dukung.addEventListener('click', function() {
    setTimeout(function() {
        dukungan.style.display = "block";
    }, 250);
});

kembali.addEventListener('click', function() {
    setTimeout(function() {
        dukungan.style.display = "none";
    }, 250);
});

donate1.addEventListener('click', function() {
    setTimeout(function() {
        window.open('https://sociabuzz.com/milan_o391/tribe', '_blank');
    }, 250);
});

donate2.addEventListener('click', function() {
    setTimeout(function() {
        window.open('https://trakteer.id/kimi_renaissance', '_blank');
    }, 250);
});
