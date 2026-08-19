/* ==========================================================================
   DEKFX - Plantilla Mix - Sistema de idiomas (Español / English)
   ========================================================================== */

const I18N_DICT = {
    es: {
        nav_services: "Servicios",
        nav_process: "Nuestro Proceso",
        nav_before_after: "Antes y Después",
        nav_gallery: "Galería",
        nav_quote: "Presupuesto",
        nav_contact: "Contacto",
        nav_cta: "Solicitar Presupuesto",

        hero_kicker: "Suelo Náutico a Medida",
        hero_title_1: "Safety &amp; Comfort",
        hero_title_2: "en cada cubierta",
        hero_desc: "Diseñamos e instalamos suelo antideslizante premium para yates, veleros y lanchas. Confort, durabilidad y un acabado a medida.",
        hero_btn_calc: "Calcular mi Cubierta",
        hero_btn_before_after: "Ver Antes y Después",

        services_kicker: "¿Qué Ofrecemos?",
        services_title: "Servicios y Soluciones Especializadas",
        svc1_title: "Suelos EVA Foam y Teca Sintética",
        svc1_desc: "Estructura de celdas cerradas que no absorbe agua, con tracción total incluso mojado.",
        svc2_title: "Personalización y Grabados CNC",
        svc2_desc: "Patrones a medida, logotipos y nombres grabados con tecnología láser de precisión.",
        svc3_title: "Restauración y Desmantelado (Refit)",
        svc3_desc: "Retiro de teca deteriorada y preparación completa del sustrato para la nueva instalación.",

        process_kicker: "Garantía de Excelencia",
        process_title: "Nuestro Proceso de Trabajo",
        step1_title: "Revisión y Diagnóstico",
        step1_desc: "Visitamos su embarcación en la marina. Evaluamos la superficie y tomamos medidas de precisión digital.",
        step2_title: "Diseño y Modelado",
        step2_desc: "Vectorizamos la plantilla en CAD. Usted define colores, líneas de unión y detalles de marca.",
        step3_title: "Desmantelado Limpio",
        step3_desc: "Desmontamos cualquier suelo previo. Limpiamos y nivelamos el gelcoat para una adherencia estructural.",
        step4_title: "Instalación y Sellado",
        step4_desc: "Cortamos el suelo con maquinaria CNC e instalamos con adhesivos marinos de alta resistencia.",

        ba_kicker: "Evidencia de Calidad",
        ba_title: "Antes y Después",
        ba_desc: "Arrastre el control central para ver la diferencia entre la cubierta desgastada y la nueva superficie instalada.",
        ba_before_label: "Estado Anterior",
        ba_after_label: "Resultado DEKFX",
        ba_case_title: "Yate Sea Ray - 45 Pies",
        ba_case_desc: "Cambio integral de teca deteriorada por suelo DEKFX EVA Ultra-Comfort, patrón calafateado gris y negro.",
        ba_badge: "Proyecto Terminado",

        calc_kicker: "Cotizador Instantáneo",
        calc_title: "Calcula un Estimado Online",
        calc_boat_type_label: "Tipo de Embarcación",
        calc_btn_lancha: "Lancha / Bote",
        calc_btn_yate: "Yate Motor",
        calc_btn_velero: "Velero",
        calc_btn_catamaran: "Catamarán",
        calc_length_label: "Eslora aproximada",
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

        contact_kicker: "Contacto y Cotización",
        contact_title: "¿Listo para transformar su cubierta?",
        contact_desc: "Facilítenos los detalles de su barco. Nuestro equipo técnico analizará las características del puerto y las dimensiones del modelo para estructurar una propuesta económica en menos de 48 horas laborales.",
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

        footer_copyright: "© 2026 DEKFX Boat Flooring. Todos los derechos reservados.",
        footer_tagline: "Suelos antideslizantes de alta resistencia e ingeniería de precisión náutica.",

        gal_kicker: "Nuestro Trabajo",
        gal_title: "Galería de Proyectos",
        gal_desc: "Una muestra de instalaciones y acabados. Haz clic en cualquier foto para verla en grande.",
        gal_photo_alt: "Foto de proyecto"
    },
    en: {
        nav_services: "Services",
        nav_process: "Our Process",
        nav_before_after: "Before & After",
        nav_gallery: "Gallery",
        nav_quote: "Quote",
        nav_contact: "Contact",
        nav_cta: "Request a Quote",

        hero_kicker: "Custom Marine Flooring",
        hero_title_1: "Safety &amp; Comfort",
        hero_title_2: "on every deck",
        hero_desc: "We design and install premium non-slip flooring for yachts, sailboats and speedboats. Comfort, durability, and a custom finish.",
        hero_btn_calc: "Calculate My Deck",
        hero_btn_before_after: "See Before & After",

        services_kicker: "What We Offer",
        services_title: "Specialized Services & Solutions",
        svc1_title: "EVA Foam & Synthetic Teak Flooring",
        svc1_desc: "Closed-cell structure that doesn't absorb water, with full traction even when wet.",
        svc2_title: "Custom CNC Engraving",
        svc2_desc: "Custom patterns, logos, and names engraved with precision laser technology.",
        svc3_title: "Restoration & Removal (Refit)",
        svc3_desc: "Removal of deteriorated teak and complete substrate preparation for the new installation.",

        process_kicker: "Guarantee of Excellence",
        process_title: "Our Work Process",
        step1_title: "Inspection & Diagnosis",
        step1_desc: "We visit your vessel at the marina. We assess the surface and take precise digital measurements.",
        step2_title: "Design & Modeling",
        step2_desc: "We vectorize the template in CAD. You define colors, seam lines, and branding details.",
        step3_title: "Clean Removal",
        step3_desc: "We remove any previous flooring. We clean and level the gelcoat for structural adhesion.",
        step4_title: "Installation & Sealing",
        step4_desc: "We cut the flooring with CNC machinery and install it with high-strength marine adhesives.",

        ba_kicker: "Proof of Quality",
        ba_title: "Before & After",
        ba_desc: "Drag the center control to see the difference between the worn deck and the newly installed surface.",
        ba_before_label: "Previous State",
        ba_after_label: "DEKFX Result",
        ba_case_title: "Sea Ray Yacht - 45 Feet",
        ba_case_desc: "Full replacement of deteriorated teak with DEKFX EVA Ultra-Comfort flooring, gray and black caulked pattern.",
        ba_badge: "Completed Project",

        calc_kicker: "Instant Quote Tool",
        calc_title: "Calculate an Online Estimate",
        calc_boat_type_label: "Boat Type",
        calc_btn_lancha: "Speedboat / Boat",
        calc_btn_yate: "Motor Yacht",
        calc_btn_velero: "Sailboat",
        calc_btn_catamaran: "Catamaran",
        calc_length_label: "Approximate Length",
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
        contact_desc: "Give us your boat's details. Our technical team will review the marina's characteristics and the model's dimensions to put together a cost proposal within 48 business hours.",
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

        footer_copyright: "© 2026 DEKFX Boat Flooring. All rights reserved.",
        footer_tagline: "High-resistance non-slip flooring and precision marine engineering.",

        gal_kicker: "Our Work",
        gal_title: "Project Gallery",
        gal_desc: "A sample of installations and finishes. Click any photo to view it larger.",
        gal_photo_alt: "Project photo"
    }
};

let currentLang = localStorage.getItem('dekfx_lang') || 'es';

function t(key) {
    return (I18N_DICT[currentLang] && I18N_DICT[currentLang][key]) || (I18N_DICT.es[key]) || key;
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
