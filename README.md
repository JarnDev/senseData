# Live
[sensedata.jarndev.com](http://sensedata.jarndev.com)


## RUN 

Run command ` docker-compose up -d --build ` inside the senseData folder to start

Run command ` docker-compose down ` inside the senseData folder to stop

### INFO

The arg value at app build step, need to be the full URL with the port that server is listening. ex.: `http://IP_of_host_machine_runing_docker:port`

### If the page take long to load, its normal, thats because the backend is populating all url info with readable names, next time will be fast I`m caching most of it for an hour.


This repo: contains frontend and nginx for serving, backend and redis for caching... everything on docker 




Author: José Alfredo Ribeiro Neto
