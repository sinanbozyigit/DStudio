const services = [
    {
        id: 1, icon: '🌐', title: 'Web Site Oluşturma',
        description: 'Modern, responsive ve SEO uyumlu web siteleri. Kurumsal kimliğinize özel tasarım ve geliştirme hizmeti.',
        customerPrice: '5.000₺',
        costs: [
            { item: 'Domain', amount: '150₺' },
            { item: 'Hosting (Yıllık)', amount: '800₺' },
            { item: 'SSL Sertifikası', amount: '200₺' },
            { item: 'Tasarım & Geliştirme', amount: '2.500₺' },
            { item: 'TOPLAM MALİYET', amount: '3.650₺' }
        ]
    },
    {
        id: 2, icon: '📸', title: 'Özel Çekim Hizmetleri',
        description: 'Profesyonel fotoğraf ve video çekimi, drone görüntüleme, video editing ve post-production hizmetleri.',
        customerPrice: '3.500₺',
        costs: [
            { item: 'Ekipman Kiralama', amount: '600₺' },
            { item: 'Drone Çekimi', amount: '400₺' },
            { item: 'Video Editing Yazılımı', amount: '150₺' },
            { item: 'Profesyonel Ekip', amount: '1.200₺' },
            { item: 'TOPLAM MALİYET', amount: '2.350₺' }
        ]
    },
    {
        id: 3, icon: '📱', title: 'Mobil Uygulama',
        description: 'iOS ve Android için native veya cross-platform mobil uygulama geliştirme. Kullanıcı dostu arayüz tasarımı.',
        customerPrice: '15.000₺',
        costs: [
            { item: 'Developer License', amount: '1.200₺' },
            { item: 'Backend Sunucu', amount: '1.500₺' },
            { item: 'API Entegrasyonları', amount: '800₺' },
            { item: 'Geliştirme & Test', amount: '7.000₺' },
            { item: 'TOPLAM MALİYET', amount: '10.500₺' }
        ]
    }
];

const adminMode = window.location.pathname.includes("/admin");

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.onclick = () => openModal(service);

        card.innerHTML = `
            <div class="service-image">${service.icon}</div>
            <div class="service-content">
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <div class="service-price">${service.customerPrice}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openModal(service) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (adminMode) {
        modalTitle.innerHTML = `${service.title} <span class="admin-badge">ADMIN</span>`;
        let costsHTML = `<p>${service.description}</p><div class="cost-breakdown">`;
        service.costs.forEach(cost => {
            costsHTML += `<div class="cost-item"><span>${cost.item}</span><span>${cost.amount}</span></div>`;
        });
        costsHTML += '</div>';
        modalBody.innerHTML = costsHTML;
    } else {
        modalTitle.textContent = service.title;
        modalBody.innerHTML = `<p>${service.description}</p><div class="service-price">${service.customerPrice}</div>`;
    }

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', renderServices);
