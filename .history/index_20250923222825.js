// Services Configuration Array
const services = [
    {
        id: 'mesoterapia',
        title: 'Mesoterapia',
        shortDescription: 'Tratamiento de microinyecciones para reducir grasa localizada y mejorar la apariencia de la piel.',
        image: 'https://almusalud.com/wp-content/uploads/2023/05/mesoterapia-scaled.jpg',
        icon: '💉',
        modalData: {
            description: 'La mesoterapia es un tratamiento estético no quirúrgico que consiste en la aplicación de microinyecciones de sustancias activas directamente en la zona a tratar.',
            benefits: [
                'Reduce la grasa localizada',
                'Mejora la apariencia de la piel',
                'Tratamiento no invasivo',
                'Resultados visibles en pocas sesiones'
            ],
            duration: '90 minutos (1 hora y 1/2)',
            sessions: '6-8 sesiones recomendadas',
            price: '$4,800 (10 sesiones con aparatología - área abdominal)'
        }
    },
    {
        id: 'sueroterapia',
        title: 'Sueroterapia',
        shortDescription: 'Tratamiento de hidratación profunda que mejora la apariencia de la piel y promueve el bienestar general.',
        image: 'https://www.highcare.cl/cdn/shop/files/CapturadePantalla2025-04-17ala_s_15.54.45.png?v=1744903463&width=533',
        icon: '💧',
        modalData: {
            description: 'Tratamiento de hidratación profunda que mejora la apariencia de la piel y promueve el bienestar general mediante la aplicación de sueros nutritivos.',
            benefits: [
                'Hidratación profunda',
                'Mejora la textura de la piel',
                'Aporta vitaminas y minerales',
                'Efecto anti-envejecimiento'
            ],
            duration: '60 minutos',
            sessions: '4-6 sesiones recomendadas',
            price: '$1,300'
        }
    },
    {
        id: 'aumento-tonificacion',
        title: 'Aumento y Tonificación de glúteos',
        shortDescription: 'Tratamientos especializados para aumentar y tonificar glúteos de forma natural y efectiva.',
        image: 'https://www.cliniem.com/wp-content/uploads/2023/01/05_GLUTEOS.jpg',
        icon: '🍑',
        modalData: {
            description: 'Tratamientos especializados para aumentar y tonificar glúteos de forma natural y efectiva mediante técnicas no invasivas.',
            benefits: [
                'Aumento del volumen',
                'Mejora de la forma',
                'Tonificación muscular',
                'Resultados naturales'
            ],
            duration: '60-90 minutos',
            sessions: '8-12 sesiones recomendadas',
            price: '$5,000 (con aparatología y mesoterapia)'
        }
    },
    {
        id: 'masajes',
        title: 'Masajes',
        shortDescription: 'Masajes relajantes y descontracturantes para aliviar tensiones y promover la relajación profunda.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        icon: '🤲',
        modalData: {
            description: 'Masajes especializados para aliviar tensiones musculares y promover la relajación profunda del cuerpo y la mente.',
            benefits: [
                'Alivia tensiones musculares',
                'Reduce el estrés',
                'Mejora la circulación',
                'Promueve la relajación'
            ],
            duration: '60 minutos',
            sessions: 'Sesiones individuales',
            price: 'Relajante: $450 | Descontracturante: $500'
        }
    },
    {
        id: 'presoterapia',
        title: 'Presoterapia',
        shortDescription: 'Tratamiento de drenaje linfático que reduce la retención de líquidos y mejora la circulación.',
        image: 'https://www.esneca.lat/wp-content/uploads/tecnicas-de-aplicacion-de-la-presoterapia.jpg',
        icon: '🦵',
        modalData: {
            description: 'Tratamiento de drenaje linfático que reduce la retención de líquidos y mejora la circulación mediante presión controlada.',
            benefits: [
                'Reduce la retención de líquidos',
                'Mejora la circulación',
                'Elimina toxinas',
                'Reduce la celulitis'
            ],
            duration: '45-60 minutos',
            sessions: '6-10 sesiones recomendadas',
            price: '$500 (con masaje gel de castaña de India)'
        }
    },
    {
        id: 'reiki',
        title: 'Reiki',
        shortDescription: 'Terapia energética con alineación de chakras para equilibrar mente, cuerpo y espíritu.',
        image: 'https://mejorconsalud.as.com/wp-content/uploads/2018/04/sesion-reiki-768x512.jpeg?auto=webp&quality=7500&width=1920&crop=16:9,smart,safe&format=webp&optimize=medium&dpr=2&fit=cover&fm=webp&q=75&w=1920&h=1080',
        icon: '✨',
        modalData: {
            description: 'Terapia energética con alineación de chakras para equilibrar mente, cuerpo y espíritu mediante la canalización de energía universal.',
            benefits: [
                'Equilibra la energía corporal',
                'Reduce el estrés y ansiedad',
                'Promueve la relajación profunda',
                'Mejora el bienestar general'
            ],
            duration: '60-90 minutos',
            sessions: 'Sesiones individuales',
            price: '$650 (con terapia de flores de Bach)'
        }
    },
    {
        id: 'yesoterapia',
        title: 'Yesoterapia',
        shortDescription: 'Tratamiento con yeso para modelar y reafirmar el cuerpo, especialmente efectivo en áreas problemáticas.',
        image: 'https://www.beautymarket.es/imagen/min3391.jpg',
        icon: '🧱',
        modalData: {
            description: 'Tratamiento con yeso para modelar y reafirmar el cuerpo, especialmente efectivo en áreas problemáticas como abdomen y glúteos.',
            benefits: [
                'Modela y reafirma el cuerpo',
                'Reduce medidas',
                'Mejora la textura de la piel',
                'Resultados duraderos'
            ],
            duration: '60-90 minutos',
            sessions: '8-12 sesiones recomendadas',
            price: '$900'
        }
    },
    {
        id: 'vendas-lipoliticas',
        title: 'Vendas Lipolíticas',
        shortDescription: 'Aplicación de vendas especiales que ayudan a reducir grasa localizada y mejorar la textura de la piel.',
        image: 'https://www.esteticavzh.com.ar/img/static/62.jpg',
        icon: '🎗️',
        modalData: {
            description: 'Aplicación de vendas especiales que ayudan a reducir grasa localizada y mejorar la textura de la piel mediante principios activos.',
            benefits: [
                'Reduce grasa localizada',
                'Mejora la textura de la piel',
                'Tratamiento no invasivo',
                'Resultados progresivos'
            ],
            duration: '45-60 minutos',
            sessions: '6-8 sesiones recomendadas',
            price: '$600 (vendas frías lipolíticas)'
        }
    },
    {
        id: 'masajes-reductivos',
        title: 'Masajes Reductivos',
        shortDescription: 'Masajes reductivos y linfáticos especializados para reducir medidas y mejorar la circulación.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        icon: '💆',
        modalData: {
            description: 'Masajes especializados para reducir medidas y mejorar la circulación mediante técnicas específicas de drenaje linfático.',
            benefits: [
                'Reduce medidas corporales',
                'Mejora la circulación',
                'Elimina toxinas',
                'Tonifica la piel'
            ],
            duration: '60-90 minutos',
            sessions: '8-12 sesiones recomendadas',
            price: 'Consulta precio'
        }
    },
    {
        id: 'auriculoterapia-flores',
        title: 'Auriculoterapia',
        shortDescription: 'Terapia con flores de Bach aplicada en puntos específicos del oído para el bienestar integral.',
        image: 'https://cuidateplus.marca.com/sites/default/files/styles/natural/public/cms/2024-04/auriculoterapia.jpg.webp?itok=3kQa_WEr',
        icon: '🌺',
        modalData: {
            description: 'Terapia con flores de Bach aplicada en puntos específicos del oído para el bienestar integral y el equilibrio emocional.',
            benefits: [
                'Equilibra emociones',
                'Reduce el estrés',
                'Mejora el bienestar mental',
                'Tratamiento natural'
            ],
            duration: '45-60 minutos',
            sessions: '4-6 sesiones recomendadas',
            price: 'Consulta precio'
        }
    },
    {
        id: 'homeopatia',
        title: 'Homeopatía',
        shortDescription: 'Tratamiento homeopático natural para el bienestar integral del organismo.',
        image: 'https://www.gob.mx/cms/uploads/image/file/185115/QueEsHomeopatia_21.jpg',
        icon: '🌿',
        modalData: {
            description: 'Tratamiento homeopático natural para el bienestar integral del organismo mediante principios activos diluidos.',
            benefits: [
                'Tratamiento natural',
                'Sin efectos secundarios',
                'Mejora el bienestar general',
                'Personalizado'
            ],
            duration: '30-45 minutos',
            sessions: 'Sesiones individuales',
            price: 'Consulta precio'
        }
    },
    {
        id: 'electroestimulacion',
        title: 'Electroestimulación',
        shortDescription: 'Tecnología avanzada para tonificar músculos y mejorar la definición corporal.',
        image: 'https://www.materialestetica.com/blog/wp-content/uploads/2019/11/4-ventajas-que-debes-saber-sobre-utilizar-la-electroestimulacion.jpg',
        icon: '⚡',
        modalData: {
            description: 'Tecnología avanzada para tonificar músculos y mejorar la definición corporal mediante impulsos eléctricos controlados.',
            benefits: [
                'Tonifica músculos',
                'Mejora la definición',
                'Fortalece el core',
                'Resultados rápidos'
            ],
            duration: '30-45 minutos',
            sessions: '8-12 sesiones recomendadas',
            price: 'Consulta precio'
        }
    },
    {
        id: 'maderoterapia',
        title: 'Maderoterapia',
        shortDescription: 'Tratamiento con herramientas de madera para reafirmar y modelar el cuerpo.',
        image: 'https://expertosenestetica.es/wp-content/uploads/2018/12/Maderoterapia-Natividad-Lorenzo.jpg',
        icon: '🪵',
        modalData: {
            description: 'Tratamiento con herramientas de madera para reafirmar y modelar el cuerpo mediante técnicas de masaje especializadas.',
            benefits: [
                'Reafirma y modela',
                'Reduce la celulitis',
                'Mejora la circulación',
                'Técnica natural'
            ],
            duration: '60-90 minutos',
            sessions: '8-12 sesiones recomendadas',
            price: 'Consulta precio'
        }
    },
    {
        id: 'aparatologia',
        title: 'Aparatología',
        shortDescription: 'Tecnología de vanguardia para tratamientos estéticos avanzados y efectivos.',
        image: 'https://www.avanzaentucarrera.com/orientacion/comp/uploads/2019/11/AVTC_aparatologia_estetica.jpg',
        icon: '🔬',
        modalData: {
            description: 'Tecnología de vanguardia para tratamientos estéticos avanzados y efectivos mediante equipos especializados.',
            benefits: [
                'Tecnología avanzada',
                'Resultados efectivos',
                'Tratamientos personalizados',
                'Máxima seguridad'
            ],
            duration: '45-90 minutos',
            sessions: 'Varía según tratamiento',
            price: 'Consulta precio'
        }
    },
    {
        id: 'faciales',
        title: 'Faciales',
        shortDescription: 'Tratamientos faciales especializados para rejuvenecer y mejorar la apariencia de la piel.',
        image: 'https://www.esneca.lat/wp-content/uploads/anatomia-facial-estetica.png',
        icon: '💆‍♀️',
        modalData: {
            description: 'Tratamientos faciales especializados para rejuvenecer y mejorar la apariencia de la piel mediante técnicas profesionales.',
            benefits: [
                'Rejuvenece la piel',
                'Mejora la textura',
                'Reduce arrugas',
                'Hidratación profunda'
            ],
            duration: '60-90 minutos',
            sessions: '4-6 sesiones recomendadas',
            price: 'Consulta precio'
        }
    },
    {
        id: 'vacumterapia',
        title: 'Vacumterapia',
        shortDescription: 'Tratamiento de vacío para reducir celulitis y mejorar la circulación sanguínea.',
        image: 'https://atlas-fisioterapia.es/wp-content/uploads/2021/01/D_NQ_NP_744217-MLA30780962178_052019-O.jpg',
        icon: '🌪️',
        modalData: {
            description: 'Tratamiento de vacío para reducir celulitis y mejorar la circulación sanguínea mediante succión controlada.',
            benefits: [
                'Reduce la celulitis',
                'Mejora la circulación',
                'Tonifica la piel',
                'Elimina toxinas'
            ],
            duration: '45-60 minutos',
            sessions: '8-12 sesiones recomendadas',
            price: 'Consulta precio'
        }
    },
    {
        id: 'plasma-plaquetas',
        title: 'Plasma Rico en Plaquetas',
        shortDescription: 'Tratamiento regenerativo con plasma rico en plaquetas para rejuvenecer la piel.',
        image: 'https://www.cervantescentromedico.com/wp-content/uploads/2022/06/iStock-643324798-scaled.jpg',
        icon: '🩸',
        modalData: {
            description: 'Tratamiento regenerativo con plasma rico en plaquetas para rejuvenecer la piel y estimular la regeneración celular.',
            benefits: [
                'Regenera la piel',
                'Efecto anti-envejecimiento',
                'Mejora la textura',
                'Resultados naturales'
            ],
            duration: '45 minutos (con facial previo)',
            sessions: '3-4 sesiones recomendadas',
            price: '$1,200'
        }
    }
]

// Service Data Object (for backward compatibility)
const serviceData = {};
services.forEach(service => {
    serviceData[service.id] = service.modalData;
});

// Modal Functions
function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const service = serviceData[serviceId];
    if (!service) return;
    
    // Set title
    modalTitle.textContent = services.find(s => s.id === serviceId)?.title || 'Servicio';
    
    // Set content
    modalBody.innerHTML = `
        <div class="space-y-4">
            <div>
                <h4 class="text-base font-semibold text-gray-800 mb-2">Descripción</h4>
                <p class="text-gray-600 text-sm leading-relaxed">${service.description}</p>
            </div>
            
            <div>
                <h4 class="text-base font-semibold text-gray-800 mb-2">Beneficios</h4>
                <ul class="space-y-1">
                    ${service.benefits.map(benefit => `<li class="flex items-start text-gray-600 text-sm"><span class="text-spa-accent mr-2 mt-0.5 flex-shrink-0">✓</span><span>${benefit}</span></li>`).join('')}
                </ul>
            </div>
            
            <div class="grid grid-cols-1 gap-3">
                <div class="bg-gray-50 p-3 rounded-lg">
                    <h5 class="font-semibold text-gray-800 mb-1 text-sm">Duración</h5>
                    <p class="text-gray-600 text-sm">${service.duration}</p>
                </div>
                <div class="bg-gray-50 p-3 rounded-lg">
                    <h5 class="font-semibold text-gray-800 mb-1 text-sm">Sesiones</h5>
                    <p class="text-gray-600 text-sm">${service.sessions}</p>
                </div>
                <div class="bg-gray-50 p-3 rounded-lg">
                    <h5 class="font-semibold text-gray-800 mb-1 text-sm">Precio</h5>
                    <p class="text-gray-600 text-sm">${service.price}</p>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.remove('hidden');
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modalContent.classList.remove('translate-y-full');
    }, 10);
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.classList.add('translate-y-full');
    // Restore body scroll
    document.body.style.overflow = '';
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function openContactForm() {
    closeServiceModal();
    // Scroll to contact form
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
}

// Render Services Function
function renderServices() {
    const servicesContainer = document.getElementById('services-grid');
    if (!servicesContainer) return;
    
    servicesContainer.innerHTML = services.map(service => `
        <div class="service-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-80">
            <div class="relative h-full overflow-hidden">
                <img src="${service.image}" 
                     alt="${service.title}" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div class="absolute top-4 right-4 w-12 h-12 bg-spa-light rounded-full flex items-center justify-center shadow-lg">
                    <span class="text-white text-xl">${service.icon}</span>
                </div>
                <!-- Overlay oscuro en hover -->
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                
                <!-- Contenido centrado en la parte inferior -->
                <div class="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 class="text-2xl font-bold text-white mb-3">${service.title}</h3>
                    <div class="service-description opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p class="text-gray-200 text-sm leading-relaxed mb-4">
                            ${service.shortDescription}
                        </p>
                        <button onclick="openServiceModal('${service.id}')" class="bg-white text-spa-accent px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm">
                            Más información →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Form Validation
function validateForm(data) {
    // Basic validation
    if (!data.nombre || !data.telefono || !data.servicio) {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(data.telefono.replace(/\s/g, ''))) {
        alert('Por favor, ingresa un número de teléfono válido.');
        return false;
    }
    
    return true;
}

// Create WhatsApp message with form data
function createWhatsAppMessage(data) {
    const message = `¡Hola! Me interesa solicitar una cita en Mandrade Spa.

📋 *Información de contacto:*
• Nombre: ${data.nombre}
• Teléfono: ${data.telefono}
• Servicio de interés: ${data.servicio}

💬 *Mensaje:*
${data.mensaje || 'Sin mensaje adicional'}

¡Espero su respuesta! 😊`;

    return encodeURIComponent(message);
}

// Redirect to WhatsApp
function redirectToWhatsApp(message) {
    const phoneNumber = '523311116007'; // Número de WhatsApp sin el +
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation classes when elements come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
            }
        });
    }, observerOptions);

    // Observe all service cards
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (!validateForm(data)) return;
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<span class="flex items-center justify-center"><span class="mr-2">⏳</span>Preparando mensaje...</span>';
            submitButton.disabled = true;
            
            // Create WhatsApp message
            const whatsappMessage = createWhatsAppMessage(data);
            
            // Redirect to WhatsApp
            setTimeout(() => {
                redirectToWhatsApp(whatsappMessage);
                this.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 1000);
        });
    }

    // Set minimum date for date input to today
    const dateInput = document.getElementById('fecha');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // Close modal when clicking outside
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeServiceModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('serviceModal');
            if (modal && !modal.classList.contains('hidden')) {
                closeServiceModal();
            }
        }
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle menu visibility
            if (mobileMenu.classList.contains('hidden')) {
                // Show menu
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('show');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                // Hide menu
                mobileMenu.classList.remove('show');
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
        
        // Close menu when clicking on links
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('show');
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.remove('show');
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            }
        });
        
        // Close menu on window resize to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                mobileMenu.classList.remove('show');
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }
    
    // Render services dynamically
    renderServices();
});
