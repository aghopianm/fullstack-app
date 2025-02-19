import re
from config import db
from sqlalchemy.orm import validates

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    @validates("email")
    def validate_email(self, key, email):
        """Ensure email contains '@' and ends with '.com' or '.co.uk'"""
        pattern = r'^[\w\.-]+@[\w\.-]+\.(com|co\.uk)$'
        if not re.match(pattern, email):
            raise ValueError("Invalid email format. Email must contain '@' and end with '.com' or '.co.uk'.")
        return email

    def to_json(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "email": self.email,
        }
