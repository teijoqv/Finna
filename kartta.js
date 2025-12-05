document.addEventListener('DOMContentLoaded', function () {
    const results = document.getElementsByClassName("result-body");
    if (results.length > 0){
        setInterval(checkLSR, 500);   // Tehdään jatkuvasti, koska nidetietoja haetaan sitä mukaa, kun vieritetään alas ja kun vaihdetaan sivua
    }else{
        setTimeout(checkLST, 500);
        setTimeout(checkLST, 1500);   // Tehdään uudestaan pidemmillä viiveillä siltä varalta,
        setTimeout(checkLST, 5000);   // että nidetietojen haku viivästyisi
    }
});
// location service hakutulossivulla
function checkLSR(){
    const results = document.getElementsByClassName("result-body");
    for (let result of results){
        const labels = result.getElementsByClassName("label-info");
        let text = labels[0].innerText;
        const lss = result.getElementsByClassName("location-service");
        for (let ls of lss){
            if (!ls.getAttributeNode("href").value.endsWith(text)){
                ls.getAttributeNode("href").value += "&format=" + text;
            }
        }
    }
}
// location service tietuesivulla
function checkLST(){
    const labels = document.getElementsByClassName("label-info");
    if (labels.length > 0){
        let text = labels[0].innerText;
        const lss = document.getElementsByClassName("location-service");
        for (let ls of lss){
            if (!ls.getAttributeNode("href").value.endsWith(text)){
                ls.getAttributeNode("href").value += "&format=" + text;
            }
        }
    }
}
