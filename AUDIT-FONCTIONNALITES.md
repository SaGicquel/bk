# Audit fonctionnalités — Bankroll PWA

Idées classées par thème, notées **[effort / impact]**. Les deux premières sont implémentées.

---

## ✅ Implémenté dans cette version

### Capital disponible vs capital total
Le capital affiché en haut est maintenant le **disponible** : capital total − mises engagées sur les paris en cours (pour un lay : la liability `mise × (cote − 1)`). Quand de l'argent est en jeu, le label devient « Disponible · X € en jeu » et une carte « En jeu » apparaît sur le tableau de bord. Profit, ROI et stats restent calculés sur les paris réglés uniquement.

### Dépôts & retraits
Bouton **±** dans la barre du haut. Un mouvement = type (dépôt/retrait) + montant + date + note. Ajuste le capital **sans toucher profit ni ROI**, apparaît comme une marche sur la courbe de capital, listé avec suppression (+ annulation). Synchronisé dans le cloud comme le reste.

---

## 💰 Gestion de bankroll

- **Objectif de bankroll** [S/fort] : cible (ex : 500 €) + barre de progression sur le dashboard + projection « à ce ROI, atteint dans ~N paris ».
- **Mode unités** [S/fort] : afficher les montants en « u » (1u = x € configurable). Standard chez les parieurs, facilite le partage sans révéler les montants.
- **Stop-loss journalier** [M/fort] : seuil de perte par jour ; bannière d'avertissement quand il est franchi. Anti-tilt.
- **Mise conseillée** [S/moyen] : afficher dans le formulaire la mise recommandée (n % du capital, configurable par bankroll).
- **Consolidation multi-devises** [M/faible] : taux de change manuel pour le total toutes bankrolls.

## 📊 Statistiques & analyse

- **Graphique profit par mois** [S/fort] : barres mensuelles sous le calendrier — la vue la plus demandée dans ce type d'app.
- **Stats par tipster enrichies** [S/moyen] : ROI, nombre de picks, série en cours, drawdown par tipster (la table Analyzer existe, ajouter des colonnes).
- **ROI par tranche de mise** [S/moyen] : détecte si tu es moins bon sur les grosses mises.
- **Variance & écart-type** [M/moyen] : mesure si tes résultats sont de la compétence ou de la chance ; intervalle de confiance sur le ROI.
- **Heatmap jour × heure** [M/faible] : quand tu paries le mieux.
- **Comparaison de bankrolls** [M/moyen] : courbes superposées dans Bilans.
- **Courbe en unités / échelle log** [S/faible] : options d'affichage du graphe.

## ✍️ Saisie & confort

- **Dupliquer un pari** [S/fort] : bouton dans la modale d'édition — cas fréquent (même match, autre marché).
- **Templates de paris** [M/moyen] : enregistrer une config type (sport + compét + book + mise) et la rappeler en 1 tap.
- **Multi-ajout rapide** [M/moyen] : mode « saisie en rafale » : enregistrer garde la modale ouverte avec les champs contextuels pré-remplis.
- **Tags libres** [M/moyen] : plusieurs étiquettes par pari (ex : `value`, `live`, `fatigue`) + filtre et dimension Analyzer.

## 🔔 Engagement (PWA iOS)

- **Notifications push** [L/fort] : possible sur iOS ≥ 16.4 pour une PWA installée — rappel « tu as N paris en cours à régler » le soir. Nécessite un petit serveur (ou Supabase Edge Functions).
- **Badge d'icône** [S/moyen] : `navigator.setAppBadge(nbParisEnCours)` — supporté PWA iOS, 3 lignes de code.
- **Raccourcis d'app** [S/faible] : `shortcuts` du manifest → appui long sur l'icône : « Nouveau pari ».

## 🛡️ Sécurité & données

- **Verrouillage par code PIN** [M/moyen] : écran de déverrouillage local (les données de paris sont sensibles).
- **Rapport mensuel PDF/image** [M/moyen] : récap du mois (profit, ROI, meilleurs/pires paris) généré en canvas, partageable.
- **Export automatique** [S/moyen] : proposer un export JSON tous les 30 jours (rappel toast).
- **Chiffrement des données cloud** [L/faible] : chiffrer `data` avec le code de synchro (AES-GCM via WebCrypto) — le serveur ne voit plus rien en clair.

## 🧮 Outils

- **Tracker de freebets/bonus** [M/moyen] : solde de freebets par bookmaker, valeur théorique récupérable.
- **Calculateur de couverture freebet (matched betting)** [S/moyen] : mise lay optimale pour extraire la valeur d'un freebet.
- **Simulateur sur ton historique réel** [S/faible] : l'Optimizer le fait déjà en source « historique » — ajouter un préréglage visible.

## 📤 Social

- **Partage d'une carte de pari en image** [M/moyen] : génération canvas (match, cote, statut, profit) → share sheet iOS.

---

## Suggestion d'ordre d'attaque (après cette version)

1. Graphique profit par mois + badge d'icône (2 quick wins visibles)
2. Objectif de bankroll + mode unités
3. Dupliquer un pari + stats tipsters enrichies
4. Stop-loss journalier
5. Notifications push (le plus gros chantier, le plus engageant)
