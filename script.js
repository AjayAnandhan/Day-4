var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all")
a.send();
a.onload = function(){
    var b = a.response
    var c = JSON.parse(b)
    // console.log(c)
    // or

    // for(var i=0;i<c.length;i++){
    //     console.log(c[0].name.common)
    // }

    // or

    // for(var obj in c){
    //     console.log(c[obj].name.common)
    // }

    // // or

    for(var obj of c){
        console.log(obj.name.common, obj.region, obj.subregion)
    }
}