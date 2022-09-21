import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../components/Countrylist.css"

const Countrylist= ()=> {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function getData() {
      let resp = await axios.get("https://restcountries.com/v2/all");
      setCountries(resp.data);
    }
    try {
      getData();
    } catch (e) {
      console.log(e);
    }
  }, []);   
  return (
    <div>

      <div className='container outerContainer'>
        {
          countries.map((country,ind )=> {
            return (
              <div className="card card-class border-dark" key={ind}>
                <div className="border inner-div">
                  <img
                    className="img card-img-top border-dark "
                    src={country?.flags?.png}
                    alt={`Flag of ${country?.name}`}
                    height="200px"
                  ></img>
                  <div class="card-body">
                    <h4 class="card-title">{country.name}</h4>
                    <h6 class="card-title">{country.nativeName}</h6>
                    <div className="flex-in">
                      <div>Population: {country.population}</div>
                      <div>Area: {country.area}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Countrylist