import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFectchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFectchedCountries(await fetchCountries)
        }

        fetchAPI() 
    }, [setFectchedCountries])

    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="United States"></option>

                {fetchedCountries.map((country, i) => (
                    <option key={i} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;