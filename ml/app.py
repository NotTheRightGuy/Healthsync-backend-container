from flask import Flask
from flask import request
from utils.predict import predict_disease
from utils.template_maker import create_template
from utils.upload_prescription import upload_prescription
from inference.llm import generate_feedback

app = Flask(__name__)

@app.get('/')
def index():
    return "Hello World"

@app.post("/predict")
def predict():
    symptoms = request.json["symptoms"]
    prediction = predict_disease(symptoms)
    return prediction


@app.post("/create-prescription")
def create_prescription():
    data = request.json
    create_template(
        data["name"],
        str(data["age"]),
        str(data["phone"]),
        data["blood_group"],
        data["diagnosis"],
        str(data["confidence_level"]),
        data["feedback"],
        data["medicine"],
    )
    if "download" in data:
        if bool(data["download"]):
            url = upload_prescription()
            return {"message": "Prescription created and uploaded successfully", "url": url}
        else:
            return {"message": "Prescription created successfully"}
    else:
        return {"message": "Prescription created successfully"}


@app.post("/generate-feedback")
def generate_feedback_route():
    data = request.json
    feedback = generate_feedback(data["diagnosis"])
    return {"feedback": feedback[0], "medicine": feedback[1]}

if __name__ == "__main__":
    app.run(port=5000)
