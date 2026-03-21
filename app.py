from flask import Flask, render_template

app = Flask(__name__)

# 🔹 Landing Page
@app.route("/")
def index():
    return render_template("index.html")

# 🔹 Signin Page
@app.route("/signin")
def signin():
    return render_template("signin.html")

# 🔹 Signup Page
@app.route("/password")
def password():
    return render_template("password.html", username="Heer")


@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/basic")
def basic():
    return render_template("basic.html")

# 🔹 Dashboard Page
@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

# 🔹 Run App
if __name__ == "__main__":
    app.run(debug=True)