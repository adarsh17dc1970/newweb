// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('hidden');
    menuBtn.innerHTML = isMenuOpen
        ? '<i data-lucide="x" class="h-6 w-6"></i>'
        : '<i data-lucide="menu" class="h-6 w-6"></i>';
    lucide.createIcons();
});

// Features data
const features = [
    {
        icon: 'calendar',
        title: "Event Registration",
        description: "Register your event and let us know about surplus food availability"
    },
    {
        icon: 'users',
        title: "Volunteer Network",
        description: "Join our network of dedicated volunteers for food collection and distribution"
    },
    {
        icon: 'map-pin',
        title: "Distribution Points",
        description: "Strategic distribution points to efficiently reach those in need"
    },
    {
        icon: 'chef-hat',
        title: "Food Safety",
        description: "Strict adherence to food safety guidelines and quality control"
    },
    {
        icon: 'clock',
        title: "Real-time Tracking",
        description: "Track food collection and distribution in real-time"
    },
    {
        icon: 'shield',
        title: "Verified Recipients",
        description: "Carefully verified network of recipient organizations"
    }
];

// Render features
const featuresContainer = document.getElementById('features');
features.forEach(feature => {
    const featureElement = document.createElement('div');
    featureElement.className = 'relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300';
    featureElement.innerHTML = `
        <div class="absolute -top-4 left-4">
            <div class="bg-white p-2 rounded-lg shadow-sm">
                <i data-lucide="${feature.icon}" class="h-8 w-8 text-rose-500"></i>
            </div>
        </div>
        <h3 class="mt-8 text-xl font-semibold text-gray-900">
            ${feature.title}
        </h3>
        <p class="mt-2 text-gray-600">
            ${feature.description}
        </p>
    `;
    featuresContainer.appendChild(featureElement);
});

// Impact stats data
const stats = [
    {
        icon: 'utensils',
        value: "50,000+",
        label: "Meals Shared"
    },
    {
        icon: 'users',
        value: "1,000+",
        label: "Active Volunteers"
    },
    {
        icon: 'building',
        value: "200+",
        label: "Partner Organizations"
    },
    {
        icon: 'clock',
        value: "5,000+",
        label: "Hours Contributed"
    }
];

// Render stats
const statsContainer = document.getElementById('stats');
stats.forEach(stat => {
    const statElement = document.createElement('div');
    statElement.className = 'bg-gray-50 p-8 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300';
    statElement.innerHTML = `
        <div class="flex justify-center mb-4">
            <i data-lucide="${stat.icon}" class="h-8 w-8 text-rose-500"></i>
        </div>
        <div class="text-4xl font-bold text-gray-900">
            ${stat.value}
        </div>
        <div class="mt-2 text-gray-600">
            ${stat.label}
        </div>
    `;
    statsContainer.appendChild(statElement);
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);
    e.target.reset();
});

// Reinitialize Lucide icons after dynamic content is added
lucide.createIcons();
