from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/dob", methods=["GET", "POST"])
def dob():
    if request.method == "POST":
        birthdate = request.form["birthdate"]
        birth_year = int(birthdate.split("-")[0])
        current_year = datetime.now().year
        age = current_year - birth_year
        return redirect(url_for("dashboard", age=age))
    return render_template("dob.html")

@app.route("/dashboard")
def dashboard():
    age = request.args.get("age")
    return render_template("dashboard.html", age=age)

@app.route("/skills")
def skills():
    return render_template("skills.html")

@app.route("/health")
def health():
    return render_template("health.html")

@app.route("/finance")
def finance():
    return render_template("finance.html")

@app.route("/career")
def career():
    return render_template("career.html")

if __name__ == "__main__":
    app.run(debug=True)
    @app.route("/career", methods=["GET", "POST"])
def career():
    advice = None
    if request.method == "POST":
        age = int(request.form["age"])

        if age < 18:
            advice = "Focus on learning new skills, explore hobbies, and build strong fundamentals."
        elif 18 <= age <= 22:
            advice = "Explore internships, build your portfolio, and improve communication skills."
        else:
            advice = "Focus on specialization, networking, job opportunities, and professional growth."

    return render_template("career.html", advice=advice)