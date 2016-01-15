Clone the repo
Run ‘npm install’ to install all the dependencies.
Note: If you have issues installing, update your Node to version 4+
We have a few CORS issues which you can temporarily fix in one of two ways. If you are heavily opposed to any of the following
solutions you don't have to do it. You just wont be able to see all the people that have completed the project or be able to add
your name to the list. Which means you'll skip the last step "npm run complete ..." or else it'll just fail.
	1. Quit Chrome and run 'open -a Google\ Chrome --args --disable-web-security -–allow-file-access-from-files'
		This will open Chrome without web security (Don't use this for normal use)
		
	2. You can also install a Chrome Extension - Allow-Control-Allow-Origin: *
	https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
		This one will modify every response to allow request from any domain  (Don't use this for normal use)
Run ‘npm start’ to start the app.
Note: Upon running the app, a browser should appear under: http://localhost:5555/dist/dev/

Open the project in IntelliJ 15 in order to view it better as it supports TypeScript
Note: You will have the option to convert your files to TypeScript, hit 'OK'. You'll get a lot of errors, but you can ignore them.
        This will create a dropdown on you .ts files that include a compiled Javascript and mapping file.

There are 6 tasks for you to complete within the project.

* The first 3 are quick demos of new ES6 idioms in app/components/home/home.ts
* Task 4 is to pass values from one Component into a sub-Component app/components/home/home.html
* Task 5 is to fix a databinding bug app/components/home/smile.html
* Task 6 is to fix 2 failing unit tests. run npm test to find the failures.
  The tests files are in app/components/**/* and end with _spec.ts


When all tasks are completed, run 'npm run complete -- --params.fullname="FULLNAME"',
where FULLNAME should be your name. This will run all the tests and add your name to the list if everything passes.
Sometimes it fails to run, just try it again until it works. (Sorry)
