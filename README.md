# hapi-friends

## Lancer le projet 

- Lancez la commande `docker build -t hapifriends .` puis `docker run hapifriends`. 
- Lors de la premiere utilisation, il est possible qu'il vous faille lancer cette commande `docker run -d -p 8080:8080 hapifriends`
- Il vous faudra alors entrer l'URL : `http://localhost:8080/`. Vous arriverez sur la page d'acceuil (qui est vide). Pour voir les differentes pages disponible, veuillez vous rendre dans la partie 'Fonctionnalités'.

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

```json
{
    "id": 4,
    "pseudo": "test",
    "password": "test",
    "surname": "Test",
    "firstname": "Test",
    "email": "test.test@lacatholille.fr",
    "mob_number": null,
    "friends": [
    ]
}
```

- Rechercher un utilisateur existant en base en renseignant son nom via la route **/users/{name}** (**GET**)

Les memes fonctionnalités existent pour posts et friends avec les routes adaptées suivantes : `http://localhost:8080/posts` et `http://localhost:8080/friends`. Il n'y a rien de particulier qui s'affiche sur la page localhost.

Je vous conseille d'utiliser le logiciel Postman afin d'effectuer les requetes.

## Base de donnée
Pour acceder à la base de donnée h2. il vous suffit d'aller à l'URL suivante: `http://localhost:8080/h2-console`.
Il y a 3 champs à modifier par les réponses suivantes:
- `JDBC URL:` jdbc:h2:mem:testdb
- `User Name:` admin
- `Password:` admin

## Surface d'attaque

Le fichier mermaidjs se trouve à la racine du projet sous le nom: 
- **mermaid-diagram-surface-attaque.png**.

Si le fichier png n'est pas visible voici le lien markdown :
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgQTFbT1NdIC0tPiBCeyBEb2NrZXIgfVxuICBBMltsb2NhbGlzYXRpb24gZHUgU2VydmV1cl0gLS0-IEJ7IERvY2tlciB9XG4gIEJ7RG9ja2VyfSAtLT4gQzFbV2ViXVxuICBcbiAgQzFbV2ViXSAtLT4gQzNbQXV0aGVudGlmaWNhdGlvbl1cbiAgQzNbQXV0aGVudGlmaWNhdGlvbl0gLS0-IEM0W0NvbXBsZXhpdMOpIG1vdCBkZSBwYXNzZV1cbiAgXG4gIEJ7RG9ja2VyfSAgLS0-IERbQkREXVxuICBEW0JERF0gLS0-IEQyW2hhY2hhZ2UgbW90IGRlIHBhc3NlXVxuICBEW0JERF0gLS0-IEQzW0J1ZmZlciBvdmVyZmxvdyBleHBsb2l0YXRpb25zXVxuICBEW0JERF0gLS0-IEQ0W0F0dGFxdWUgRG9TXVxuICBDMVtXZWJdIC0tPiBJW3BhZ2VdXG4gIElbcGFnZV0gLS0-IEpbaW5qZWN0aW9uIFhTU11cblx0QntEb2NrZXJ9ICAtLT4gS1tBUEldXG4gIEtbQVBJXSAtLT4gTFtpbmplY3Rpb24gU1FMXVxuICBLW0FQSV0gLS0-IEdbdXBsb2FkIGZpbGVdXG4gIEdbdXBsb2FkIGZpbGVdIC0tPiBIW2ZhaWxsZSB1cGxvYWRdIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgQTFbT1NdIC0tPiBCeyBEb2NrZXIgfVxuICBBMltsb2NhbGlzYXRpb24gZHUgU2VydmV1cl0gLS0-IEJ7IERvY2tlciB9XG4gIEJ7RG9ja2VyfSAtLT4gQzFbV2ViXVxuICBcbiAgQzFbV2ViXSAtLT4gQzNbQXV0aGVudGlmaWNhdGlvbl1cbiAgQzNbQXV0aGVudGlmaWNhdGlvbl0gLS0-IEM0W0NvbXBsZXhpdMOpIG1vdCBkZSBwYXNzZV1cbiAgXG4gIEJ7RG9ja2VyfSAgLS0-IERbQkREXVxuICBEW0JERF0gLS0-IEQyW2hhY2hhZ2UgbW90IGRlIHBhc3NlXVxuICBEW0JERF0gLS0-IEQzW0J1ZmZlciBvdmVyZmxvdyBleHBsb2l0YXRpb25zXVxuICBEW0JERF0gLS0-IEQ0W0F0dGFxdWUgRG9TXVxuICBDMVtXZWJdIC0tPiBJW3BhZ2VdXG4gIElbcGFnZV0gLS0-IEpbaW5qZWN0aW9uIFhTU11cblx0QntEb2NrZXJ9ICAtLT4gS1tBUEldXG4gIEtbQVBJXSAtLT4gTFtpbmplY3Rpb24gU1FMXVxuICBLW0FQSV0gLS0-IEdbdXBsb2FkIGZpbGVdXG4gIEdbdXBsb2FkIGZpbGVdIC0tPiBIW2ZhaWxsZSB1cGxvYWRdIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

## Objectif de securité

- *Confidentialité* : 4/5. Quand l'utilisateur devra fournir un mot de passe lors de la creation du compte, il devra en valider un complexe. De plus, par la suite, il sera haché et stocké dans la base de données sécurisé. Il aura aussi la possibilité de repondre anonymement sur le site.

- *Intégrité* : 3/5. Grace à l'API, il y aura des mise à jour frequente. Cependant, il risque d'y avoir une demande de modification nécessaire pour changer une donnée.

- *Disponibilité* : 2/5. L'application utlisant Docker, dès que le container est construit, le site se lance. Pour le moment, l'application n'est déployée qu'en local donc cela peut encore être ameliorer.

- *Traçabilité* : 2/5. Pour ce projet, l'application ne cherche pas à respecter les exigences légales tel que les RGPD (avec un bandeau de cookies). Cependant, aucune information de l'utilisateur n'a pour objectif d'être retenu. Les données seront sauvegardé dans la base de données interne et via l'API mais seront le mieux proteger possible.

## Vulnérabilité

### L'injection SQL
Une erreur d'injection SQL se produit lorsque les données entrent dans un programme à partir d'une source non fiable. Par exemple, en rentrant une ligne de commande  dans un json dans le Postman.

- *Confidentialité*: étant donné que les bases de données SQL contiennent généralement des données sensibles, la perte de confidentialité est un problème fréquent avec les vulnérabilités d'injection SQL.
- *Authentification*: si de mauvaises commandes SQL sont utilisées pour vérifier les noms d'utilisateur et les mots de passe, il peut être possible de se connecter à un système en tant qu'autre utilisateur sans connaissance préalable du mot de passe.
- *Autorisation*: si les informations d'autorisation sont conservées dans une base de données SQL, il peut être possible de modifier ces informations en exploitant avec succès une vulnérabilité d'injection SQL.
- *Intégrité*: tout comme il peut être possible de lire des informations sensibles, il est également possible d'apporter des modifications ou même de supprimer ces informations avec une attaque par injection SQL.

### Faille XSS

C'est un type d'injection, dans lequel des scripts malveillants sont injectés dans des sites Web. Par exemple, via le Json d'authentification. Il serait alors tout à fait possible de rentrer des informations ou tout autre type de code dans le Json. Par exemple, quelqu'un de malveillant pourrait envoyer une alert JavaScript sur une page lorsque qu'un utilisateur arrive dessus.

L'exploitation d'une faille de type XSS permettrait à un intrus de réaliser les opérations suivantes :
- Redirection (parfois de manière transparente) de l'utilisateur (souvent dans un but d'hameçonnage)
- Vol d'informations, par exemple sessions et cookies.
- Actions sur le site faillible, à l'insu de la victime et sous son identité (envoi de messages, suppression de données…)
- Rendre la lecture d'une page difficile (boucle infinie d'alertes par exemple).


### Condition de dépassement 

Une condition de dépassement de la mémoire tampon existe lorsqu'un programme tente de mettre plus de données dans un tampon qu'il ne peut en contenir. Dans ce cas, un tampon est une section séquentielle de mémoire allouée pour contenir tout ce qui va d'une chaîne de caractères à un tableau d'entiers. L'écriture en dehors des limites d'un bloc de mémoire allouée peut corrompre les données, planter le programme ou provoquer l'exécution de code malveillant. Il est donc tout a fait possible à l'heure actuelle de realiser cette operation sur le site.

### Téléchargement de fichiers sans restriction

Les fichiers téléchargés représentent un risque important pour les applications. L'utilisation d'un téléchargement de fichier aide l'attaquant à accomplir sa tache. Ici, il n'y a pas de sécurité. il peut tout a fait modifier le nom du fichier et faire croire que c'est un .png ou .jpg alors que c'est un script.
