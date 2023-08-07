import { useState } from "react";

/**
 * @description Method to create custom input hook
 * @returns array containing value, bind object and reset state of custom hook
 */
const useInput = () => {
    const [value, setValue] = useState('');

    const bind = {
        value,
        onChange: event => {
            setValue(event.target.value);
        },
    };

    const reset = () => {
        setValue('');
    };

    return [value, bind, reset];
};

export default useInput;