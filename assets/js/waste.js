// For Scraping the data from the json format
// function scrape() {
//     fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
//         .then(response => response.json())
//         .then(rsp => {
//             total_no_of_cases.innerHTML = rsp.data.total.confirmed
//             total_no_of_recovered.innerHTML = rsp.data.total.recovered
//             total_no_of_deaths.innerHTML = rsp.data.total.deaths
//             total_no_of_active.innerHTML = rsp.data.total.active
//             for (i = 0; i <= 36; i++) {
//                 States.push(String(rsp.data.statewise[i].state))
//                 Confirmed.push(rsp.data.statewise[i].confirmed)
//                 Recovered.push(rsp.data.statewise[i].recovered)
//                 Deaths.push(rsp.data.statewise[i].deaths)
//                 Active.push(rsp.data.statewise[i].active)
//             }
// var maharastra = States.indexOf("Maharashtra");
// Maharashtra_confirmed.innerHTML = Confirmed[maharastra];
// Maharashtra_recovered.innerHTML = Recovered[maharastra];
// Maharashtra_deaths.innerHTML = Deaths[maharastra];
// Maharashtra_active.innerHTML = Active[maharastra];

// var TamilNadu = States.indexOf("Tamil Nadu");
// TamilNadu_confirmed.innerHTML = Confirmed[TamilNadu];
// TamilNadu_recovered.innerHTML = Recovered[TamilNadu];
// TamilNadu_deaths.innerHTML = Deaths[TamilNadu];
// TamilNadu_active.innerHTML = Active[TamilNadu];

// var Sikkim = States.indexOf("Sikkim");
// Sikkim_confirmed.innerHTML = Confirmed[Sikkim];
// Sikkim_recovered.innerHTML = Recovered[Sikkim];
// Sikkim_deaths.innerHTML = Deaths[Sikkim];
// Sikkim_active.innerHTML = Active[Sikkim];

// var Tripura = States.indexOf("Tripura");
// Tripura_confirmed.innerHTML = Confirmed[Tripura];
// Tripura_recovered.innerHTML = Recovered[Tripura];
// Tripura_deaths.innerHTML = Deaths[Tripura];
// Tripura_active.innerHTML = Active[Tripura];

// var Delhi = States.indexOf("Delhi");
// Delhi_confirmed.innerHTML = Confirmed[Delhi];
// Delhi_recovered.innerHTML = Recovered[Delhi];
// Delhi_deaths.innerHTML = Deaths[Delhi];
// Delhi_active.innerHTML = Active[Delhi];

// var Nagaland = States.indexOf("Nagaland");
// Nagaland_confirmed.innerHTML = Confirmed[Nagaland];
// Nagaland_recovered.innerHTML = Recovered[Nagaland];
// Nagaland_deaths.innerHTML = Deaths[Nagaland];
// Nagaland_active.innerHTML = Active[Nagaland];

// var Kerala = States.indexOf("Kerala");
// Kerala_confirmed.innerHTML = Confirmed[Kerala];
// Kerala_recovered.innerHTML = Recovered[Kerala];
// Kerala_deaths.innerHTML = Deaths[Kerala];
// Kerala_active.innerHTML = Active[Kerala];

// var Telangana = States.indexOf("Telangana");
// Telangana_confirmed.innerHTML = Confirmed[Telangana];
// Telangana_recovered.innerHTML = Recovered[Telangana];
// Telangana_deaths.innerHTML = Deaths[Telangana];
// Telangana_active.innerHTML = Active[Telangana];

// var Meghalaya = States.indexOf("Meghalaya");
// Meghalaya_confirmed.innerHTML = Confirmed[Meghalaya];
// Meghalaya_recovered.innerHTML = Recovered[Meghalaya];
// Meghalaya_deaths.innerHTML = Deaths[Meghalaya];
// Meghalaya_active.innerHTML = Active[Meghalaya];

// var Uttar = States.indexOf("Uttar Pradesh");
// UttarPradesh_confirmed.innerHTML = Confirmed[Uttar];
// UttarPradesh_recovered.innerHTML = Recovered[Uttar];
// UttarPradesh_deaths.innerHTML = Deaths[Uttar];
// UttarPradesh_active.innerHTML = Active[Uttar];

// var Rajasthan = States.indexOf("Rajasthan");
// Rajasthan_confirmed.innerHTML = Confirmed[Rajasthan];
// Rajasthan_recovered.innerHTML = Recovered[Rajasthan];
// Rajasthan_deaths.innerHTML = Deaths[Rajasthan];
// Rajasthan_active.innerHTML = Active[Rajasthan];

// var AndhraPradesh = States.indexOf("Andhra Pradesh");
// AndhraPradesh_confirmed.innerHTML = Confirmed[AndhraPradesh];
// AndhraPradesh_recovered.innerHTML = Recovered[AndhraPradesh];
// AndhraPradesh_deaths.innerHTML = Deaths[AndhraPradesh];
// AndhraPradesh_active.innerHTML = Active[AndhraPradesh];

// var MadhyaPradesh = States.indexOf("Madhya Pradesh");
// MadhyaPradesh_confirmed.innerHTML = Confirmed[MadhyaPradesh];
// MadhyaPradesh_recovered.innerHTML = Recovered[MadhyaPradesh];
// MadhyaPradesh_deaths.innerHTML = Deaths[MadhyaPradesh];
// MadhyaPradesh_active.innerHTML = Active[MadhyaPradesh];

// var Karnataka = States.indexOf("Karnataka");
// Karnataka_confirmed.innerHTML = Confirmed[Karnataka];
// Karnataka_recovered.innerHTML = Recovered[Karnataka];
// Karnataka_deaths.innerHTML = Deaths[Karnataka];
// Karnataka_active.innerHTML = Active[Karnataka];

// var Gujarat = States.indexOf("Gujarat");
// Gujarat_confirmed.innerHTML = Confirmed[Gujarat];
// Gujarat_recovered.innerHTML = Recovered[Gujarat];
// Gujarat_deaths.innerHTML = Deaths[Gujarat];
// Gujarat_active.innerHTML = Active[Gujarat];

// var JammuandKashmir = States.indexOf("Jammu and Kashmir");
// JammuandKashmir_confirmed.innerHTML = Confirmed[JammuandKashmir];
// JammuandKashmir_recovered.innerHTML = Recovered[JammuandKashmir];
// JammuandKashmir_deaths.innerHTML = Deaths[JammuandKashmir];
// JammuandKashmir_active.innerHTML = Active[JammuandKashmir];

// var Haryana = States.indexOf("Haryana");
// Haryana_confirmed.innerHTML = Confirmed[Haryana];
// Haryana_recovered.innerHTML = Recovered[Haryana];
// Haryana_deaths.innerHTML = Deaths[Haryana];
// Haryana_active.innerHTML = Active[Haryana];

// var Punjab = States.indexOf("Punjab");
// Punjab_confirmed.innerHTML = Confirmed[Punjab];
// Punjab_recovered.innerHTML = Recovered[Punjab];
// Punjab_deaths.innerHTML = Deaths[Punjab];
// Punjab_active.innerHTML = Active[Punjab];

// var WestBengal = States.indexOf("West Bengal");
// WestBengal_confirmed.innerHTML = Confirmed[WestBengal];
// WestBengal_recovered.innerHTML = Recovered[WestBengal];
// WestBengal_deaths.innerHTML = Deaths[WestBengal];
// WestBengal_active.innerHTML = Active[WestBengal];

// var Bihar = States.indexOf("Bihar");
// Bihar_confirmed.innerHTML = Confirmed[Bihar];
// Bihar_recovered.innerHTML = Recovered[Bihar];
// Bihar_deaths.innerHTML = Deaths[Bihar];
// Bihar_active.innerHTML = Active[Bihar];


// var Assam = States.indexOf("Assam");
// Assam_confirmed.innerHTML = Confirmed[Assam];
// Assam_recovered.innerHTML = Recovered[Assam];
// Assam_deaths.innerHTML = Deaths[Assam];
// Assam_active.innerHTML = Active[Assam];

// var Uttarakhand = States.indexOf("Uttarakhand");
// Uttarakhand_confirmed.innerHTML = Confirmed[Uttarakhand];
// Uttarakhand_recovered.innerHTML = Recovered[Uttarakhand];
// Uttarakhand_deaths.innerHTML = Deaths[Uttarakhand];
// Uttarakhand_active.innerHTML = Active[Uttarakhand];

// var Odisha = States.indexOf("Odisha");
// Odisha_confirmed.innerHTML = Confirmed[Bihar];
// Odisha_recovered.innerHTML = Recovered[Odisha];
// Odisha_deaths.innerHTML = Deaths[Odisha];
// Odisha_active.innerHTML = Active[Odisha];

// var Chandigarh = States.indexOf("Chandigarh");
// Chandigarh_confirmed.innerHTML = Confirmed[Chandigarh];
// Chandigarh_recovered.innerHTML = Recovered[Chandigarh];
// Chandigarh_deaths.innerHTML = Deaths[Chandigarh];
// Chandigarh_active.innerHTML = Active[Chandigarh];

// var Ladakh = States.indexOf("Ladakh");
// Ladakh_confirmed.innerHTML = Confirmed[Ladakh];
// Ladakh_recovered.innerHTML = Recovered[Ladakh];
// Ladakh_deaths.innerHTML = Deaths[Ladakh];
// Ladakh_active.innerHTML = Active[Ladakh];

// var AndamanandNicobarIslands = States.indexOf("Andaman and Nicobar Islands");
// AndamanandNicobarIslands_confirmed.innerHTML = Confirmed[AndamanandNicobarIslands];
// AndamanandNicobarIslands_recovered.innerHTML = Recovered[AndamanandNicobarIslands];
// AndamanandNicobarIslands_deaths.innerHTML = Deaths[AndamanandNicobarIslands];
// AndamanandNicobarIslands_active.innerHTML = Active[AndamanandNicobarIslands];

// var Chhattisgarh = States.indexOf("Chhattisgarh");
// Chhattisgarh_confirmed.innerHTML = Confirmed[Chhattisgarh];
// Chhattisgarh_recovered.innerHTML = Recovered[Chhattisgarh];
// Chhattisgarh_deaths.innerHTML = Deaths[Chhattisgarh];
// Chhattisgarh_active.innerHTML = Active[Chhattisgarh];

// var Goa = States.indexOf("Goa");
// Goa_confirmed.innerHTML = Confirmed[Goa];
// Goa_recovered.innerHTML = Recovered[Goa];
// Goa_deaths.innerHTML = Deaths[Bihar];
// Goa_active.innerHTML = Active[Goa];

// var HimachalPradesh = States.indexOf("Himachal Pradesh");
// HimachalPradesh_confirmed.innerHTML = Confirmed[HimachalPradesh];
// HimachalPradesh_recovered.innerHTML = Recovered[HimachalPradesh];
// HimachalPradesh_deaths.innerHTML = Deaths[HimachalPradesh];
// HimachalPradesh_active.innerHTML = Active[HimachalPradesh];

// var Puducherry = States.indexOf("Puducherry");
// Puducherry_confirmed.innerHTML = Confirmed[Puducherry];
// Puducherry_recovered.innerHTML = Recovered[Puducherry];
// Puducherry_deaths.innerHTML = Deaths[Puducherry];
// Puducherry_active.innerHTML = Active[Puducherry];

// var Jharkhand = States.indexOf("Jharkhand");
// Jharkhand_confirmed.innerHTML = Confirmed[Jharkhand];
// Jharkhand_recovered.innerHTML = Recovered[Jharkhand];
// Jharkhand_deaths.innerHTML = Deaths[Jharkhand];
// Jharkhand_active.innerHTML = Active[Jharkhand];

// var Manipur = States.indexOf("Manipur");
// Manipur_confirmed.innerHTML = Confirmed[Manipur];
// Manipur_recovered.innerHTML = Recovered[Manipur];
// Manipur_deaths.innerHTML = Deaths[Manipur];
// Manipur_active.innerHTML = Active[Manipur];

// var Mizoram = States.indexOf("Mizoram");
// Mizoram_confirmed.innerHTML = Confirmed[Mizoram];
// Mizoram_recovered.innerHTML = Recovered[Mizoram];
// Mizoram_deaths.innerHTML = Deaths[Mizoram];
// Mizoram_active.innerHTML = Active[Mizoram];

// var ArunachalPradesh = States.indexOf("Arunachal Pradesh");
// ArunachalPradesh_confirmed.innerHTML = Confirmed[ArunachalPradesh];
// ArunachalPradesh_recovered.innerHTML = Recovered[ArunachalPradesh];
// ArunachalPradesh_deaths.innerHTML = Deaths[ArunachalPradesh];
// ArunachalPradesh_active.innerHTML = Active[ArunachalPradesh];

// var DadraandNagarHaveli = States.indexOf("Dadra and Nagar Haveli");
// DadraandNagarHaveli_confirmed.innerHTML = Confirmed[DadraandNagarHaveli];
// DadraandNagarHaveli_recovered.innerHTML = Recovered[DadraandNagarHaveli];
// DadraandNagarHaveli_deaths.innerHTML = Deaths[DadraandNagarHaveli];
// DadraandNagarHaveli_active.innerHTML = Active[DadraandNagarHaveli];

// var DamanandDiu = States.indexOf("Daman and Diu");
// DamanandDiu_confirmed.innerHTML = Confirmed[DamanandDiu];
// DamanandDiu_recovered.innerHTML = Recovered[DamanandDiu];
// DamanandDiu_deaths.innerHTML = Deaths[DamanandDiu];
// DamanandDiu_active.innerHTML = Active[DamanandDiu];

// var Lakshadweep = States.indexOf("Lakshadweep");
// Lakshadweep_confirmed.innerHTML = Confirmed[Lakshadweep];
// Lakshadweep_recovered.innerHTML = Recovered[Lakshadweep];
// Lakshadweep_deaths.innerHTML = Deaths[Lakshadweep];
// Lakshadweep_active.innerHTML = Active[Lakshadweep];

//             // rsp.data.statewise.forEach(element => {
//             //     console.log(element.state);
//             //     var  = State(element.state, element.confirmed, element.recovered, element.deaths, element.active)
//             // });
//         })
// }
// scrape();

