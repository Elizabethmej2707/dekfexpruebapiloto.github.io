/* ==========================================================================
   DEKFX - Galería de fotos
   1. Menú móvil (reutilizado, sin depender de script.js)
   2. Grid de fotos aleatorias
   3. Lightbox (ampliar / anterior / siguiente)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initGallery();
});

/* --------------------------------------------------------------------------
   1. MENÚ MÓVIL
   -------------------------------------------------------------------------- */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

/* --------------------------------------------------------------------------
   2 & 3. GRID DE FOTOS ALEATORIAS + LIGHTBOX
   -------------------------------------------------------------------------- */
function initGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    const TOTAL_PHOTOS = 16;

    // Genera un ID aleatorio distinto cada vez que se carga la página,
    // así las fotos cambian en cada visita ("fotos random").
    const usedIds = new Set();
    function randomPicsumId() {
        let id;
        do {
            id = Math.floor(Math.random() * 1000) + 1;
        } while (usedIds.has(id));
        usedIds.add(id);
        return id;
    }

    const photos = [];
    for (let i = 0; i < TOTAL_PHOTOS; i++) {
        const id = randomPicsumId();
        photos.push({
            thumb: `https://picsum.photos/id/${id}/600/600`,
            full: `https://picsum.photos/id/${id}/1600/1200`,
        });
    }

    photos.forEach((photo, index) => {
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = 'group relative rounded-2xl overflow-hidden aspect-square shadow-lg bg-dek-creamdark';
        const altLabel = (typeof t === 'function') ? t('gal_photo_alt') : 'Foto de proyecto';
        tile.innerHTML = `<img src="${photo.thumb}" alt="${altLabel} ${index + 1}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">`;
        tile.addEventListener('click', () => openLightbox(index));
        grid.appendChild(tile);
    });

    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = photos[currentIndex].full;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
    }

    function showPhoto(delta) {
        currentIndex = (currentIndex + delta + photos.length) % photos.length;
        lightboxImg.src = photos[currentIndex].full;
    }

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => showPhoto(-1));
    nextBtn.addEventListener('click', () => showPhoto(1));

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPhoto(-1);
        if (e.key === 'ArrowRight') showPhoto(1);
    });
}
