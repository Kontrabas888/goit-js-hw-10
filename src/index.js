import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import renderCountries from './js/renderCountries';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById("search-box");
const listofCountries = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

input.addEventListener("input", debounce(searchCountries, DEBOUNCE_DELAY))

function searchCountries(e) {
    let country = e.target.value.trim()
    if (country) {
        fetchCountries(country)
            .then(dataCountries => {
            renderCountries(dataCountries)
            })
            .catch(error => {
          Notify.failure("Oops, there is no country with that name")  
        })
    } else {
        listofCountries.innerHTML = ""
        countryInfo.innerHTML = ""
    }
}