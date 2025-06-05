import { useRef, useEffect } from 'react';
import styles from '../components/gallery.module.css';

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gallery.style.opacity = '1';
          gallery.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    observer.observe(gallery);

    return () => observer.disconnect();
  }, []);

  // Mock image data
  const images = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder${(i % 5) + 1}.jpg`,
    alt: `Event ${i + 1}`
  }));

  return (
    <section id="gallery" className={styles.gallerySection} ref={galleryRef}>
      <div className={styles.lampContainer}>
        <div className={styles.lampPole}></div>
        <div className={styles.lampTop}></div>
        <div className={styles.lampLight}></div>
      </div>
      
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Gallery</h2>
        <p className={styles.sectionSubtitle}>Moments from our journey</p>
      </div>
      
      <div className={styles.imageScroller}>
        {images.map((image) => (
          <div key={image.id} className={styles.imageItem}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </div>
      
      <div className={styles.exploreMore}>
        <a href="/gallery" className={styles.exploreButton}>
          Explore Full Gallery
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Gallery;
