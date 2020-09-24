import json
from requests import request
from redis_cache import SingleCache
SINGLE = SingleCache()

def get_all_ships():
    starships = json.loads(SINGLE.cache.get('starships')) if SINGLE.cache.exists('starships') else None
    if starships is None:
        result = request('get', 'https://swapi.dev/api/starships/').json()
        starships = result['results'] 
        while result['next']:
            next_url = result['next']
            result = request('get', next_url).json()
            starships.extend(result['results'])
        for ship in starships:
            if ship['hyperdrive_rating'] == 'unknown' or ship['cost_in_credits'] == 'unknown':
                ship['score'] = 0
            else:
                ship['score'] = float(ship['hyperdrive_rating'])/float(ship['cost_in_credits'])
            ship['pilots'] = get_people_name_by_url(ship['pilots'])
            ship['films'] = get_film_name_by_url(ship['films'])

        starships.sort(key=lambda ship: ship['score'], reverse=True)

        SINGLE.cache.set('starships', json.dumps(starships), ex=1800)

    return {'starships': starships}


def get_people(page):
    people = json.loads(SINGLE.cache.get(f'people-page-{page}')) if SINGLE.cache.exists(f'people-page-{page}') else None
    if people is None:
        people = request('get', f'https://swapi.dev/api/people/?page={page}').json()

        for person in people['results']:
            person['homeworld'] = get_planet_by_url(person['homeworld'])
            person['species'] = get_species_by_url(person['species'])
            person['vehicles'] = get_vehicles_by_url(person['vehicles'])
            person['starships'] = get_ships_by_url(person['starships'])
            person['films'] = get_film_name_by_url(person['films'])


        SINGLE.cache.set(f'people-page-{page}', json.dumps(people), ex=300)
    return people


def get_people_name_by_url(url_list):
    people = []

    if url_list:
        for url in url_list:
            person = json.loads(SINGLE.cache.get(url)) if SINGLE.cache.exists(url) else None

            if person is None:
                person = request('get', url).json()
                SINGLE.cache.set(url, json.dumps(person), ex=3600)
            people.append(person['name'])

    return people

def get_film_name_by_url(url_list):
    films = []

    if url_list:
        for url in url_list:
            film = json.loads(SINGLE.cache.get(url)) if SINGLE.cache.exists(url) else None

            if film is None:
                film = request('get', url).json()
                SINGLE.cache.set(url, json.dumps(film), ex=3600)
            films.append(film['title'])

    return films


def get_planet_by_url(url):
    planet = json.loads(SINGLE.cache.get(url)) if SINGLE.cache.exists(url) else None
    if planet is None:
        planet = request('get', url).json()

        SINGLE.cache.set(url, json.dumps(planet), ex=3600)

    return planet['name']


def get_vehicles_by_url(url_list):
    vehicles = []

    if url_list:
        for url in url_list:
            vehicle = json.loads(SINGLE.cache.get(url)) if SINGLE.cache.exists(url) else None
            if vehicle is None:
                vehicle = request('get', url).json()
                SINGLE.cache.set(url, json.dumps(vehicle), ex=3600)
            vehicles.append(vehicle['name'])

    return vehicles

def get_ships_by_url(url_list):
    ships = []

    if url_list:
        for url in url_list:
            ship = json.loads(SINGLE.cache.get(url)) if SINGLE.cache.exists(url) else None

            if ship is None:
                ship = request('get', url).json()
                SINGLE.cache.set(url, json.dumps(ship), ex=3600)
            ships.append(ship['name'])

    return ships

def get_species_by_url(url_list):
    species = []

    if url_list:
        for url in url_list:
            specie = json.loads(SINGLE.cache.get(url)) if SINGLE.cache.exists(url) else None

            if specie is None:
                specie = request('get', url).json()
                SINGLE.cache.set(url, json.dumps(specie), ex=3600)
            species.append(specie['name'])

    return species
