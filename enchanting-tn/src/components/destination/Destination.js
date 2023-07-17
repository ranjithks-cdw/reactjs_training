import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SectionHeader from '../sectionHeader/SectionHeader';
import Card from '../card/Card';
import style from './Destination.module.scss';
import { axiosAPI } from '../../services/apiService';
/**
 * @description Function to create Destination component
 * @returns Destination component
 * @author @ranjithks-cdw
 */
const Destination = ({sectionTitle, sectionDescription, relatedPlaces, isDetailsPage}) => {
    const [placesData, setPlacesData] = useState([]);
    useEffect(() => {
        axiosAPI.places.get()
        .then(response => {
            if(isDetailsPage) {
                relatedPlaces && setPlacesData(response.data.filter(place => relatedPlaces.includes(place.city)));
            }
            else {
                setPlacesData(response.data);
            }
        })
        .catch(error => console.log(error));
    },[isDetailsPage,relatedPlaces]);
    const cards = placesData && placesData.map((place, index) => <Card key={index} data={place}/>);
    return (
        <div className={style.destinationContainer}>
            <SectionHeader sectionTitle={sectionTitle} sectionDescription={sectionDescription} />
            <div className={style.cardsContainer}>
                {cards}
            </div>
        </div>
    );
};

Destination.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    sectionDescription: PropTypes.string.isRequired,
    relatedPlaces: PropTypes.array,
    isDetailsPage: PropTypes.bool.isRequired
}

export default Destination;