document.addEventListener('DOMContentLoaded', ()=> {



    fetch("https://restcountries.com/v3.1/all")
        .then(function (data) {
            return data.json()
        })
        .then(function (countries) {
            // For Country Name 
            var ul = document.getElementById("list")
            countries.forEach(function (country) {
                var div = document.createElement("div")
                div.className='card col-10 m-2'


                var h5 = document.createElement("h5")
                h5.innerHTML = "Country Name: " + country.name.common 
    
                // For Flag 
                var flag = document.createElement("p")
                flag.innerHTML= " <img width='100' height='50' src='" + country.flags.png + " '/>"
    
                // For Capital 
                var p = document.createElement("p")
                p.innerHTML = "Capital: " + country.capital[0]
    
                // For Region 
                // console.log(country.region)
                var para = document.createElement("p")
                para.innerHTML ="Region: " + country.region
    
                //For Country Code
                var c_code = document.createElement("p")
                c_code.innerHTML="Country Code: " + country.cca2
    
                //For Population
                var population = document.createElement("p")
                population.innerHTML="Population: " + country.population
    
                //For Button
                var btn = document.createElement("p")
                btn.innerHTML= "<button>Click For Weather</button>"
    
                ul.appendChild(div)
                div.appendChild(h5)

                div.appendChild(flag)
                div.appendChild(p)
                div.appendChild(para)
                div.appendChild(c_code)
                div.appendChild(population)
                div.appendChild(btn)
    
    
                // CSS 
                document.getElementById("list").style.color = "black";
                document.getElementById("list").style.border = "thick solid black";
            });
    
    
        })
        .catch(function (err) {
            console.log(err)
        })
    
    
    
//      function getpopupdata(q) {
//             document.getElementById('popout').style.display = 'flex';
//             document.getElementById('country-list').style.opacity = '0.7';        
//             const api = "https://api.openweathermap.org/data/2.5/weather?q=" + q + "&appid=9fc1269056a6b8aaf47d1d8b2ca31e07";
//             fetch(api).then(response => response.json()).then((data) => {
//                 var country_name = data.name;
//                 var country_temp = data.main['temp'];
//                 var country_wind = data.wind['speed'];
//                 var country_humidity = data.main['humidity'];
//                 //Grab data and insert it into created elements           
//                 document.getElementById("span_country_name").innerHTML = country_name;
//                 document.getElementById("span_humidity").innerHTML = country_humidity;
//                 document.getElementById("span_country_wind").innerHTML = country_wind;
//                 document.getElementById("span_country_temp").innerHTML = country_temp;
//             }).catch(err => {
//                 alert(err);
//             })
//         }
//         document.getElementById('closeBtn').addEventListener('click', () => {
//             document.getElementById('popout').style.display = 'none';
//         })
//         //Call the function that will automatically run renderCountry() also 
//         fetchData();
        
})
        
})

// fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&appid={9fc1269056a6b8aaf47d1d8b2ca31e07}")
// .then(function (data) {
//     return data.json()
// })
// .catch(function (err) {
//     console.log(err)
// })

