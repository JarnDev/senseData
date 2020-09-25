# Live
[sensedata.jarndev.com](http://sensedata.jarndev.com)


## RUN 

Run command ` docker-compose up -d --build ` inside the senseData folder to start

Run command ` docker-compose down ` inside the senseData folder to stop

### INFO

If your have problem with connection between react app and server, update the `/frontend/src/services/api.js` file with correct docker network IP

### If the page take long to load, its normal, thats because the backend is populating all url info with readable names, next time will be fast I`m caching most of it for an hour.


This repo: contains frontend, backend and redis for caching everythin on docker 




Author: José Alfredo Ribeiro Neto
