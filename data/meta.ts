import { Metadata } from 'next';

export const meta: Metadata = {
    title: 'ICLab',
    description: 'We are studying HCI, especially interest in affective computing on mobile devices.',
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
        description: 'We are studying HCI, especially interest in affective computing on mobile devices.',
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
        description: "We are studying HCI, especially interest in affective computing on mobile devices.",
        images: ['https://ic.kaist.ac.kr/og-image.png'],
    }

}

// export const navs = ["projects", "publications", "members", "lectures", "galleries", "posts"]
export const navs = ["publications", "members", "lectures", "galleries", "blog"]