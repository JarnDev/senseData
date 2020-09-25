import os
from flask import Flask
from flask_cors import CORS
from controllers import routes

SERVE_ON_PORT = os.environ.get('LISTEN_PORT', 80)

app = Flask(__name__)
CORS(app)
routes(app)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=SERVE_ON_PORT)
