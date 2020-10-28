##Documentation 

This project could be much better and much more dynamic if the page count was dependent on 
the amount of items in the contact list, also if you could add or delete from list. 

I didnt include the adding or deleting from the list, although it wouldnt be difficult to implement in the back end.

The back end is made of NodeJs and express server with a noSQL mongo DB. 

The front end utilizes some redux which i added for the instructions. When i saw that redux was removed from the requirements, i did
whats left in local sake for ease of use. If the the application was bigger to make it more scalable it would be mostly redux. 

The main file `MainPage.jsx` could be much smaller and cleaner if it was broken up into components to display the different lists 
although it wasnt included due to time restraints. 

The tests are terrible because i am unfimilar with testing in react, i appoligize for that. 

The docker file should be formated correctly. 

To properly use this you need the database key which will be sent in the email along with the links to the front/back end of this project
to kimberly.

You have to put it in config.env file of the nodejs server