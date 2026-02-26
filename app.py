from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/skills')
def skills():
    return render_template("skills.html")

@app.route('/finance')
def finance():
    return render_template("finance.html")

@app.route('/health')
def health():
    return render_template("health.html")

if __name__ == "__main__":
    app.run(debug=True)