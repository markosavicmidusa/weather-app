console.log('The js is loaded !')

// fetch('http://puzzle.mead.io/puzzle').then(response =>{
//     response.json().then(data =>{
//         console.log(data);
//     })
// })


//Challange

const fetchFunction = (searchTerm) => 
{
    message1.textContent = 'Loading...';
    message2.textContent = '';
    message3.textContent = '';

fetch(`/weather?address=${searchTerm}`).then(response => {

    if(!response){
        console.log('Error: No data being provided')
    }
    else{
        response.json().then((data) =>{

            if(data.error){
                console.log(data.error)
                message1.textContent = data.error;
                message2.textContent = '';
                message3.textContent = '';
            }else{
                message1.textContent = data.forecast;
                message2.textContent = data.location;
                message3.textContent = data.address;

                console.log('Forcast:', data.forecast);
                console.log('Location:', data.location);
                console.log('Address:', data.address);
            }

            
        });
    }
});

}

const weatherForm = document.querySelector('form');
const inputValue = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');
const message3 = document.querySelector('#message-3');

weatherForm.addEventListener('submit', (e) => { 
    e.preventDefault();
    const input = inputValue.value;
    
    fetchFunction(input);

})


