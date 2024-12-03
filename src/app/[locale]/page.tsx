'use client';

import { DATA } from '@/app/data/AdamStrojilEnglish';
import { Page, Main, TwoColumnLayout, HeaderActions } from '../components';
import { Header, Languages, Skills, Footer, WorkExperience, Education, PersonalProjects } from '../sections';
import { useTranslations } from 'next-intl';
import { createContext, useState } from 'react';

const { specialization, name, surname, contacts, workExperience, education, projects, skills, languages } = DATA;
const fullName = `${name} ${surname}`;

const Home = () => {
    const [isPrinting, setIsPrinting] = useState(false);
    const t = useTranslations('Home');

    return (
        <Page>
            <HeaderActions setIsPrinting={setIsPrinting} />
            <Header name={fullName} specialization={t('position')} contacts={contacts} />
            <Main>
                <PrinterContext.Provider value={isPrinting}>
                    <TwoColumnLayout
                        main={<WorkExperience workExperiences={workExperience} />}
                        aside={<Education educations={education} />}
                    />
                    <TwoColumnLayout
                        main={<PersonalProjects personalProjects={projects} />}
                        aside={
                            <>
                                <Skills skills={skills} />
                                <Languages languages={languages} />
                            </>
                        }
                    />
                </PrinterContext.Provider>
            </Main>
            <Footer />
        </Page>
    );
};

export default Home;

export const PrinterContext = createContext(true);
