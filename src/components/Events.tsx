import { useRef, useEffect } from 'react';
import styles from './Events.module.css';

interface EventCard {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  isPast?: boolean;
}

const Events = () => {
  const eventsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const events = eventsRef.current;
    if (!events) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          events.style.opacity = '1';
          events.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    observer.observe(events);
    return () => observer.disconnect();
  }, []);

  const upcomingEvents: EventCard[] = [
    {
      id: 1,
      title: "ARIES Hacknight",
      date: "June 15, 2023",
      description: "24-hour coding marathon to build innovative projects",
      image: "/hacknight.jpg",
    },
    {
      id: 2,
      title: "Whiteboard Wars",
      date: "July 3, 2023",
      description: "Competitive problem-solving tournament",
      image: "/whiteboard.jpg",
    }
  ];

  const pastEvents: EventCard[] = [
    {
      id: 3,
      title: "Blockchain Workshop",
      date: "May 2023",
      description: "Hands-on session about decentralized applications",
      image: "/blockchain.jpg",
      isPast: true
    },
    {
      id: 4,
      title: "Winter Hackathon",
      date: "December 2022",
      description: "Annual coding competition with special prizes",
      image: "/hackathon.jpg",
      isPast: true
    }
  ];

  return (
    <section id="events" className={styles.eventsSection} ref={eventsRef}>
      <div className={styles.stars}></div>
      <div className={styles.horizontalLamp}></div>
      
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>Events</h1>
        <p className={styles.subtitle}>
          Our gatherings where innovation meets execution. Join us for the next chapter.
        </p>
        
        <div className={styles.eventsContainer}>
          <h2 className={styles.sectionHeading}>Upcoming Events</h2>
          <div className={styles.eventsGrid}>
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <div className={styles.eventsContainer}>
          <h2 className={styles.sectionHeading}>Past Highlights</h2>
          <div className={styles.eventsGrid}>
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <div className={styles.referencesSection}>
          <p className={styles.credit}>Designed & Developed By AMES NTD © 2023</p>
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ event }: { event: EventCard }) => {
  return (
    <div className={`${styles.eventCard} ${event.isPast ? styles.pastEvent : ''}`}>
      <div className={styles.cardImageContainer}>
        <img 
          src={event.image} 
          alt={event.title} 
          className={styles.cardImage}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/event-placeholder.jpg';
          }}
        />
        {event.isPast && <span className={styles.pastBadge}>Past Event</span>}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{event.title}</h3>
        <p className={styles.cardDate}>{event.date}</p>
        <p className={styles.cardDescription}>{event.description}</p>
        <button className={styles.cardButton}>
          {event.isPast ? 'View Photos' : 'Register Now'}
        </button>
      </div>
    </div>
  );
};

export default Events;
