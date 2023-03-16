function placesToVisit(){
    var url="./placesToVisit.json";
    var xhr=new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload=function (){
        document.getElementById("places").innerText=xhr.responseText;
    }
    xhr.send();
}