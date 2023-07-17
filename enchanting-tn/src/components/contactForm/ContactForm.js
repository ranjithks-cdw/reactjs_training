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
    const homeTownSelection = event => {
        setFormDetails({...formDetails, homeTown: event.target.value});
    };
    const destinationSelection = event => {
        setFormDetails({...formDetails, travelDestination: event.target.value});
    };
    const recordInterest = event => {
        event.preventDefault();
        const message = validateForm(formDetails);
        setSuccessMessage(message);
        setTimeout(()=> {
            setSuccessMessage(false);
        },5000);

        setFormDetails({
            customerName: '',
            contactNumber: '',
            homeTown: '',
            travelDestination:''
        });
        event.target.reset();
    };

    return (
        <div className={style.formContainer}>
            <form className={style.formContent} onSubmit={recordInterest}>
                <SectionHeader sectionTitle={CONTACT_FORM.TITLE} sectionDescription={CONTACT_FORM.DESCRIPTION}/>
                <InputGroup>
                    <label className={style.inputLabel}>{CONTACT_FORM.LABELS.NAME}</label>
                    <input type="text" className={style.inputBox} onChange={setName}/>
                </InputGroup>
                <InputGroup>
                    <label className={style.inputLabel}>{CONTACT_FORM.LABELS.HOME_TOWN}</label>
                    <Dropdown options={placesName} setDropdown={homeTownSelection}/>
                </InputGroup>
                <InputGroup>
                    <label className={style.inputLabel}>{CONTACT_FORM.LABELS.DESTINATION}</label>
                    <Dropdown options={placesName} setDropdown={destinationSelection} />
                </InputGroup>
                <InputGroup>
                    <label className={style.inputLabel}>{CONTACT_FORM.LABELS.CONTACT_NUMBER}</label>
                    <input type="tel" className={style.inputBox} onChange={setContact}/>
                </InputGroup>
                <Button type={BUTTON.TYPE} className={style.submitBtn}>{BUTTON.SUBMIT_INTEREST}</Button>
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