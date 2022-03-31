# 5HDS-M2 : Maxence Berger

## Installation du projet 

Clonez le projet avec la commande suivante
```
git clone https://github.com/MaxenceBerger/5HDS-M2.git
```
Exécutez dans votre terminal
```
npm install
```
## Lancer le projet

Exécutez dans votre terminal
```
npm start
```
Si vous avez le message **Server listening on port 3000** dans votre terminal, c'est que l'API est bien lancé.

Allez dans [http://localhost:3000/](http://localhost:3000/), vous allez voir **5hds project works**

## Tests des routes
### Gestion utilisateurs :
- Ajouter un utilisateur

> ROUTE : POST localhost:3000/users
![Post User](public/images/5hds_post_users.png)


- Modifier une fiche utilisateur

> ROUTE : PUT localhost:3000/users/:id
![Put User](public/images/5hds_put_users.png)

- Supprimer une fiche utilisateur

> ROUTE : DELETE localhost:3000/users/:id
![Delete User](public/images/5hds_delete_users.png)

- Lister les utilisateurs

> ROUTE : GET localhost:3000/users
![Get User](public/images/5hds_get_users.png)


### Gestion produits :
- Ajouter un produit

> ROUTE : POST localhost:3000/products
![Post Products](public/images/5hds_post_products.png)


- Modifier une fiche produit

> ROUTE : PUT localhost:3000/products/:id
![Put Products](public/images/5hds_put_products.png)

- Supprimer une fiche produit

> ROUTE : DELETE localhost:3000/products/:id
![Delete Products](public/images/5hds_delete_products.png)

- Lister les produits

> ROUTE : GET localhost:3000/products
![Get Products](public/images/5hds_get_products.png)