 //add html element id and classes here
 var getRecipeCard= document.getElementById('getCard');
 console.log(getRecipeCard);
 
 //function to add data to fridge list as well as the queryList, then submits request.  to do: populate recipe cards with results
     
 document.getElementById('#getCard').addEventListener('Click', function (event) {
    fetch('https://api.spoonacular.com/recipes/4632/card?query&apiKey=f5ee2e3ba0cc4a3abad3369a8d4f7db3').then(function(response){
         return(response.json())
         })
         .then(function(data){
             console.log(data);
         });
     });
     
 