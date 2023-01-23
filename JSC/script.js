
window.addEventListener('DOMContentLoaded', (event) => {
   
    // Navbar-ScrollEffect
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () =>{
    if(window.pageYOffset > nav.offsetHeight){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
    });

    // GitHubAPI
  
    const div = document.getElementById('container');
    const cargarapi = async() =>{
        try{
            const respuesta = await fetch('https://api.github.com/users/JoseCQUADY/repos');
            console.log(respuesta);

            if(respuesta.status === 200){
                const datos = await respuesta.json();
                datos.map(item => {
                    
                    let divchild = document.createElement('div');
                    divchild.classList.add('cards')
                    divchild.innerHTML = ` <a target="blank" href="${item.clone_url}"><h2 class="tittle">${item.name}</h2></a><div class ="description"><h2 class="description-tittle">Description:</h2><h3 class="description-content">${item.description}</h3></div>`
                    div.appendChild(divchild);
                
                })
                
            }

            

        }catch(e){
            console.log(e);
        }
    }
cargarapi();
    


});

