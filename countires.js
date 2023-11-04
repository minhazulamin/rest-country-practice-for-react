const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const CountriesHtml = countries.map(country => getCountryHtml(country))
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHtml.join('');
    
}

const getCountryHtml = country => {
    console.log(country.flags)
    return `
    <div class="country"> 
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}">
    </div>
    `
}

loadCountries()
