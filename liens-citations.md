# Correspondance entre pages sources et pages cibles liées avec ancres


I- Fichier recensant les liens internes entre les fiches victimes (`v-xxx.html`) et les citations associées dans la page `p-grain-de-sel.html`. Chaque lien pointe vers une ancre définie par un identifiant unique (`id`) dans `p-grain-de-sel.html`.

---

## 🔗 Format de correspondance

- **Page source** : `v-xxx.html`
- **Page cible** : `p-grain-de-sel.html#xxx`
- **Ancre HTML** : `<div id="xxx">...</div>`

---

## 📋 Liste des correspondances

| Page `v-xxx`         | Ancre dans `p-grain-de-sel.html` |
|----------------------|----------------------------------|
| `v-albertini.html`   | `#albertini`                     |
| `v-diakite.html`     | `#diakite`                       |
| `v-xyz.html`  		  #xyz

Ancre dans `p-grain-de-sel.html` 
|----------------------|----------------------------------|
| `#v-albertini.html`   |                    |
| `#v-diakite.html`     |  retour à la page v-xxx                  |
| `#v-xyz.html`  

 ---

## 🗒️ Remarques

- Les identifiants sont **uniques**, **sans espace**, et **cohérents** avec les noms.
- Chaque lien a été **validé manuellement** pour éviter les erreurs de navigation.
- Ce fichier est un outil de transmission : il permet à tout mainteneur de comprendre la logique citationnelle du site.

---

## ✍️ Auteur

Bernard Bonnejean  
Laval, France  
Date de création : [à compléter]  
