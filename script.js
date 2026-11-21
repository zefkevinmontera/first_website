document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       1. Dossier Data for All 6 Wonders
       ========================================= */
    const wondersData = {
        china: {
            index: '01 / DOSSIER',
            location: 'NORTHERN CHINA — 40.4319° N, 116.5704° E',
            title: 'Great Wall of China',
            selectValue: 'Great Wall of China, China',
            image: 'https://tse4.mm.bing.net/th/id/OIP.BABrW8V4mnGcKp_Uwl4xJwHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Spanning over 13,000 miles across mountain crests and desert plateaus, the Great Wall represents two millennia of military engineering. Beyond the restored ramparts near Beijing lie quiet, unrestored Ming-era watchtowers surrounded by wild alpine ridge trails.',
            specs: [
                { label: 'TOTAL LENGTH', value: '21,196 km (13,171 mi)' },
                { label: 'PRIMARY ERA', value: '7th Century BC – 1644 AD' },
                { label: 'BEST SEASON', value: 'April–May & Sept–Oct' },
                { label: 'RECOMMENDED STAY', value: '3–4 Days' }
            ]
        },
        jordan: {
            index: '02 / DOSSIER',
            location: 'MA\'AN GOVERNORATE, JORDAN — 30.3285° N, 35.4444° E',
            title: 'Petra',
            selectValue: 'Petra, Jordan',
            image: 'https://th.bing.com/th/id/OIP.BCMJrYTkNTw9xH16D6homwHaEK?o=7&cb=ucfimg2rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Reached through the narrow sandstone gorge of the Siq, Petra was the thriving capital of the Nabataean Kingdom. Its builders engineered an intricate network of dams, cisterns, and terracotta conduits that sustained a lush oasis city in the arid desert.',
            specs: [
                { label: 'ESTABLISHED', value: 'c. 312 BC' },
                { label: 'MATERIAL', value: 'Rose-Red Sandstone' },
                { label: 'BEST SEASON', value: 'March–May & Oct–Nov' },
                { label: 'RECOMMENDED STAY', value: '2–3 Days' }
            ]
        },
        peru: {
            index: '03 / DOSSIER',
            location: 'CUSCO REGION, PERU — 13.1631° S, 72.5450° W',
            title: 'Machu Picchu',
            selectValue: 'Machu Picchu, Peru',
            image: 'https://cdn.pixabay.com/photo/2021/05/05/00/43/machu-pichu-6229909_1280.jpg',
            description: 'Constructed around 1450 for the Inca emperor Pachacuti, this cloud-forest citadel sits 2,430 meters above sea level. Its polished granite walls are fitted together so precisely without mortar that they have withstood centuries of Andean seismic activity.',
            specs: [
                { label: 'ELEVATION', value: '2,430 m (7,970 ft)' },
                { label: 'CONSTRUCTED', value: 'c. 1450 AD' },
                { label: 'BEST SEASON', value: 'May–September (Dry)' },
                { label: 'RECOMMENDED STAY', value: '4–5 Days (w/ Sacred Valley)' }
            ]
        },
        italy: {
            index: '04 / DOSSIER',
            location: 'ROME, ITALY — 41.8902° N, 12.4922° E',
            title: 'The Colosseum',
            selectValue: 'The Colosseum, Italy',
            image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80',
            description: 'Commissioned under Emperor Vespasian in 72 AD, the Flavian Amphitheatre remains the largest ancient amphitheatre ever built. Its radial system of 80 numbered entrance arches and multi-level underground hypogeum set the blueprint for modern stadium engineering.',
            specs: [
                { label: 'INAUGURATED', value: '80 AD' },
                { label: 'CAPACITY', value: '50,000 – 80,000 Spectators' },
                { label: 'BEST SEASON', value: 'April–May & Sept–Oct' },
                { label: 'RECOMMENDED STAY', value: '3–4 Days' }
            ]
        },
        india: {
            index: '05 / DOSSIER',
            location: 'AGRA, UTTAR PRADESH, INDIA — 27.1751° N, 78.0421° E',
            title: 'Taj Mahal',
            selectValue: 'Taj Mahal, India',
            image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
            description: 'Built between 1632 and 1648 by Mughal emperor Shah Jahan, the Taj Mahal balances geometric precision with optical subtlety—its four minarets lean slightly outward to protect the central tomb, and its Makrana marble shifts subtly in hue from dawn to dusk.',
            specs: [
                { label: 'COMPLETED', value: '1648 AD' },
                { label: 'PRIMARY MATERIAL', value: 'Makrana White Marble' },
                { label: 'BEST SEASON', value: 'October–March' },
                { label: 'RECOMMENDED STAY', value: '2 Days' }
            ]
        },
        mexico: {
            index: '06 / DOSSIER',
            location: 'YUCATÁN, MEXICO — 20.6843° N, 88.5678° W',
            title: 'Chichén Itzá',
            selectValue: 'Chichén Itzá, Mexico',
            image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1000&q=80',
            description: 'A pre-Columbian city built by the Maya people of the Terminal Classic period. At its center rises the Temple of Kukulcán (El Castillo), whose 365 steps correspond to the solar year and cast a serpent-shaped shadow down the balustrade during the spring and autumn equinoxes.',
            specs: [
                { label: 'PEAK ERA', value: '600 – 1200 AD' },
                { label: 'ALIGNMENT', value: 'Solar Equinoxes' },
                { label: 'BEST SEASON', value: 'November–April' },
                { label: 'RECOMMENDED STAY', value: '2–3 Days' }
            ]
        }
    };

    /* =========================================
       2. Interactive Region Filter
       ========================================= */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const wonderCards = document.querySelectorAll('.wonder-card');
    const filterStatus = document.getElementById('filterStatus');
    const totalCards = wonderCards.length;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedRegion = btn.dataset.filter;

            // Update active button state
            filterButtons.forEach(b => {
                b.classList.remove('is-active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('is-active');
            btn.setAttribute('aria-selected', 'true');

            // Filter cards with staggered entrance animation
            let visibleCount = 0;
            wonderCards.forEach(card => {
                const matches = selectedRegion === 'all' || card.dataset.region === selectedRegion;

                card.classList.remove('is-filtering-in');
                if (matches) {
                    card.classList.remove('is-hidden');
                    // Force reflow so animation replays cleanly
                    void card.offsetWidth;
                    card.style.animationDelay = `${visibleCount * 0.06}s`;
                    card.classList.add('is-filtering-in');
                    visibleCount++;
                } else {
                    card.classList.add('is-hidden');
                }
            });

            const formattedVisible = String(visibleCount).padStart(2, '0');
            const formattedTotal = String(totalCards).padStart(2, '0');
            filterStatus.textContent = `SHOWING ${formattedVisible} OF ${formattedTotal} MONUMENTS`;
        });
    });

    /* =========================================
       3. Scroll Reveal (IntersectionObserver)
       ========================================= */
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* =========================================
       4. Live Scroll Progress Bar
       ========================================= */
    const scrollProgress = document.getElementById('scrollProgress');
    const updateProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = `${progress}%`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    /* =========================================
       5. Mobile Menu Drawer
       ========================================= */
    const menuBtn = document.getElementById('menuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMobileMenu = (forceClose = false) => {
        const isOpen = forceClose ? false : !mobileDrawer.classList.contains('is-open');
        mobileDrawer.classList.toggle('is-open', isOpen);
        menuBtn.classList.toggle('is-open', isOpen);
        menuBtn.setAttribute('aria-expanded', isOpen);
        mobileDrawer.setAttribute('aria-hidden', !isOpen);
        menuBtn.querySelector('.menu-btn-text').textContent = isOpen ? 'CLOSE' : 'MENU';
        document.body.classList.toggle('no-scroll', isOpen);
    };

    menuBtn.addEventListener('click', () => toggleMobileMenu());
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMobileMenu(true));
    });

    /* =========================================
       6. Interactive Dossier Drawer
       ========================================= */
    const dossierDrawer = document.getElementById('dossierDrawer');
    const dossierBackdrop = document.getElementById('dossierBackdrop');
    const dossierClose = document.getElementById('dossierClose');
    const dossierInquireBtn = document.getElementById('dossierInquireBtn');
    const destinationSelect = document.getElementById('destination');

    let activeDestination = '';

    const openDossier = (key) => {
        const data = wondersData[key];
        if (!data) return;

        activeDestination = data.selectValue;
        document.getElementById('dossierIndex').textContent = data.index;
        document.getElementById('dossierLocation').textContent = data.location;
        document.getElementById('dossierTitle').textContent = data.title;
        document.getElementById('dossierDesc').textContent = data.description;

        const imgEl = document.getElementById('dossierImg');
        imgEl.src = data.image;
        imgEl.alt = data.title;

        const specsContainer = document.getElementById('dossierSpecs');
        specsContainer.innerHTML = data.specs.map(spec => `
            <div class="spec-item">
                <span class="mono-label">${spec.label}</span>
                <span class="spec-value">${spec.value}</span>
            </div>
        `).join('');

        dossierDrawer.classList.add('is-open');
        dossierBackdrop.classList.add('is-open');
        dossierDrawer.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
    };

    const closeDossier = () => {
        dossierDrawer.classList.remove('is-open');
        dossierBackdrop.classList.remove('is-open');
        dossierDrawer.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
    };

    document.querySelectorAll('.card-trigger').forEach(btn => {
        btn.addEventListener('click', () => openDossier(btn.dataset.wonder));
    });

    dossierClose.addEventListener('click', closeDossier);
    dossierBackdrop.addEventListener('click', closeDossier);

    dossierInquireBtn.addEventListener('click', () => {
        if (activeDestination) {
            destinationSelect.value = activeDestination;
        }
        closeDossier();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => document.getElementById('name').focus(), 500);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (dossierDrawer.classList.contains('is-open')) closeDossier();
            if (mobileDrawer.classList.contains('is-open')) toggleMobileMenu(true);
        }
    });

    /* =========================================
       7. Contact Form Handling & Back to Top
       ========================================= */
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        formStatus.classList.remove('is-success');

        if (!name || !email || !message) {
            formStatus.textContent = 'Please complete all required fields.';
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formStatus.textContent = 'Please enter a valid email address.';
            return;
        }

        const btnSpan = submitBtn.querySelector('span:first-child');
        btnSpan.textContent = 'Dispatching...';
        submitBtn.disabled = true;

        setTimeout(() => {
            formStatus.classList.add('is-success');
            formStatus.textContent = `Received, ${name}. Our desk will respond within 24 hours.`;
            contactForm.reset();
            btnSpan.textContent = 'Send Inquiry';
            submitBtn.disabled = false;
        }, 700);
    });

    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});