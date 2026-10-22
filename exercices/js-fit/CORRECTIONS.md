# Quatre corrections et bonus
1. Charger behavior.js avant </body>, après la création des éléments.
2. Passer copyCode à addEventListener, sans parenthèses, pour attendre le clic.
3. Lire textContent au lieu de value sur le span.
4. Sélectionner .promo-code au lieu du premier span (qui contient Limited offer).
Bonus : un deuxième bouton copie le lien de partage. Les boutons retrouvent leur libellé après deux secondes. Les échecs de copie sont affichés.
