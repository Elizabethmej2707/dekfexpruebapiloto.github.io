/* ==========================================================================
   NAVETEC / DEKFX - Sistema de idiomas (Español / English)
   Traduce cualquier elemento con data-i18n, data-i18n-placeholder o
   data-i18n-html. Guarda la preferencia del usuario en localStorage.
   ========================================================================== */

const I18N_DICT = {
    es: {
        // Barra superior
        topbar_q: "¿Tienes preguntas?",
        topbar_cta: "Escríbenos y te respondemos en menos de 24h",

        // Navegación
        nav_services: "Servicios",
        nav_services_1: "Suelos EVA Foam y Teca Sintética",
        nav_services_2: "Personalización y Grabados CNC",
        nav_services_3: "Restauración y Refit",
        nav_services_all: "Ver todos los servicios →",
        nav_categories: "Categorías",
        nav_cat_lanchas: "Lanchas",
        nav_cat_yates: "Yates a Motor",
        nav_cat_veleros: "Veleros",
        nav_cat_catamaran: "Catamaranes / PWC",
        nav_cat_all: "Ver todas las categorías →",
        nav_process: "Nuestro Proceso",
        nav_before_after: "Antes y Después",
        nav_gallery: "Galería",
        nav_contact: "Contacto",
        nav_cta: "Solicitar Presupuesto",

        // Hero
        hero_badge: "Especialistas en Cubiertas Náuticas",
        hero_title_1: "Safety &amp; Comfort: Superficies de Alta Resistencia y",
        hero_title_2: "Elegancia Marina",
        hero_desc: "Diseñamos e instalamos el mejor suelo antideslizante del sector para yates, veleros y botes. Confort premium, máxima durabilidad y un acabado milimétrico de alta gama.",
        hero_btn_calc: "Calcular mi Cubierta",
        hero_btn_before_after: "Ver Antes y Después",

        // Categorías (home)
        cat_kicker: "Explora por Tipo de Embarcación",
        cat_title: "Encuentra tu Kit Ideal",
        cat_view_kits: "Ver Kits →",

        // Servicios
        services_kicker: "¿Qué Ofrecemos?",
        services_title: "Servicios y Soluciones Especializadas",
        services_desc: "Equipamos su embarcación con materiales que combinan estética lujosa y máxima seguridad funcional.",
        svc1_desc: "Suelos marinos de última generación con estructura de celdas cerradas. No absorben agua, brindan tracción total incluso mojados y reducen la temperatura bajo el sol intenso.",
        svc2_desc: "Diseños completamente a medida. Incorporamos patrones clásicos, líneas deportivas de calafateado, o grabamos el logotipo y nombre de su embarcación directamente mediante tecnología láser de precisión.",
        svc3_title: "Restauración y Desmantelado (Refit)",
        svc3_desc: "Retiramos cubiertas viejas de teca natural deteriorada o residuos de moqueta marina y pinturas desgastadas. Dejamos el sustrato de fibra de vidrio impecable y acondicionado para la nueva instalación.",

        // Proceso
        process_kicker: "Garantía de Excelencia",
        process_title: "Nuestro Proceso de Trabajo",
        process_desc: "Cuidamos cada milímetro de su barco con un método riguroso diseñado para la máxima calidad.",
        step1_title: "Revisión y Diagnóstico",
        step1_desc: "Visitamos su embarcación en la marina o astillero. Evaluamos la superficie actual, tomamos medidas de precisión digital y planificamos los detalles.",
        step2_title: "Diseño y Modelado",
        step2_desc: "Vectorizamos la plantilla de su cubierta en CAD. Aquí usted define los colores de base, líneas de unión, márgenes y detalles de marca o personalización.",
        step3_title: "Desmantelado Limpio",
        step3_desc: "Desmontamos de manera quirúrgica cualquier suelo previo. Limpiamos, desengrasamos y nivelamos el gelcoat para asegurar una adherencia estructural.",
        step4_title: "Instalación y Sellado",
        step4_desc: "Cortamos el suelo mediante maquinaria CNC e instalamos aplicando presión uniforme con adhesivos marinos acrílicos de alta resistencia.",

        // CTA personalizada
        cta1_title: "¿No ves tu modelo de barco?",
        cta1_desc: "No hay problema. Diseñamos plantillas 100% a medida para cualquier embarcación, sin importar el tamaño o la forma del casco.",
        cta1_btn: "Solicitar Diseño Personalizado",
        cta2_title: "Sube tu propia foto",
        cta2_desc: "Envíanos una foto de tu cubierta actual y te preparamos una propuesta de diseño y presupuesto preliminar sin compromiso.",
        cta2_btn: "Enviar Foto de mi Barco",

        // Antes y después
        ba_kicker: "Evidencia de Calidad",
        ba_title: "Casos de Éxito: Antes y Después",
        ba_desc: "Arrastre el control central hacia la izquierda o derecha para ver la impresionante diferencia entre la cubierta desgastada y la nueva superficie instalada.",
        ba_before_label: "Estado Anterior (Viejo / Desgastado)",
        ba_after_label: "Resultado DEKFX (Suelo Premium)",
        ba_case_title: "Yate Sea Ray - 45 Pies",
        ba_case_desc: "Cambio integral de teca en descomposición por suelo DEKFX EVA Ultra-Comfort, patrón calafateado gris y negro.",
        ba_badge: "Proyecto Terminado",

        // Cotizador
        calc_kicker: "Cotizador Instantáneo",
        calc_title: "Calcula un Estimado Online",
        calc_desc: "Utiliza nuestra herramienta interactiva para proyectar los costes preliminares según las especificaciones de tu barco.",
        calc_boat_type_label: "Tipo de Embarcación",
        calc_btn_lancha: "Lancha / Bote",
        calc_btn_yate: "Yate Motor",
        calc_btn_velero: "Velero",
        calc_btn_catamaran: "Catamarán",
        calc_length_label: "Eslora aproximada (Eslora)",
        calc_material_label: "Material Preferido",
        calc_material_opt1: "EVA Foam Premium (Espuma suave y fresca)",
        calc_material_opt2: "Teca Sintética Premium (Efecto madera elegante)",
        calc_material_opt3: "Goma Antideslizante Técnica (Industrial / Pesca)",
        calc_summary_title: "Resumen del Estimado",
        calc_res_boat_label: "Tipo de Embarcación:",
        calc_res_length_label: "Eslora calculada:",
        calc_res_area_label: "Área estimada:",
        calc_investment_label: "Inversión Estimada:",
        calc_disclaimer: "*Incluye diseño CAD, material premium e instalación. No incluye IVA ni traslados complejos.",
        calc_lock_btn: "Bloquear esta Tarifa",
        unit_ft: "Pies",
        unit_m2_approx: "m² aprox.",
        boat_name_lancha: "LANCHA",
        boat_name_yate: "YATE",
        boat_name_velero: "VELERO",
        boat_name_catamaran: "CATAMARÁN",

        // Contacto
        contact_kicker: "Contacto y Cotización",
        contact_title: "¿Listo para transformar su cubierta?",
        contact_desc: "Facilítenos los detalles de su barco. Nuestro equipo técnico analizará las características del puerto y las dimensiones del modelo para estructurar una propuesta económica y plazos definitivos en menos de 48 horas laborales.",
        contact_point_1: "Servicio disponible en todos los puertos y marinas de la costa.",
        contact_point_2: "Presupuesto personalizado 100% libre de compromiso.",
        contact_point_3: "Digitalización de planos CAD y previsualización 3D gratuita.",
        form_success_title: "¡Solicitud Enviada con Éxito!",
        form_success_desc: "Hemos recibido los detalles técnicos de tu barco. Uno de nuestros ingenieros náuticos se pondrá en contacto contigo en las próximas 24 horas hábiles.",
        form_success_btn: "Volver a Enviar",
        form_name_label: "Nombre Completo",
        form_name_placeholder: "Ej: Capitán García",
        form_phone_label: "Teléfono de Contacto",
        form_phone_placeholder: "Ej: +34 600 123 456",
        form_email_label: "Correo Electrónico",
        form_email_placeholder: "correo@empresa.com",
        form_boat_label: "Modelo de Embarcación",
        form_boat_opt1: "Lancha / Bote",
        form_boat_opt2: "Yate a Motor",
        form_boat_opt3: "Velero",
        form_boat_opt4: "Catamarán",
        form_eslora_label: "Eslora aproximada",
        form_eslora_placeholder: "Ej: 35 Pies / 10.6 Metros",
        form_location_label: "Ubicación del Barco (Puerto/Marina)",
        form_location_placeholder: "Ej: Puerto Olímpico de Barcelona",
        form_state_label: "Estado de la Cubierta Actual",
        form_state_opt1: "Fibra de vidrio limpia (sin suelo previo)",
        form_state_opt2: "Tiene madera / teca vieja que retirar",
        form_state_opt3: "Pintura antideslizante o goma desgastada",
        form_submit_btn: "Solicitar Cotización Sin Compromiso",

        // Footer
        footer_tagline: "Suelos antideslizantes de alta resistencia e ingeniería de precisión náutica para toda la costa.",
        footer_links_title: "Enlaces Útiles",
        footer_categories_title: "Categorías",
        footer_contact_title: "Contacto",
        footer_contact_area: "Servicio en todos los puertos de la costa",
        footer_calc_quote: "Calcular Presupuesto",
        footer_contact_quote: "Solicitar Presupuesto",
        footer_contact_email: "Contactar por Correo",
        footer_copyright: "© 2026 DEKFX Boat Flooring. Todos los derechos reservados.",

        // Galería
        gal_kicker: "Nuestro Trabajo",
        gal_title: "Galería de Proyectos",
        gal_desc: "Una muestra de instalaciones y acabados. Haz clic en cualquier foto para verla en grande.",
        gal_photo_alt: "Foto de proyecto"
    },
    en: {
        topbar_q: "Got questions?",
        topbar_cta: "Message us and we'll reply within 24h",

        nav_services: "Services",
        nav_services_1: "EVA Foam & Synthetic Teak Flooring",
        nav_services_2: "Custom CNC Engraving",
        nav_services_3: "Restoration & Refit",
        nav_services_all: "View all services →",
        nav_categories: "Categories",
        nav_cat_lanchas: "Speedboats",
        nav_cat_yates: "Motor Yachts",
        nav_cat_veleros: "Sailboats",
        nav_cat_catamaran: "Catamarans / PWC",
        nav_cat_all: "View all categories →",
        nav_process: "Our Process",
        nav_before_after: "Before & After",
        nav_gallery: "Gallery",
        nav_contact: "Contact",
        nav_cta: "Request a Quote",

        hero_badge: "Marine Decking Specialists",
        hero_title_1: "Safety &amp; Comfort: High-Resistance Surfaces and",
        hero_title_2: "Marine Elegance",
        hero_desc: "We design and install the industry's best non-slip flooring for yachts, sailboats and boats. Premium comfort, maximum durability, and a millimeter-precise, high-end finish.",
        hero_btn_calc: "Calculate My Deck",
        hero_btn_before_after: "See Before & After",

        cat_kicker: "Explore by Boat Type",
        cat_title: "Find Your Ideal Kit",
        cat_view_kits: "View Kits →",

        services_kicker: "What We Offer",
        services_title: "Specialized Services & Solutions",
        services_desc: "We equip your vessel with materials that combine luxurious aesthetics with maximum functional safety.",
        svc1_desc: "Next-generation marine flooring with a closed-cell structure. It doesn't absorb water, provides full traction even when wet, and reduces temperature under intense sun.",
        svc2_desc: "Fully custom designs. We incorporate classic patterns, sporty caulking lines, or laser-engrave your vessel's logo and name with precision technology.",
        svc3_title: "Restoration & Removal (Refit)",
        svc3_desc: "We remove old, deteriorated natural teak decks or worn marine carpet residue and paint. We leave the fiberglass substrate spotless and ready for the new installation.",

        process_kicker: "Guarantee of Excellence",
        process_title: "Our Work Process",
        process_desc: "We take care of every millimeter of your boat with a rigorous method designed for maximum quality.",
        step1_title: "Inspection & Diagnosis",
        step1_desc: "We visit your vessel at the marina or shipyard. We assess the current surface, take precise digital measurements, and plan the details.",
        step2_title: "Design & Modeling",
        step2_desc: "We vectorize your deck template in CAD. Here you define base colors, seam lines, margins, and branding or customization details.",
        step3_title: "Clean Removal",
        step3_desc: "We surgically remove any previous flooring. We clean, degrease, and level the gelcoat to ensure structural adhesion.",
        step4_title: "Installation & Sealing",
        step4_desc: "We cut the flooring with CNC machinery and install it, applying uniform pressure with high-strength acrylic marine adhesives.",

        cta1_title: "Don't see your boat model?",
        cta1_desc: "No problem. We design 100% custom templates for any vessel, regardless of hull size or shape.",
        cta1_btn: "Request Custom Design",
        cta2_title: "Upload Your Own Photo",
        cta2_desc: "Send us a photo of your current deck and we'll prepare a design proposal and preliminary quote with no obligation.",
        cta2_btn: "Send My Boat's Photo",

        ba_kicker: "Proof of Quality",
        ba_title: "Success Stories: Before & After",
        ba_desc: "Drag the center control left or right to see the striking difference between the worn deck and the newly installed surface.",
        ba_before_label: "Previous State (Old / Worn)",
        ba_after_label: "DEKFX Result (Premium Flooring)",
        ba_case_title: "Sea Ray Yacht - 45 Feet",
        ba_case_desc: "Full replacement of decaying teak with DEKFX EVA Ultra-Comfort flooring, gray and black caulked pattern.",
        ba_badge: "Completed Project",

        calc_kicker: "Instant Quote Tool",
        calc_title: "Calculate an Online Estimate",
        calc_desc: "Use our interactive tool to project preliminary costs based on your boat's specifications.",
        calc_boat_type_label: "Boat Type",
        calc_btn_lancha: "Speedboat / Boat",
        calc_btn_yate: "Motor Yacht",
        calc_btn_velero: "Sailboat",
        calc_btn_catamaran: "Catamaran",
        calc_length_label: "Approximate Length (LOA)",
        calc_material_label: "Preferred Material",
        calc_material_opt1: "Premium EVA Foam (Soft & Cool Foam)",
        calc_material_opt2: "Premium Synthetic Teak (Elegant Wood Effect)",
        calc_material_opt3: "Technical Non-Slip Rubber (Industrial / Fishing)",
        calc_summary_title: "Estimate Summary",
        calc_res_boat_label: "Boat Type:",
        calc_res_length_label: "Calculated Length:",
        calc_res_area_label: "Estimated Area:",
        calc_investment_label: "Estimated Investment:",
        calc_disclaimer: "*Includes CAD design, premium material, and installation. Does not include taxes or complex logistics.",
        calc_lock_btn: "Lock In This Rate",
        unit_ft: "ft",
        unit_m2_approx: "approx. m²",
        boat_name_lancha: "SPEEDBOAT",
        boat_name_yate: "YACHT",
        boat_name_velero: "SAILBOAT",
        boat_name_catamaran: "CATAMARAN",

        contact_kicker: "Contact & Quote",
        contact_title: "Ready to transform your deck?",
        contact_desc: "Give us your boat's details. Our technical team will review the marina's characteristics and the model's dimensions to put together a cost proposal and firm timeline within 48 business hours.",
        contact_point_1: "Service available at every port and marina on the coast.",
        contact_point_2: "100% no-obligation, personalized quote.",
        contact_point_3: "Free CAD plan digitization and 3D preview.",
        form_success_title: "Request Sent Successfully!",
        form_success_desc: "We've received your boat's technical details. One of our marine engineers will contact you within the next 24 business hours.",
        form_success_btn: "Send Another",
        form_name_label: "Full Name",
        form_name_placeholder: "e.g. Captain García",
        form_phone_label: "Contact Phone",
        form_phone_placeholder: "e.g. +1 305 123 4567",
        form_email_label: "Email Address",
        form_email_placeholder: "email@company.com",
        form_boat_label: "Boat Model",
        form_boat_opt1: "Speedboat / Boat",
        form_boat_opt2: "Motor Yacht",
        form_boat_opt3: "Sailboat",
        form_boat_opt4: "Catamaran",
        form_eslora_label: "Approximate Length",
        form_eslora_placeholder: "e.g. 35 ft / 10.6 m",
        form_location_label: "Boat Location (Port/Marina)",
        form_location_placeholder: "e.g. Miami Beach Marina",
        form_state_label: "Current Deck Condition",
        form_state_opt1: "Clean fiberglass (no previous flooring)",
        form_state_opt2: "Has old wood / teak that needs removal",
        form_state_opt3: "Worn non-slip paint or rubber",
        form_submit_btn: "Request a No-Obligation Quote",

        footer_tagline: "High-resistance non-slip flooring and precision marine engineering for the whole coast.",
        footer_links_title: "Useful Links",
        footer_categories_title: "Categories",
        footer_contact_title: "Contact",
        footer_contact_area: "Service at every port on the coast",
        footer_calc_quote: "Calculate a Quote",
        footer_contact_quote: "Request a Quote",
        footer_contact_email: "Contact by Email",
        footer_copyright: "© 2026 DEKFX Boat Flooring. All rights reserved.",

        gal_kicker: "Our Work",
        gal_title: "Project Gallery",
        gal_desc: "A sample of installations and finishes. Click any photo to view it larger.",
        gal_photo_alt: "Project photo"
    }
};

let currentLang = localStorage.getItem('dekfx_lang') || 'en';

function t(key) {
    return (I18N_DICT[currentLang] && I18N_DICT[currentLang][key]) || (I18N_DICT.en[key]) || key;
}

function updateLangButtons() {
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
        const isActive = btn.getAttribute('data-lang-btn') === currentLang;
        btn.classList.toggle('bg-dek-navy', isActive);
        btn.classList.toggle('text-white', isActive);
        btn.classList.toggle('text-dek-muted', !isActive);
    });
}

function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    updateLangButtons();

    if (typeof window.onLanguageChange === 'function') {
        window.onLanguageChange(currentLang);
    }
}

function setLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') return;
    currentLang = lang;
    localStorage.setItem('dekfx_lang', lang);
    applyTranslations();
}

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang-btn')));
    });
});

window.t = t;
window.setLanguage = setLanguage;
window.getCurrentLang = () => currentLang;
