import { PersonData } from './types';

export const DATA: PersonData = {
    name: 'Adam',
    surname: 'Strojil',
    specialization: 'Frontend developer',
    contacts: {
        linkedIn: 'adam-strojil',
        github: 'adamstrojil',
    },
    workExperience: [
        {
            company: 'KOALA42',
            since: '2023-11',
            until: '',
            role: 'React.js developer',
            technologies: [
                { text: 'react', variant: 'primary' },
                { text: 'typescript', variant: 'primary' },
                { text: 'RTK query', variant: 'primary' },
                { text: 'react hook form', variant: 'primary' },
                { text: 'zod', variant: 'primary' },
                { text: 'tanstack table', variant: 'primary' },
                { text: 'radix ui', variant: 'primary' },
                { text: 'mui', variant: 'primary' },
                { text: 'visx', variant: 'secondary' },
                { text: 'lodash', variant: 'secondary' },
                { text: 'i18n', variant: 'secondary' },
                { text: 'react router', variant: 'secondary' },
                { text: 'redux', variant: 'secondary' },
                { text: 'hooks', variant: 'secondary' },
                { text: 'css modules', variant: 'secondary' },
                { text: 'docker', variant: 'secondary' },
                { text: 'directus', variant: 'secondary' },
            ],
            descriptionParagraphs: [
                'As a freelance React developer, I collaborate closely with KOALA42, a Prague/Zlín-based company, where I help with the frontend development of various projects. My work involves partnering with cross-functional teams and developers, ensuring the delivery of efficient, user-friendly web applications.',
                "I've contributed to several projects, including an insurance contracts management system where I developed key frontend features in react, as well as backend features using a directus interface. For another, machine data monitoring system, I implemented real-time data visualization using Visx charts. I also built frontend interface for a product manufacturing management system, which included an administrative oversight module and a terminal-based module that integrates a hardware barcode scanner for tracking manufacturing progress.",
            ],
        },
        {
            company: 'CN Group',
            since: '2020-01',
            until: '2022-02',
            role: 'React.js developer',
            technologies: [
                { text: 'react', variant: 'primary' },
                { text: 'typescript', variant: 'primary' },
                { text: 'hooks', variant: 'primary' },
                { text: 'redux', variant: 'primary' },
                { text: 'a11y', variant: 'primary' },
                { text: 'atomic design', variant: 'secondary' },
                { text: 'react-intl', variant: 'secondary' },
                { text: 'formik', variant: 'secondary' },
                { text: 'ES6', variant: 'secondary' },
                { text: 'HTML', variant: 'secondary' },
                { text: 'CSS', variant: 'secondary' },
                { text: 'rxJS', variant: 'secondary' },
                { text: 'jest', variant: 'secondary' },
                { text: 'testing-library', variant: 'secondary' },
                { text: 'git', variant: 'secondary' },
                { text: 'azure TFS', variant: 'secondary' },
                { text: 'ramda', variant: 'secondary' },
                { text: 'yarn', variant: 'secondary' },
                { text: 'wcag', variant: 'secondary' },
                { text: 'styled-components', variant: 'secondary' },
            ],
            descriptionParagraphs: [
                'I began my frontend career working on an internal project for cngroup.dk, before transitioning to a commercial project with a German company Interflex. There, I developed and maintained modules within a large management system, contributed to an internal UI library by creating accessible components, and collaborated with multiple teams across repositories using Azure DevOps, Git, and Yarn. My role also involved writing tests, documentation, and manuals for new features.',
                'Later, I became a key member of a team tasked with ensuring the system’s compliance with WCAG 2.1 level AA accessibility standards, working closely with web accessibility experts.',
            ],
        },
        {
            company: 'CN Group',
            since: '2019-04',
            until: '2020-01',
            role: 'Quality assurance engineer',
            technologies: [
                { text: 'cypress', variant: 'primary' },
                { text: 'javascript', variant: 'primary' },
                { text: 'E2E testing', variant: 'primary' },
                { text: 'jira', variant: 'secondary' },
                { text: 'ISTQB', variant: 'secondary' },
            ],
            descriptionParagraphs: [
                'In my first working experience of a software test engineer, I was using Cypress to conduct end-to-end and regression tests. I worked on two projects, an online tabloid magazine and an e-shop selling electronics.  During this time, I gained valuable experience in the software testing, development processes and teamwork. I also completed my ISTQB Foundation level certification on this position.',
            ],
        },
        {
            company: 'ESN Zlin',
            since: '2019-01',
            until: '2022-02',
            role: 'Volunteer',
            technologies: [
                { text: 'foreign languages', variant: 'primary' },
                { text: 'teamwork', variant: 'primary' },
                { text: 'communication', variant: 'primary' },
                { text: 'leadership', variant: 'primary' },
                { text: 'event management', variant: 'secondary' },
                { text: 'public speaking', variant: 'secondary' },
                { text: 'social awareness', variant: 'secondary' },
            ],
            descriptionParagraphs: [
                'As an ESN member I was supporting incoming international students and helping them adjust to life in Zlin. I greatly improved my language and social skills, whilst making friends from all around the world. I helped with organizing and managing various inclusion events. I also provided support to students during the COVID-19 crisis, for which I was awarded with a scholarship by the university.',
            ],
        },
    ],
    projects: [
        {
            name: 'CV page',
            type: 'Ta daa!',
            since: '2023-10',
            descriptionParagraphs: [
                'This project exists mainly so I could get some hands-on experience with Next.js, tailwindCSS and css grid, but also to update and redesign my old CV.',
            ],
            technologies: [
                { text: 'typescript', variant: 'primary' },
                { text: 'next.js', variant: 'primary' },
                { text: 'TailwindCSS', variant: 'primary' },
                { text: 'grid', variant: 'secondary' },
            ],
            linkUrl: 'https://adamstrojil.github.io/cv',
        },
        {
            name: 'Code Words',
            type: 'Adaptation of a popular card game',
            since: '2023-07',
            descriptionParagraphs: [
                'When trying to play the original board game Code Names within an international group, the language barrier we faced motivated me to start this project. I decided to make a digital version of it, with multi-language support, dark theme option, instant card shuffling, and various game modes.',
                'To build it I used React.js with typescript, emotion for styling and theming, react router for navigation and react-zxing to handle QR codes (used to scan the game map). I used generative AI from Adobe Express for the cards graphics. For projects structure I choose the Atomic design approach. The code is open-source on my github. ',
            ],
            technologies: [
                { text: 'typescript', variant: 'primary' },
                { text: 'react', variant: 'primary' },
                { text: 'react router', variant: 'primary' },
                { text: 'hooks', variant: 'primary' },
                { text: 'redux', variant: 'primary' },
                { text: 'QR codes', variant: 'primary' },
                { text: 'animations', variant: 'primary' },
                { text: 'generative ai', variant: 'primary' },
                { text: 'Adobe Express', variant: 'secondary' },
                { text: 'pseudo-elements', variant: 'secondary' },
                { text: 'flexbox', variant: 'secondary' },
                { text: 'react-icons', variant: 'secondary' },
            ],
            linkUrl: 'https://adamstrojil.github.io/code-words',
        },
        {
            name: 'JS questions quiz',
            type: 'Educational quiz app ',
            since: '2022-12',
            descriptionParagraphs: [
                'Based on collection of advanced JS questions collected by Lydia Hallie.',
                'First I created a simple single-use parser to convert her markdown version of the questions into JSON. Then I created a web, quiz-like interface to go through the questions and keep track of answers. Upon selecting an answer, the solution along with an explanation are displayed. Answers are stored in local storage, so they persist between multiple visits of the page.',
                'In this project, I tried to put emphasis on following web a11y best practices, resulting in it being (among other things) fully usable with the keyboard only.',
            ],
            technologies: [
                { text: 'typescript', variant: 'primary' },
                { text: 'react', variant: 'primary' },
                { text: 'JSON', variant: 'primary' },
                { text: 'a11y', variant: 'primary' },
                { text: 'local storage', variant: 'secondary' },
                { text: 'animations', variant: 'secondary' },
            ],
            linkUrl: 'https://adamstrojil.github.io/js-quiz-app',
        },
    ],
    education: [
        {
            school: 'TBU Zlin', //Thomas Bata University in Zlin
            type: "Master's degree",
            descriptionParagraphs: [
                "During my master's studies, I deepened my knowledge of computer technology, programming, data processing, database systems, cybernetics, artificial intelligence, evolutionary and optimization techniques, and computer graphics.",
            ],
            since: '2020-09',
            until: '2023-06',
        },
        {
            school: 'YU İzmir',
            type: 'Erasmus+',
            descriptionParagraphs: [
                "I spent two semesters of my master's studies at prestigious private Yaşar University in İzmir, Turkey. The courses I took included Design Patterns, Software Project Management, Low level programming and Economics.",
            ],
            since: '2021-01',
            until: '2022-01',
        },
        {
            school: 'TBU Zlin',
            type: "Bachelor's degree",
            descriptionParagraphs: [
                'I graduated in software engineering. I gained practical skills in object oriented programming, desktop application design, data-structures, algorithmization, user interface design, mobile application programming, computer architecture, operating systems, and networks.',
            ],
            since: '2015-09',
            until: '2019-06',
        },
        {
            school: 'ESTG IPVC', //Instituto Politécnico de Viana do Castelo
            type: 'Erasmus+',
            descriptionParagraphs: [
                'In my first international exchange, I spent one semester in Viana do Castelo, Portugal. I took several classes - Java programming, Web project, Digital Signal Processing, and Computer Architecture.',
                'It was a life-changing experience for me, and helped me become the independent, open-minded and curious person I am today.',
            ],
            since: '2018-09',
            until: '2019-01',
        },
    ],
    languages: [
        { language: 'czech', level: 'c2' },
        { language: 'english', level: 'c1' },
        { language: 'slovak', level: 'c1' },
        { language: 'turkish', level: 'b1' },
        { language: 'german', level: 'a1' },
    ],
    skills: [
        {
            name: 'SW development',
            skills: [
                'typescript',
                'react',
                'hooks',
                'redux',
                'rtk',
                'a11y',
                'i18n',
                'git',
                'es6',
                'html5',
                'css',
                'wcag',
                'ramda',
                'lodash',
                'emotion',
                'yarn',
                'tailwindCSS',
                'npm',
                'styled-components',
            ],
        },
        {
            name: 'personal traits',
            skills: [
                'flexibility',
                'responsibility',
                'dedication',
                'open-minded',
                'fairplay',
                'teamwork',
                'independence',
                'humour',
                'curiousity',
            ],
        },
        {
            name: 'tools',
            skills: ['vs code', 'iTerm', 'ohMyZSH', 'photoshop', 'ms office'],
        },
        {
            name: 'other',
            skills: ["driver's license (B)", 'rock-climbing', 'music'],
        },
    ],
};
