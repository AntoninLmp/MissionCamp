#!/bin/bash
# Ajouter le chemin des scripts au PATH
export PATH=$PATH:/python312/bin
python3 -m pip install -r requirements.txt
python3 --version
python3 src/manage.py collectstatic