# Rapport stratégie de mise — v2

155 paris réglés en argent réel (Supabase 06/07/2026), **paris Penalty World identifiés et traités à part**. Simulation de l'app « en conditions réelles » : à chaque pari, le conseil n'utilise que ton historique passé (aucune triche statistique).

## 1. Ton vrai profil (une fois la promo isolée)

| | n | Mises | P&L cash | ROI |
|---|---|---|---|---|
| **Paris libres** (tes pronos) | 117 | 500 € | **+188 €** | **+37,6 %** |
| **Paris promo** (score exact @3, mise imposée) | 38 | 190 € | −13 € | −6,8 % |
| **Freebets convertis** (dutching ~75 %) | 4 | 0 € cash | +34,5 € | ∞ |
| **Total** | | | **+209,5 €** | |

Lecture : ton −6,8 % sur la promo est le loyer payé au bookmaker pour farmer les entrées, largement remboursé par les +34,5 € de freebets. Et ton ROI de pronostiqueur pur est de **+37,6 %** — exceptionnel, mais sur 3 semaines seulement : l'intervalle de confiance reste très large, une partie est de la chance.

## 2. LA réponse à ta question : toi vs la meilleure stratégie

Mêmes 155 paris, même ordre, départ 100 €, promo laissée à 5 € imposés dans les deux cas :

| | Capital final | Profit | Drawdown max |
|---|---|---|---|
| **Tes mises « aléatoires »** | **275 €** | **+175 €** | −20 % |
| **Mises de l'app (¼ Kelly borné, apprentissage en ligne)** | 179 € | +79 € | −25 % |

**Oui, tu as fait plus du double de l'app.** Mais il faut comprendre pourquoi avant d'en tirer la mauvaise conclusion :

**Raison 1 — tu as pris beaucoup plus de risque.** Tes mises de 5-20 € sur un capital de ~100 € = 5 à 20 % par pari. L'app plafonne à 5 %. Ton niveau de risque réel correspondait à un capital « virtuel » de 200-300 € : l'app, avec 200 € de départ, fait **+171 €** ; avec 300 €, **+262 €** — quasiment ton résultat. Tu n'as pas mieux misé, tu as misé *plus gros*, et ça a payé parce que la séquence a été bonne.

**Raison 2 — l'app démarre aveugle.** Les 30-40 premiers paris, elle n'a pas encore 10 paris par gamme de cotes : elle mise petit par prudence. Toi, tu misais déjà 10 € sur du 2.0 dès le début — avec raison a posteriori, mais sans preuve à ce moment-là.

**Le verdict des 4 000 futurs alternatifs** (bootstrap de ta séquence) : tes mises fixes → médiane 273 €, 4 % de proba de finir en perte. Sur CETTE longueur et avec TON edge réel, ta méthode agressive est légitime. Ce n'est pas de la chance pure : c'est un gros edge exploité agressivement.

## 3. Mais sur le long terme, les % battent les € fixes

Simulation 465 paris (3× ton historique), même distribution :

| | Médiane | P95 | Faiblesse |
|---|---|---|---|
| Tes mises fixes (5-20 €) | 616 € | 893 € | **ne composent pas** : à 600 € de capital, tu miserais toujours 5-20 € |
| App (% du capital) | **875 €** | **3 321 €** | démarrage lent |

Tes mises fixes plafonnent ta croissance : quand le capital triple, tes mises restent identiques, donc ton rendement en % s'effondre mécaniquement. Les mises en % composent — c'est l'intérêt exponentiel contre l'intérêt simple.

⚠ Découverte annexe de la simulation longue : la quasi-ruine de l'app (5,5 %) vient **des paris promo à mise fixe** — si le capital tombe à 30 €, miser 5 € imposés sur du −7 % devient dangereux. Règle pratique : **farme la promo seulement tant que ton capital dépasse ~15× la mise imposée (75 €)**.

## 4. Ce qu'il faut retenir (le plan de jeu)

1. **Continue tes pronos sur 1.70–2.80** — c'est là que vivent tes +37,6 %. Zone 1.70–2.30 : 63 % de réussite sur 35 paris là où 50 % suffit.
2. **Adopte les mises en % via l'app, mais calibrées sur ton vrai capital.** Si tu es prêt à risquer comme aujourd'hui, considère ton capital réel (dépôts inclus, pas 100 €) : l'app misera 2-5 % de ce montant et composera. Ton +175 € n'était pas répétable à l'infini avec des mises fixes.
3. **La promo Penalty World est rentable, garde-la** (−13 € cash contre +34,5 € de FB), tague-la « Défi/Promo », et arrête-la si le capital passe sous ~75 €.
4. **Les martingales restent mortes** : 31-52 % de ruine sur tes propres données (v1 du rapport, inchangé).
5. **Rendez-vous à 300 paris libres.** Si ton ROI libre est encore >15 %, on relèvera les bornes Kelly de l'app (½ Kelly deviendra défendable). C'est le seul « upgrade » de stratégie qui existe : plus de preuve → plus d'agressivité autorisée.

*Rappel honnête : aucune stratégie de mise ne crée d'edge (monde sans edge simulé : tout le monde perd). La tienne a gagné parce que TU as un edge de pronostic. La stratégie de mise ne fait que décider à quelle vitesse tu exploites cet edge et combien tu risques de tout perdre en chemin.*
