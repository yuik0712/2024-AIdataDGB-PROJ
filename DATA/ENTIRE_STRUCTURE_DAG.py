from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta
from airflow.operators.empty import EmptyOperator

from TASK.kafka_consumer_confluent import consume_data
from TASK.save_to_mongoDB import save_to_mongo
from TASK.ai_analyze import analyze_data
from TASK.save_to_mySQL import save_to_mysql

default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(2024, 1, 1),
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

dag = DAG(
    'data_pipeline',
    default_args=default_args,
    description='Kafka → MongoDB → AI 분석 → MySQL 저장',
    schedule_interval=timedelta(minutes=10),
)
Entire_structure_pipeline = EmptyOperator(task_id='Entire_structure_pipeline', dag=dag)

def task_consume_data():
    global consumed_data
    consumed_data = consume_data()

def task_save_to_mongo():
    global consumed_data
    save_to_mongo(consumed_data)

def task_ai_analysis():
    global analyzed_results
    analyzed_results = analyze_data()

def task_save_to_mysql():
    global analyzed_results
    save_to_mysql(analyzed_results)

t1 = PythonOperator(task_id='consume_data', python_callable=task_consume_data, dag=dag)
t2 = PythonOperator(task_id='save_to_mongo', python_callable=task_save_to_mongo, dag=dag)
t3 = PythonOperator(task_id='ai_analysis', python_callable=task_ai_analysis, dag=dag)
t4 = PythonOperator(task_id='save_to_mysql', python_callable=task_save_to_mysql, dag=dag)

Entire_structure_pipeline >> t1 >> t2 >> t3 >> t4  # 태스크 실행 순서 설정
