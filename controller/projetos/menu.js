function trocarBanner(numeroBanner) {
    let banners = document.getElementById('banners');
    banners.style.left = '-' + numeroBanner + '00vw';
}

window.trocarBanner = trocarBanner;
