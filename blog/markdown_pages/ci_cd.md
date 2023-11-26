# Continuous Integration / Continuous Deployment (CI/CD)

## Comment fait-t-on ?

D'abord on crée un nouvel utilisateur sur la machine avec l'utilisateur `root`,

````
# SSH dans la machine
ssh root@<domain>
adduser cicd


D'abord il faut créer les clés SSH (Secure Shell) avec le commande,

```bash
ssh-keygen -t rsa -C "note personnelle" -f ~/.ssh/<où-sauvegarder-la-clé>
````

Puis après, on cr
