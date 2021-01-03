# hapi-friends

# Lancer le projet 

Lancez la commande `docker build -t hapifriends .` puis `docker run -d -p 8080:8080 hapifriends`

## Description du projet

J'ai repris un projet fait en groupe pendant le cours de Spring de M1 III avec Johann De Almedia et Gianni Giudice. Hapi-friends est un projet d'API réseau social basique avec une base de données interne H2.


## Fonctionnalités

### Utilisateur

Sur hapi-friends, il est possible d'effectuer les actions suivantes :

- Afficher les utilisateurs existant en base via la route **/users** (**GET**)

- Afficher un utilisateur existant en base en renseignant son id via la route **/users/{id}** (**GET**)

- Créer un compte en envoyant à la route **/users/sign-up** un .json de cette forme : (**POST**)

- Modifier un utilisateur existant en base en renseignant son id via la route **/users/{id}** et envoyant les paramètres suivants : (**PUT**)

  - nom
  - prenom
  - email
  - numero

- Supprimer un utilisateur existant en base en renseignant son id via la route **/users/{id}** (**DELETE**)

- Rechercher un utilisateur existant en base en renseignant son nom via la route **/users/{name}** (**GET**)

