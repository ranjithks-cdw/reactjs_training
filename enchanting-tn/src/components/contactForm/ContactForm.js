import { useEffect, useState } from 'react';
import Button from '../button/Button';
import Dropdown from '../dropdown/Dropdown';
import InputGroup from '../inputGroup/InputGroup';
import SectionHeader from '../sectionHeader/SectionHeader';
import style from './ContactForm.module.scss';
import {axiosAPI} from '../../services/apiService';
import {BUTTON, CONTACT_FORM} from '../../constants/pageConstants';
import {validateForm} from '../../utils/formValidation';
/**
 * @description Function to construct Form component
 * @returns Form Component
 * @author @ranjithks-cdw
 */
const ContactForm = () => {
    const sectionTitle = CONTACT_FORM.TITLE;
    const sectionDescription = CONTACT_FORM.DESCRIPTION;

    const [placesName, setPlacesName] = useState([]);
    const [formDetails, setFormDetails] = useState({
        customerName: '',
        contactNumber: '',
        homeTown: '',
        travelDestination: ''
    });

    const [successMessage, setSuccessMessage] = useState();

    useEffect(() => {
        axiosAPI.places.get().then(response => {
            const places = response.data;
            setPlacesName(places && places.map(place => place.city))
        });
    },[]);

    const setName = event => {
        setFormDetails({...formDetails, customerName: event.target.value});
    };
    const setContact = event => {
        setFormDetails({...formDetails, contactNumber: event.target.value});
    };
    const homeTownSelection = place => {
        setFormDetails({...formDetails, homeTown: place});
    };
    const destinationSelection = place => {
        setFormDetails({...formDetails, travelDestination: place});
    };
    const recordInterest = event => {
        event.preventDefault();
        const message = validateForm(formDetails);
        setSuccessMessage(message);
        event.target.reset();
        setTimeout(()=> {
            setSuccessMessage(false);
        },5000);

        setFormDetails({
            customerName: '',
            contactNumber: '',
            homeTown: '',
            travelDestination:''
        });
    };

    return (
        <div className={style.formContainer}>
            <form className={style.formContent} onSubmit={recordInterest}>
                <SectionHeader sectionTitle={sectionTitle} sectionDescription={sectionDescription}/>
                <InputGroup>
                    <label className={style.inputLabel}>{CONTACT_FORM.LABELS.NAME}</label>
                    <input type="text" className={style.inputBox} onChange={setName}/>
                </InputGroup>
                <InputGroup>
                    <label className={style.inputLabel}>{CONTACT_FORM.LABELS.HOME_TOWN}</label>
                    <Dropdown options={placesName} homeTownSelection={homeTownSelection}/>
                </InputGroup>
                <InputGroup>
                    <label className={style.inputLabel}>{CONTACT_FORM.LABELS.DESTINATION}</label>
                    <Dropdown options={placesName} destinationSelection={destinationSelection} />
                </InputGroup>
                <InputGroup>
                    <label className={style.inputLabel}>{CONTACT_FORM.LABELS.CONTACT_NUMBER}</label>
                    <input type="tel" className={style.inputBox} onChange={setContact}/>
                </InputGroup>
                <Button className={style.submitBtn}>{BUTTON.SUBMIT_INTEREST}</Button>
            </form>
            {
                successMessage && 
                <div className={style.messageContainer}>
                    {successMessage}
                </div>
            }
        </div>
    );
};

export default ContactForm;