// node.js modules
const path = require('path');
// npm modules
const express = require('express'); //single function for creating new express app
const hbs = require('hbs');
// we defined 
const app = express();
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


//setting up the port
const port = process.env.PORT || 3000



// Setting up a path
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

        // console.log(__dirname);
        // console.log(path.join(__dirname, '../public'));


// this static use our server...It has an advantage above the other app.get
app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialPath);

//hbs initialisation seting up the templates folder(views is default and we want to change a parth)

app.set('view engine', 'hbs');
app.set('views', viewsPath);


        // root page -> route
        // addin the responses to the client request at root of the project


// Index
app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather',
        message:'Welcome to a Main Weather page',
        createdBy: 'Mila Savic'
    })
})

// Weather

app.get('/weather', (req, res)=>{
    
    if(!req.query.address){
      return res.send({
            error:'You must provide a search term!'
        });
    }else{


        geocode(req.query.address, (error, {label , longitude, latitude}={}) =>{
    
           if(error){
                console.log('Error:' + error);
                return res.send({
                    error
                });
           }else{
        
                forecast(latitude, longitude, (error, {temperature, precip, weather_description}={}) =>{
                
                    if(error){
                        console.log("Error" + error);
                        return res.send({
                            error
                        });
                    }else{
                        
                        return res.send({
                            forecast: `It is currently ${temperature} degrees out.There is a ${precip} % chance of rain. It\'s ${weather_description}`,
                            location: label, 
                            address: req.query.address
                        });
                    }            
                });

            }
    
        });
       


    }
})


// About

app.get('/about', (req, res) =>{

    res.render('about',{
        title: 'About',
        message: 'Welcome to a About page',
        createdBy: 'Dunja Savic'
    })
});

app.get('/help', (req, res)=>{

    res.render('help', {
        title: 'Help',
        message: 'Welcome to a Help page',
        createdBy: 'Marko Savic'
    })
});


app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: '404',
        helpMessage: 'Help article not found',
        createdBy: 'Marko Savic'
    })
});

app.get('*', (req, res) =>{

    res.render('404', {
        title: '404',
        helpMessage: 'Page not found',
        createdBy: 'Marko Savic'
    })
});


// Weather route
/*
app.get('/weather',(req, res)=>{
    res.send(
        {
            forecast: 'Its 25 degrees in Belgrade',
            location: 'Belgrade, Serbia'
        }
    );
})
*/


app.listen(port, ()=>{
    console.log('app is listening on the port ' + port);
});




// 404

// 1. Set uo * wild card
//      it needs to come last











/*
// node.js modules
const path = require('path');



// npm modules
const express = require('express'); //single function for creating new express app

// we defined 
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

        // console.log(__dirname);
        // console.log(path.join(__dirname, '../public'));



// this static use our server...It has an advantage above the other app.get
app.use(express.static(publicDirectoryPath));


        // root page -> route
        // addin the responses to the client request at root of the project




// Weather route
app.get('/weather',(req, res)=>{
    res.send(
        {
            forecast: 'Its 25 degrees in Belgrade',
            location: 'Belgrade, Serbia'
        }
    );
})



app.listen(3000, ()=>{
    console.log('app is listening on the port 3000');
});





*/





/*

// node.js modules
const path = require('path');



// npm modules
const express = require('express'); //single function for creating new express app

// we defined 
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

        // console.log(__dirname);
        // console.log(path.join(__dirname, '../public'));



// this static use our server...It has an advantage above the other app.get
app.use(express.static(publicDirectoryPath));


        // root page -> route
        // addin the responses to the client request at root of the project

/*app.get('', (req, res)=>{
    res.send('<h1>Welcome</h1>');
})



// Help page -> route
/*
app.get('/help', (req, res)=>{
    res.send([
        {
            name: 'Mila',
            age: 5
        },
        {
            name: 'Dunja',
            age: 3
        }
    ]);
})
*/


// About route 
/*
app.get('/about', (req, res)=>{
    res.send('<h1>Asdadsaut</h1>');
})



// Weather route
app.get('/weather',(req, res)=>{
    res.send(
        {
            forecast: 'Its 25 degrees in Belgrade',
            location: 'Belgrade, Serbia'
        }
    );
})



app.listen(3000, ()=>{
    console.log('app is listening on the port 3000');
});


 */


/**
 * Adding the public and private key
 * 
 * ls -a -l ~/.ssh  -> Lists all files include hidden-once from folder folder 
 *  
 * ssh-keygen -t rsa -b 4096 -C "savic.marko90@gmail.com"  -> it will generate our keys in .ssh folder
 * 
 * eval "$(ssh-agent -s)" -> starting ssh agent
 * 
 * ssh-add -K ~/.ssh/id_rsa -> addes the private key into our agent
 * 
 *  ssh -T git@github.com -> testing the authentification -> yes
 *  
 * 
 * HEROKU DEPLOYMENT
 * 
 * heroku keys:add  
 * 
 * heroku create marko-weather-app -> Creating the app with name on heroku
 * 
 * https://marko-weather-app.herokuapp.com/ | https://git.heroku.com/marko-weather-app.git
 * 
 * we need to add code
 * 
 * adding start in package.json
 * 
 * changing app.listen(3000,()=>....) on port
 * 
 * 
 * 
 * 
 * 
 * 
 */





