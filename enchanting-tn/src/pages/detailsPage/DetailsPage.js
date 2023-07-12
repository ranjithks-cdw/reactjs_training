import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Image from '../../components/image/Image';
import Destination from '../../components/destination/Destination';
import style from './DetailsPage.module.scss';
import {axiosAPI} from '../../services/apiService';
import {PAGE_AND_CARD} from '../../constants/pageConstants';
/**
 * @description Function to return DetailsPage component
 * @returns Details Page
 * @author @ranjithks-cdw
 */
const DetailsPage = () => {
    const placeName = useParams().place;
    const imageURL = require(`../../assets/${placeName}.png`);
    const [placeData, setPlacesData] = useState({});
    const [temperature, setTemperature] = useState('-');
    
    useEffect(() => {
        axiosAPI.places.get(`/places/${placeName}`).then((response) => setPlacesData(response.data))
        .catch(error => console.log(error));
        axiosAPI.temperature.get(`${placeName}&aqi=no`).then((response) => setTemperature(response.data.current.temp_c))
        .catch(error => console.log(error));
    },[placeName]);

    const placeDescription = placeData.fullDescription && placeData.fullDescription.split("\\n")
                                .map((content, idx)=> {
                                return <p key={idx}>{content}</p>
                            });

    return (
        <>
            <section className={style.bannerContainer} >
                <div className={style.bannerContent}>
                    <h6>{placeData && placeData.city}</h6>
                    <p className={style.description}>{placeData && placeData.place}</p>
                    <p className={style.temperature}>{temperature && temperature}°C</p>
                </div>
                <Image src={imageURL} alt={placeName} className='bannerImage' />
            </section>
            <main>
                <div className={style.detailsContainer}>
                    {placeDescription && placeDescription}
                </div>
                <Destination isDetailsPage={true} relatedPlaces={placeData.relatedPlaces} sectionTitle={PAGE_AND_CARD.SIMILAR_DESTINATION} sectionDescription={PAGE_AND_CARD.DESTINATION_MESSAGE}/>
            </main>
        </>
    );
};

export default DetailsPage;