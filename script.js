const celsius = document.querySelector("#celcius"),
 fahrenheit = document.querySelector("#fahrenheit");

 window.addEventListener("load",() => celsius.focus());

 //convert celcius to fahrenheit//

 celsius.addEventListener("input",() =>{
    fahrenheit.value = ((celsius.value * 9)/5 + 32).toFixed(2);
    if(!celsius.value)fahrenheit.value =" ";
 });
 //conert fahrenheit to celcius
 fahrenheit.addEventListener("input",() =>{
    celsius.value = (((fahrenheit.value - 32)*5)/9).toFixed(2);
    if(!fahrenheit.value) celsius.value =" ";
 });
