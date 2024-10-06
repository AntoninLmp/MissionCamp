# MissionCamp

## Aperçu du Projet
MissionCamp est un projet visant à suivre le fonds récoltés pour un projet. Ce projet est conçu pour les scouts.

## Installation
Pour installer et exécuter ce projet, suivez ces étapes :

1. Clonez le dépôt :
    ```
    git clone https://gitlab.com/votreutilisateur/MissionCamp.git
    ```
2. Naviguez vers le répertoire du projet :
    ```
    cd MissionCamp
    ```
3. Installez les dépendances :
    ```
    .\.env\Scripts\activate
    cd src/
    python .\manage.py runserver
    ```

## Publication sur Vercel
1. Ajout du fichier vercel.json 

2. Avoir un fichier requirements.txt sinon 
    ```
    pip freeze > requirements.txt
    ```

3. Changement dans le fichier settings.py 
    ```
    ALLOWED_HOSTS = ['.vercel.app']
    ```

4. Ajouter dans le fichier wsgi.py 
    ```
    app = application
    ```

## Licence
Ce projet est sous licence [Votre Licence] - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact
Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter.

