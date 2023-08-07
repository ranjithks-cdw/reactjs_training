import { useEffect, useState } from 'react';
import {FadeLoader} from 'react-spinners';
import { TEASERS } from '../../constants/pageConstants';
import { getShortTeasers } from '../../services/MoviesService';
import TeaserCards from '../../components/teaserCards/TeaserCards';
import styles from './Teasers.module.scss';

/**
 * @description Method to construct Teasers container
 * @returns Teasers component
 */
const Teasers = () => {
    const [teasers, setTeasers] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        const getTeasers = async () => {
            const teasers = await getShortTeasers();
            setTeasers(teasers);    
        }
        getTeasers();
        const loadTimer = setTimeout(() => {
            setLoad(false);
        }, 2000);

        return () => {
            clearTimeout(loadTimer);
        }
    },[]);
    const teaserCards = teasers?.map((teaser,index) => <TeaserCards key={index} movie={teaser} poster={TEASERS.VIDEO_POSTERS[index]}/>);
    return (
        <div className={styles.teasersContainer}>
            <header className={styles.teaserHeader}>
                <h5>{TEASERS.TITLE}</h5>
            </header>
            <div className={styles.videosContainer}>
                {load ? 
                    <div className={styles.loader}>
                        <FadeLoader color='#4b90e2'/> 
                    </div>
                    :
                    teaserCards 
                }
            </div>
        </div>
    );
};

export default Teasers;