# Amazing Notes - Back
[Amazing Notes](https://facundo-tolosa-front-final-project-202204-bcn.netlify.app) is a PWA where you can save text notes with different categories. You can delete or edit your notes and read notes of other users. As it is a PWA, you can use it offline.

The technologies used for this proyect were:

### 🔸 Front
React | Redux | PWA | Styled Components | Typescript | Jest | Cypress

### 🔸 Back
NodeJS | ExpressJS | MongoDB | Mongoose | JWT | Firebase | Jest | Supertest

### 🔸 Tools
Trello | Postman | Figma

## Metrics

🚀 Lighthouse

<img src="https://i.ibb.co/DMF0VVy/lighthouse.png" width="600">

📈 [Back SonarCloud metrics](https://sonarcloud.io/project/overview?id=isdi-coders-2022_Facundo-Tolosa_Back-Final-Project-202204-BCN)

📈 [Front SonarCloud metrics](https://sonarcloud.io/project/overview?id=isdi-coders-2022_Facundo-Tolosa_Front-Final-Project-202204-BCN)

## Links

🌐✨ [Amazing Notes](https://facundo-tolosa-front-final-project-202204-bcn.netlify.app)

💻🗄 [Back deploy on Render](https://facundo-tolosa-final-project-back.onrender.com)

🔗 [Original front repository](https://github.com/isdi-coders-2022/Facundo-Tolosa_Front-Final-Project-202204-BCN)

🔗 [Original back repository](https://github.com/isdi-coders-2022/Facundo-Tolosa_Back-Final-Project-202204-BCN)

## Back endpoints

`🔹 POST ➡️   .../user/register`        
Register a user. The payload should have a name, username, password and an image.

`🔹 POST ➡️   .../user/login`  
Login with an existing user to get a valid token. The payload should have an existing username and password.           

`🔹 GET  ➡️    .../user/:username`  
Get all the data of an existing user, including the notes created by him.      

`🔹 GET  ➡️    .../notes`   
Get all the notes.

`🔹 GET  ➡️    .../notes/:username`    
Get the notes created by one user.     

`🔹 GET  ➡️    .../notes/:noteId`    
Get a specific note.       

`🔹 POST ➡️   .../notes`    
Create a note. The payload should have a title, a content and a category.

`🔹 DEL  ➡️    .../notes/:idToDelete`   
Delete a note with it's ID. A note can be deleted only by it's creator.
 
`🔹 PUT  ➡️    .../notes/:noteId`   
Edit a note with it's ID. A note can be edited only by it's creator.
