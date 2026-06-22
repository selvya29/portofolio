// Language translations
const translations = {
    id: {
        // Navigation
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_experience: "Pengalaman",
        nav_projects: "Proyek",
        nav_skills: "Keterampilan",
        nav_contact: "Kontak",

        // Home page
        home_subtitle: "Portfolio Personalku",
        home_greeting: "Halo, Saya",
        home_name: "Selvya Mulyaningtyas",
        home_title: "Mahasiswa Teknik Informatika",
        home_role: "Software Engineer | Data Analyst",
        home_description: "Sebagai lulusan Teknik Informatika, saya memiliki minat dalam pengembangan perangkat lunak, analisis data, dan Machine Learning. Saya senang mempelajari teknologi baru serta menerapkannya untuk membantu menyelesaikan berbagai permasalahan secara efektif. Melalui pengalaman akademik, proyek, dan program pelatihan yang saya ikuti, saya terus mengembangkan kemampuan teknis, berpikir analitis, dan problem solving untuk menciptakan solusi teknologi yang bermanfaat.",
        home_download_cv: "Download CV",
        home_contact_me: "Hubungi Saya",
        home_available: "Tersedia untuk Proyek",
        home_scroll: "Scroll Eksplorasi",

        // About Section (Home page)
        about_section_title: "Tentang Saya",
        about_section_desc: "Sebagai lulusan dengan minat besar dalam teknologi, saya memfokuskan karir saya pada persimpangan antara rekayasa perangkat lunak dan analisis data. Saya percaya bahwa data adalah bahan bakar, dan perangkat lunak adalah mesin yang menggerakkan inovasi modern.",
        home_bento_software_title: "Software Engineering",
        home_bento_software_desc: "Membangun arsitektur backend yang skalabel dan frontend yang intuitif menggunakan framework modern.",
        home_bento_data_title: "Data Analytics",
        home_bento_data_desc: "Mengolah dataset kompleks menjadi visualisasi yang bermakna untuk pengambilan keputusan strategis.",

        // About page
        about_label: "Engineer & Analyst",
        about_title: "Selvya Mulyaningtyas",
        about_desc: "Seorang Software Engineer dan Data Analyst dengan ketertarikan kuat dalam pengembangan aplikasi dan analisis data. Berpengalaman dalam mengembangkan sistem berbasis web dan melakukan analisis data untuk mendukung proses pengambilan keputusan. Memiliki kemampuan problem-solving dan analytical thinking yang kuat, serta selalu bersemangat untuk belajar, bertumbuh, dan menghadapi tantangan baru di bidang teknologi.",
        about_university: "Universitas",
        about_university_name: "Universitas Muhammadiyah Cirebon (UMC)",
        about_gpa: "IPK 3.85",
        about_gpa_desc: "Pencapaian akademik konsisten",
        about_location: "Lokasi",
        about_location_name: "Cirebon, Jawa Barat, Indonesia",
        about_achievement: "Prestasi",
        about_achievement_desc: "Lulusan Terbaik dari Fakultas Teknik",
        about_org_title: "Kepemimpinan Organisasi",
        about_org_desc: "Di luar keterampilan teknis, saya aktif berpartisipasi dalam komunitas akademik untuk mendorong inovasi dan kolaborasi.",
        about_bem_title: "BEM (Badan Eksekutif Mahasiswa)",
        about_bem_role_1: "Sekretaris",
        about_bem_desc_1: "Di periode kedua, saya bergabung sebagai anggota inti dewan pengurus harian sebagai sekretaris yang sepenuhnya bertanggung jawab atas aspek administrasi sekretariat organisasi termasuk berkas surat, peraturan, perizinan dan dokumentasi kearsipan lainnya, serta pengelolaan waktu rapat.",
        about_bem_role_2: "PSDM",
        about_bem_desc_2: "Pada periode pertama, saya menjabat sebagai staf di Divisi Pengembangan Sumber Daya Masyarakat, di mana saya bertanggung jawab untuk mengelola, melatih, dan meningkatkan kemampuan seluruh anggota dalam organisasi.",
        about_himas_title: "Himasantika",
        about_himas_role: "Wakil Bendahara",
        about_himas_desc: "Di Himasantika, saya menjabat sebagai wakil bendahara pengurus harian, bertanggung jawab penuh atas pengelolaan keuangan organisasi.",
        about_tech_title: "Tech Stack",

        // Experience page
        exp_label: "Perjalanan Saya",
        exp_title: "Pengalaman Profesional",
        exp_desc: "Linimasa kurasi dari evolusi karir saya sebagai software engineer dan spesialis data, menonjolkan pencapaian utama dan kontribusi teknis.",
        exp_lapas_title: "Administrator Komputer",
        exp_lapas_company: "Lembaga Pemasyarakatan (Lapas)",
        exp_lapas_1: "Mengadministrasi server, database, dan sistem informasi.",
        exp_lapas_2: "Memastikan integritas data melalui pencadangan rutin dan manajemen akses.",
        exp_lapas_3: "Mengembangkan dan meningkatkan aplikasi untuk meningkatkan efisiensi operasional.",
        exp_lapas_4: "Memberikan dukungan teknis untuk video conferencing dan infrastruktur jaringan.",
        exp_lapas_5: "Memelihara dokumentasi IT, pelaporan, dan inventaris perangkat keras/perangkat lunak.",

        // Experience - Date Labels
        exp_lapas_date: "November 2025 — Mei 2026",
        exp_lapas_date_mobile: "Nov 2025 — Mei 2026",
        exp_disk_date: "Desember 2024 — Januari 2025",
        exp_disk_date_mobile: "Des 2024 — Jan 2025",
        exp_bangkit_date: "September — Desember 2024",
        exp_bangkit_date_mobile: "Sep 2024 — Des 2024",
        exp_revou_date: "Februari — Juni 2024",
        exp_revou_date_mobile: "Feb 2024 — Jun 2024",

        exp_disk_title: "Bidang Sistem Informasi",
        exp_disk_company: "Diskominfo",
        exp_disk_1: "Membantu dalam pengembangan dan pemeliharaan sistem informasi untuk mendukung layanan publik digital.",
        exp_disk_2: "Melakukan analisis data dan menyusun laporan untuk mendukung proses pengambilan keputusan.",
        exp_disk_3: "Berkoordinasi dengan anggota tim dalam mengelola, menguji, dan memantau keamanan sistem informasi dan situs web organisasi.",
        exp_bangkit_title: "Spesialisasi Machine Learning",
        exp_bangkit_company: "Bangkit Academy by Google, GoTo, Traveloka",
        exp_bangkit_1: "Mempelajari dan mengimplementasikan konsep Machine Learning termasuk preprocessing data, pelatihan model, dan deployment menggunakan Python, TensorFlow, dan Google Cloud Platform.",
        exp_bangkit_2: "Mengembangkan proyek Capstone berbasis AI untuk menyelesaikan masalah dunia nyata.",
        exp_revou_title: "Spesialisasi Data Analytics",
        exp_revou_company: "RevoU",
        exp_revou_1: "Menguasai visualisasi data dan storytelling menggunakan Tableau, Google Data Studio, dan SQL untuk query kompleks.",
        exp_revou_2: "Melakukan pengujian A/B komprehensif dan analisis statistik untuk mendorong pengambilan keputusan bisnis.",
        exp_revou_3: "Berkoordinasi pada studi kasus dunia nyata untuk mengoptimalkan ROI pemasaran dan retensi pengguna melalui data.",
        exp_cta_title: "Mari bangun sesuatu yang presisi.",
        exp_cta_desc: "Saat ini mencari peluang di mana ketelitian teknis bertemu dengan pemecahan masalah kreatif dalam Software Engineering dan Data Analytics.",
        exp_download: "Download Resume",
        exp_get_touch: "Hubungi Saya",

        // Projects page
        proj_label: "Portfolio",
        proj_title: "Proyek Unggulan",
        proj_desc: "Pilihan karya teknis saya dalam software engineering dan data analytics, mencerminkan pendekatan yang teliti dalam pemecahan masalah kompleks.",
        proj_1_title: "HOTRIP",
        proj_1_desc: "HOTRIP adalah aplikasi mobile yang clustering memungkinkan sistem untuk mengelompokkan traveler dengan preferensi serupa berdasarkan minat pada jenis pariwisata (alam, budaya, kuliner, dll.), mengelompokkan destinasi berdasarkan karakteristik, dan hasil clustering dapat menjadi dasar personalisasi, karena rekomendasi diberikan berdasarkan pola yang muncul dari kelompok traveler atau destinasi tertentu.",
        proj_2_title: "Sistem Informasi Kehadiran Karyawan Berbasis QR Code dan Validasi Lokasi",
        proj_2_desc: "Sistem ini dirancang untuk menyederhanakan proses pencatatan kehadiran karyawan secara digital melalui pemindaian QR Code yang terintegrasi dengan validasi lokasi berbasis GPS. Sistem memverifikasi lokasi karyawan dan memastikan bahwa kehadiran hanya dapat dicatat dalam radius tertentu dari tempat kerja. Dengan fitur-fitur ini, proses kehadiran menjadi lebih cepat, lebih akurat, dan membantu meningkatkan disiplin karyawan sekaligus meningkatkan transparansi dalam pengelolaan data kehadiran.",
        proj_3_title: "Sistem Pendukung Keputusan Pemilihan Sunscreen Berdasarkan Jenis Kulit",
        proj_3_desc: "Sistem pendukung keputusan berbasis web yang dirancang untuk membantu pengguna memilih produk sunscreen yang sesuai menurut jenis kulit dan kriteria relevan mereka. Sistem mengevaluasi alternatif menggunakan pendekatan pengambilan keputusan terstruktur untuk memberikan rekomendasi yang lebih objektif dan personalisasi.",
        proj_4_title: "Analisis Vending Machine",
        proj_4_desc: "Vending Machine Sales adalah pembuatan website yang dibuat berdasarkan data Penjualan Vending Machine yang telah diproses sebelumnya dalam vertikal Data Analyst.",
        proj_collab_title: "Mari berkolaborasi",
        proj_collab_desc: "Mencari pendekatan yang refined untuk tantangan data atau software Anda berikutnya?",
        proj_contact: "Hubungi Saya",

        // Skills page
        skills_title: "Keterampilan & Sertifikasi",
        skills_desc: "Ringkasan komprehensif keahlian teknis saya dalam Data Analyst dan Software Engineering, dilengkapi dengan sertifikasi profesional dan kompetensi inti.",
        skills_hard: "Keterampilan Teknis",
        skills_languages: "Bahasa & Inti",
        skills_data_stack: "Stack Data Science",
        skills_soft: "Keterampilan Lunak",
        skills_soft_quote: "\"Menjembatani kesenjangan antara kompleksitas teknis dan nilai bisnis melalui komunikasi jelas dan pemecahan masalah sistematis.",
        skills_certs: "Sertifikasi",
        skills_recruiter: "REKRUTER",
        skills_transcript: "Lihat Transkrip Lengkap",
        skills_download: "Download PDF",

        // Skills - Programming Languages
        skill_python: "Python",
        skill_sql: "SQL",
        skill_javascript: "JavaScript",
        skill_php: "PHP",
        skill_html: "HTML",

        // Skills - Data Science Stack
        skill_tensorflow: "TensorFlow",
        skill_datatables: "DataTables",
        skill_postgresql: "PostgreSQL",

        // Skills - Soft Skills
        skill_analytical: "Berpikir Analitis",
        skill_collaboration: "Kolaborasi Tim",
        skill_communication: "Komunikasi Efektif",
        skill_adaptability: "Adaptabilitas",
        skill_time_mgmt: "Manajemen Waktu",
        skill_critical: "Berpikir Kritis",

        // Skills - Certifications
        cert_junior_title: "Sertifikasi Operator Komputer Junior",
        cert_junior_org: "BNSP",
        cert_google_title: "Sertifikasi Sistem Operasi Google",
        cert_google_org: "Coursera",
        cert_software_title: "Sertifikasi Pengembangan Perangkat Lunak",
        cert_software_org: "Dicoding",
        cert_revou_title: "Sertifikasi Data Analytics & Software Engineering with AI",
        cert_revou_org: "RevoU Tech Academy",

        // Contact page
        contact_title: "Mari Terhubung",
        contact_email_label: "Email Utama",
        contact_linkedin: "LinkedIn",
        contact_linkedin_desc: "Jaringan Profesional",
        contact_github: "GitHub",
        contact_github_desc: "Kode Sumber",
        contact_whatsapp: "WhatsApp",
        contact_whatsapp_desc: "Pesan Langsung",
        contact_instagram: "Instagram",
        contact_instagram_desc: "Media Sosial",
        contact_message: "Pesan Cepat",
        contact_message_desc: "Kirim Pesan Langsung",
        contact_name: "Selvya Mulyaningtyas",
        contact_desc: "Software Engineer & Data Analyst yang berfokus dalam membangun solusi digital yang efisien."
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",

        // Home page
        home_subtitle: "My Portfolio",
        home_greeting: "Hello, I'm",
        home_name: "Selvya Mulyaningtyas",
        home_title: "Mahasiswa Teknik Informatika",
        home_role: "Software Engineer | Data Analyst",
        home_description: "As a Computer Science graduate, I have a strong interest in software development, data analysis, and Machine Learning. I enjoy learning new technologies and applying them to help solve various problems effectively. Through academic experiences, projects, and training programs I have participated in, I continuously develop my technical skills, analytical thinking, and problem solving abilities to create useful technology solutions.",
        home_download_cv: "Download CV",
        home_contact_me: "Contact Me",
        home_available: "Available for Projects",
        home_scroll: "Scroll to Explore",

        // About Section (Home page)
        about_section_title: "About Me",
        about_section_desc: "As a graduate with a strong interest in technology, I focus my career at the intersection of software engineering and data analysis. I believe that data is the fuel, and software is the engine that drives modern innovation.",
        home_bento_software_title: "Software Engineering",
        home_bento_software_desc: "Building scalable backend architectures and intuitive frontends using modern frameworks.",
        home_bento_data_title: "Data Analytics",
        home_bento_data_desc: "Transforming complex datasets into meaningful visualizations for strategic decision-making.",

        // About page
        about_label: "Engineer & Analyst",
        about_title: "Selvya Mulyaningtyas",
        about_desc: "A Software Engineer and Data Analyst with a strong interest in application development and data analysis. Experienced in developing web-based systems and performing data analysis to support decision-making processes. Possesses strong problem-solving and analytical thinking skills, and is always eager to learn, grow, and take on new challenges in the field of technology.",
        about_university: "University",
        about_university_name: "Universitas Muhammadiyah Cirebon (UMC)",
        about_gpa: "GPA 3.85",
        about_gpa_desc: "Consistent academic high-achiever",
        about_location: "Location",
        about_location_name: "Cirebon, West Java, Indonesia",
        about_achievement: "Achievement",
        about_achievement_desc: "Outstanding Graduates from Faculty of Technic",
        about_org_title: "Organizational Leadership",
        about_org_desc: "Beyond technical skills, I actively participate in academic communities to drive innovation and collaboration.",
        about_bem_title: "BEM (Badan Eksekutif Mahasiswa)",
        about_bem_role_1: "Secretary",
        about_bem_desc_1: "In the second period, I joined the core members of the daily management board as secretary who was fully responsible for the secretarial administration aspects of the organization including letter files, regulations, permits and other archival documentation, and meeting time management.",
        about_bem_role_2: "PSDM",
        about_bem_desc_2: "During my first term, I served as a staff member in the Community Resource Development Division, where I was responsible for managing, training, and enhancing the capabilities of all members within the organization.",
        about_himas_title: "Himasantika",
        about_himas_role: "Deputy Treasurer",
        about_himas_desc: "In Himasantika, I served as deputy treasurer of daily management, in charge of managing the association's finances.",
        about_tech_title: "Tech Stack",

        // Experience page
        exp_label: "The Journey So Far",
        exp_title: "Professional Experience",
        exp_desc: "A curated timeline of my career evolution as a software engineer and data specialist, highlighting key achievements and technical contributions.",
        exp_lapas_title: "Computer Administrator",
        exp_lapas_company: "Lembaga Pemasyarakatan (Lapas)",
        exp_lapas_1: "Administered servers, databases, and information systems.",
        exp_lapas_2: "Ensured data integrity through regular backups and access management.",
        exp_lapas_3: "Developed and enhanced applications to improve operational efficiency.",
        exp_lapas_4: "Provided technical support for video conferencing and network infrastructure.",
        exp_lapas_5: "Maintained IT documentation, reporting, and hardware/software inventories.",

        // Experience - Date Labels
        exp_lapas_date: "November 2025 — May 2026",
        exp_lapas_date_mobile: "Nov 2025 — May 2026",
        exp_disk_date: "December 2024 — January 2025",
        exp_disk_date_mobile: "Dec 2024 — Jan 2025",
        exp_bangkit_date: "September — December 2024",
        exp_bangkit_date_mobile: "Sep 2024 — Dec 2024",
        exp_revou_date: "February — June 2024",
        exp_revou_date_mobile: "Feb 2024 — Jun 2024",

        exp_disk_title: "Information Systems Division",
        exp_disk_company: "Diskominfo",
        exp_disk_1: "Assisted in the development and maintenance of information systems to support digital public services.",
        exp_disk_2: "Conducted data analysis and prepared reports to support decision-making processes.",
        exp_disk_3: "Collaborated with team members in managing, testing, and monitoring the security of information systems and organizational websites.",
        exp_bangkit_title: "Machine Learning Specialization",
        exp_bangkit_company: "Bangkit Academy by Google, GoTo, Traveloka",
        exp_bangkit_1: "Learn and implement Machine Learning concepts including data preprocessing, model training, and deployment using Python, TensorFlow, and the Google Cloud Platform.",
        exp_bangkit_2: "Develop an AI-based capstone project to solve a real-world problem.",
        exp_revou_title: "Data Analytics Specialization",
        exp_revou_company: "RevoU",
        exp_revou_1: "Mastered data visualization and storytelling using Tableau, Google Data Studio, and SQL for complex querying.",
        exp_revou_2: "Conducted comprehensive A/B testing and statistical analysis to drive business decision-making.",
        exp_revou_3: "Collaborated on real-world business cases to optimize marketing ROI and user retention through data.",
        exp_cta_title: "Let's build something precise.",
        exp_cta_desc: "Currently seeking opportunities where technical rigor meets creative problem-solving in Software Engineering and Data Analytics.",
        exp_download: "Download Résumé",
        exp_get_touch: "Get In Touch",

        // Projects page
        proj_label: "Portfolio",
        proj_title: "Featured Projects",
        proj_desc: "A selection of my technical work in software engineering and data analytics, reflecting a meticulous approach to complex problem-solving.",
        proj_1_title: "HOTRIP",
        proj_1_desc: "HOTRIP is application mobile that clustering allows the system to group travelers with similar preferences based on interests in tourism types (nature, culture, culinary, etc.), group destinations based on characteristics, and clustering results can be the basis for personalization, as recommendations are given based on patterns that emerge from specific groups of travelers or destinations.",
        proj_2_title: "Employee Attendance Information System Based on QR Code and Location Validation",
        proj_2_desc: "This system is designed to simplify the process of recording employee attendance digitally through QR Code scanning integrated with GPS-based location validation. The system verifies the employee's location and ensures that attendance can only be recorded within a predefined radius of the workplace. With these features, the attendance process becomes faster, more accurate, and helps improve employee discipline while enhancing transparency in attendance data management.",
        proj_3_title: "Decision Support System for Sunscreen Selection Based on Skin Type",
        proj_3_desc: "A web-based decision support system designed to help users choose suitable sunscreen products according to their skin type and relevant criteria. The system evaluates alternatives using a structured decision-making approach to provide more objective and personalized recommendations.",
        proj_4_title: "Vending Machine Analysis",
        proj_4_desc: "Vending Machine Sales is a website creation that is created based on Vending Machine Sales data which has been previously processed in the Data Analyst vertical.",
        proj_collab_title: "Let's collaborate",
        proj_collab_desc: "Looking for a refined approach to your next data or software challenge?",
        proj_contact: "Get in Touch",

        // Skills page
        skills_title: "Skills & Certifications",
        skills_desc: "A comprehensive overview of my technical expertise in Data Analyst and Software Engineering, complemented by professional certifications and core competencies.",
        skills_hard: "Hard Skills",
        skills_languages: "Languages & Core",
        skills_data_stack: "Data Science Stack",
        skills_soft: "Soft Skills",
        skills_soft_quote: "\"Bridging the gap between technical complexity and business value through clear communication and systematic problem-solving.",
        skills_certs: "Certifications",
        skills_recruiter: "RECRUITERS",
        skills_transcript: "View Full Transcript",
        skills_download: "Download PDF",

        // Skills - Programming Languages
        skill_python: "Python",
        skill_sql: "SQL",
        skill_javascript: "JavaScript",
        skill_php: "PHP",
        skill_html: "HTML",

        // Skills - Data Science Stack
        skill_tensorflow: "TensorFlow",
        skill_datatables: "DataTables",
        skill_postgresql: "PostgreSQL",

        // Skills - Soft Skills
        skill_analytical: "Analytical Thinking",
        skill_collaboration: "Team Collaboration",
        skill_communication: "Effective Communication",
        skill_adaptability: "Adaptability",
        skill_time_mgmt: "Time Management",
        skill_critical: "Critical Thinking",

        // Skills - Certifications
        cert_junior_title: "Junior Computer Operator Certification",
        cert_junior_org: "BNSP",
        cert_google_title: "Google Operating System Certification",
        cert_google_org: "Coursera",
        cert_software_title: "Software Development Certification",
        cert_software_org: "Dicoding",
        cert_revou_title: "Data Analytics & Software Engineering with AI Certification",
        cert_revou_org: "RevoU Tech Academy",

        // Contact page
        contact_title: "Let's Connect",
        contact_email_label: "Primary Email",
        contact_linkedin: "LinkedIn",
        contact_linkedin_desc: "Professional Network",
        contact_github: "GitHub",
        contact_github_desc: "Source Code",
        contact_whatsapp: "WhatsApp",
        contact_whatsapp_desc: "Direct Message",
        contact_instagram: "Instagram",
        contact_instagram_desc: "Social Media",
        contact_message: "Quick Message",
        contact_message_desc: "Send Direct Message",
        contact_name: "Selvya Mulyaningtyas",
        contact_desc: "Software Engineer & Data Analyst focused on building efficient digital solutions.",

        // Common
        python: "Python",
        react: "React"
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'id';

// Initialize language
function initLanguage() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        currentLang = savedLang;
    }
    applyLanguage();
}

// Apply translations to elements with data-i18n attribute
function applyLanguage() {
    document.documentElement.lang = currentLang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update language toggle button
    updateLangToggle();

    // Store preference
    localStorage.setItem('lang', currentLang);
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    applyLanguage();

    // Dispatch custom event for any additional updates
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

// Update language toggle button appearance
function updateLangToggle() {
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        const indicator = toggle.querySelector('.lang-indicator');
        if (indicator) {
            indicator.textContent = currentLang.toUpperCase();
        }
    }
}

// Export for use
window.i18n = {
    toggle: toggleLanguage,
    getLang: () => currentLang,
    setLang: (lang) => {
        currentLang = lang;
        applyLanguage();
    }
};

// Initialize language on page load
document.addEventListener('DOMContentLoaded', initLanguage);