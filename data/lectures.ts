import { LectureProp } from "@/types/lecture";

const lectures: LectureProp[] = [
    {
        type: "Main",
        img: "/lectures/CS374.png",
        name: "Introduction to Human-Computer Interaction",
        code: "CS374",
        description: "HCI deals with the design of systems to support the ways people communicate with computers. " + 
            "This course covers interaction design methods and principles for better usability through hands-on experiences.",
        audience: "For Undergraduate Students",
        syllabuses: [
            {
                link: "https://docs.google.com/document/d/1lylLVmO8svuXC5iiqjIMQOpX7eYtlo4XSCNgWqxy9Vc/edit?usp=sharing",
                semester: "2023 Fall"
            },
            {
                link: "https://docs.google.com/document/d/1k6iAR_OIMbKWnH2xFG_k-A6wLcLoiIutYeal0ShGqtU/edit",
                semester: "2022 Spring"
            }
        ]
    },
    {
        type: "Main",
        img: "/lectures/CS481.png",
        name: "Data Visualization",
        code: "CS481",
        description: "Data visualization helps scientists interact with data and supports extract insights, test hypotheses, and tell data stories for decision making."+
            " This course covers fundamental concepts to effectively visualize data.",
        audience: "For Undergraduate Students & Graduate Students",
        syllabuses: [
            {
                link: "https://docs.google.com/document/d/1kCSHTEsUXjkjcaV4awMrI-i0vIFvlUE_8sN5C2BJnMA/edit?usp=sharing",
                semester: "2023 Spring"
            }
        ]
    },
    {
        type: "Main",
        img: "/lectures/CS565.png",
        name: "IoT Data Science",
        code: "CS565/DS565",
        description: "Computer is in everywhere (i.e., IoT), and able to sense users through various sensors. " +
            "This course covers the entire process of IoT data science from data collection to sensor-driven application",
        audience: "For Undergraduate & Graduate Students",
        syllabuses: [
            {
                link: "https://docs.google.com/document/d/1mU-SesMat3zBO3f7uwgQFxXa1flHi1B_Iyl3mPcITG4/edit?usp=sharing",
                semester: "2024 Spring"
            },
            {
                link: "https://docs.google.com/document/d/1RkVzO9BRBFxpABKsdp_7ik8IUWONbQ7sJxS0z6xoUu4/edit?usp=drive_link",
                semester: "2023 Spring"
            }
        ]
    },
    {
        type: "Main",
        img: "/lectures/CS584.png",
        name: "Human-Computer Interaction",
        code: "CS584",
        description: "This course overviews theories and design practices in HCI fields for those graduate students who are interested in conducting HCI research. "+
            "This course covers basic principle of HCI, such as needfinding and design.",
        audience: "For Graduate Students",
        syllabuses: [
            {
                link: "https://docs.google.com/document/d/11UG5Ty8TYj90CpjK4DDSmSxI5ZKTUvmcGZkjpYEjTYs/edit?usp=sharing",
                semester: "2024 Spring"
            },
        ]
    },
]

export default lectures;

