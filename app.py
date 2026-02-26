from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/dashboard', methods=['POST'])
def dashboard():
    email = request.form['email']
    return render_template('dashboard.html', email=email)

@app.route('/finance')
def finance():
    return render_template('finance.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/health')
def health():
    return render_template('health.html')

if __name__ == '__main__':
    app.run(debug=True)