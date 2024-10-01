import { Metadata } from 'next';

export const meta: Metadata = {
    title: 'ICLab',
    description: 'Welcome to our lab homepage! We are studying for ubiquitous computing to support personalized wellbeing through context-aware computing and machine learning, leveraging mobile, wearable, and IoT technologies.',
    keywords: ["HCI",
        "Ubiquitous Computing",
        "Affective Computing",
        "KAIST",
        "Mobile Computing",
        "Smartspeaker",
        "Mental Health",
        "Digital Health",
        "Smarthome",
        "Context-aware Computing",
        "Stress Detection",
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ic.kaist.ac.kr/',
        title: 'Interactive Computing Lab at KAIST',
        description: 'Welcome to our lab homepage! We are studying for ubiquitous computing to support personalized wellbeing through context-aware computing and machine learning, leveraging mobile, wearable, and IoT technologies.',
        images: [
            {
                url: 'https://ic.kaist.ac.kr/og-image.png',
                width: 800,
                height: 600,
                alt: 'Interactive Computing Lab at KAIST',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Interactive Computing Lab at KAIST",
        description: "Welcome to our lab homepage! We are studying for ubiquitous computing to support personalized wellbeing through context-aware computing and machine learning, leveraging mobile, wearable, and IoT technologies.',",
        images: ['https://ic.kaist.ac.kr/og-image.png'],
    }

}

export const navs = ["publications", "members", "lectures", "galleries", "blog"]