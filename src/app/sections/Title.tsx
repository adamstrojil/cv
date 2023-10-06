type Props = {
    name: string;
    specialization: string;
};

export const Title = ({ name, specialization }: Props) => {
    const [specializationFirstWord, specializationSecondWord] = specialization.split(' ');

    return (
        <h1 className="text-5xl font-bold font-header">
            {name}
            <em className="text-blue-500 not-italic block mt-4 capitalize leading-11">
                {specializationFirstWord}
                {specializationSecondWord && <span className="block">{specializationSecondWord}</span>}
            </em>
        </h1>
    );
};
