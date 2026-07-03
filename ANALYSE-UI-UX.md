# Audit UI/UX — Bankroll PWA

Analyse du code complet (`index.html` 1 420 lignes, `sw.js`, `manifest.webmanifest`), identique en local et sur GitHub (`7a783da`).

**Ce qui est déjà bien** : design system cohérent (variables CSS, `tabular-nums`, dark theme propre), safe-area insets iOS, bottom nav + FAB, network-first sur le shell pour les mises à jour, échappement HTML systématique, moteur de calcul (EW, système, lay, freebet) solide.

---

## 🔴 Priorité 1 — Frictions majeures

### 1. Régler un pari = trop d'étapes
Le geste n°1 de l'app (passer un pari "En cours" → Gagné/Perdu) demande : tap carte → scroll dans la modale → chip statut → Enregistrer.
**Fix** : boutons rapides `✓ Gagné` / `✗ Perdu` directement sur les cartes des paris en cours (ou swipe gauche/droite). Gain énorme au quotidien.

### 2. Bouton retour Android / historique inexistant
Aucune gestion de `history` : le back ferme l'app au lieu de fermer la modale ou revenir à l'onglet précédent. Sur une PWA installée, c'est le réflexe le plus fréquent.
**Fix** : `history.pushState` à l'ouverture de modale et au changement d'onglet + handler `popstate`.

### 3. `confirm()` / `prompt()` natifs partout
Suppression de pari, bulk delete, wipe, fusion, champ perso… Les dialogs natifs cassent l'immersion (moches en standalone iOS, bloquants).
**Fix** : réutiliser la modale existante, et surtout remplacer les confirmations destructives par un **undo** : toast « Pari supprimé — Annuler » (5 s). Zéro friction + zéro perte accidentelle.

### 4. Perte de saisie dans la modale pari
`drawBetModal(b)` re-render tout le formulaire à chaque toggle (type, Each-Way, % capital, statut lay) en relisant `b` depuis la DB — **tout ce qui a été tapé mais pas sauvegardé est effacé**. Ex : je remplis sport/compét/note, je coche "Each-Way" → champs vidés.
**Fix** : capturer les valeurs courantes des inputs avant re-render, ou ne re-render que la section concernée.

### 5. `datalist` invisible sur iOS Safari
Les suggestions Sport/Compétition/Bookmaker/Marché reposent sur `<datalist>`, non supporté sur iOS : les utilisateurs iPhone (cible principale d'une PWA de paris) ne voient jamais ces listes.
**Fix** : chips des valeurs récentes sous le champ (comme les chips de statut déjà en place) + saisie libre.

### 6. Tesseract.js chargé au démarrage pour tous
`<script src="tesseract.min.js">` bloque/alourdit le premier chargement alors que l'OCR n'est utilisé que dans le scan.
**Fix** : injection dynamique du script au premier clic sur « Scan ».

---

## 🟠 Priorité 2 — UX à fort impact

### 7. Formulaire pari trop long
~15 champs visibles d'un coup. CLV, tipster, note, champs perso, freebet/live sont rarement remplis.
**Fix** : garder mise/cote/statut/date/sport visibles, replier le reste dans un `<details>` « Plus d'options ». La modale devient 2× plus courte.

### 8. Liste de paris sans repères ni recherche
- Pas de groupement par date → ajouter des séparateurs « Aujourd'hui / Hier / 12 juin ».
- Pas de recherche texte (équipe, note, tipster).
- Pas d'indicateur de filtres actifs sur le bouton « Filtres ⚙ » (badge compteur).
- « 📷 Scan » n'est pas un filtre : le sortir de la barre de filtres (le mettre dans la modale d'ajout ou en action à côté du FAB).

### 9. Affichage profit incohérent sur les cartes
Pari gagné → `signed(betReturn(b))` (retour brut, ex. +18,00) ; pari perdu → `signed(p)` (net, ex. −10,00). Deux référentiels mélangés sur la même colonne : +18 vs −10 pour un même pari à 10 € @1.80 ne sont pas comparables.
**Fix** : un seul référentiel (net partout) ou un libellé explicite (« retour 18,00 » / « perte 10,00 »).

### 10. Courbe du dashboard muette
Pas d'axes, pas de dates, pas de valeur au tap, pas de filtre de période, et `preserveAspectRatio="none"` déforme le tracé.
**Fix** : chips 7j / 30j / 90j / Tout, dernier point marqué avec sa valeur, tap → tooltip (date + capital). C'est l'écran d'accueil : c'est là que se joue le plaisir d'utilisation.

### 11. Modale sans animation ni gestes
`display:none → flex` sec. Un bottom sheet standard : slide-up 200 ms, drag-handle, swipe-down pour fermer, blocage du scroll du body derrière (`overflow:hidden`), fermeture Échap.

### 12. Setup cloud trop technique
Demander URL Supabase + clé anon + code à un utilisateur lambda est un mur. Le texte mentionne un « guide d'installation » qui n'est **pas un lien**.
**Fix minimal** : vrai lien vers un guide pas-à-pas + validation champ par champ avec messages d'erreur clairs (URL invalide vs clé invalide vs table absente). Fix idéal : instance partagée pré-configurée, l'utilisateur ne saisit qu'un code.

### 13. Onboarding inexistant
Premier lancement : bankroll « principale » à 100 € créée silencieusement. L'utilisateur découvre plus tard que son capital de départ est faux et doit fouiller dans Réglages.
**Fix** : mini-écran de bienvenue (nom + capital de départ + devise), 10 lignes de code.

---

## 🟡 Priorité 3 — Accessibilité & polish

### 14. Accessibilité quasi absente
- Chips, cartes de pari, checkboxes custom = `div onclick` : **inutilisables au clavier et au lecteur d'écran**. → `role="button"`, `tabindex="0"`, gestion `Enter`/`Espace`, ou vrais `<button>`.
- `maximum-scale=1` bloque le zoom (échec WCAG 1.4.4) — à retirer, `viewport-fit=cover` suffit.
- Toast sans `aria-live="polite"`.
- Aucun `:focus-visible`, aucun `aria-label` sur les boutons icônes (FAB, ‹ › du calendrier).
- Badges 10 px et labels 10-12 px uppercase : limites en lisibilité.

### 15. Icônes incohérentes
Emojis (📷 ⚙ 📋 ⏳ ✕ ✓) mélangés aux SVG stroke de la nav. L'icône « Outils » est un **hamburger** (≡), sémantiquement fausse.
**Fix** : tout en SVG (icône calculatrice/clé pour Outils), rendu uniforme sur Android/iOS.

### 16. Inputs numériques
- `inputmode="decimal"` manquant sur beaucoup de champs (commission, cashout, tous les outils/calculatrices) → clavier numérique iOS sans virgule non garanti.
- `parseFloat` ne gère pas « 1,90 » : normaliser `value.replace(',', '.')` partout (déjà fait dans l'OCR, pas dans les formulaires).
- Pas de validation inline : les erreurs n'arrivent qu'en toast après clic. Bordure rouge + message sous le champ.

### 17. Re-render intégral en `innerHTML`
Chaque tap en mode sélection re-render toute la liste (perte de fluidité au-delà de quelques centaines de paris, position de scroll fragile). À terme : mise à jour ciblée de la carte tapée, et pagination/« Voir plus » au-delà de ~200 paris.

### 18. Divers
- **Statut bankroll « Privée/Public/Strict »** : feature morte (« purement indicatif ») → retirer, c'est du bruit cognitif.
- **FAB** recouvre la dernière carte de liste (padding-bottom 86 px < FAB à ~138 px) → passer `#app` à `padding-bottom:150px` quand le FAB est visible.
- **CLV « — »** pour la majorité des utilisateurs : masquer la stat tant qu'aucune cote de clôture n'est saisie.
- **Thème clair** absent : au minimum `prefers-color-scheme` pour la lisibilité en extérieur.
- **`sw.js`** : chemins `/bk/` codés en dur → utiliser des chemins relatifs (`./`) pour ne pas casser si le dépôt est renommé/déployé ailleurs.
- **Montante** : le tableau signale un palier intenable via une variable `bust` calculée… jamais appliquée à la ligne (le `style` rouge n'est pas injecté dans le `<tr>`). Bug d'affichage.
- **Sécurité sync** : le « code de synchro » sert d'ID public en clair — quiconque devine le code d'un autre lit ses données. Hasher le code côté client (SHA-256) avant de l'utiliser comme ID.

---

## Top 5 quick wins (effort minimal / impact maximal)

1. Boutons ✓/✗ sur les paris en cours (§1)
2. Undo au lieu de `confirm()` pour les suppressions (§3)
3. Retirer `maximum-scale=1` + `aria-live` sur le toast + vrais boutons (§14)
4. Chargement de Tesseract à la demande (§6)
5. `<details>` « Plus d'options » dans le formulaire pari (§7)
