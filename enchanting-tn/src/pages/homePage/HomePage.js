import { useState, useEffect } from 'react';

import Button from '../../components/button/Button';
import Destination from '../../components/destination/Destination';
import Dropdown from '../../components/dropdown/Dropdown';
import Image from '../../components/image/Image';
import style from './HomePage.module.scss';

import axiosAPI from '../../services/places';
const HomePage = () => {
    const [placesData, setPlacesData] = useState([]);
    useEffect(() => {
        axiosAPI.get().then((response) => setPlacesData(response.data))
        .catch(error => console.log(error));
    },[]);
    const placesName = placesData && placesData.map(place => place.city);
    const imageURL = require(`../../assets/bike.png`);
    const alt = "banner image";
    return (
        <>
            <section className={style.bannerContainer}>
                <div className={style.bannerContent}>
                    <h6>Welcome To Explorer</h6>
                    <p>Your Adventure Travel Expert in the <span>SOUTH</span></p>
                    <div className="selectionMenu">
                        <Dropdown options={placesName}/>
                        <Button className={style.exploreBtn}>Explore</Button>
                    </div>
            </div>
            <Image src={imageURL} alt={alt} className="bannerImage" />
            </section>
            <main className={style.destinationContainer}>
                <Destination placesData={placesData} sectionTitle={`Destinations`} sectionDescription={`Just for you. Because you and your bike are special to us!`}/>
            </main>
        </>
    );
};

export default HomePage;