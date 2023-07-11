import { useEffect, useState } from 'react';
import Button from '../button/Button';
import Dropdown from '../dropdown/Dropdown';
import InputGroup from '../inputGroup/InputGroup';
import SectionHeader from '../sectionHeader/SectionHeader';
import style from './ContactForm.module.scss';
import axiosAPI from '../../services/places';

const ContactForm = () => {
    const sectionTitle = `Contact Us`;
    const sectionDescription = `Our Sales Team will reach out to you ASAP!`;
    const [placesName, setPlacesName] = useState([]);
    useEffect(() => {
        axiosAPI.get().then(response => {
            const places = response.data;
            setPlacesName(places && places.map(place => place.city))
        });
    },[]);
    return (
        <div className={style.formContainer}>
            <form className={style.formContent}>
                <SectionHeader sectionTitle={sectionTitle} sectionDescription={sectionDescription} />
                <InputGroup>
                    <label className={style.inputLabel}>Name</label>
                    <input type="text" className={style.inputBox} />
                </InputGroup>
                <InputGroup>
                    <label className={style.inputLabel}>Your Home Town</label>
                    <Dropdown options={placesName}/>
                </InputGroup>
                <InputGroup>
                    <label className={style.inputLabel}>Where would you like to go?</label>
                    <Dropdown options={placesName}/>
                </InputGroup>
                <InputGroup>
                    <label className={style.inputLabel}>Contact Number</label>
                    <input type="tel" className={style.inputBox} />
                </InputGroup>
                <Button className={style.submitBtn}>Submit Interest</Button>
            </form>
        </div>
    );
};

export default ContactForm;