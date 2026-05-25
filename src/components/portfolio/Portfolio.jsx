import React, { useEffect, useState } from 'react'
import './portfolio.css'
import IMG0 from '../../assets/moniflowImg.png'
import IMG_BIZZA from '../../assets/bizza.png'
import IMG_AVVA from '../../assets/avva.webp'
import IMG2 from '../../assets/staPortfolio.png'
import IMG_EXCELMIND from '../../assets/excelmind.png'
import IMG_MARINER from '../../assets/mariner.png'
import IMG_DASHNDROP from '../../assets/dashndrop.png'
import IMG10 from '../../assets/ticketPass.png'
import IMG_BYAIR from '../../assets/byair.png'
import IMG_PROGRESSIVE from '../../assets/progressivepartners.jpg'

//Do not use the images in production
const data = [
    {
        id: 1,
        image: IMG0,
        title: 'Monicredit - A full-featured digital banking app with wallet transfers, QR payments, biometric login, airtime purchase and bill payments.',
        github: '',
        demo: '',
    },

    {
        id: 2,
        image: IMG_BIZZA,
        title: 'Bizza - Unleash the Power of Digital Currency',
        description: `Bizza is a cutting-edge cryptocurrency platform for buying, storing, and selling 150+ cryptocurrencies with 20+ fiat currencies—via bank transfers or credit/debit card.

Key features:
• Exchange: manage transactions in one place across multiple wallet types
• Earn crypto: deposit and earn interest on cryptos and stablecoins
• Instant, secure transactions with no trading fees within the system
• BizzaPay, Protrader, and BizzaCoin ecosystem`,
        github: '',
        demo: 'https://bizza.io/',
    },

    {
        id: 3,
        image: IMG_AVVA,
        title: 'AvvA - Personal and travel assistance for aviation professionals',
        description: `AvvA is a virtual assistant for pilots, cabin crew, and aircraft owners. We organize lodging, ground transportation, dining, errands, shopping, bill pay support, and calendar coordination—so you can focus on flying.

Key features:
• Travel coordination: hotels, rentals, rides, and itinerary changes
• Home & personal life: gifts, appointments, deliveries, and reminders
• Admin & scheduling: expense reports, calendars, and follow-ups
• Always-on Wingmate support through the AvvA app and web portal`,
        github: '',
        demo: 'https://avva.aero/',
    },
    {
        id: 4,
        image: IMG2,
        title: 'Genescor - A health consultation app for sickle cell patients enabling online doctor appointments and reducing long hospital queues.',
        github: '',
        demo: '',
    },
    {
        id: 5,
        image: IMG_MARINER,
        title: 'Mariner App™',
        description: `Mariner App™ is built for captains, crew, and local maritime communities. Find work, connect with verified local services, and stay organized on the water—without bouncing between apps.

Key features:
• Dock & local alerts: quick updates and notices that matter when you're moving around harbors
• Marketplace: list or find gear, parts, boats, jobs, crew, and services
• Crew messages: chat fast with captains, crew, and businesses`,
        github: '',
        demo: '',
    },
    {
        id: 6,
        image: IMG_EXCELMIND,
        title: 'Excel Mind (Thelix Holdings) - An LMS mobile platform for structured online learning built as a contract engagement with a cross-functional development team.',
        github: '',
        demo: 'https://excelmind.org/',
    },
    {
        id: 7,
        image: IMG10,
        title: 'TicketPass - An event planner platform for listing events, selling tickets, and managing registrations with a streamlined organizer and attendee experience.',
        github: 'https://github.com/Ashymz/ashymz-ticketpass',
        demo: 'https://ticketpass404.vercel.app/',
    },
    {
        id: 8,
        image: IMG_DASHNDROP,
        title: 'Dashndrop - A two-sided food delivery app where customers browse restaurants and checkout via wallet or Paystack, while vendors manage listings and orders.',
        github: '',
        demo: 'https://www.dashndrop.ng/',
    },
    {
        id: 9,
        image: IMG_BYAIR,
        title: 'ByAir - Fly Smarter Across Nigeria',
        description: `ByAir helps travelers discover and book flights across Nigeria with a clean, mobile-friendly experience built for speed and clarity.

Key features:
• Search and compare routes across Nigerian airlines
• Streamlined booking flow with clear pricing
• Responsive web app optimized for mobile users
• Fast, modern UI deployed on Vercel`,
        github: '',
        demo: 'https://byair.vercel.app/',
    },
    {
        id: 10,
        image: IMG_PROGRESSIVE,
        title: 'Progressive Partners - Invest. Own. Relax.',
        description: `Progressive Partners is a real estate platform for verified property search, smart mortgage applications, and flexible payment plans across Nigeria.

Key features:
• Verified listings with smart search filters by location, price, and amenities
• AI document and progress verification for safer investments
• Flexible payment options including milestones and mortgage support
• Digital paperwork from KYC to payment receipts in one place`,
        github: '',
        demo: 'https://progressivepartners.vercel.app/',
    },
]

const Portfolio = () => {
    const [expandedId, setExpandedId] = useState(null)
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    useEffect(() => {
        const media = window.matchMedia('(hover: none), (pointer: coarse)')
        const updateTouch = () => setIsTouchDevice(media.matches)
        updateTouch()
        media.addEventListener('change', updateTouch)
        return () => media.removeEventListener('change', updateTouch)
    }, [])

    useEffect(() => {
        if (!isTouchDevice || !expandedId) return undefined

        const handlePointerDown = (event) => {
            if (!event.target.closest('.portfolio__item-wrapper')) {
                setExpandedId(null)
            }
        }

        document.addEventListener('pointerdown', handlePointerDown)
        return () => document.removeEventListener('pointerdown', handlePointerDown)
    }, [expandedId, isTouchDevice])

    const handleCardToggle = (id) => {
        if (!isTouchDevice) return
        setExpandedId((current) => (current === id ? null : id))
    }

    const handleMouseEnter = (id) => {
        if (isTouchDevice) return
        setExpandedId(id)
    }

    const handleMouseLeave = () => {
        if (isTouchDevice) return
        setExpandedId(null)
    }

    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, description, github, demo }) => {
                        const isExpanded = expandedId === id

                        return (
                            <div
                                key={id}
                                className="portfolio__item-wrapper"
                                onMouseEnter={() => handleMouseEnter(id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <article
                                    className={`portfolio__item ${isExpanded ? 'portfolio__item--expanded' : ''}`}
                                    onClick={() => handleCardToggle(id)}
                                    onKeyDown={(event) => {
                                        if (!isTouchDevice) return
                                        if (event.key === 'Enter' || event.key === ' ') {
                                            event.preventDefault()
                                            handleCardToggle(id)
                                        }
                                    }}
                                    role={isTouchDevice ? 'button' : undefined}
                                    tabIndex={isTouchDevice ? 0 : undefined}
                                    aria-expanded={isExpanded}
                                >
                                    <span className="portfolio__item-hint portfolio__item-hint--touch">
                                        {isExpanded ? 'Tap to collapse' : 'Tap for full details'}
                                    </span>
                                    <span className="portfolio__item-hint portfolio__item-hint--hover">
                                        Hover for full details
                                    </span>

                                    <div className="portfolio__item-image">
                                        <img src={image} alt={title} />
                                    </div>
                                <div className="portfolio__item-content">
                                    <h3>{title}</h3>
                                    {description ? (
                                        <div className="portfolio__expandable">
                                            <div className="portfolio__expandable-inner">
                                                <p className="portfolio__item-desc">{description}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="portfolio__item-desc portfolio__item-desc--placeholder" aria-hidden="true">&nbsp;</p>
                                    )}
                                </div>
                                    <div
                                        className="portfolio__item-cta"
                                        onClick={(event) => event.stopPropagation()}
                                        onKeyDown={(event) => event.stopPropagation()}
                                    >
                                        {
                                            github
                                                ? <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                                : <span className='btn'>GitHub Private</span>
                                        }
                                        {
                                            demo
                                                ? <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                                : <span className='btn btn-primary'>No Public Demo</span>
                                        }
                                    </div>
                                </article>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
