'''Controller file '''
from flask import request
from flask_cors import cross_origin
import services


def routes(app):
    '''Simple routes for this app'''

    @app.route('/')
    @cross_origin()
    def get_people():
        page = request.args.get('page', default=1, type=int)
        return services.get_people(page)

    @app.route('/ships')
    @cross_origin()
    def get_ships():
        return services.get_all_ships()
