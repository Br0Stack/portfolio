describe('GSAP Animation Initialization', () => {
    it('should initialize navbar animation on DOMContentLoaded', () => {
      // Trigger the DOMContentLoaded event
      document.dispatchEvent(new Event('DOMContentLoaded'));
      
      // Check if the navbar animation has been initialized with the expected properties
      const navbarAnimation = gsap.timeline.getTweensOf('.navbar');
      expect(navbarAnimation[0].vars.y).toBe('-100%');
      expect(navbarAnimation[0].vars.opacity).toBe(0);
      expect(navbarAnimation[0].vars.ease).toBe('bounce');
    });
  });