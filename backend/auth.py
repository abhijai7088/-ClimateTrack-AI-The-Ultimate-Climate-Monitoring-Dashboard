from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

# Simulating user authentication
users = {}

@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if username in users:
        return jsonify({"message": "User already exists"}), 400
    users[username] = generate_password_hash(password)
    return jsonify({"message": "User registered successfully"}), 201

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if username not in users or not check_password_hash(users[username], password):
        return jsonify({"message": "Invalid credentials"}), 401
    return jsonify({"message": "Login successful"}), 200
