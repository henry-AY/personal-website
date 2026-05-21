import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { useEffect } from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import Stack from './Stack';

const hikingImages = [
  "https://images.unsplash.com/photo-1600476086547-c30b4d55afac?q=80&w=2171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Golden gate bridge
  "https://images.unsplash.com/photo-1446630073557-fca43d580fbe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // California Coast
  "https://images.unsplash.com/photo-1534050359320-02900022671e?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // San Fransisco
  "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Lake Tahoe
  "https://images.unsplash.com/photo-1549533948-77ab8a0d9878?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chicago
  "https://images.unsplash.com/photo-1577949098263-a5fc867be37b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Cincinatti
  "https://images.unsplash.com/photo-1602521879205-9e43bd841b1a?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Frankfurt
  "https://images.unsplash.com/photo-1614823498916-a28a7d67182c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Nevada Desert
  "https://images.unsplash.com/photo-1685303658280-d9feb841ebfa?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Wyoming
  "https://images.unsplash.com/photo-1509838174235-432f709c7bfd?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Smoking Mountains
];

const pizzaImages = [
  "https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682264788192-9abdec90c425?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1590301157172-7ba48dd1c2b2?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function NowPage({ setView, onRepeatTracks = [] }) {
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [lenis]);

    return (
        <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="now-page-container"
            style={{ 
                padding: '8rem 2rem 6rem 2rem', 
                minHeight: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'flex-start',
                gap: '4rem',
                overflowX: 'hidden' 
            }}
        >
            <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.05em', fontWeight: 700 }}>Right Now.</h1>
                <p style={{ color: 'var(--text-muted)', fontFamily: 'monospace', lineHeight: '1.8', fontSize: '0.95rem' }}>
                // A space for what i'm currently doing
                </p>
            </div>

            {/* --- SPOTIFY SECTION --- */}
            <div className="now-playing-card" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-muted)', marginBottom: '-2rem', paddingLeft: '4px', textTransform: 'uppercase' }}>
                Songs on repeat
                </p>
                
                <ScrollStack 
                    useWindowScroll={true}
                    itemDistance={400} 
                    itemStackDistance={45} 
                    baseScale={0.9} 
                    itemScale={0.03} 
                    stackPosition="15%" 
                    className="now-playing-stack"
                >
                {onRepeatTracks.map((track) => {
                    return (
                    <ScrollStackItem
                        key={track.id}
                        itemClassName="spotify-stack-card"
                    >
                        <div style={{
                            height: '352px', 
                            minHeight: '352px',
                            width: '100%',
                            borderRadius: '24px',
                            boxShadow: '0 -15px 40px rgba(0,0,0,0.5)', 
                            overflow: 'hidden',
                            backgroundColor: '#121212',
                        }}>
                        <iframe
                            src={track.embedUrl}
                            width="100%"
                            height="352"
                            allowFullScreen=""
                            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            style={{ display: 'block', border: 'none' }}
                        ></iframe>
                        </div>
                    </ScrollStackItem>
                    );
                })}
                </ScrollStack>
            </div>

            {/* --- PIZZA / IN THE KITCHEN SECTION --- */}
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-muted)', marginTop: '2rem', marginBottom: '1rem', paddingLeft: '4px', textTransform: 'uppercase' }}>
                Kitchen
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '2rem' }}>
                I've spent a lot of time learning how to make <strong style={{ color: '#fff' }}>homemade bread</strong> (Sourdough and also with yeast). Recently, I've been working on a Neapolitian pizza dough, topping the pizza with tomato sauce, mozarella and fresh basil.
                A lot of the skills, such as kneading and folding transfer over quite well. The one technique I still need to practice is hand-tossing pizza. But, I think a more suitable name is <strong style={{ color: '#fff' }}>pizza acrobatics!</strong>
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '500px', height: '500px' }}>
                        <Stack
                            randomRotation
                            sensitivity={200}
                            sendToBackOnClick={true}
                            cards={pizzaImages.map((src, i) => (
                                <img 
                                    key={i} 
                                    src={src} 
                                    alt={`pizza-${i + 1}`} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                            ))}
                            autoplay
                            autoplayDelay={1500}
                            pauseOnHover={false}
                        />
                    </div>
                </div>
            </div>

            {/* --- TRAVEL SECTION --- */}
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-muted)', marginTop: '0rem', marginBottom: '1rem', paddingLeft: '4px', textTransform: 'uppercase' }}>
                Journeys
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
                One of my favorite feelings is to experience a new environment, a new town, city, or country. I love immersing myself into the culture and enjoying the sights. The list of images below follows no particular
                ordering and are some experiences I've gotten to enjoy.
                </p>

                <ul style={{ 
                    color: 'var(--text-muted)', 
                    lineHeight: '1.6', 
                    fontSize: '0.95rem', 
                    paddingTop: '1.5rem',
                    paddingLeft: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                }}>
                    <li><strong style={{ color: '#fff' }}>The Golden Gate Bridge:</strong> A place and city I've always visited as a kid.</li>
                    <li><strong style={{ color: '#fff' }}>California's Golden Coastline (Route 1):</strong> One of the highways we took for a Family road trip up to Eugene Oregon.</li>
                    <li><strong style={{ color: '#fff' }}>San Francisco's Trolleys:</strong> Pairs well with Golden Boy Pizza!</li>
                    <li><strong style={{ color: '#fff' }}>Lake Tahoe:</strong> Watching our dogs swim in a lake for the very first time.</li>
                    <li><strong style={{ color: '#fff' }}>The Chicago Bean:</strong> Walked out of the airport in Chicago wearing a t-shirt and shorts ... during winter.</li>
                    <li><strong style={{ color: '#fff' }}>Cincinnati Bridge:</strong> First time travelling alone to a new city.</li>
                    <li><strong style={{ color: '#fff' }}>Frankfurt, Germany:</strong> My very first trip outside of the U.S.</li>
                    <li><strong style={{ color: '#fff' }}>Nevada's Desert:</strong> Driving through the empty Nevada desert after getting completely locked out of my phone.</li>
                    <li><strong style={{ color: '#fff' }}>Wyoming's Pastures:</strong> Still locked out of my phone (yes, the exact same trip).</li>
                    <li><strong style={{ color: '#fff' }}>The Great Smoky Mountains:</strong> Hands down, one of the most beautiful places to hike.</li>
                </ul>
            </div>

            {/* --- INFINITE IMAGE LOOP --- */}
            <div style={{ 
                width: '100vw', 
                marginLeft: 'calc(-50vw + 50%)', 
                overflow: 'hidden',
                padding: '0.5rem 0 2rem 0'
            }}>
                <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 30
                }}
                style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    paddingRight: '1.5rem', 
                    width: 'max-content' 
                }}
                >
                {[...hikingImages, ...hikingImages].map((src, index) => (
                    <div 
                    key={index} 
                    style={{ 
                        width: '280px', 
                        height: '380px', 
                        flexShrink: 0, 
                        borderRadius: '24px', 
                        overflow: 'hidden',
                        backgroundColor: '#121212',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                    >
                    <img 
                        src={src} 
                        alt="California Hiking" 
                        loading="lazy"
                        style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover' 
                        }} 
                    />
                    </div>
                ))}
                </motion.div>
            </div>

        </motion.main>
    );
}