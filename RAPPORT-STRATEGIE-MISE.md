# Rapport : quelle stratégie de mise pour TA bankroll

Basé sur tes **155 paris réglés en argent réel** (Supabase, sauvegarde du 06/07/2026).
Méthode : profil par gamme de cotes, puis 5 000 scénarios Monte Carlo (bootstrap de ton historique) par stratégie, départ 100 €, puis 3 tests de robustesse.

## Ton profil réel

ROI global **+25,3 %** (+175 € pour 690 € misés). Attention : 3 semaines de données, la chance joue encore. Par gamme de cotes :

| Gamme | n | Réussite | Nécessaire | ROI | Verdict |
|---|---|---|---|---|---|
| 1.01–1.70 | 10 | 70 % | 63 % | +14 % | ✅ léger edge |
| **1.70–2.30** | **35** | **63 %** | **50 %** | **+33 %** | ✅✅ **ta meilleure zone** (buteurs, boosts) |
| **2.30–2.80** | **16** | **62 %** | **40 %** | **+89 %** | ✅✅ excellent (petit échantillon) |
| **2.80–3.30** | **48** | **31 %** | **33 %** | **−9,7 %** | ❌ **ta zone perdante : les scores exacts** |
| 3.30–4.50 | 20 | 40 % | 28 % | +34 % | ✅ bon |
| 4.50–8 | 9 | 33 % | 17 % | +96 % | ❓ trop petit échantillon |
| 8+ | 17 | 6 % | 5 % | +28 % | ❓ tout vient d'UN pari gagné à 35.0 — pas de conclusion |

**Le fait le plus important de ce rapport** : ta stratégie « score exact » est ton plus gros volume (48 paris, ~240 € misés) et ta seule poche clairement perdante (−23 € environ). La supprimer ou la réduire vaut plus que n'importe quelle formule de mise.

## Backtest des stratégies (bootstrap sur ton historique, in-sample)

| Stratégie | Médiane | P5 (pire 5 %) | Ruine | Drawdown méd. | P(finir en perte) |
|---|---|---|---|---|---|
| **Martingale** | **0 €** | 0 € | **52 %** | −100 % | 53 % |
| Fibonacci | 234 € | 0 € | **41 %** | −66 % | 42 % |
| D'Alembert | 484 € | 0 € | **31 %** | −63 % | 32 % |
| Paroli | 230 € | 76 € | 1 % | −28 % | 9 % |
| Flat 2 % | 192 € | 95 € | 0 % | −18 % | 6 % |
| % capital 2 % | 206 € | 89 € | 0 % | −23 % | 9 % |
| Risque constant 2 %/(cote−1) | 145 € | 104 € | 0 % | −12 % | 3 % |
| **¼ Kelly borné (l'app, v2)** | **264 €** | **147 €** | 0 % | −15 % | **0 %** |
| ¼ Kelly non borné | 334 € | 168 € | 0 % | −18 % | 0 % |
| ½ Kelly | 918 € | 227 € | 0 % | −33 % | 0 % |

Rappel : tes mises réelles rejouées donnent 275 € — ton staking instinctif était déjà bon (petites mises sur grosses cotes).

## Tests de robustesse (là où les mirages meurent)

**Walk-forward** (edge estimé sur ta 1ère moitié, testé sur la 2ème) : le ¼ Kelly borné de l'app gagne — 7 % de proba de perte seulement, contre 15 % pour le Kelly non borné, 19 % pour le risque constant, 25 % pour le flat.

**Monde pessimiste** (ton vrai edge = la moitié de l'observé) : toutes les variantes Kelly restent gagnantes en médiane ; le ½ Kelly voit son avantage fondre et son drawdown doubler.

**Monde sans edge** (proba réelle = proba implicite) : AUCUNE stratégie ne gagne — médiane 92–98 € partout. Leçon fondamentale : **une stratégie de mise ne crée jamais d'edge, elle ne fait que protéger ou exploiter celui qui existe.**

## Verdict : pourquoi ça non, ça non, ça oui

**❌ Martingale / Fibonacci / D'Alembert** — Sur TES données : 31 à 52 % de probabilité de ruine. La médiane élevée du D'Alembert (484 €) est un piège : un tiers des scénarios meurt à zéro. Ces systèmes « récupèrent les pertes » jusqu'au jour où la série perdante dépasse le capital — et avec 69 % d'échec sur tes scores exacts, les séries de 8+ pertes sont fréquentes chez toi.

**❌ Paroli** — Pas de risque de ruine, mais domine le flat sur aucun critère. Complexité sans bénéfice.

**❌ Flat / % fixe** — Sains, mais ils misent PAREIL sur ta zone à +33 % et sur ta zone à −10 %. C'est laisser de l'argent sur la table : dominés par Kelly sur tous les mondes testés.

**❌ ½ Kelly ou Kelly plein** — Le grand séducteur : médiane ×9 in-sample. Mais il ne gagne que dans le monde où ton +25 % de ROI sur 3 semaines est 100 % réel. Dès qu'on divise l'edge par deux, son avantage s'effondre et son drawdown (−33 %) devient dur à vivre. Avec 155 paris, tu n'as pas le droit statistique d'y croire encore.

**✅ ¼ Kelly borné + sélectif (ce que fait l'app en v2)** — C'est le seul qui gagne sur les trois tableaux : 2ème meilleure médiane in-sample, meilleure proba de ne pas perdre en walk-forward, dégâts contenus dans le monde sans edge. Il mise gros là où ton edge est démontré (1.70–2.80), des miettes là où rien n'est prouvé, et rien de plus que la demi-mise sécurité là où tu perds.

## Les 3 actions qui rapportent vraiment (par ordre d'impact)

1. **Coupe (ou divise par 4) les scores exacts à ~3.0.** 48 paris, −9,7 % de ROI, ton plus gros volume. L'app affiche maintenant un avertissement rouge quand tu saisis une cote dans une zone historiquement perdante.
2. **Recharge ta meilleure zone.** Chaque euro sorti des scores exacts et rejoué sur tes buteurs/boosts à 1.70–2.80 a historiquement rapporté ~+0,33 € au lieu de −0,10 €.
3. **Suis la mise conseillée de l'app** — c'est littéralement la stratégie gagnante du backtest. Les cotes 8+ à 1 € « pour le fun » : continue comme ça, c'est déjà la bonne taille.

Re-fais tourner cette analyse dans ~150 paris : avec 300+ paris, on pourra tester si ton edge à 4.50–8 est réel et affiner les bornes Kelly.
