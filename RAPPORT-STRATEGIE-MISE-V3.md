# Rapport stratégie de mise — V3 : le grand labo

**Capital de départ : 163,50 € (ton capital réel).** 19 stratégies — classiques, hybrides et inventions — testées sur 4 terrains :

- **Chrono** : rejeu exact de tes 155 paris, même ordre, conseil calculé uniquement sur ton passé
- **Boot** : 2 000 futurs alternatifs de 155 paris (bootstrap de ton historique)
- **Pess** : 1 500 futurs où ton vrai edge ne vaut que 50 % de l'observé
- **Long** : 1 000 futurs de 465 paris (l'effet composé sur ~3 mois)

Paris Penalty World : mise imposée 5 € dans toutes les stratégies (c'est la promo qui décide).

## Le classement complet

| Stratégie | Chrono | Boot méd. / P5 | Pess méd. / P(perte) | Long méd. / P5 / ruine | Score |
|---|---|---|---|---|---|
| 🥇 pct5 — 5 % du capital | 820 € | 753 / 123 | 296 / **24 %** | **19 223** / 555 / 1,3 % | 54,5 |
| 🥈 **kelly2 — ½ Kelly borné** | 302 € | 375 / 141 | 257 / 13 % | **10 275 / 1 140** / 0,3 % | 23,6 |
| 🥉 pct3 — 3 % du capital | 495 € | 469 / 133 | 274 / 17 % | 4 464 / 410 / 0,7 % | 18,5 |
| unit3 (3 % arrondi à 0,50 €) | 492 € | 469 / 129 | 271 / 16 % | 4 428 / 444 / 0,3 % | 18,4 |
| ⭐ **kelly_prog — Kelly ¼→½ progressif** | 270 € | 312 / 135 | 252 / **10 %** | 3 512 / **607** / **0,1 %** | 11,6 |
| pct2 | 358 € | 328 / 119 | 256 / 15 % | 1 715 / 269 | 7,6 |
| kelly_fast (apprend plus vite, m=8) | 267 € | 286 / 135 | 251 / 9 % | 1 685 / 405 | 7,4 |
| app_v2 (¼ Kelly actuel) | 261 € | 281 / 136 | 252 / 11 % | 1 597 / 413 | 7,0 |
| app_guard (+ stop promo <75 €) | 261 € | 281 / 135 | 252 / 11 % | 1 597 / 413 / **0,0 %** | 7,0 |
| **reel — tes mises fixes** | 339 € | 333 / **181** | 283 / 11 % | **687** / 414 | 6,7 |
| stopsess (stop-loss par session) | 261 € | 275 / 134 | 252 / 10 % | 1 513 / 353 | 6,7 |
| momentum (+25 % après gain) | 272 € | 272 / 128 | 251 / 9 % | 1 547 / 405 | 6,6 |
| crisk_smart | 264 € | 273 / 135 | 257 / 9 % | 1 278 / 388 | 6,3 |
| sqrtbank (semi-composé) | 255 € | 282 / 141 | 255 / 10 % | 1 060 / 410 | 6,0 |
| throttle (réduit en drawdown) | 250 € | 267 / **117** | 245 / 10 % | 1 354 / 266 | 5,6 |
| ratchet (50 % des gains au coffre) | 251 € | 265 / 141 | 250 / **8 %** | 890 / 373 | 5,2 |
| flat2 | 323 € | 302 / 128 | 260 / 13 % | 618 / 283 | 4,5 |
| zone_only (que du 1.70–2.80) | 232 € | 227 / 115 | 235 / 12 % | 742 / 169 | 3,3 |
| crisk (sécurité pure) | 238 € | 236 / 130 | 248 / 9 % | 513 / 189 | 3,3 |

## Pourquoi non, pourquoi non, pourquoi oui

**❌ Les inventions « psychologiques » (throttle, momentum, stopsess, ratchet).** Toutes finissent derrière le simple ¼ Kelly. Le throttle (miser moins en drawdown) est même contre-productif : il ralentit la récupération (pire P5 du boot : 117 €). Le stop-loss de session ne sauve rien car tes pertes ne sont pas groupées en séries anormales. Le ratchet protège (8 % de perte en monde pessimiste, le meilleur) mais divise la croissance par 4. Leçon : quand on a un edge, toute règle qui réduit l'exposition coûte plus qu'elle ne protège.

**❌ zone_only (ne jouer QUE ta zone 1.70–2.80).** Contre-intuitif mais net : 232 € en chrono, pire P5 du long terme (169 €). Tes paris à 3.3–4.5 et tes boosts gagnent aussi — les couper ampute l'edge total. La sélectivité, oui ; l'amputation, non.

**❌ pct5 malgré sa 1ère place au score.** 19 223 € de médiane long terme fait rêver, mais regarde la colonne pessimiste : **24 % de chance d'être en perte** si ton edge est moitié moindre qu'observé — et après 3 semaines de données, c'est une hypothèse très possible. C'est la stratégie « tapis » : correcte uniquement dans le monde où tout ton +37,6 % est du skill.

**❌ Tes mises fixes actuelles.** Meilleure sécurité court terme du tableau (P5 = 181 €, 3 % de perte) — ton instinct est bon. Mais le long terme est sans appel : 687 € de médiane quand les % font 1 600 à 10 000. Les mises fixes ne composent pas : c'est de l'intérêt simple dans un monde d'intérêts composés.

**✅ kelly2 (½ Kelly borné) — le choix offensif.** Médiane ×2,3 en 155 paris, ×63 en 465 paris, tout en gardant 13 % de perte en monde pessimiste et un P5 long terme de 1 140 € (le meilleur du tableau !). Si tu assumes ton tempérament agressif, c'est la stratégie rationnelle maintenant que ton capital (163,50 €) donne du coussin.

**✅⭐ kelly_prog — LE choix recommandé (et c'est une invention de ce labo).** Fraction Kelly qui grandit avec la preuve : 25 % aujourd'hui, 50 % quand une gamme de cotes atteint 50 paris. Résultat : la **meilleure sécurité pessimiste des stratégies de croissance** (10 % de perte, 0,1 % de ruine), un P5 long terme de 607 €, et une médiane ×21 sur 465 paris. Elle EST le plan « rendez-vous à 300 paris » du rapport v2, mais automatisé : elle devient kelly2 toute seule, exactement à la vitesse où ton historique le justifie. Tu n'as plus de décision à prendre.

**✅ app_guard (bonus gratuit).** Arrêter la promo sous 75 € de capital fait passer la ruine long terme de 0,4 % à 0,0 % sans rien coûter. Adopté.

## Ce qui tourne maintenant dans l'app (v12)

1. **Mise conseillée = kelly_prog** : « Kelly progressif 33 % (17/50 paris) = 3,1 % du capital… » — la fraction affichée grimpe avec ton échantillon.
2. **Garde-fou promo** : coche « Défi/Promo » → l'encadré affiche la règle des 15× la mise, et passe en rouge si ton capital est en dessous.

## Les caveats honnêtes

Ton +37,6 % de ROI libre repose sur 117 paris et 3 semaines — l'intervalle de confiance passe encore par zéro. C'est pour ça que kelly_prog gagne mon vote contre pct5/kelly2 : elle est la seule à être quasi optimale *dans les deux mondes* (edge réel : ×21 ; edge médiocre : −10 % de risque seulement). Les scores exacts promo sont neutres dans toutes les stratégies (mise imposée) — leur rentabilité se joue sur la conversion freebets, pas ici. Et comme toujours : si l'edge disparaît, aucune ligne de ce tableau ne gagne.

*Prochain checkpoint : 300 paris libres → on re-teste tout, et si le ROI tient, kelly_prog aura déjà atteint ~40-50 % de fraction toute seule.*
