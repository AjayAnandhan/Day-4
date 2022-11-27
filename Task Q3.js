var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/region/europe");
a.send();
a.onload = function(){
    var b = a.response,
    c = JSON.parse(b)
    for (var d of c){
        console.log("Name -",d.name.common,": Region -",d.region,": Sub-Region -",d.subregion,": Population -",d.population)
    }
}