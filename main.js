document.addEventListener('DOMContentLoaded', function() {
    // GSAP Animations
    gsap.from('.navbar', { duration: 1, y: '-100%', opacity: 0, ease: 'bounce' });
    gsap.from('.footer', { duration: 1, y: '100%', opacity: 0, ease: 'bounce' });
    gsap.from('.content', { duration: 1.5, opacity: 0, scale: 0.5, delay: 0.5 });

    // Scroll Trigger
    gsap.utils.toArray('.project').forEach(project => {
        gsap.from(project, {
            scrollTrigger: project,
            duration: 1,
            opacity: 0,
            y: 50,
            delay: 0.3
        });
    });

    // Hover Effects on Project Cards
    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { duration: 0.5, scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { duration: 0.5, scale: 1, boxShadow: 'none' });
        });
    });
});