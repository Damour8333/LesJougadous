echo "# reactOpenClassRooms" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Damour8333/reactOpenClassRooms.git
git push -u origin main


Un framework JS est un ensemble de classes, fonctions et utilitaires qui nous facilitent la création d’applications pour les navigateurs ou mobiles.

L’un des outils les plus populaires, React, qui est une bibliothèque aussi bien qu’un framework, permet de créer des interfaces utilisateurs. 

L’approche technique de React est de créer du code modulaire, à base de composants réutilisables.

Trois des avantages de React sont sa communauté, sa documentation et ses opportunités professionnelles.

Vous savez maintenant comment transformer un simple fichier de HTML en React – et avez créé votre premier composant !

On a bien créé un composant Header et pas header. Il est essentiel de mettre une majuscule à nos composants JSX, sinon React ne saura pas qu'il s'agit d'un composant, et pensera qu'il s'agit juste d'une balise HTML.


Et on le rajoute dans le render :

ReactDOM.render(<Header /><Description />, document.getElementById("root"))
Quoi ?! Rien ne s’affiche sauf un petit point d’exclamation entouré de rouge : il y a une erreur ! 😤
Pas de panique, c’est normal : deux composants doivent toujours être wrappés dans un seul composant parent.

On peut donc faire :

ReactDOM.render(<div><Header /><Description /></div>, document.getElementById("root"))
et le problème est résolu.

React met également à notre disposition un outil, les Fragments, si on veut wrapper deux composants dans un seul parent sans que le parent apparaisse dans le DOM. Pour ça, vous pouvez faire :

ReactDOM.render(<React.Fragment><Header /><Description /></React.Fragment>, document.getElementById("root"))

En résumé
Vous êtes venu à bout de ce chapitre sur les composants en JSX ! Bravo à vous. 😎 Maintenant vous savez que :

une interface utilisateur (ou UI) est constituée de multiples composants React qui :

sont réutilisables ; par exemple, un bouton, un élément dans une liste, un titre,

regroupent la structure, les styles et le comportement d'un élément,

sont traduits par React en gros objets, qui sont ensuite greffés au DOM ;

le JSX est une syntaxe créée par React permettant d'écrire du JavaScript. Il faut suivre quelques règles : 

deux composants doivent toujours être wrappés dans un seul composant parent,

les noms des composants commencent par une majuscule,

les balises des composants doivent être refermées.