# angular-pascal-triangle
Display Pascal Triangle in Angular 1


# Run The Project

To directly run the project, just open the index.html file from the dist folder in any browser.


# Source File

App source files are location inside the src directory in root.

    app/index.module.js - Contains app's Angular Module
    app/index.route.js - Contains app's different routing states.
    app/index.scss - Sass file for the project
    app/index.html - apps index.html where all the scripts and styles are injected autmatically.

	app/main/main.controller.js - controller for the Pascal Triangle view
	app/main/main.html  - Pascal Triangle view
	app/main.service.js - Pascal Triangle service.

# Compile and Run the Project

To compile the project, you need to have node, gulp and bower installed on your local machine.

1) Install all node modules dependencies by running this command - 
    
    npm install

2) Install all bower components - 

    bower install

3) Once all the dependencies are installed you can run the project directly by using this command-

    gulp serve

	The above command will open the app in the browser with watcher. Any changes made in the source files will be automatically reflected in the app.

4) To Create Dist build, run the following command

    gulp build