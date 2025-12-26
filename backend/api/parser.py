import re

def extract_commands(text_content):
    """
    Scans raw text for 'pip install' and 'npm install' commands.
    Returns a list of dictionaries with package metadata.
    """
    packages = []
    
    # 1. Find Python packages (pip install <name>)
    pip_matches = re.findall(r"pip install ([\w\-]+)", text_content)
    
    for name in pip_matches:
        packages.append({
            "name": name, 
            "manager": "pip", 
            "ecosystem": "pypi"
        })
        
    # 2. Find Node.js packages (npm install <name> OR npm i <name>)
    npm_matches = re.findall(r"npm (?:install|i) ([\w\-@/]+)", text_content)
    
    for name in npm_matches:
        packages.append({
            "name": name, 
            "manager": "npm", 
            "ecosystem": "npm"
        })
    
    return packages