import pymongo
import certifi
from sklearn.linear_model import LinearRegression
import numpy as np
from datetime import datetime

# MongoDB 설정
MONGO_URI = "mongodb+srv://username:password@cluster.mongodb.net/"
client = pymongo.MongoClient(MONGO_URI, tlsCAFile=certifi.where())
collection = client['project_db']['input_data']


def analyze_data():
    # MongoDB에서 데이터 불러오기
    data = list(collection.find())

    # 입력 데이터를 AI 모델 입력 형태로 변환
    X = np.array([d['amount'] for d in data]).reshape(-1, 1)
    y = np.array([0 for _ in data])  # 예제에서는 가상의 타겟 값

    # AI 모델 학습 (Linear Regression 예시)
    model = LinearRegression()
    model.fit(X, y)
    print("AI Model trained.")

    # 분석 결과 생성
    results = []
    for d in data:
        prediction = model.predict([[d['amount']]])  # AI 모델 예측
        results.append({
            "name": d['name'],
            "description": d['description'],
            "amount": d['amount'],
            "predicted_risk": float(prediction[0]),  # 예측된 리스크 점수
            "analyzed_at": datetime.now()  # 분석 시간
        })
    return results
