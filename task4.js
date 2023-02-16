let xhr = new XMLHttpRequest();
console.log(xhr)
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send();
xhr.onload = function() {
    const data = JSON.parse(xhr.response)
    console.log(data[0].population);
    console.log(xhr.status)
    
}
//////////////////////////////////
function studentobj(){
    let obj1 = {
        name : "person1",
        age : 5
    }
    let obj2={
        age : 5,
        name:"person1"
    }
    if(obj1==obj2){
        console.log("same property:",true)
    }else{
        console.log("same property:",false)
    }
}
studentobj();