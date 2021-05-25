let html = document.querySelector('#materiales');
html.innerHTML = `
<h4 id="materiales-title">Elegí qué reciclar y te mostramos cómo</h2>
        <div class="container">
        

            <div class="items-container">
                
                <div class="items-columns">
                    <ul>
            
                        <li class="materials" data-title='plastico'>
                        
                            <img class="materials-img" src="https://www.dondereciclo.org.ar/uploads/images/donde_reciclo_categories_1.jpg?id=60aac4bd99664" alt="plastico">
                            
                        
                        </li>
                        
                        <li class="materials" data-title='papel'>
                            
                            <img class="materials-img" src="https://www.dondereciclo.org.ar/uploads/images/donde_reciclo_categories_5.jpg?id=60aac4bd998e5" alt="papel">
                        
            
                        </li>
                        <li class="materials" data-title='tetrabrik'>

                            <img class="materials-img" src="https://www.dondereciclo.org.ar/uploads/images/donde_reciclo_categories_2.jpg?id=60aac4bd997ae" alt="tetra-brik">
                        
                        </li>
                    </ul>    
                </div>
                <div class="items-columns">
                    <ul>
                        <li class="materials" data-title='vidrio'>

                            <img class="materials-img" src="https://www.dondereciclo.org.ar/uploads/images/donde_reciclo_categories_6.jpg?id=60aac4bd99a2f" alt="vidrio">
                        
                        </li>
                        <li class="materials" data-title='tapitas'>

                            <img class="materials-img" src="https://www.dondereciclo.org.ar/uploads/images/donde_reciclo_categories_8.jpg?id=60aac4bd99c71" alt="tapitas">
                        
                        </li>
                        <li class="materials" data-title='pilas'>
                        
                            <img class="materials-img" src="https://www.dondereciclo.org.ar/uploads/images/donde_reciclo_categories_10.jpg?id=60aac4bd99ded" alt="pilas">
                        
                        </li>
            
                    </ul>
                </div>
                <div class="items-columns">
                    
                    <ul>   
                        <li class="materials" data-title='neumaticos'>
                            
                            <img class="materials-img" src="https://www.dondereciclo.org.ar/uploads/images/donde_reciclo_categories_11.jpg?id=60aac4bd99f17" alt="neumaticos">
                        
            
                        </li>
                        <li class="materials" data-title='electrodomesticos'>

                            <img class="materials-img" src="https://www.dondereciclo.org.ar/uploads/images/donde_reciclo_categories_12.jpg?id=60aac4bd9a037" alt="electrodomesticos">
                        
                        </li>
                        <li class="materials" data-title='ropa'>

                            <img class="materials-img" src="https://www.dondereciclo.org.ar/uploads/images/donde_reciclo_categories_14.jpg?id=60aac4bd9a25b" alt="ropa">
                        
                        </li>
                      
                    </ul>
                </div>
                
            </div>
            <div class="content">
                <h2 id="m-title"></h2>
                <p id="m-description"></p>
            </div>
            
        </div>
`


const MATERIALES = {
    plastico:{
        title:'Plastico',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
    papel:{
        title: 'Papel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
 
    },
    tetrabrik:{
        title:"Tetra-brik",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
    vidrio:{
        title:"Vidrio",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
    tapitas:{
        title:'Tapitas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
    pilas:{
        title:'Pilas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
    neumaticos:{
        title:'Neumaticos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
    electrodomesticos:{
        title:'Electrodomesticos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    },
    ropa:{
        title:'Ropa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    }
}

let items = document.querySelectorAll('li');
items.forEach(item => item.addEventListener('click', () => getInformation(item.dataset.title)));


function getInformation(title){

   let materialTitle = document.getElementById('m-title');
   let materialDescription = document.getElementById('m-description');
   let materialImg = document.getElementById('m-img');

   materialTitle.innerHTML = MATERIALES[title].title;
   materialDescription.innerHTML = MATERIALES[title].description;


  
}