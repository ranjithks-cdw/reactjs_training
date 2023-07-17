import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/button/Button';
import Destination from '../../components/destination/Destination';
import Dropdown from '../../components/dropdown/Dropdown';
import Image from '../../components/image/Image';
import style from './HomePage.module.scss';
import {axiosAPI} from '../../services/apiService';

import { PAGE_AND_CARD, BUTTON } from '../../constants/pageConstants';
/**
 * @description Function to construct Home Page component
 * @returns Home page component
 */
const HomePage = () => {
    let navigate = useNavigate();
    const [placesData, setPlacesData] = useState([]);
    useEffect(() => {
        axiosAPI.places.get().then((response) => setPlacesData(response.data))
        .catch(error => console.log(error));
    },[]);
    const placesName = placesData && placesData.map(place => place.city);

    const bannerMessage = <p>Your Adventure Travel Expert in the <span>SOUTH</span></p>;

    const [selectedPlace, setSelectedPlace] = useState('');
    const dropdownPlace = (event) => {
        setSelectedPlace(event.target.value.toLowerCase());
    };
    const navigateToPlace = (event) => {
        selectedPlace ? navigate(`/details/${selectedPlace}`) : navigate('/');
    };
    return (
        <>
            <section className={style.bannerContainer}>
                <div className={style.bannerContent}>
                    <h6>{PAGE_AND_CARD.WELCOME_MESSAGE}</h6>
                    {bannerMessage}
                    <div className="selectionMenu">
                        <Dropdown options={placesName} setDropdown={dropdownPlace}/>
                        <Button className={style.exploreBtn} btnClickHandler={navigateToPlace}>{BUTTON.EXPLORE}</Button>
                    </div>
                </div>
                <Image src={`images/bike.png`} alt={`banner image`} className="bannerImage" />
            </section>
            <main>
                <Destination isDetailsPage={false} placesData={placesData} sectionTitle={PAGE_AND_CARD.DESTINATION} sectionDescription={PAGE_AND_CARD.DESTINATION_MESSAGE}/>
            </main>
        </>
    );
};

export default HomePage;