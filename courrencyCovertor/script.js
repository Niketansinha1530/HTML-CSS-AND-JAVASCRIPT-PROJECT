
let countryList = {
    "AFN": "AF", // Afghanistan
    "ALL": "AL", // Albania
    "DZD": "DZ", // Algeria
    "EUR": "AD", // Andorra
    "AOA": "AO", // Angola
    "XCD": "AI", // Anguilla
    "XCD": "AG", // Antigua and Barbuda
    "ARS": "AR", // Argentina
    "AMD": "AM", // Armenia
    "AWG": "AW", // Aruba
    "AUD": "AU", // Australia
    "EUR": "AT", // Austria
    "AZN": "AZ", // Azerbaijan
    "BSD": "BS", // Bahamas
    "BHD": "BH", // Bahrain
    "BDT": "BD", // Bangladesh
    "BBD": "BB", // Barbados
    "BYN": "BY", // Belarus
    "EUR": "BE", // Belgium
    "BZD": "BZ", // Belize
    "XOF": "BJ", // Benin
    "BMD": "BM", // Bermuda
    "BTN": "BT", // Bhutan
    "BOB": "BO", // Bolivia (Plurinational State of)
    "USD": "BQ", // Bonaire, Sint Eustatius and Saba
    "BAM": "BA", // Bosnia and Herzegovina
    "BWP": "BW", // Botswana
    "BRL": "BR", // Brazil
    "BND": "BN", // Brunei Darussalam
    "BGN": "BG", // Bulgaria
    "XOF": "BF", // Burkina Faso
    "BIF": "BI", // Burundi
    "CVE": "CV", // Cabo Verde
    "KHR": "KH", // Cambodia
    "XAF": "CM", // Cameroon
    "CAD": "CA", // Canada
    "KYD": "KY", // Cayman Islands
    "XAF": "CF", // Central African Republic
    "XAF": "TD", // Chad
    "CLP": "CL", // Chile
    "CNY": "CN", // China
    "COP": "CO", // Colombia
    "KMF": "KM", // Comoros
    "XAF": "CG", // Congo
    "CDF": "CD", // Congo (Democratic Republic of the)
    "CRC": "CR", // Costa Rica
    "HRK": "HR", // Croatia
    "CUP": "CU", // Cuba
    "ANG": "CW", // Curaçao
    "EUR": "CY", // Cyprus
    "CZK": "CZ", // Czech Republic
    "DKK": "DK", // Denmark
    "DJF": "DJ", // Djibouti
    "XCD": "DM", // Dominica
    "DOP": "DO", // Dominican Republic
    "USD": "EC", // Ecuador
    "EGP": "EG", // Egypt
    "USD": "SV", // El Salvador
    "XAF": "GQ", // Equatorial Guinea
    "ERN": "ER", // Eritrea
    "EUR": "EE", // Estonia
    "SZL": "SZ", // Eswatini
    "ETB": "ET", // Ethiopia
    "FKP": "FK", // Falkland Islands (Malvinas)
    "DKK": "FO", // Faroe Islands
    "FJD": "FJ", // Fiji
    "EUR": "FI", // Finland
    "EUR": "FR", // France
    "EUR": "GF", // French Guiana
    "XPF": "PF", // French Polynesia
    "XAF": "GA", // Gabon
    "GMD": "GM", // Gambia
    "GEL": "GE", // Georgia
    "EUR": "DE", // Germany
    "GHS": "GH", // Ghana
    "GIP": "GI", // Gibraltar
    "EUR": "GR", // Greece
    "DKK": "GL", // Greenland
    "XCD": "GD", // Grenada
    "EUR": "GP", // Guadeloupe
    "GTQ": "GT", // Guatemala
    "GBP": "GG", // Guernsey
    "GNF": "GN", // Guinea
    "XOF": "GW", // Guinea-Bissau
    "GYD": "GY", // Guyana
    "HTG": "HT", // Haiti
    "HNL": "HN", // Honduras
    "HKD": "HK", // Hong Kong
    "HUF": "HU", // Hungary
    "ISK": "IS", // Iceland
    "INR": "IN", // India
    "IDR": "ID", // Indonesia
    "IRR": "IR", // Iran (Islamic Republic of)
    "IQD": "IQ", // Iraq
    "EUR": "IE", // Ireland
    "GBP": "IM", // Isle of Man
    "ILS": "IL", // Israel
    "EUR": "IT", // Italy
    "JMD": "JM", // Jamaica
    "JPY": "JP", // Japan
    "GBP": "JE", // Jersey
    "JOD": "JO", // Jordan
    "KZT": "KZ", // Kazakhstan
    "KES": "KE", // Kenya
    "AUD": "KI", // Kiribati
    "KWD": "KW", // Kuwait
    "KGS": "KG", // Kyrgyzstan
    "LAK": "LA", // Lao People's Democratic Republic
    "EUR": "LV", // Latvia
    "LBP": "LB", // Lebanon
    "LSL": "LS", // Lesotho
    "LRD": "LR", // Liberia
    "LYD": "LY", // Libya
    "CHF": "LI", // Liechtenstein
    "EUR": "LT", // Lithuania
    "EUR": "LU", // Luxembourg
    "MOP": "MO", // Macao
    "MGA": "MG", // Madagascar
    "MWK": "MW", // Malawi
    "MYR": "MY", // Malaysia
    "MVR": "MV", // Maldives
    "XOF": "ML", // Mali
    "EUR": "MT", // Malta
    "USD": "MH", // Marshall Islands
    "EUR": "MQ", // Martinique
    "MRO": "MR", // Mauritania
    "MUR": "MU", // Mauritius
}

let api_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns=document.querySelectorAll(".drop-down select");

let fromCurr=document.querySelector(".from select");

let toCurr=document.querySelector(".to select");

let btn=document.querySelector("#btn");

let msg=document.querySelector(".msg")
for(select of dropdowns)
{
    for(let currCode in countryList){
    //console.log(code,countryList[code]);
   let newOption= document.createElement("option");
   newOption.innerText=currCode;
   newOption.value=currCode;

   if(select.name==="from" && currCode==="USD"){
    newOption.selected="selected";
   }

   if(select.name==="to" && currCode==="INR"){
    newOption.selected="selected";
   }
   select.append(newOption);
}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
})
}

const updateFlag=(element)=>{
    let currCode =element.value;//getting currency code from option element;
    // console.log(currCode)
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}



 async function updateExchangeRate()
{
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    // console.log(amtVal)

    if(amtVal==="" || amtVal <1)
    {
        amtVal=1;
        amount.value=1;
    }
    // console.log(fromCurr.value ,",",toCurr.value )
    const url=`${api_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response= await fetch(url);
    let data= await response.json();
    let rate= data[toCurr.value.toLowerCase()];
    // console.log(rate);

    let finalAmount=amtVal*rate;
    msg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

btn.addEventListener("click",()=>{
    updateExchangeRate();
})

window.addEventListener("load",()=>{
    updateExchangeRate();
})