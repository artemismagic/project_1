<<<<<<< HEAD

console.log (document.body)

var randomFact = document.querySelector('#random-facts')
var apiUrl = "https://my-bao-server.herokuapp.com/api/breadpuns"

randomFact.addEventListener('click', function (event) {
    var request = fetch(apiUrl).then(function(response){
    return(response.json())
    }).then(function(data){
        console.log(data);
        randomFact.innerHTML = data;
        });
    });
=======
console.log (document.body)
>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735
