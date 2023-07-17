import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
    let navigate = useNavigate();
    const placeName = useParams().place;
    const [placeData, setPlacesData] = useState({});
    const [temperature, setTemperature] = useState('-');
    const sectionDescription = `${PAGE_AND_CARD.SIMILAR_DESTINATION_MESSAGE} ${placeName}`;
    
    useEffect(() => {
        axiosAPI.places.get(`/places/${placeName}`).then((response) => setPlacesData(response.data))
        .catch(error => console.log(error));
        axiosAPI.temperature.get(`${placeName}&aqi=no`).then((response) => setTemperature(response.data.current.temp_c))
        .catch(error => console.log(error));
    },[placeName]);

    useEffect(() => {
        if(placeData.length <=0)
            navigate('/');
    });

    const placeDescription = placeData?.fullDescription?.split("\\n")
                                .map((content, idx)=> {
                                return <p key={idx}>{content}</p>
                            });

    return (
        <>
            <section className={style.bannerContainer} >
                <div className={style.bannerContent}>
                    <h6>{placeData && placeData.city}</h6>
                    <p className={style.description}>{placeData && placeData.place}</p>
                    <p className={style.temperature}>{temperature && temperature}<sup>°</sup>C</p>
                </div>
                <Image src={`/images/${placeName}.png`} alt={placeName} className='bannerImage' />
            </section>
            <main>
                <div className={style.detailsContainer}>
                    {placeDescription}
                </div>
                <Destination isDetailsPage={true} relatedPlaces={placeData.relatedPlaces} sectionTitle={PAGE_AND_CARD.SIMILAR_DESTINATION} sectionDescription={sectionDescription}/>
            </main>
        </>
    );
};

export default DetailsPage;