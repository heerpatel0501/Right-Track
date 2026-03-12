from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Home Page</h1>"

@app.route('/dashboard')
def dashboard():

    username = "Heer"

    skills = 80
    health = 70
    finance = 85

    overall = int((skills + health + finance) / 3)

    # Find highest category
    category_scores = {
        "Skills": skills,
        "Health": health,
        "Finance": finance
    }

    top_category = max(category_scores, key=category_scores.get)

    # Weekly Data
    weekly_data = [
        {"label": "Mon", "value": 40},
        {"label": "Tue", "value": 60},
        {"label": "Wed", "value": 30},
        {"label": "Thu", "value": 80},
        {"label": "Fri", "value": 55},
        {"label": "Sat", "value": 70},
        {"label": "Sun", "value": 50},
    ]

    # AI Suggestions (dummy for now)
    ai_news = f"Top trending news in {top_category}"
    ai_video = f"Most viewed YouTube video about {top_category}"

    return render_template(
        "dashboard.html",
        username=username,
        skills=skills,
        health=health,
        finance=finance,
        overall=overall,
        weekly_data=weekly_data,
        ai_news=ai_news,
        ai_video=ai_video
    )


@app.route('/skills', methods=['GET', 'POST'])
def skills():

    # Temporary storage (later we connect DB)
    available_interests = [
        "Gaming", "Communication", "Reading",
        "Traveling", "Music", "Video Creation",
        "Fitness", "Coding", "Photography"
    ]

    # Example selected interests (simulate user choice)
    user_interests = [
        {"name": "Gaming", "xp": 240},
        {"name": "Reading", "xp": 120},
        {"name": "Communication", "xp": 80}
    ]

    # Calculate level + progress
    for interest in user_interests:
        interest["level"] = interest["xp"] // 100
        interest["progress"] = min(100, interest["xp"] // 5)

    return render_template(
        "skills.html",
        available_interests=available_interests,
        user_interests=user_interests
    )


if __name__ == '__main__':
    app.run(debug=True)