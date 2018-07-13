Scoring Project
=============

>**Languages and tools used:**
>
>- Node v8.9.1
>- NPM v6.1.0
>- MySQL 5.7.17
>- VS Code as my IDE
>- Windows 8.1
>
>**Instructions**
>
>>*Getting Started*
>
>1. navigate to config/config.json
>2. modify config.json's development key to reflect your local mysql db
>3. run `npm run client-install` to install client dependencies
>4. run `npm install` to install server dependencies
>5. run `npm run dev` to start up the program in development mode with nodemon
>6. the program is running on port 3000
>
>*Using the App*
>
>1. preload files and assessments to your mysql database or click the upload button, and choose a file from your machine. Uploaded files will be added to the data directory, and the filename is inserted into the database.
>2. Once the database contains files, a list of the names should be in the sidebar. Scroll down and see that a card with the each file's most recent score is displayed. 
>3. Click on a filename from the sidebar, or the details button on one of the cards to bring up a modal window with more details about each file.
>4. Inside the modal, you may click "run assessment" to score the current file. Choose specific dates from the date inputs to display scores from a specific date range.
>5. Use the prev and next buttons to cycle through the available file scores
>6. Click the backdrop to close the modal
