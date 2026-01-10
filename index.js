
function btnprocess() {
    let loc_name;
    const loc = document.querySelector('#search-inp').value.trim();
    const myApiKey = 'fdf326fb9dd447ab8a980128252812';
    const Url = `http://api.weatherapi.com/v1/forecast.json?key=${myApiKey}&q=${loc}&aqi=yes`;
    
    let day_container = document.querySelector('.day-container');
    let MD_container = document.querySelector('.month-date-container');
    
    const arrMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const arrDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    function date_months() {
        let date_info = new Date();
        let date = date_info.getDate();
        let day_num = date_info.getDay();
        let month_num = date_info.getMonth();
        
        day_container.innerHTML = `${arrDays[day_num]}`;
        MD_container.innerHTML = `${arrMonths[month_num]} ${date}`;
    
    }date_months();

    
    // fetching temp. data
    async function temps_collectoin() {
        let lastupd = document.querySelector('.last-upd p');

        let current_temp = document.querySelector('.temp');
    
        let uv_value = document.querySelector('.uv-value');
        let wind_value = document.querySelector('.wind-value');
        let wind_dir = document.querySelector('.wind-dir');
        let wind_dir_value = document.querySelector('.wind-dir-value');
        let humidity_value = document.querySelector('.humidity-value');
        let visibility_value = document.querySelector('.visibility-value');
    
        let sunrise = document.querySelector('.sun-rise-time');
        let sunset = document.querySelector('.sun-set-time');
    
        let current_cloud_text = document.querySelector('.cloud-type');
        let curr_cloud_img = document.querySelector('.cloud-container img');
    
       try {
            //fetching responses and data to WeeatherApi.com
            let response = await fetch(Url);
            let data = await response.json();

            lastupd.innerHTML = `Last Update : ${data.current.last_updated}`
    
            current_temp.innerHTML = `${Math.round(data.current.temp_c)}℃`;
            uv_value.innerHTML = `${Math.round(data.current.uv)}`;
            wind_value.innerHTML = `${Math.round(data.current.wind_kph)} km/h`;
            wind_dir_value.innerHTML = `${data.current.wind_dir}`;
            humidity_value.innerHTML = `${data.current.humidity}%`;
            visibility_value.innerHTML = `${data.current.vis_km} km`;
    
            sunrise.innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
            sunset.innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
    
            if(data.current.condition.text === 'cloudy'){
                current_cloud_text.innerHTML = `${data.current.condition.text}`;
            }else{
                current_cloud_text.innerHTML = `${data.current.condition.text} Cloudy`;
            }
            // current_cloud_text.innerHTML = `${data.current.condition.text} Cloudy`;
            curr_cloud_img.src = `https:${data.current.condition.icon}`;
            curr_cloud_img.alt = `${data.current.condition.text}`;
         
       } catch (error) {
        console.log(`Error in temps_collection function : ${error}`);
       }
    }temps_collectoin();
    
    //fetching temp. data on the bases of the hours
    async function hours_coll() {
        // Section A
        let div1 = document.querySelector('.diva img');
        let div2 = document.querySelector('.divb img');
        let div3 = document.querySelector('.divc img');
        let div4 = document.querySelector('.divd img');
        let div5 = document.querySelector('.dive img');
        let div6 = document.querySelector('.divf img');
        let div7 = document.querySelector('.divg img');
        let div8 = document.querySelector('.divh img');
        let div9 = document.querySelector('.divi img');
    
        let h1 = document.querySelector('.h1');
        let h2 = document.querySelector('.h2');
        let h3 = document.querySelector('.h3');
        let h4 = document.querySelector('.h4');
        let h5 = document.querySelector('.h5');
        let h6 = document.querySelector('.h6');
        let h7 = document.querySelector('.h7');
        let h8 = document.querySelector('.h8');
        let h9 = document.querySelector('.h9');
    
        let t1 = document.querySelector('.t1');
        let t2 = document.querySelector('.t2');
        let t3 = document.querySelector('.t3');
        let t4 = document.querySelector('.t4');
        let t5 = document.querySelector('.t5');
        let t6 = document.querySelector('.t6');
        let t7 = document.querySelector('.t7');
        let t8 = document.querySelector('.t8');
        let t9 = document.querySelector('.t9');
        
        // Section B
        let m_cloud_img = document.querySelector('.m-cloud img');
        let a_cloud_img = document.querySelector('.a-cloud img');
        let e_cloud_img = document.querySelector('.e-cloud img');

        let m_t_1 = document.querySelector('.m-t-1');
        let a_t_1 = document.querySelector('.a-t-1');
        let e_t_1 = document.querySelector('.e-t-1');

        let m_t_2 = document.querySelector('.m-t-2');
        let a_t_2 = document.querySelector('.a-t-2');
        let e_t_2 = document.querySelector('.e-t-2');


        try {
            let response = await fetch(Url);
            let result = await response.json();
            // section-a result
            h1.innerHTML = `${result.forecast.forecastday[0].hour[7].time[12]} am`;
            h2.innerHTML = `${result.forecast.forecastday[0].hour[9].time[12]} am`;
            h3.innerHTML = `${result.forecast.forecastday[0].hour[11].time[11]+result.forecast.forecastday[0].hour[11].time[12]} am`;
            h4.innerHTML = `${result.forecast.forecastday[0].hour[13].time[11]+result.forecast.forecastday[0].hour[13].time[12]} pm`;
            h5.innerHTML = `${result.forecast.forecastday[0].hour[15].time[11]+result.forecast.forecastday[0].hour[15].time[12]} pm`;
            h6.innerHTML = `${result.forecast.forecastday[0].hour[17].time[11]+result.forecast.forecastday[0].hour[17].time[12]} pm`;
            h7.innerHTML = `${result.forecast.forecastday[0].hour[19].time[11]+result.forecast.forecastday[0].hour[19].time[12]} pm`;
            h8.innerHTML = `${result.forecast.forecastday[0].hour[21].time[11]+result.forecast.forecastday[0].hour[21].time[12]} pm`;
            h9.innerHTML = `${result.forecast.forecastday[0].hour[23].time[11]+result.forecast.forecastday[0].hour[23].time[12]} pm`;
    
            div1.src = `https:${result.forecast.forecastday[0].hour[7].condition.icon}`;
            div2.src = `https:${result.forecast.forecastday[0].hour[9].condition.icon}`;
            div3.src = `https:${result.forecast.forecastday[0].hour[11].condition.icon}`;
            div4.src = `https:${result.forecast.forecastday[0].hour[13].condition.icon}`;
            div5.src = `https:${result.forecast.forecastday[0].hour[15].condition.icon}`;
            div6.src = `https:${result.forecast.forecastday[0].hour[17].condition.icon}`;
            div7.src = `https:${result.forecast.forecastday[0].hour[19].condition.icon}`;
            div8.src = `https:${result.forecast.forecastday[0].hour[21].condition.icon}`;
            div9.src = `https:${result.forecast.forecastday[0].hour[23].condition.icon}`;
    
    
            t1.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[7].temp_c)} ℃`;
            t2.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[9].temp_c)} ℃`;
            t3.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[11].temp_c)} ℃`;
            t4.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[13].temp_c)} ℃`;
            t5.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[15].temp_c)} ℃`;
            t6.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[17].temp_c)} ℃`;
            t7.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[19].temp_c)} ℃`;
            t8.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[21].temp_c)} ℃`;
            t9.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[23].temp_c)} ℃`;

            //section-b result
            m_cloud_img.src = `${result.forecast.forecastday[0].hour[7].condition.icon}`;
            a_cloud_img.src = `${result.forecast.forecastday[0].hour[12].condition.icon}`;
            e_cloud_img.src = `${result.forecast.forecastday[0].hour[17].condition.icon}`;

            m_t_1.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[7].temp_c)} ℃`;
            a_t_1.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[12].temp_c)} ℃`;
            e_t_1.innerHTML = `${Math.round(result.forecast.forecastday[0].hour[17].temp_c)} ℃`;

            m_t_2.innerHTML = `${result.forecast.forecastday[0].hour[7].condition.text}`;
            a_t_2.innerHTML = `${result.forecast.forecastday[0].hour[12].condition.text}`;
            e_t_2.innerHTML = `${result.forecast.forecastday[0].hour[17].condition.text}`;
            

        } catch (error) {
            console.log(error);
        }

    }hours_coll();
    
    async function location_info() {
        try {
            let response = await fetch(Url);
            let result = await response.json();
    
            let loc_name = document.querySelector('.loc-name');
            let country_name = document.querySelector('.country-name');
            let region_name = document.querySelector('.region-name');
            let longitude = document.querySelector('.longitude');
            let latitude = document.querySelector('.latitude');
            let loc_date = document.querySelector('.loc-date');
            let loc_time = document.querySelector('.loc-time');
            let loc_tim;

            if (result.location.region) {
                region_name.innerHTML = `${result.location.region}`;
            }else{
                region_name.innerHTML = "...";
            }
            
            loc_name.innerHTML = `${result.location.name}`;
            country_name.innerHTML = `${result.location.country}`;
            // region_name.innerHTML = `${result.location.region}`;
            longitude.innerHTML = `${result.location.lon}°`;
            latitude.innerHTML = `${result.location.lat}°`;
            loc_date.innerHTML = `${result.forecast.forecastday[0].date}`;
            loc_tim = `${result.location.localtime[11]+result.location.localtime[12]+
                result.location.localtime[13]+result.location.localtime[14]+result.location.localtime[15]}`;
            if(loc_tim < 12){
                loc_time.innerHTML = `${loc_tim} am`;
            }
            else{
                loc_time.innerHTML = `${loc_tim} pm`;
            }
            
            console.log('location : ',result);

        } catch (error) {
            console.log('Error Occurs:',error);
            alert('Error Occurs:',error);
        }
        
    }location_info();
    

    // async function weather() {
    //     try {
    //         let response = await fetch(Url);
    //         let data = response.json();
    //         console.log('getting response...!')
    //         // console.log(response);
    //         // console.log(data);
            
    //     } catch (error) {
    //         console.log(`Error occurs : ${error}`);
    //     }
    // }
    // weather();

}