MORINGA SCHOOL


PHASE 1 WEEK 3 FRIDAY CHALLENGE


INTRODUCTION


This weeks challenge was to create a movie app THE FLATDANGO that enables a user to buy a ticket for a given movie in the provided list from the API.

THE PROJECT

The project contains 4 files, namely: the HTML, a javaScript file, a STYLESS.CSS and a db.json  files.
Once this files have been created ;Run this command to get the backend started:

      $ json-server --watch db.json
      
Then Test your server by visiting this route in the browser:

      http://localhost:3000/films- this link contais data that we are going to use.

Next, open the index.html file on your browser to run the application.

Write your code in the index.js file. 

The base URL for your API will be http://localhost:3000.  (check in the terminal running the json-server --watch db.json)


CORE DELIVERABLES OF THE PROJET
The USER  should be able to:

  1.  See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads.
      The number of available tickets will need to be derived by subtracting the number of tickets_sold from the theater's capacity. 
      You will need to make a GET request to the following endpoint to retrieve the film data.


2.  See a menu of all movies on the left side of the page in the ul#films element when the page loads.  
    You will need to make a GET request to the following endpoint to retrieve the film data.

3.  Buy a ticket for a movie. After clicking the "Buy Ticket" button, 
    they should see the number of available tickets decreasing on the frontend. 
    They  should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). 
    No persistence is needed for this feature.
    
    concluion
    
    Once you achive all the deliverabels submitt the URL of your repository to your TM for grading.
    
    WRITEN BY:KELVIN NDOMA MUTUA
    
    
    lincense: [MIT License]

    Copyright (c) 2022 kelvin-ndoma
    
    



