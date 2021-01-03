# hapi-friends

# Lancer le projet 

Lancez la commande `docker build -t hapifriends .` puis `docker run hapifriends`. 
Lors de la premiere utilisation, il est possible qu'il vous faille lancer cette commande `docker run -d -p 8080:8080 hapifriends`

## Description du projet

Je suis Sébastien Guidez. J'ai repris un projet fait en groupe pendant le cours de Spring de M1 III avec Johann De Almedia et Gianni Giudice. Hapi-friends est un projet d'API réseau social basique avec une base de données interne H2.


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

Les memes fonctionnalités existent pour posts et friends avec les routes adaptées. Il n'y a rien de particulier qui s'affiche sur la page localhost.

## Surface d'attaque

Le fichier mermaidjs se trouve à la racine du projet sous le nom: 
- **mermaid-diagram-surface-attaque.png**.

Si le fichier png n'est pas visible voici le lien markdown :
- [![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgQTFbT1NdIC0tPiBCeyBEb2NrZXIgfVxuICBBMltsb2NhbGlzYXRpb24gZHUgU2VydmV1cl0gLS0-IEJ7IERvY2tlciB9XG4gIEJ7RG9ja2VyfSAtLT4gQzFbV2ViXVxuICBcbiAgQzFbV2ViXSAtLT4gQzNbQXV0aGVudGlmaWNhdGlvbl1cbiAgQzNbQXV0aGVudGlmaWNhdGlvbl0gLS0-IEM0W0NvbXBsZXhpdMOpIG1vdCBkZSBwYXNzZV1cbiAgXG4gIEJ7RG9ja2VyfSAgLS0-IERbQkREXVxuICBEW0JERF0gLS0-IEQyW2hhY2hhZ2UgbW90IGRlIHBhc3NlXVxuICBEW0JERF0gLS0-IEQzW0J1ZmZlciBvdmVyZmxvdyBleHBsb2l0YXRpb25zXVxuICBEW0JERF0gLS0-IEQ0W0F0dGFxdWUgRG9TXVxuICBDMVtXZWJdIC0tPiBJW3BhZ2VdXG4gIElbcGFnZV0gLS0-IEpbaW5qZWN0aW9uIFhTU11cblx0QntEb2NrZXJ9ICAtLT4gS1tBUEldXG4gIEtbQVBJXSAtLT4gTFtpbmplY3Rpb24gU1FMXVxuICBLW0FQSV0gLS0-IEdbdXBsb2FkIGZpbGVdXG4gIEdbdXBsb2FkIGZpbGVdIC0tPiBIW2ZhaWxsZSB1cGxvYWRdIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgQTFbT1NdIC0tPiBCeyBEb2NrZXIgfVxuICBBMltsb2NhbGlzYXRpb24gZHUgU2VydmV1cl0gLS0-IEJ7IERvY2tlciB9XG4gIEJ7RG9ja2VyfSAtLT4gQzFbV2ViXVxuICBcbiAgQzFbV2ViXSAtLT4gQzNbQXV0aGVudGlmaWNhdGlvbl1cbiAgQzNbQXV0aGVudGlmaWNhdGlvbl0gLS0-IEM0W0NvbXBsZXhpdMOpIG1vdCBkZSBwYXNzZV1cbiAgXG4gIEJ7RG9ja2VyfSAgLS0-IERbQkREXVxuICBEW0JERF0gLS0-IEQyW2hhY2hhZ2UgbW90IGRlIHBhc3NlXVxuICBEW0JERF0gLS0-IEQzW0J1ZmZlciBvdmVyZmxvdyBleHBsb2l0YXRpb25zXVxuICBEW0JERF0gLS0-IEQ0W0F0dGFxdWUgRG9TXVxuICBDMVtXZWJdIC0tPiBJW3BhZ2VdXG4gIElbcGFnZV0gLS0-IEpbaW5qZWN0aW9uIFhTU11cblx0QntEb2NrZXJ9ICAtLT4gS1tBUEldXG4gIEtbQVBJXSAtLT4gTFtpbmplY3Rpb24gU1FMXVxuICBLW0FQSV0gLS0-IEdbdXBsb2FkIGZpbGVdXG4gIEdbdXBsb2FkIGZpbGVdIC0tPiBIW2ZhaWxsZSB1cGxvYWRdIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

## Objectif de securité

*Confidentialité* : 4/5. Quand l'utilisateur devra fournir un mot de passe lors de la creation du compte, il devra en valider un complexe. De plus, par la suite, il sera haché et stocké dans la base de données sécurisé. Il aura aussi la possibilité de repondre anonymement sur le site.

*Intégrité* : 3/5. Grace à l'API, il y aura des mise à jour frequente. Cependant, il risque d'y avoir une demande de modification nécessaire pour changer une donnée.

*Disponibilité* : 4/5. L'application utlisant Docker, dès que le container est construit, le site se lance. Pour le moment, l'application n'est déployée qu'en local donc cela peut encore être ameliorer.

*Traçabilité* : 2/5. Pour ce projet, l'application ne cherche pas à respecter les exigences légales tel que les RGPD (avec un bandeau de cookies). Cependant, aucune information de l'utilisateur n'a pour objectif d'être retenu. Les données seront sauvegardé dans la base de données interne et via l'API mais seront le mieux proteger possible.


