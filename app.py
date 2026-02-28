from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('auth.html')

@app.route('/signup')
def signup():
    return "<h1>Sign Up Page Coming Soon</h1>"

@app.route('/signin')
def signin():
    return "<h1>Sign In Page Coming Soon</h1>"

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)