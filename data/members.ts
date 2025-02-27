export const memberRoles = [
    "Professor", 
    "Post Doctoral Researcher", 
    "Ph.D. Student", 
    "M.S. Student", 
    "Alumni"
] as const;

export type MemberRole = typeof memberRoles[number];

const currentMemberRole = memberRoles.filter((role) => role !== "Alumni")

export interface MemberInfo {
    name: string;
    role: MemberRole;
    email: string;
    image?: string;
    research_interests?: string[];
    google_scholar?: string;
    github?: string;
    homepage?: string;
    affiliation?: string;
    histories: {
        role: string;
        enterance: string;
        graduation?: string;
    }[];
}

let members: { [key: string]: MemberInfo } = {
    "UichinLee": {
        "name": "Uichin Lee",
        "role": "Professor",
        "email": "uclee@kaist.ac.kr",
        "google_scholar": "https://scholar.google.co.kr/citations?user=Sc2pBzYAAAAJ",
        "histories": [
            {
                "role": "Professor",
                "enterance": "2010.03",
                "graduation": ""
            }
        ],
        "image": "/members/UichinLee.jpg"
    },
    "MinseoPark": {
        "name": "Minseo Park",
        "role": "Ph.D. Student",
        "email": "minseo726@kaist.ac.kr",
        "github": "https://github.com/sympathize123",
        "google_scholar": "https://scholar.google.co.kr/citations?hl=ko&user=eN7S23oAAAAJ",
        "research_interests": [
            "Human-Computer Interaction",
            "Domain Adaptation",
        ],
        "histories": [
            {
                "role": "Ph.D. student",
                "enterance": "2025.03",
                "graduation": ""
            }
        ],
        "image": "/members/MinseoPark.jpg"
    },
    "SominPark": {
        "name": "Somin Park",
        "role": "M.S. Student",
        "email": "som2n@kaist.ac.kr",
        "github": "https://github.com/MIApark2355",
        "research_interests": [
            "Human-Computer Interaction",
            "Healthcare",
            "Mobile Sensing"
        ],
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2025.03",
                "graduation": ""
            }
        ],
        "image": "/members/SominPark.jpg"
    },
    "JunmoLee": {
        "name": "Junmo Lee",
        "role": "M.S. Student",
        "email": "junmo.lee@kaist.ac.kr",
        "github": "https://github.com/BarkNMeow",
        "research_interests": [
            "Human-Computer Interaction",
            "Motivation"
        ],
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2025.03",
                "graduation": ""
            }
        ],
        "image": "/members/JunmoLee.jpg"
    },
    "YoungseokSeo": {
        "name": "Youngseok Seo",
        "role": "M.S. Student",
        "email": "ysseo0910@kaist.ac.kr",
        "github": "https://github.com/komaseo",
        "google_scholar": "https://scholar.google.com/citations?view_op=list_works&hl=en&user=hzANqAEAAAAJ",
        "research_interests": [
            "Digital wellbeing",
            "Behavior change"
        ],
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2024.09",
                "graduation": ""
            }
        ],
        "image": "/members/YoungseokSeo.jpg"
    },
    "DejiangZheng": {
        "name": "Dejiang Zheng",
        "role": "Ph.D. Student",
        "email": "deok-kang@kaist.ac.kr",
        "research_interests": [
            "Mobile Computing",
            "Human Computer Interaction"
        ],
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2024.09",
                "graduation": ""
            }
        ],
        "image": "/members/DejiangZheng.jpg"
    },
    "JeonghyunKim": {
        "name": "Jeonghyun Kim",
        "role": "M.S. Student",
        "email": "kjhrlawjdgus@kaist.ac.kr",
        "github": "https://github.com/Jeonghyun109",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2024.03",
                "graduation": ""
            }
        ],
        "research_interests": [
            "Human-Computer Interaction",
            "Affective Computing",
            "IoT sensor data",
            "Personalized Digital Health"
        ],
        "image": "/members/JeonghyunKim.jpg"
    },
    "ThuVo": {
        "name": "Thu Vo",
        "role": "M.S. Student",
        "email": "thuvo@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2024.03",
                "graduation": ""
            }
        ],
        "research_interests": [
            "Human-Computer Interaction",
            "Mental Health Intervention"
        ],
        "image": "/members/ThuVo.jpg"
    },
    "GyunaKim": {
        "name": "Gyuna Kim",
        "role": "M.S. Student",
        "email": "gyuna.kim@kaist.ac.kr",
        "github": "https://github.com/gn0219",
        "research_interests": [
            "Interactive System",
            "Multimodal Data Analysis"
        ],
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2024.03",
                "graduation": ""
            }
        ],
        "image": "/members/GyunaKim.jpg"
    },
    "HyunsooLee": {
        "name": "Hyunsoo Lee",
        "email": "hslee90@kaist.ac.kr",
        "role": "Post Doctoral Researcher",
        "google_scholar": "https://scholar.google.com/citations?user=ctglUjoAAAAJ&hl=ko",
        "github": "https://github.com/hslee90",
        "research_interests": [
            "Sensor Data Privacy",
            "Usable Privacy",
            "Human Factors in Privacy and Security"
        ],
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2017.09",
                "graduation": "2019.08"
            },
            {
                "role": "Ph.D. Student",
                "enterance": "2019.09",
                "graduation": "2023.08"
            },
            {
                "role": "Post Doctoral Researcher",
                "enterance": "2023.09",
                "graduation": ""
            }
        ],
        "image": "/members/HyunsooLee.jpg"
    },
    "HansooLee": {
        "name": "Hansoo Lee",
        "role": "Alumni",
        "email": "hansoo@kaist.ac.kr",
        "google_scholar": "https://scholar.google.co.kr/citations?user=Ezt-IT0AAAAJ",
        "github": "https://github.com/hansoolee18",
        "research_interests": [
            "Mobile Sensing",
            "Digital Health",
            "Routine Computing"
        ],
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2018.09",
                "graduation": "2025.02"
            }
        ],
        "image": "/members/HansooLee.jpg"
    },
    "GyuwonJung": {
        "name": "Gyuwon Jung",
        "role": "Alumni",
        "email": "gwjung@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2016.03",
                "graduation": "2018.02"
            },
            {
                "role": "Ph.D. Student",
                "enterance": "2020.03",
                "graduation": "2025.02"
            }
        ],
        "homepage": "https://gw-jung.github.io/",
        "google_scholar": "https://scholar.google.com/citations?user=byhoe3YAAAAJ",
        "research_interests": [
            "Digital Health",
            "Causal Inference",
            "Human-Data Interaction"
        ],
        "image": "/members/GyuwonJung.jpg"
    },
    "YoungjiKoh": {
        "name": "Youngji Koh",
        "role": "Ph.D. Student",
        "email": "youngji@kaist.ac.kr",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2021.09",
                "graduation": ""
            }
        ],
        "homepage": "https://youngji-koh.github.io/",
        "research_interests": [
            "Mental Health Self-Tracking",
            "Smarthome IoT Sensing"
        ],
        "image": "/members/YoungjiKoh.jpg"
    },
    "YugyeongJung": {
        "name": "Yugyeong Jung",
        "role": "Ph.D. Student",
        "email": "yugyeong.jung@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2020.03",
                "graduation": "2022.02"
            },
            {
                "role": "Ph.D. Student",
                "enterance": "2022.03",
                "graduation": ""
            }
        ],
        "github": "https://github.com/yugyeongjung",
        "research_interests": [
            "Data visualization",
            "Human-data interaction",
            "Social robotics"
        ],
        "image": "/members/YugyeongJung.jpg"
    },
    "DuriLee": {
        "name": "Duri Lee",
        "role": "Ph.D. Student",
        "email": "duri.lee@kaist.ac.kr",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2022.03",
                "graduation": ""
            }
        ],
        "research_interests": [
            "Human Digital Twin",
            "e-Mental Health Modeling",
            "IoT sensor data"
        ],
        "image": "/members/DuriLee.jpg"
    },
    "PanyuZhang": {
        "name": "Panyu Zhang",
        "role": "Ph.D. Student",
        "email": "panyu@kaist.ac.kr",
        "github": "https://github.com/SteinPanyu",
        "homepage": "https://steinpanyu.github.io/",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2020.09",
                "graduation": "2023.02"
            },
            {
                "role": "Ph.D. Student",
                "enterance": "2023.03",
                "graduation": ""
            }
        ],
        "research_interests": [
            "Routine Computing",
            "Affective Computing"
        ],
        "image": "/members/PanyuZhang.jpg"
    },
    "SangjunPark": {
        "name": "Sangjun Park",
        "role": "Ph.D. Student",
        "email": "sangjun@kaist.ac.kr",
        "github": "https://github.com/highjun10170",
        "homepage": "https://highjun10170.github.io/",
        "google_scholar": "https://scholar.google.com/citations?user=esrgGaEAAAAJ&hl=ko",
        "research_interests": [
            "Mobile Sensing Platform",
            "Personal Informatics"
        ],
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2022.03",
                "graduation": "2024.02"
            },
            {
                "role": "Ph.D. Student",
                "enterance": "2024.03",
                "graduation": ""
            }
        ],
        "image": "/members/SangjunPark.jpg"
    },
    "YunjoHan": {
        "name": "Yunjo Han",
        "role": "Alumni",
        "email": "yjhan99@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2022.03",
                "graduation": "2024.02"
            }
        ],
        "affiliation": "Samsung Research",
    },
    "EunkiJoung": {
        "name": "Eunki Joung",
        "role": "Alumni",
        "email": "eunki@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2023.03",
                "graduation": "2025.02"
            }
        ],
        "github": "https://github.com/eunkiyomi",
        "research_interests": [
            "Human-Computer Interaction",
            "Computer-Mediated Communication"
        ],
        "image": "/members/EunkiJoung.jpg"
    },
    "HeejeongLim": {
        "name": "Heejeong Lim",
        "role": "Alumni",
        "email": "hj.lim@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2023.03",
                "graduation": "2025.02"
            }
        ],
        "github": "https://github.com/Heej99",
        "research_interests": [
            "Sensor Data Science",
            "IoT sensor data"
        ],
        "image": "/members/HeejeongLim.jpg"
    },
    "HyesooPark": {
        "name": "Hyesoo Park",
        "role": "Alumni",
        "email": "hyehye@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2023.03",
                "graduation": "2025.02"
            }
        ],
        "homepage": "https://hyesoopark.com",
        "github": "https://github.com/HyeSPark",
        "google_scholar": "https://scholar.google.com/citations?user=RI56iIAAAAAJ&hl=ko",
        "research_interests": [
            "Human-Computer Interaction",
            "Behavioral Change Support System",
            "Assistive Technologies"
        ],
        "image": "/members/HyesooPark.jpg"
    },
    "ChanheeLee": {
        "name": "Chanhee Lee",
        "role": "Ph.D. Student",
        "email": "chanhee015@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2023.09",
                "graduation": "2025.02"
            },
            {
                "role": "Ph.D. Student",
                "enterance": "2025.02",
                "graduation": ""
            }
        ],
        "github": "https://github.com/thunini",
        "research_interests": [
            "Human-Computer Interaction",
            "Sensor Data Science",
            "Mental Health Sensing",
            "Human-AI Interaction"
        ],
        "image": "/members/ChanheeLee.jpg"
    },
    "SueunJang": {
        "name": "Sueun Jang",
        "role": "Ph.D. Student",
        "email": "sueun.jang@kaist.ac.kr",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2023.09",
                "graduation": ""
            }
        ],
        "research_interests": [
            "Human-Computer Interaction",
            "Linguistic Interaction",
            "Feedback, Meta-cognition"
        ],
        "image": "/members/SueunJang.jpg"
    },
    "HwindolPark": {
        "name": "Hwindol Park",
        "role": "Ph.D. Student",
        "email": "park.hwin@kaist.ac.kr",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2023.09",
                "graduation": ""
            }
        ],
        "research_interests": [
            "Human-Computer Interaction",
            "Healthcare",
            "Time-series analysis"
        ],
        "image": "/members/HwindolPark.jpg"
    },
    "JeongyunHeo": {
        "name": "Jeongyun Heo",
        "role": "Alumni",
        "email": "yuniheo@kookmin.ac.kr",
        "affiliation": "Professor at Kookmin Univ.",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "???",
                "graduation": "2023.08"
            }
        ]
    },
    "JoonyoungPark": {
        "name": "Joonyoung Park",
        "role": "Alumni",
        "email": "jypark@kse.kaist.ac.kr",
        "affiliation": "BIONEVER",
        "histories": [
            {
                "role": "Post Doctoral Researcher",
                "enterance": "2023.03",
                "graduation": "2023.08"
            },
            {
                "role": "Ph.D. Student",
                "enterance": "2017.09",
                "graduation": "2023.02"
            },
            {
                "role": "M.S. Student",
                "enterance": "2017.03",
                "graduation": "2019.02"
            }
        ],
    },
    "WoohyeokChoi": {
        "name": "Woohyeok Choi",
        "role": "Alumni",
        "email": "woohyeok.choi@kaist.ac.kr",
        "affiliation": "Assistant Professor, Kangwon National University",
        "histories": [
            {
                "role": "Post Doctoral Researcher",
                "enterance": "2021.09",
                "graduation": "2023.08"
            },
            {
                "role": "Ph.D. Student",
                "enterance": "2015.03",
                "graduation": "2021.08"
            },
            {
                "role": "M.S. Student",
                "enterance": "2013.03",
                "graduation": "2015.02"
            }
        ],
    },
    "InyeopKim": {
        "name": "Inyeop Kim",
        "role": "Alumni",
        "email": "inyeop@kse.kaist.ac.kr",
        "affiliation": "Samsung SDS",
        "histories": [
            {
                "role": "Post Doctoral Researcher",
                "enterance": "2021.09",
                "graduation": "2023.01"
            },
            {
                "role": "Ph.D. Student",
                "enterance": "2016.03",
                "graduation": "2021.08"
            }
        ],
    },
    "SoowonKang": {
        "name": "Soowon Kang",
        "role": "Alumni",
        "email": "sw.kang@kaist.ac.kr",
        "affiliation": "Hyundai Motor Group",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2018.03",
                "graduation": "2023.08"
            }
        ],
    },
    "EunjiPark": {
        "name": "Eunji Park",
        "role": "Alumni",
        "email": "eunji.park@kaist.ac.kr",
        "affiliation": "Assistant Professor, Chung-Ang University",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2019.03",
                "graduation": "2023.08"
            }
        ],
    },
    "YouwonShin": {
        "name": "Youwon Shin",
        "role": "Alumni",
        "affiliation": "Samsung Electronics",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2021.03",
                "graduation": "2023.02"
            }
        ],
        "email": "youwon.shin@kaist.ac.kr",
    },
    "JieunLim": {
        "name": "Jieun Lim",
        "role": "Alumni",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2021.09",
                "graduation": "2023.08"
            }
        ],
        "email": "jieun.lim@kaist.ac.kr",
    },
    "HeiYiuLaw": {
        "name": "Hei Yiu Law",
        "role": "Alumni",
        "email": "emilyelhy@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2021.09",
                "graduation": "2023.08"
            }
        ],
    },
    "YongShinKim": {
        "name": "Yongshin Kim",
        "role": "Alumni",
        "affiliation": "OKESTRO",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2020.09",
                "graduation": "2022.08"
            }
        ],
        "email": "ys.k@kaist.ac.kr",
    },
    "JeungminOh": {
        "name": "Jeungmin Oh",
        "role": "Alumni",
        "email": "jminoh@kaist.ac.kr",
        "affiliation": "Hayan Mind",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2012.02",
                "graduation": "LOA"
            }
        ]
    },
    "EugeneLee": {
        "name": "Eugene Lee",
        "role": "Alumni",
        "email": "eugenelee@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2021.03",
                "graduation": "LOA"
            }
        ]
    },
    "CheulyoungPark": {
        "name": "Cheulyoung Park",
        "role": "Alumni",
        "email": "cheulyop@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2018.09",
                "graduation": "2021.02"
            }
        ]
    },
    "MinhyoungKim": {
        "name": "Minhyoung Kim",
        "role": "Alumni",
        "email": "mindrome95@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2019.03",
                "graduation": "2021.02"
            }
        ]
    },
    "JuhoSun": {
        "name": "Juho Sun",
        "role": "Alumni",
        "email": "juho.sun@kaist.ac.kr",
        "affiliation": "Yanolja",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2019.03",
                "graduation": "2021.02"
            }
        ]
    },
    "AukKim": {
        "name": "Auk Kim",
        "role": "Alumni",
        "email": "kimauk@kaist.ac.kr",
        "affiliation": "Assistant Professor at Kangwon National Univ.",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2014.03",
                "graduation": "2020.02"
            }
        ]
    },
    "NaraeCha": {
        "name": "Narae Cha",
        "role": "Alumni",
        "email": "nr.cha@kaist.ac.kr",
        "affiliation": "LG CNS",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2018.03",
                "graduation": "2020.02"
            }
        ]
    },
    "JongwonKim": {
        "name": "Jongwon Kim",
        "role": "Alumni",
        "email": "jong1k@kaist.ac.kr",
        "affiliation": "TmaxSoft",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2017.03",
                "graduation": "2019.08"
            }
        ]
    },
    "DuyeonKim": {
        "name": "Duyeon Kim",
        "role": "Alumni",
        "email": "duyeon@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2017.09",
                "graduation": "2019.08"
            }
        ]
    },
    "SangkeunPark": {
        "name": "Sangkeun Park",
        "role": "Alumni",
        "email": "sk.park@kaist.ac.kr",
        "affiliation": "Assistant Professor at Kyung Hee Univ.",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2014.03",
                "graduation": "2019.08"
            },
            {
                "role": "M.S. Student",
                "enterance": "2012.03",
                "graduation": "2014.02"
            }
        ]
    },
    "JaejeungKim": {
        "name": "Jaejeung Kim",
        "role": "Alumni",
        "affiliation": "Assistant Professor at Chungnam National Univ.",
        "email": "jjk@kaist.ac.kr",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2014.03",
                "graduation": "2019.02"
            }
        ]
    },
    "JeminLee": {
        "name": "Jemin Lee",
        "role": "Alumni",
        "histories": [
            {
                "role": "Post Doctoral Researcher",
                "enterance": "2017.09",
                "graduation": "2018.08"
            }
        ],
        "email": "leejaymin@kaist.ac.kr",
    },
    "RihunKim": {
        "name": "Rihun Kim",
        "role": "Alumni",
        "affiliation": "Kakao",
        "email": "rihun.kim@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2016.03",
                "graduation": "2018.02"
            }
        ]
    },
    "HayoungJung": {
        "name": "Hayoung Jung",
        "role": "Alumni",
        "affiliation": "CJ Olivenetworks",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2016.03",
                "graduation": "2018.02"
            }
        ],
        "email": "hayoung0202@kaist.ac.kr"
    },
    "ChristineBalili": {
        "name": "Christine Balili",
        "role": "Alumni",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2016.03",
                "graduation": "2018.02"
            }
        ],
        "email": "ccbalili@kaist.ac.kr"
    },
    "SujinKwon": {
        "name": "Sujin Kwon",
        "role": "Alumni",
        "affiliation": "ADD",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2015.09",
                "graduation": "2018.02"
            }
        ],
        "email": "sujingjing@kaist.ac.kr"
    },
    "SungwookMoon": {
        "name": "Sungwook Moon",
        "role": "Alumni",
        "affiliation": "Becod",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2015.09",
                "graduation": "2017.08"
            }
        ],
        "email": "m.sw@kaist.ac.kr"
    },
    "HayeonJeong": {
        "name": "Hayeon Jeong",
        "role": "Alumni",
        "affiliation": "Amorepacific Research",
        "email": "hayeon412@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2015.03",
                "graduation": "2017.02"
            }
        ]
    },
    "MinsamKo": {
        "name": "Minsam Ko",
        "role": "Alumni",
        "affiliation": "Assistant Professor at Hanyang Univ. ERICA",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2011.03",
                "graduation": "2016.08"
            }
        ],
        "email": "msko@kaist.ac.kr"
    },
    "JoohyunKim": {
        "name": "Joohyun Kim",
        "role": "Alumni",
        "affiliation": "IQVIA",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2014.09",
                "graduation": "2016.08"
            }
        ],
        "email": "joohyun.kim@kaist.ac.kr"
    },
    "SergeyLeksikov": {
        "name": "Sergey Leksikov",
        "role": "Alumni",
        "affiliation": "Lablup Inc.",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2014.09",
                "graduation": "2016.08"
            }
        ],
        "email": "sergey@kaist.ac.kr"
    },
    "AejinSong": {
        "name": "Aejin Song",
        "role": "Alumni",
        "histories": [
            {
                "role": "Ph.D. Student",
                "enterance": "2014.03",
                "graduation": "2016.02"
            }
        ],
        "email": "aejin.song@kaist.ac.kr"
    },
    "SungjunKang": {
        "name": "Sungjun Kang",
        "role": "Alumni",
        "affiliation": "Skelter Labs",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2013.09",
                "graduation": "2015.08"
            }
        ],
        "email": "sjkang89@kaist.ac.kr"
    },
    "DaeheeShin": {
        "name": "Daehee Shin",
        "role": "Alumni",
        "affiliation": "KB Kookmin Card",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2013.09",
                "graduation": "2015.08"
            }
        ],
        "email": "daehee.shin@kaist.ac.kr"
    },
    "SoobinYang": {
        "name": "Soobin Yang",
        "role": "Alumni",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2013.09",
                "graduation": "2015.08"
            }
        ],
        "email": "subin.yang@kaist.ac.kr"
    },
    "JoonwonLee": {
        "name": "Joonwon Lee",
        "role": "Alumni",
        "affiliation": "Naver",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2012.09",
                "graduation": "2015.02"
            }
        ],
        "email": "cafielo@kaist.ac.kr"
    },
    "YoungchangKo": {
        "name": "Youngchang Ko",
        "email": "youngchang@kaist.ac.kr",
        "role": "Alumni",
        "affiliation": "ADD",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2011.03",
                "graduation": "2013.02"
            }
        ]
    },
    "EunheeYi": {
        "name": "Eunhee Yi",
        "role": "Alumni",
        "affiliation": "LG Electronics",
        "email": "eunhee.yi@kaist.ac.kr",
        "histories": [
            {
                "role": "M.S. Student",
                "enterance": "2010.09",
                "graduation": "2012.08"
            }
        ]
    }
}

const sortMemberByEntrance = (a: MemberInfo, b: MemberInfo) => {
    const findEntranceYear = (member: MemberInfo) => {
        for (let role of memberRoles) {
            const idx = member.histories.findIndex((history) => history.role === role);
            if (idx !== -1)
                return member.histories[idx].enterance;
        }
        throw new Error("Member does not have entrance year");
    }
    return findEntranceYear(a).localeCompare(findEntranceYear(b));
}

const alumnis = Object.values(members).filter(member => member.role === "Alumni")
    .sort((a,b) => sortMemberByEntrance(a, b));
const currentMembers = Object.values(members).filter(member => member.role !== "Alumni")
    .sort((a,b) => sortMemberByEntrance(a, b));

export { alumnis, currentMembers, currentMemberRole};
