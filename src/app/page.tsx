import { DATA } from './data/AdamStrojilEnglish';
import { Page, Main, TwoColumnLayout } from './components';
import { Header, Languages, Skills, Footer, WorkExperience, Education, PersonalProjects } from './sections';

const { specialization, name, surname, contacts, workExperience, education, projects, skills, languages } = DATA;
const fullName = `${name} ${surname}`;

const Home = () => (
    <Page>
        <Header name={fullName} specialization={specialization} contacts={contacts} />
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

export default Home;
