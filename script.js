document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    const track = document.querySelector('#carousel-track');
    if (track) {
        const originalImages = track.querySelectorAll('img');
        const totalOriginals = originalImages.length;

        if (totalOriginals > 0) {
            const firstClone = originalImages[0].cloneNode(true);
            track.appendChild(firstClone);

            const totalImagesCount = totalOriginals + 1;
            track.style.width = `${totalImagesCount * 100}%`;
            
            const allImages = track.querySelectorAll('img');
            allImages.forEach(img => {
                img.style.width = `${100 / totalImagesCount}%`;
            });

            let currentIndex = 0;
            const rotationSpeed = 4000;

            setInterval(() => {
                currentIndex++;
                
                track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
                
                const shiftPercentage = currentIndex * (100 / totalImagesCount);
                track.style.transform = `translateX(-${shiftPercentage}%)`;

                if (currentIndex === totalOriginals) {
                    setTimeout(() => {
                        track.style.transition = 'none';
                        currentIndex = 0;
                        track.style.transform = 'translateX(0%)';
                    }, 600);
                }
            }, rotationSpeed);
        }
    }
});