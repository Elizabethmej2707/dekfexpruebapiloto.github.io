/* ==========================================================================
   NAVETEC - Lógica interactiva
   Organizado en 5 módulos:
   1. Menú móvil
   2. Video de fondo del hero (con reintento automático de fuente)
   3. Slider Antes/Después
   4. Cotizador de presupuesto
   5. Formulario de contacto
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeroVideo();
    initBeforeAfterSlider();
    initEstimateCalculator();
    initContactForm();
});

/* --------------------------------------------------------------------------
   2. VIDEO DE FONDO DEL HERO
   Intenta varias fuentes de video en orden. Si una falla al cargar
   (bloqueo del proveedor, red lenta, etc.), prueba la siguiente
   automáticamente. Si todas fallan, se queda visible la imagen "poster"
   como respaldo, así el hero nunca se ve roto.
   -------------------------------------------------------------------------- */
function initHeroVideo() {
    const video = document.getElementById('hero-video');
    if (!video) return;

    const sources = [
        'video/hero-dekfx.mp4',
        'https://videos.pexels.com/video-files/5757556/5757556-hd_1920_1080_25fps.mp4',
        'https://videos.pexels.com/video-files/27499680/12154364_1920_1080_30fps.mp4'
    ];
    let sourceIndex = 0;

    function tryNextSource() {
        if (sourceIndex >= sources.length) return; // se queda con el poster
        video.src = sources[sourceIndex];
        sourceIndex++;
        video.load();
        video.play().catch(() => { /* autoplay bloqueado: no pasa nada, queda el poster */ });
    }

    video.addEventListener('error', tryNextSource);
    tryNextSource();
}

/* --------------------------------------------------------------------------
   1. MENÚ MÓVIL
   -------------------------------------------------------------------------- */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

/* --------------------------------------------------------------------------
   2. SLIDER ANTES/DESPUÉS
   -------------------------------------------------------------------------- */
function initBeforeAfterSlider() {
    const sliderContainer = document.getElementById('before-after-slider');
    const beforeImgLayer = document.getElementById('before-image-layer');
    const sliderDivider = document.getElementById('slider-divider');

    let isResizing = false;

    function updateSlider(clientX) {
        const rect = sliderContainer.getBoundingClientRect();
        const x = clientX - rect.left;
        let percentage = (x / rect.width) * 100;

        // Límites del 0% al 100%
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;

        beforeImgLayer.style.width = `${percentage}%`;
        sliderDivider.style.left = `${percentage}%`;
    }

    // Eventos de mouse
    sliderContainer.addEventListener('mousedown', (e) => {
        isResizing = true;
        updateSlider(e.clientX);
    });
    window.addEventListener('mouseup', () => {
        isResizing = false;
    });
    window.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        updateSlider(e.clientX);
    });

    // Eventos táctiles (móvil)
    sliderContainer.addEventListener('touchstart', (e) => {
        isResizing = true;
        updateSlider(e.touches[0].clientX);
    });
    window.addEventListener('touchend', () => {
        isResizing = false;
    });
    window.addEventListener('touchmove', (e) => {
        if (!isResizing) return;
        updateSlider(e.touches[0].clientX);
    });
}

/* --------------------------------------------------------------------------
   3. COTIZADOR DE PRESUPUESTO
   -------------------------------------------------------------------------- */

// Estado del cotizador
let activeBoatType = 'lancha';
let baseMultiplier = 120; // $ por pie, estimación base

let esloraRange, esloraDisplay, materialSelect;
let resBoat, resLength, resArea, totalPriceDisplay;

function initEstimateCalculator() {
    esloraRange = document.getElementById('eslora-range');
    esloraDisplay = document.getElementById('eslora-display');
    materialSelect = document.getElementById('material-select');

    resBoat = document.getElementById('res-boat');
    resLength = document.getElementById('res-length');
    resArea = document.getElementById('res-area');
    totalPriceDisplay = document.getElementById('total-price-display');

    esloraRange.addEventListener('input', calculateEstimate);
    materialSelect.addEventListener('change', calculateEstimate);

    // Cálculo inicial al cargar la página
    calculateEstimate();
}

// Ir al cotizador y preseleccionar el tipo de embarcación (llamado desde las tarjetas de categoría)
function goToCotizador(type, multiplier) {
    selectBoat(type, multiplier);
    const cotizadorSection = document.getElementById('cotizador');
    if (cotizadorSection) {
        cotizadorSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Selección de tipo de embarcación (llamado desde los botones en el HTML)
function selectBoat(type, multiplier) {
    activeBoatType = type;
    baseMultiplier = multiplier;

    // Quitar estilos activos de todos los botones
    document.querySelectorAll('.boat-selector-btn').forEach(btn => {
        btn.classList.remove('bg-dek-teal/10', 'border-dek-teal', 'text-dek-tealdark');
        btn.classList.add('bg-dek-cream', 'border-dek-creamdark', 'text-dek-muted');
    });

    // Aplicar estilo activo al botón seleccionado
    const activeBtn = document.getElementById(`btn-${type}`);
    activeBtn.classList.remove('bg-dek-cream', 'border-dek-creamdark', 'text-dek-muted');
    activeBtn.classList.add('bg-dek-teal/10', 'border-dek-teal', 'text-dek-tealdark');

    calculateEstimate();
}

function calculateEstimate() {
    const length = parseInt(esloraRange.value);
    const ftLabel = (typeof t === 'function') ? t('unit_ft') : 'Pies';
    esloraDisplay.textContent = `${length} ${ftLabel}`;

    const matFactor = parseFloat(materialSelect.value);

    // Área aproximada en m²
    let area = Math.round(length * (activeBoatType === 'catamaran' ? 0.7 : 0.45));
    if (area < 5) area = 5;

    // Estimación de precio según fórmula
    const minPrice = Math.round(length * baseMultiplier * matFactor);
    const maxPrice = Math.round(minPrice * 1.25);

    // Actualizar la interfaz (con nombre de embarcación y unidades según el idioma activo)
    const boatNameKey = `boat_name_${activeBoatType}`;
    resBoat.textContent = (typeof t === 'function') ? t(boatNameKey) : activeBoatType.toUpperCase();
    resLength.textContent = `${length} ${ftLabel} (~${Math.round(length * 0.3)}m)`;
    const areaUnitLabel = (typeof t === 'function') ? t('unit_m2_approx') : 'm² aprox.';
    resArea.textContent = `${area} ${areaUnitLabel}`;
    totalPriceDisplay.textContent = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`;
}

// Precargar el formulario de contacto con los datos del cotizador
function prefillForm() {
    const ftLabel = (typeof t === 'function') ? t('unit_ft') : 'Pies';
    document.getElementById('form-boat').value = activeBoatType;
    document.getElementById('form-eslora').value = `${esloraRange.value} ${ftLabel}`;
}

// Recalcula el cotizador cuando el usuario cambia de idioma (definido en js/i18n.js)
window.onLanguageChange = function () {
    if (typeof esloraRange !== 'undefined' && esloraRange) {
        calculateEstimate();
    }
};

/* --------------------------------------------------------------------------
   4. FORMULARIO DE CONTACTO
   -------------------------------------------------------------------------- */
function initContactForm() {
    // El formulario usa onsubmit="handleFormSubmit(event)" en el HTML,
    // así que no se necesita un listener adicional aquí.
}

function handleFormSubmit(event) {
    event.preventDefault();

    // TODO: Reemplazar esta simulación por el envío real
    // (por ejemplo: fetch a un endpoint propio, Formspree, o similar)
    const notification = document.getElementById('success-notification');
    notification.classList.remove('hidden');
}

function resetContactForm() {
    document.getElementById('lead-form').reset();
    const notification = document.getElementById('success-notification');
    notification.classList.add('hidden');
}
