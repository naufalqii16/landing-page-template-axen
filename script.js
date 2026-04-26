let currentIndex = 0;

const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('#sliderTrack img');

function startCountdown() {
    const endTime = new Date().getTime() + (30 * 60 * 1000); // 30 minutes from now
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }, 1000);
}

// SCARCITY COUNTER
function updateScarcity() {
    const spots = [7, 6, 5, 4, 3, 2, 1];
    let currentIndex = 0;
    
    setInterval(() => {
        if (currentIndex < spots.length - 1) {
            currentIndex++;
            const newSpot = spots[currentIndex];
            document.getElementById('remaining-spots').textContent = newSpot;
            document.getElementById('final-spots').textContent = newSpot;
        }
    }, Math.random() * 120000 + 60000); // Random between 1-3 minutes
}

// LIVE NOTIFICATIONS
const buyers = [
    { name: "Rudi dari Bandung", time: "2 menit yang lalu" },
    { name: "Sari dari Surabaya", time: "5 menit yang lalu" },
    { name: "Andi dari Jakarta", time: "8 menit yang lalu" },
    { name: "Dimas dari Yogyakarta", time: "12 menit yang lalu" },
    { name: "Maya dari Bali", time: "15 menit yang lalu" },
    { name: "Fikri dari Medan", time: "18 menit yang lalu" },
];

function showLiveNotification() {
    const notification = document.getElementById('liveNotification');
    const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
    
    document.getElementById('buyerName').textContent = randomBuyer.name;
    document.getElementById('notificationTime').textContent = randomBuyer.time;
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Show notification every 15-30 seconds
setInterval(() => {
    showLiveNotification();
}, Math.random() * 15000 + 15000);

// CTA Handler
function handleCTA() {
    // Replace with your actual checkout/order link
    alert('🚀 Redirecting ke halaman checkout...\n\nGanti ini dengan link Gumroad/Tokopedia/payment gateway kamu!');
    // window.location.href = 'YOUR_CHECKOUT_URL';
}

// Initialize on page load
window.addEventListener('load', () => {
    startCountdown();
    updateScarcity();
    setTimeout(showLiveNotification, 3000); // First notification after 3 seconds
});

let currentSlide = 0;

function moveSlide(direction) {
    const track = document.getElementById("sliderTrack");
    const slides = document.querySelectorAll(".slide");

    currentSlide += direction;

    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= slides.length) currentSlide = slides.length - 1;

    const width = slides[0].clientWidth;

    track.style.transform = `translateX(-${currentSlide * width}px)`;
}

// AUTO SLIDE
setInterval(() => {
    moveSlide(1);
}, 3000);