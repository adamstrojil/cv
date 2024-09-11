import { Contacts as ContactsType } from '@/app/data/types';

import { TwoColumnLayout } from '../../components';
import { Contacts, Title } from './components';

type Props = {
    name: string;
    specialization: string;
    contacts: ContactsType;
};

export const Header = ({ name, specialization, contacts }: Props) => (
    <header className="grid grid-cols-5 grid-rows-auto gap-x-20 justify-center">
        <TwoColumnLayout
            main={<Title name={name} specialization={specialization} />}
            aside={<Contacts {...contacts} />}
        />
    </header>
);
