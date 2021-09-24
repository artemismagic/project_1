 //add html element id and classes here
var food = document.getElementById('food');
var fridge = document.getElementById('fridge');
var queryList = [];
<<<<<<< HEAD
var recipeBook = document.getElementById('card-container');
var cardModal = document.getElementById('modalBox');
   
//__________Chelby's Javascript for "lets get started button_________
=======
var recipeBook = document.getElementById('recipeBook');
var cardModal = document.getElementById('modalBox');


>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735


var getStartedBtn = document.getElementById('getStarted');
var formContainer = document.getElementById('show-form');

getStartedBtn.addEventListener('click', function(){
    getStartedBtn.classList.add('hide');
    formContainer.classList.remove('hide');
})

//___________________________________________________________________________

//function to add data to fridge list as well as the queryList, then submits request.  to do: populate recipe cards with results
    
document.querySelector('#food').addEventListener('keypress', function (event) {
    if (event.key==='Enter') {
        event.preventDefault();
        console.log (food.value);
<<<<<<< HEAD
        localStorage.setItem("ingredient", JSON.stringify(food.value));
=======
        //document.getElementById("getCard").onclick=()=> {
            localStorage.setItem("ingredient", JSON.stringify(food.value));
        //}
>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735
        var ingredient = document.createElement('li');
        ingredient.innerHTML = food.value;
        ingredient.id = food.value;
        fridge.append(ingredient);
        var removeButton = document.createElement('button');
        removeButton.innerHTML = '✖';
        removeButton.classList.add('remove-Btn')
        removeButton.addEventListener('click', function(event){
            event.preventDefault();
            var removeIngredient = event.target.parentElement.id;
            queryList.splice(removeIngredient, 1);
            document.getElementById(removeIngredient).remove();
<<<<<<< HEAD
            var request = fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + queryList + '&number=9&apiKey=f5ee2e3ba0cc4a3abad3369a8d4f7db3').then(function(response){
=======
            var request = fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + queryList + '&number=9&apiKey=5a06a914999c434890b47411bab5e301').then(function(response){
>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735
            return(response.json())
            })
            .then(function(data){
                console.log(data);
<<<<<<< HEAD
                //document.querySelectorAll('.img').forEach(e => e.remove());
                //document.querySelectorAll('.title').forEach(e => e.remove());
                //document.querySelectorAll('.card').forEach(e => e.remove());
                document.getElementById('card-container').innerHTML = '';
                for (i = 0; i < 9; i++){
                    var page = document.createElement('img');
                    var pageTitle = document.createElement('header');
                    var section = document.createElement('section');
                    section.classList.add('card');
=======
                document.querySelectorAll('.img').forEach(e => e.remove());
                document.querySelectorAll('.title').forEach(e => e.remove());
                for (i = 0; i < 9; i++){
                    var page = document.createElement('img');
                    var pageTitle = document.createElement('div');
>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735
                    page.src = data[i].image;
                    page.id = data[i].id;
                    page.classList.add('img');
                    pageTitle.classList.add('title');
                    pageTitle.innerHTML = data[i].title;
<<<<<<< HEAD
                    page.addEventListener('click', function(event){
                        event.preventDefault();
                        var recipeCard =  fetch('https://api.spoonacular.com/recipes/'+event.target.id+'/card?apiKey=f5ee2e3ba0cc4a3abad3369a8d4f7db3')
                            .then(function(response){
                                return(response.json())
                            })
                            .then(function(data){
                                console.log(data.url);
                                var cardImage = document.createElement('img');
                                var modalContent = document.getElementById('modal-content');
                                var savedRecipes = document.getElementsByClassName('uk-modal-body')[0];
                                var saveBtn = document.createElement('input');
                                saveBtn.setAttribute('type', 'button');
                                saveBtn.value = 'Save Me!';
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
                                saveBtn.addEventListener('click', function(event){
                                    event.preventDefault();
                                    var gotRecipes = document.getElementById('gotRecipes');
                                    gotRecipes.innerHTML = '';
                                    savedRecipes.appendChild(cardImage);
                                    modalContent.innerHTML = '';
                                });
                                console.log(modalContent);
                                
                                modalContent.appendChild(span);
                                //savedRecipes.appendChild(span);
                                modalContent.appendChild(cardImage);
                                //savedRecipes.appendChild(cardImage);
                                modalContent.appendChild(saveBtn);
                                cardModal.style.display = "block";  
                            });
                    });
                    section.append(pageTitle);
                    section.append(page);
                    recipeBook.append(section);
=======
                    recipeBook.append(page);
                    recipeBook.append(pageTitle);
>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735
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
<<<<<<< HEAD
                // document.querySelectorAll('.img').forEach(e => e.remove());
                // document.querySelectorAll('.title').forEach(e => e.remove());
                // document.querySelectorAll('.card').forEach(e => e.remove());
                document.getElementById('card-container').innerHTML = '';
=======
                document.querySelectorAll('.img').forEach(e => e.remove());
                document.querySelectorAll('.title').forEach(e => e.remove());
>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735
                for (i = 0; i < 9; i++){
                    var page = document.createElement('img');
                    var pageTitle = document.createElement('header');
                    var section = document.createElement('section');
                    section.classList.add('card');
                    page.src = data[i].image;
                    page.id = data[i].id;
                    page.classList.add('img');
                    pageTitle.classList.add('title');
                    pageTitle.innerHTML = data[i].title;
                    console.log(page);
                    page.addEventListener('click', function(event){
                        event.preventDefault();
<<<<<<< HEAD
                        var recipeCard =  fetch('https://api.spoonacular.com/recipes/'+event.target.id+'/card?apiKey=f5ee2e3ba0cc4a3abad3369a8d4f7db3')
=======
                        var recipeCard =  fetch('https://api.spoonacular.com/recipes/'+event.target.id+'/card?apiKey=5a06a914999c434890b47411bab5e301')
>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735
                            .then(function(response){
                                return(response.json())
                            })
                            .then(function(data){
                                console.log(data.url);
                                var cardImage = document.createElement('img');
                                var modalContent = document.getElementById('modal-content');
<<<<<<< HEAD
                                var savedRecipes = document.getElementsByClassName('uk-modal-body')[0];
                                var saveBtn = document.createElement('input');
                                saveBtn.setAttribute('type', 'button');
                                saveBtn.value = 'Save Me!';
                                
=======
>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735
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
<<<<<<< HEAD
                                saveBtn.addEventListener('click', function(event){
                                    event.preventDefault();
                                    var gotRecipes = document.getElementById('gotRecipes');
                                    gotRecipes.innerHTML = '';
                                    savedRecipes.appendChild(cardImage);
                                    modalContent.innerHTML = '';
                                    cardModal.style.display = 'none';
                                });
                                console.log(modalContent);
                                
                                modalContent.appendChild(span);
                                //savedRecipes.appendChild(span);
                                modalContent.appendChild(cardImage);
                                //savedRecipes.appendChild(cardImage);
                                modalContent.appendChild(saveBtn);
                                cardModal.style.display = "Block";
=======
                                
                                console.log(modalContent);
                                modalContent.appendChild(span);
                                modalContent.appendChild(cardImage);
                                cardModal.style.display = "block";
>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735
                                
                            });
                        

<<<<<<< HEAD
                    });
                    section.append(pageTitle);
                    section.append(page);
                    recipeBook.append(section);
=======
                    })
                    recipeBook.append(page);
                    recipeBook.append(pageTitle);
>>>>>>> bba7762553cf7d3a24b8a160fe677703419d1735
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
