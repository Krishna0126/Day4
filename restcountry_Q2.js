var xhr = new XMLHttpRequest();

xhr.onload = function()
{

    if (xhr.status>=200 && xhr.status<300) {
    var t = JSON.parse(this.response);

for(let i = 0 ;i<t.length;i++)

{
    let ans = t.filter(t =>t.region =="Asia")
    //console.log(ans);



    console.log(`
Name of the country: ${t[i].name}
Region : ${t[i].region}
Sub region : ${t[i].subregion}
Population : ${t[i].population}
    `)
}
    }
    else{
        console.log(xhr.responseText);
    }
};



xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();