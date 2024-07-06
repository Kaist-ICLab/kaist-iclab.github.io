interface Course {
    year: number
    semester: string
    code: string
    title: string
    syllabus: string
}
const courses: Course[] = [
    {
        year: 2022,
        semester: 'Spring',
        code: 'CS374',
        title: 'Introduction to Human-Computer Interaction',
        syllabus:
            'https://docs.google.com/document/d/1k6iAR_OIMbKWnH2xFG_k-A6wLcLoiIutYeal0ShGqtU/edit?usp=sharing',
    },
    {
        year: 2022,
        semester: 'Spring',
        code: 'CS592',
        title: 'Sensor Data Science',
        syllabus:
            'https://docs.google.com/document/d/1YYzqnBwZI9ZqoxNkw9r3ZVcirIKzweBpYC3MP5uLYfA/edit?usp=sharing',
    },
    {
        year: 2021,
        semester: 'Fall',
        code: 'CS492',
        title: 'Data Visualization',
        syllabus:
            'https://docs.google.com/document/d/1QTImsPRIhCS7qPwgXhP7YWscqgiexV4YbW4H90uXGH0/edit?usp=sharing',
    },
    {
        year: 2021,
        semester: 'Spring',
        code: 'CS592',
        title: 'Advanced HCI',
        syllabus:
            'https://docs.google.com/document/d/12b2XIvnOmTgIi3EGAr27LkuLgiByT4nth1si3QqMCMQ/edit?usp=sharing',
    },
    {
        year: 2021,
        semester: 'Spring',
        code: 'KSE531',
        title: 'Human-Computer Interaction: Theory and Design',
        syllabus:
            'https://docs.google.com/document/d/1tINPiSct9sda5kRfgHwi3vITMxUBqr5lrcdUDE5-0J4/edit?usp=sharing',
    },
    { year: 2020, semester: 'Fall', code: 'KSE801', title: 'Sensor Data Science', syllabus: '' },
    { year: 2020, semester: 'Spring', code: 'IE481', title: 'Data Visualization', syllabus: '' },
    {
        year: 2020,
        semester: 'Spring',
        code: 'KSE624',
        title: 'Mobile Pervasive Computing',
        syllabus: '',
    },
    { year: 2019, semester: 'Fall', code: 'KSE531', title: 'Sensor Data Science', syllabus: '' },
    {
        year: 2018,
        semester: 'Fall',
        code: 'CS188(UCLA)',
        title: 'Human-Computer Interaction',
        syllabus:
            'https://docs.google.com/document/d/1T-vRhg7h20Y47Kc47UFKLTAfCeUpuyNiraQVp_Mqzwo/edit',
    },
    {
        year: 2017,
        semester: 'Fall',
        code: 'IE566/KSE531',
        title: 'Human-Computer Interaction',
        syllabus: '',
    },
    {
        year: 2017,
        semester: 'Spring',
        code: 'KSE624',
        title: 'Mobile Pervasive Computing for Knowledge Services',
        syllabus: '',
    },
    {
        year: 2017,
        semester: 'Spring',
        code: 'KSE966/986',
        title: 'Seminar: Research Methods in Knowledge Service Engineering',
        syllabus: '',
    },
    {
        year: 2016,
        semester: 'Fall',
        code: 'KSE652',
        title: 'Social Computing Systems Design and Analysis',
        syllabus: '',
    },
    {
        year: 2016,
        semester: 'Fall',
        code: 'KSE966/986',
        title: 'Seminar: Research Methods in Knowledge Service Engineering',
        syllabus: '',
    },
    {
        year: 2016,
        semester: 'Fall',
        code: 'CoE203',
        title: 'Design Project for IT Convergence',
        syllabus: '',
    },
    {
        year: 2016,
        semester: 'Spring',
        code: 'KSE624',
        title: 'Mobile Pervasive Computing for Knowledge Services',
        syllabus: '',
    },
    {
        year: 2015,
        semester: 'Fall',
        code: 'KSE652',
        title: 'Social Computing Systems Design and Analysis',
        syllabus: '',
    },
    {
        year: 2015,
        semester: 'Fall',
        code: 'CoE203',
        title: 'Design Project for IT Convergence',
        syllabus: '',
    },
    {
        year: 2015,
        semester: 'Spring',
        code: 'KSE624',
        title: 'Mobile Pervasive Computing for Knowledge Services',
        syllabus: '',
    },
    {
        year: 2015,
        semester: 'Fall',
        code: 'KSE652',
        title: 'Social Computing Systems Design and Analysis',
        syllabus: '',
    },
    {
        year: 2014,
        semester: 'Fall',
        code: 'ITC203',
        title: 'Design Project for IT Convergence',
        syllabus: '',
    },
    {
        year: 2014,
        semester: 'Spring',
        code: 'KSE624',
        title: 'Mobile Pervasive Computing for Knoweldge Services',
        syllabus: '',
    },
    {
        year: 2013,
        semester: 'Fall',
        code: 'KSE652',
        title: 'Social Computing Systems Design and Analysis',
        syllabus: '',
    },
    {
        year: 2013,
        semester: 'Fall',
        code: 'ITC203',
        title: 'Design Project for IT Convergence',
        syllabus: '',
    },
    { year: 2013, semester: 'Spring', code: 'KSE631', title: 'Content Networking', syllabus: '' },
    {
        year: 2013,
        semester: 'Spring',
        code: 'KSE966/986',
        title: 'Seminar: Research Methods in Knowledge Service Engineering',
        syllabus: '',
    },
    {
        year: 2012,
        semester: 'Fall',
        code: 'KSE652',
        title: 'Social Computing Systems Design and Analysis',
        syllabus: '',
    },
    {
        year: 2012,
        semester: 'Fall',
        code: 'KSE966/986',
        title: 'Seminar: Research Methods in Knowledge Service Engineering',
        syllabus: '',
    },
    { year: 2012, semester: 'Spring', code: 'KSE631', title: 'Content Networking', syllabus: '' },
    {
        year: 2011,
        semester: 'Fall',
        code: 'KSE801',
        title: 'Human Computation and Crowdsourcing',
        syllabus: '',
    },
    { year: 2011, semester: 'Fall', code: 'ED100', title: 'Freshman Design', syllabus: '' },
    { year: 2011, semester: 'Spring', code: 'KSE631', title: 'Content Networking', syllabus: '' },
    { year: 2011, semester: 'Spring', code: 'ED100', title: 'Freshman Design', syllabus: '' },
    {
        year: 2010,
        semester: 'Fall',
        code: 'KSE801',
        title: 'Mobile and Pervasive Computing for Knowledge Services',
        syllabus: '',
    },
]

export type { Course }
export default courses
