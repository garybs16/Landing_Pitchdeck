import pandas as pd
from sqlalchemy import create_engine, text

file_path = "temp.json"

df = pd.read_json(file_path)

DATABASE_URL = "postgresql+psycopg2://postgres@localhost:5432/usa_states"

engine = create_engine(DATABASE_URL)

df.to_sql("usa_states", engine, if_exists="replace", index=False)

with engine.connect() as conn:
    result = conn.execute(text("SELECT COUNT(*) FROM usa_states;"))
    print("Rows inserted:", result.scalar())

print("PostgreSQL table created successfully.")