'''SINGLETON REDIS CACHE'''
import os
import redis

HOST = os.environ.get('REDIS_HOST', '192.168.99.100')
PORT = os.environ.get('REDIS_PORT', 6379)

class SingleCache(object):
    class _Cache:
        def __init__(self):
            self.cache = self.cache_connect()
        def cache_connect(self):
            return redis.Redis(host=HOST, port=PORT, db=0, decode_responses=True)

    instance = None
    def __new__(cls): # __new__ always a classmethod
        if not SingleCache.instance:
            SingleCache.instance = SingleCache._Cache()
        return SingleCache.instance
    def __getattr__(self, name):
        return getattr(self.instance, name)
    def __setattr__(self, name):
        return setattr(self.instance, name)
