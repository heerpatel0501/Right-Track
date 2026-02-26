from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Right Things At Right Time - Application is Running"

if __name__ == "__main__":
    app.run(debug=True)