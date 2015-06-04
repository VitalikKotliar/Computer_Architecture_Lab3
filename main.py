from bottle import *
import bottle
import pymongo
import json
from pymongo import MongoClient

client = MongoClient()
db = client.arch3

# Returns static file. Used for getting JavaScript files from /scripts folder
@bottle.get('/static/<filename>')
def server_static(filename):
    return static_file(filename, root='./Files')


# Returns server page
@bottle.get('/')
def server():
    return static_file('index.html', root='./Files')


@bottle.get('/films')
def server():
    collection = db.films.find()
    arr_films = []
    for doc in collection:
        arr_films.append(doc.values())

    arr_films_in_json = json.dumps({"data": arr_films})
    return arr_films_in_json


@bottle.route('/todo')
def todo_list():
    return "vitalik lolka"


@bottle.delete('/film/<id>')
def func(id):
    client = MongoClient()
    db = client.arch3
    collection = db.films
    collection.remove({"_id": id})
    return id


@bottle.put('/film/<id>/<director>/<year>/<title>')
def func(id, director, year, title):
    client = MongoClient()
    db = client.arch3
    collection = db.films
    collection.insert({"_id": id, "director": director, "year": year, "title": title})
    return id


@bottle.post('/film/<id>/<title>')
def func(id, title):
    client = MongoClient()
    db = client.arch3
    collection = db.films
    # collection.update(  {"_id": id}, { "$set": { "title": title } })
    collection.update({"_id": int(id)}, {"title": title, "id": int(id)})
    return id


bottle.run()
