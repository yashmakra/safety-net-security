from fastapi import FastAPI
# Import the routes we defined in the API folder
from backend.api.routes import router as api_router

app = FastAPI(title="Sentinel Security API")

# Connect the API routes to the main app
app.include_router(api_router)

@app.get("/")
def home():
    return {"status": "Sentinel Core is Online 🛡️"}