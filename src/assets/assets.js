import banner from './banner.mp4'
import chair_room from './chair-room.webp'
import compound from './compound.webp'
import decoration from './decoration.webp'
import drive_thru from './drive-thru.webp'
import flower from './flower.webp'
import purple_decoration from './purple-decoration.webp'
import rest_room from './rest-room.webp'
import stairs from './stairs.webp'
import top_decoration from './top-decoration.webp'
import ceo from './ceo.jpg'
import couple_1 from './couple-1.jpg'
import couple_2 from './couple-2.jpg'
import couple_3 from './couple-3.jpg'
import couple_4 from './couple-4.jpg'
import couple_5 from './couple-5.jpg'
import couple_6 from './couple-6.jpg'
import couple_7 from './couple-7.jpg'
import cake from './cake.jpg'
import bride from './bride.jpg'
import decoration_1 from './decoration-1.jpg'
import decoration_2 from './decoration-2.jpg'
import staff_1 from './staff-1.jpg'
import staff_2 from './staff-2.jpg'
import wedding from './wedding.jpg'
import cake_day from './cake-day.jpg'
import co_operate from './co-operate.jpg'
import sound_system from './sound-system.jpg'
import event_place from './event-place.png'

export const assets =  {
    banner,
    chair_room,
    compound,
    decoration,
    drive_thru,
    flower,
    purple_decoration,
    rest_room,
    stairs,
    top_decoration,
    ceo,
    couple_1,
    couple_2,
    couple_3,
    couple_4,
    couple_5,
    couple_6,
    couple_7,
    staff_1,
    staff_2,
    wedding,
    decoration_1,
    decoration_2,
    cake,
    bride,
    cake_day,
    co_operate,
    sound_system,
    event_place
};

export const dummyTestimonial = [
    {
        name: 'Davies Habubakar',
        image: assets.couple_1,
        quote: 'Event Place made our wedding unforgettable. Everything was perfect.',
    },
    {
        name: 'John Jarvarson',
        image: assets.couple_2,
        quote: 'Professional service and a stunning venue. Highly recommended for corporate events!',
    },
    {
        name: 'Favour Sunny',
        image: assets.couple_3,
        quote: 'Choosing Event place for our wedding was the best decision wemade. ',
    },
    {
        name: 'Mr. Chinedu Okoye',
        image: assets.ceo,
        quote: 'We hosted our annual business conference at Event place and it exceeded all our expectations.',
    },
    {
        name: 'David Praise',
        image: assets.staff_1,
        quote: 'We used Event Place for our live gospel concert and the experience was phenomenal.',
    },
    {
        name: 'Linda Ebube',
        image: assets.staff_2,
        quote: 'My 40th birthday celebration at Event place was a dream come true.',
    },
    {
        name: 'Chika & Emeka',
        image: assets.couple_6,
        quote: 'From the moment we stepped in, we knew Event Place was the right venue.',
    },
    {
        name: 'Anita & Kingsley O.',
        image: assets.couple_4,
        quote: 'We knew we wanted a classy and serene venue, and Opal Place delivered exactly that.',
    },
    {
        name: 'Mr. & Mrs. Emmanuel N',
        image: assets.couple_5,
        quote: 'Our wedding at Event Place was nothing short of a fairytale.'
    }
];


export const dummyServices = [
    {
        title: 'Weddings',
        image: assets.wedding,
        shortDesc: 'Elegant setups for your dream wedding.',
        longDesc: 'Our wedding services offer full venue styling with floral arrangements, seating designs, lighting effects, and personalized touches to make your big day unforgettable.',
        details: {
            PopularThemes: ['Classic Romance', 'Modern Minimalist'],
            ItemsIncluded: ['Floral arrangements', 'Stage decoration', 'Bride & Groom seat setup'],
            Client: 'Sandra & James - April 2024',
        }
    },
    {
        title: 'Corporate Events',
        image: assets.co_operate,
        shortDesc: 'Professional space for meetings, launches, and seminars.',
        longDesc: 'We provide tailored setups for business events, including branded stages, presentation screens, sound equipment, and refreshments.',
        details: {
            CompaniesServed: ['TechNova', 'GreenBank'],
            ItemsIncluded: ['Projector setup', 'Corporate banners', 'Buffet service'],
            client: 'GreenBank AGM - Jan 2024',
        }
    },
    {
        title: 'Private Parties',
        image: assets.cake_day,
        shortDesc: 'Host your birthdays or celebrations with style.',
        longDesc: 'From birthdays to anniversaries, our private party setup includes lively decor, lighting, entertainment zones, and customized themes.',
        details: {
            EventType: '30th Birthday Bash',
            Features: ['Custom cake', 'Dance floor', 'DJ Booth'],
            Client: 'Emeka’s Surprise Party - June 2023',
        }
    },
    {
        title: 'Space Rental',
        image: assets.chair_room,
        shortDesc: 'Elegant rooms and halls suitable for any event size.',
        longDesc: 'Choose from a range of halls and rooms with full amenities including chairs, tables, AC, lighting, and accessibility features.',
        details: {
            Capacity: 'Up to 500 guests',
            Features: ['AC', 'Security', 'Restrooms'],
            PopularEvents: ['Seminars', 'Receptions'],
        }
    },
    {
        title: 'Event Décor',
        image: assets.decoration,
        shortDesc: 'Custom decoration services tailored to your theme.',
        longDesc: 'We transform your space with beautiful and immersive decor matching any theme – traditional, modern, rustic, or glamorous.',
        details: {
            DecorTypes: ['Floral', 'Rustic', 'LED'],
            Addons: ['Photo booth', 'Table centerpieces'],
            Client: 'The Okoros Wedding - Sept 2023',
        }
    },
    {
        title: 'Catering',
        image: assets.cake,
        shortDesc: 'Delicious menu options to satisfy your guests.',
        longDesc: 'Our catering includes African and continental meals, desserts, drinks, and live stations, all handled by professional chefs.',
        details: {
            MenuTypes: ['Buffet', 'À la carte'],
            Capacity: 'Up to 1000 guests',
            Client: 'Event Launch Party - Dec 2024',
        }
    },
    {
        title: 'Audio/Visual Equipment',
        image: assets.sound_system,
        shortDesc: 'State-of-the-art sound and lighting systems.',
        longDesc: 'We offer high-end audio/visual equipment like microphones, speakers, screens, and lights suitable for any event size.',
        details: {
            Equipment: ['Wireless Mics', 'LED Panels', 'Stage Lights'],
            TechSupport: true,
            Client: 'Sound setup for Lagos Music Fest 2023',
        }
    },
];


export const dummyGalleryCard = [
    {
        galleryTitle: 'Flower Decoration',
        slug: 'flower-decoration',
        galleryImage: assets.flower,
        shortDescription: 'A vibrant and artistic floral arrangement that adds life to your events.',
        longDescription: `This flower decoration showcases a blend of elegance and creativity, designed to bring a natural yet sophisticated ambiance to any celebration. From colorful centerpieces to wall installations and entryway garlands, every petal and stem is carefully chosen to complement the theme of your event. Ideal for weddings, receptions, birthdays, and corporate parties, this setup adds a graceful touch that photographs beautifully and captivates guests with its fragrance and beauty.`,
    },
    {
        galleryTitle: 'Event Compound',
        slug: 'opal-compound',
        galleryImage: assets.compound,
        shortDescription: 'Spacious and serene outdoor compound for events and gatherings.',
        longDescription: `The Event Compound offers an expansive outdoor venue perfect for any event that requires ample space and an open-air atmosphere. Surrounded by tasteful landscaping and versatile setups, it is suited for large outdoor weddings, concerts, parties, and more. With smooth walkways, shaded areas, and accessibility in mind, this space transforms based on your vision—from elegant seating arrangements to grand marquees.`,
    },
    {
        galleryTitle: 'Ceiling Decoration',
        slug: 'ceiling-decoration',
        galleryImage: assets.top_decoration,
        shortDescription: 'Stunning ceiling designs that elevate the elegance of your venue.',
        longDescription: `Our ceiling decorations are curated to add dramatic flair and elegance to indoor venues. With flowing fabrics, hanging chandeliers, and mood lighting, the ceilings become a spectacle of style. The design not only beautifies the space but also creates an immersive experience for your guests. Whether you're going for a classic look or a modern aesthetic, our ceiling décor adapts to your vision and enhances the entire ambiance.`,
    },
    {
        galleryTitle: 'Chair Room',
        slug: 'chair-room',
        galleryImage: assets.chair_room,
        shortDescription: 'A refined seating room offering comfort and sophistication.',
        longDescription: `The Chair Room is a thoughtfully arranged space featuring premium seating for guests to relax, socialize, or enjoy meals. Each chair is placed to provide personal space while contributing to the overall aesthetic harmony of the room. The décor is subtle yet elegant, ensuring comfort and luxury for VIP guests, business meetings, or small private gatherings within larger events.`,
    },
    {
        galleryTitle: 'Hall Decorations',
        slug: 'hall-decoration',
        galleryImage: assets.purple_decoration,
        shortDescription: 'A beautifully decorated hall infused with elegance and style.',
        longDescription: `Our hall decorations are designed to set the tone for unforgettable moments. With a signature color scheme like royal purple, the decorations incorporate draped fabric, lighting accents, table settings, and floral arrangements. Everything works in harmony to reflect sophistication and charm, making the hall suitable for weddings, banquets, and upscale receptions. The attention to detail ensures that every corner of the hall is photo-worthy.`,
    },
    {
        galleryTitle: 'Drive Thru',
        slug: 'drive-thru',
        galleryImage: assets.drive_thru,
        shortDescription: 'Convenient drive-thru access with a classy touch for seamless entry.',
        longDescription: `The Drive Thru at Event Place is more than just an entry point—it's an introduction to elegance. With a paved path, lighting, and shelter, guests arrive in style and comfort. This area is perfect for vehicle processions during weddings, VIP guest arrivals, or luxury car displays. It’s not just functional—it makes a statement and offers an organized and aesthetic approach to your venue entrance.`,
    },
];


export const dummyTeamMembers = [
    {
        teamMemberName: 'John Smith',
        teamMemberImage: assets.ceo,
        teamMemberPosition: 'Founder & Event Director'

    },
    {
        teamMemberName: 'Stella SpaceMan',
        teamMemberImage: assets.staff_2,
        teamMemberPosition: 'Head of Operations'

    },
    {
        teamMemberName: 'Dave Steeve',
        teamMemberImage: assets.staff_1,
        teamMemberPosition: 'Secretary'

    },
];

export const dummyAboutUs = [
    {
        head: 'Customer First Approach',
        text: 'We don’t just serve you, we understand you. Your satisfaction is our top priority.'
    },
    {
        head: 'Professional Excellence',
        text: 'Our team consists of skilled professionals who are passionate about delivering top-tier service in every area we specialize in.'
    },
    {
        head: 'A Place That Feels Like Home',
        text: 'Whether you’re booking a service or attending an event, Event Place welcomes you with open arms and a touch of elegance.'
    }
];