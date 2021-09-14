    var ingredients = ['rice','chicken','mushroom'];
    var request = fetch('https://api.spoonacular.com/recipes/complexSearch?query=' + ingredients + '&apiKey=604863b3b99545f18714e43387c170ea').then(function(response){
        return(response.json())
    })
    .then(function(data){
        console.log(data);
    });



    /*fetch('https://api.spoonacular.com/recipes/complexSearch?query=rice&apiKey=604863b3b99545f18714e43387c170ea').then(function(response){
        return(response.json())
    })
    .then(function(data){
        console.log(data);
    });*/
