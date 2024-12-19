import pymongo
import certifi
import time
import pytz
from datetime import timedelta, datetime

MONGO_URI = "추후 변경"
DATABASE_NAME = "AI_analyze"
COLLECTION = "trust_degree"

client_mongo = pymongo.MongoClient(MONGO_URI, tlsCAFile=certifi.where())
db = client_mongo[DATABASE_NAME]
collection = db[COLLECTION]

def save_to_mongo(data_list):
    current_time_utc = datetime.utcnow().replace(tzinfo=pytz.UTC)
    current_time_kst = current_time_utc + timedelta(hours=9) #나중에 한국 시간 맞추려고 넣어둠

    success = False
    attempts = 0

    while not success and attempts < 5:
        try:
            collection.insert_many(data_list)
            print(f"MongoDB에 데이터 삽입 성공: {len(data_list)}건")
            success = True
        except Exception as e:
            attempts += 1
            print(f"MongoDB 저장 오류: {e}. 재시도 {attempts}/5")
            time.sleep(2)
    if not success:
        print(f"MongoDB 저장 실패. {len(data_list)}건의 데이터가 손실되었습니다.")
