from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/dob", methods=["GET", "POST"])
def dob():
    age = None

    if request.method == "POST":
        dob_input = request.form["dob"]
        birth_date = datetime.strptime(dob_input, "%Y-%m-%d")
        today = datetime.today()
        age = today.year - birth_date.year

    return render_template("dob.html", age=age)

@app.route("/career")
def career():
    return render_template("career.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

if __name__ == "__main__":
    app.run(debug=True)