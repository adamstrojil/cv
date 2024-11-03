import { DATA } from '@/app/data/AdamStrojilEnglish';
import { Page, Main, TwoColumnLayout } from '../components';
import { Header, Languages, Skills, Footer, WorkExperience, Education, PersonalProjects } from '../sections';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const { specialization, name, surname, contacts, workExperience, education, projects, skills, languages } = DATA;
const fullName = `${name} ${surname}`;

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
    setRequestLocale(locale);

    const t = useTranslations('Home');
    return (
        <Page>
            {/* fullName */}
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
            <Footer />
        </Page>
    );
};

export default Home;
