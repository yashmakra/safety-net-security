# backend/core/scanner.py
import requests
from .intelligence import detect_typosquatting
from .rules import calculate_risk_score

class PackageScanner:
    def __init__(self, name, ecosystem):
        self.name = name.lower().strip()
        self.ecosystem = ecosystem.lower()

    def fetch_metadata(self):
        """Official Registry API calls"""
        url = f"https://pypi.org/pypi/{self.name}/json" if self.ecosystem == "pypi" else f"https://registry.npmjs.org/{self.name}"
        try:
            res = requests.get(url, timeout=5)
            return res.json() if res.status_code == 200 else None
        except:
            return None

    def analyze(self):
        """The main pipeline for Member 1"""
        metadata = self.fetch_metadata()
        typo_target = detect_typosquatting(self.name, self.ecosystem)
        
        # Get final verdict from rules.py
        verdict = calculate_risk_score(metadata, typo_target)
        
        return {
            "package": self.name,
            "ecosystem": self.ecosystem,
            "risk": verdict
        }