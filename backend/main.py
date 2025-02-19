import re
from flask import request, jsonify
from config import app, db
from models import Contact
from flask_cors import CORS

CORS(app)
# Email validation function
def is_valid_email(email):
    pattern = r'^[\w\.-]+@[\w\.-]+\.(com|co\.uk)$'
    return re.match(pattern, email)


@app.route("/contact-book", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts": json_contacts})


@app.route("/create_contact", methods=["POST"])
def create_contact():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")

    # Check if required fields are provided
    if not first_name or not last_name or not email:
        return jsonify({"message": "First name, last name, and email are required."}), 400

    # Validate email format
    if not is_valid_email(email):
        return jsonify({"message": "Invalid email format. Email must contain '@' and end with '.com' or '.co.uk'."}), 400

    new_contact = Contact(first_name=first_name, last_name=last_name, email=email)
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "User created!"}), 201


@app.route("/update_contact/<int:user_id>", methods=["PATCH"])
def update_contact(user_id):
    contact = Contact.query.get(user_id)

    if not contact:
        return jsonify({"message": "User not found"}), 404

    data = request.json
    email = data.get("email", contact.email)

    # Validate email format if it's being updated
    if email and not is_valid_email(email):
        return jsonify({"message": "Invalid email format. Email must contain '@' and end with '.com' or '.co.uk'."}), 400

    contact.first_name = data.get("firstName", contact.first_name)
    contact.last_name = data.get("lastName", contact.last_name)
    contact.email = email

    db.session.commit()

    return jsonify({"message": "User updated."}), 200


@app.route("/delete_contact/<int:user_id>", methods=["DELETE"])
def delete_contact(user_id):
    contact = Contact.query.get(user_id)

    if not contact:
        return jsonify({"message": "User not found"}), 404

    db.session.delete(contact)
    db.session.commit()

    return jsonify({"message": "User deleted!"}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
