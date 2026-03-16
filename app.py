from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def landing():
    return render_template("landing.html")

@app.route("/signup")
def signup():
    return "<h1>Signup Page</h1>"

@app.route("/signin")
def signin():
    return "<h1>Signin Page</h1>"

if __name__ == "__main__":
    app.run(debug=True)
    from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("landing.html")

@app.route("/dashboard")
def dashboard():

    username = "User"

    overall = 65
    skills = 70
    health = 55
    finance = 60

    weekly_data = [
        {"label": "Mon", "value": 60},
        {"label": "Tue", "value": 70},
        {"label": "Wed", "value": 50},
        {"label": "Thu", "value": 80},
        {"label": "Fri", "value": 65},
        {"label": "Sat", "value": 75},
        {"label": "Sun", "value": 55}
    ]

    ai_news = "Productivity tools are helping students manage skills better."
    ai_video = "Top habits to improve skills and productivity."

    return render_template(
        "dashboard.html",
        username=username,
        overall=overall,
        skills=skills,
        health=health,
        finance=finance,
        weekly_data=weekly_data,
        ai_news=ai_news,
        ai_video=ai_video
    )

if __name__ == "__main__":
    app.run(debug=True)