'use client';

import { useTranslations } from 'next-intl';
import { DATA } from '@/app/data/AdamStrojilEnglish';
import { PrinterProvider } from '../context/PrinterContext';
import { Page, Main, TwoColumnLayout, HeaderActions } from '../components';
import { Header, Languages, Skills, Footer, WorkExperience, Education, PersonalProjects } from '../sections';

const { specialization, name, surname, contacts, workExperience, education, projects, skills, languages } = DATA;
const fullName = `${name} ${surname}`;

const Home = () => {
    const t = useTranslations('Home');

    return (
        <Page>
            <PrinterProvider>
                <HeaderActions />
                <Header name={fullName} specialization={t('position')} contacts={contacts} />
                <Main>
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
                </Main>
            </PrinterProvider>
            <Footer />
        </Page>
    );
};

export default Home;
