import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Multiselect from 'multiselect-react-dropdown';


function Coutrycity() {
    const url = 'https://restcountries.com/v2/all'
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(data);

    
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
            setIndex(response.data)
        });
    }, []);

    const countryname = data.map((e => {
        return ({ key: e.name })
    }))
    console.log(data)
    console.log(index)
    return (
        <div className='all_country_wrapper'>
            <div className='country_top col-md-4'>
                <Multiselect className='select'
                    displayValue="key"
                    // onKeyPressFn={function noRefCheck() { }}
                    onRemove={(event) => {
                        let value = (Array.isArray(event) ? event.map(x => x.key) : [])
                        let arr = (Array.isArray(value) && value.length !== 0 ? (data.filter(i => value.includes(i.name))) : data)
                        setIndex(arr);
                       

                    }}
                    onSelect={(event) => {
                        let value = (Array.isArray(event) ? event.map(x => x.key) : [])
                        let arr = data.filter(i => value.includes(i.name));
                        setIndex(arr);
                    }}
                    options={countryname}
                    showCheckbox
                />

            </div>


            <div className='country_bottom'>
                {index.map((element) => (
                    <div className='country_card'>
                        <div className='country_img'>
                            <img src={element.flags["png"]} alt="" />

                        </div>
                        <div className='country_data'>
                            <h4>Name: {element.name}</h4>
                            <h6>Capital: {element.capital}</h6>
                            <h6>Calling code: {element.callingCodes}</h6>
                            <h6>Language: {element.languages[0].name}</h6>
                            <h6>Population: {element.population}</h6>
                            <h6>Region: {element.region}</h6>

                        </div>
                    </div>

                ))}
            </div>

        </div>


    )

}
export default Coutrycity;