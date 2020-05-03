# README

## Regarding the index.html
The index.html in the dist-folder is the "true" index.

## Saving Language Option 
localStorage is used to save the chosen language option (de, en or fr) so it is still remembered on a reload.
By using localStorage, the chosen option will be remembered even when the browser is closed and restarted.
If that is not desired, localStorage can be swapped out with sessionStorage.

## Translations
The translations for the different languages supported were placed in their own json-files.
This works well, but needs the two options 

<code>"resolveJsonModule": true
"esModuleInterop": true </code>

to be added to the tsconfig.json file under compiler options, as importing from json files is disabled by default in typescript.

## Starting on server
As desired, a server running the react-app can be started by using the server-build script:

<code>npm run server</code>.
 
 
This will start a webpack-dev-server on the port 9000 of localhost.
If the port needs to be changed for whatever reason, this can be done in the webpack.config.js file, under the port option of devServer.

## Knwon issues
It looks like the kilobyte unit is not supported in the Firefox browser for whatever reason (that number will simply not show a unit at all).
It is displayed without problem in Chrome.