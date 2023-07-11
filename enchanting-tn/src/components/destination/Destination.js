import SectionHeader from '../sectionHeader/SectionHeader';
import Card from '../card/Card';
import style from './Destination.module.scss';
const Destination = ({placesData, sectionTitle, sectionDescription}) => {
    const cards = placesData && placesData.map((place, index) => <Card key={index} data={place}/>);
    return (
        <>
            <SectionHeader sectionTitle={sectionTitle} sectionDescription={sectionDescription} />
            <div className={style.cardsContainer}>
                {cards}
            </div>
        </>
    );
};

export default Destination;