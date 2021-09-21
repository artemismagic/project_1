 //add html element id and classes here
var food = document.getElementById('food');
var fridge = document.getElementById('fridge');
var queryList = [];
var recipeBook = document.getElementById('recipeBook');
var cardModal = document.getElementById('modalBox');




//function to add data to fridge list as well as the queryList, then submits request.  to do: populate recipe cards with results
    
document.querySelector('#food').addEventListener('keypress', function (event) {
    if (event.key==='Enter') {
        event.preventDefault();
        console.log (food.value);
        //document.getElementById("getCard").onclick=()=> {
            localStorage.setItem("ingredient", JSON.stringify(food.value));
        //}
        var ingredient = document.createElement('li');
        ingredient.innerHTML = food.value;
        ingredient.id = food.value;
        fridge.append(ingredient);
        var removeButton = document.createElement('button');
        removeButton.innerHTML = 'x';
        removeButton.addEventListener('click', function(event){
            event.preventDefault();
            var removeIngredient = event.target.parentElement.id;
            queryList.splice(removeIngredient, 1);
            document.getElementById(removeIngredient).remove();
            var request = fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + queryList + '&number=9&apiKey=5a06a914999c434890b47411bab5e301').then(function(response){
            return(response.json())
            })
            .then(function(data){
                console.log(data);
                document.querySelectorAll('.img').forEach(e => e.remove());
                document.querySelectorAll('.title').forEach(e => e.remove());
                for (i = 0; i < 9; i++){
                    var page = document.createElement('img');
                    var pageTitle = document.createElement('div');
                    page.src = data[i].image;
                    page.id = data[i].id;
                    page.classList.add('img');
                    pageTitle.classList.add('title');
                    pageTitle.innerHTML = data[i].title;
                    recipeBook.append(page);
                    recipeBook.append(pageTitle);
                };
            });
        });
        ingredient.append(removeButton);
        queryList.push(food.value);

        
        console.log (queryList);
        food.value = " ";
        var request = fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + queryList + '&number=9&apiKey=5a06a914999c434890b47411bab5e301').then(function(response){
            return(response.json())
            })
            .then(function(data){
                console.log(data);
                document.querySelectorAll('.img').forEach(e => e.remove());
                document.querySelectorAll('.title').forEach(e => e.remove());
                for (i = 0; i < 9; i++){
                    var page = document.createElement('img');
                    var pageTitle = document.createElement('div');
                    page.src = data[i].image;
                    page.id = data[i].id;
                    page.classList.add('img');
                    pageTitle.classList.add('title');
                    pageTitle.innerHTML = data[i].title;
                    console.log(page);
                    page.addEventListener('click', function(event){
                        event.preventDefault();
                        var recipeCard =  fetch('https://api.spoonacular.com/recipes/'+event.target.id+'/card?apiKey=5a06a914999c434890b47411bab5e301')
                            .then(function(response){
                                return(response.json())
                            })
                            .then(function(data){
                                console.log(data.url);
                                var cardImage = document.createElement('img');
                                var modalContent = document.getElementById('modal-content');
                                modalContent.innerHTML = '';
                                cardImage.classList.add('cardImage');
                                cardImage.src = data.url;
                                console.log(cardImage);
                                var span = document.createElement('span');
                                span.classList.add('close');
                                span.innerHTML = '&times;';
                                span.addEventListener('click', function (event){
                                    event.preventDefault();
                                    cardModal.style.display = 'none';
                                });
                                
                                console.log(modalContent);
                                modalContent.appendChild(span);
                                modalContent.appendChild(cardImage);
                                cardModal.style.display = "block";
                                
                            });
                        

                    })
                    recipeBook.append(page);
                    recipeBook.append(pageTitle);
                };
            });
        
    }});
    

        
    //api call syntax
/*fetch('https://api.spoonacular.com/recipes/complexSearch?query=rice&apiKey=604863b3b99545f18714e43387c170ea').then(function(response){
    return(response.json())
    })
    .then(function(data){
        console.log(data);
    });}*/
