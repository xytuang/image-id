from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def home():
    return {"message": "hello from backend"}

@app.route("/upload", methods=["POST"])
def upload():
    file = request.files['file']
    return jsonify({"data": file.filename})
