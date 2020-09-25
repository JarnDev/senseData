
# Live at :point_right: [sensedata.jarndev.com](http://sensedata.jarndev.com)
## DESCRIPTION
Small application that talks with [swapi.dev](https://swapi.dev/) and get primarily People and Starships information, theses informations are treated at server, populating all fields that have url, **_ex.: People['homeworld'] has the homeworld url, so the server make another request and change the url for the homeworld name_** , this field population step take much time, so all information that the server gets will be stored on cache using a redis container for 1 hour, and next time the information will be fetch much faster. 

The frontend has 2 pages, People page and Starships page:

- Peoples page show all people available 10 people at time.
  
- Starships page show all ships available, ordered by decreasing score ( score is calculated on field population step at backend `hyperdrive_rating dividido / cost_in_credits` )

### FEATURES :sparkles:
- Pagination 10 register at time on people page
- Clicking on table header will sort increasing, decreasing and normal
- All fields have filters and can be used under the table header
- Clicking on badge ( cell information that have badge format), will pop an alert showing that a page could be created to show details about the clicked item.


# CONTAINERS :whale:
    - sensedata_app
      - Nginx - serving React Built static files on Port 80
    
    - sensedata_server
      - Flask - Port 3000

    - redis
      - REDIS - Port 6379 ( acessed only with docker network, no external access)



## TODO :construction:
    - HTTPS on Nginx container for 443 (ssl) serving
    - USE HTTP2 on NGINX
    - Maybe use NGINX to redirect calls for API, closing external access for server.
    - A Detail page to show information about a clicked badge.

## RUN :wrench:

  1. Clone this repo: ```git clone https://github.com/JarnDev/senseData.git```
  2. Enter into project folder: ```cd ./senseData```
  3. Start all services: ```docker-compose up -d --build```
  4. Stop all services: ```docker-compose down```


### _INFO_

The arg value at app build step, need to be the full URL with the port that server is listening. ex.: `http://IP_of_host_machine_runing_docker:port`

### _**If the page take long to load, its normal, thats because the backend is populating all url info with readable names, next time will be fast I`m caching most of it for an hour.**_


---
Author: José Alfredo Ribeiro Neto

Linkedin: [https://www.linkedin.com/in/jarndev/](https://www.linkedin.com/in/jarndev/)

---
