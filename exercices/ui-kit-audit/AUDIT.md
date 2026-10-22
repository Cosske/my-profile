# Audit de l’exemple Nimbus
Dérives : bleus #2e6fee/#2f6fed/#3070ed ; paddings des boutons ; rayons 6/8px ; tailles 15/16/17px ; espacement des lettres présent ou absent ; cartes avec paddings et ombres différents. bold et 700 sont équivalents, comme white/#fff/#ffffff.
Différences intentionnelles : bouton secondaire transparent avec bordure ; badge .tag avec rayon 999px.
Valeurs retenues : bleu #2f6fed, padding bouton 14px 28px, rayon 6px, taille 16px, graisse 700 ; carte padding 24px et ombre 0 4px 12px rgba(0,0,0,.1).
Composants : .btn + .btn-primary/.btn-secondary ; une seule .card.
Bonus implémentés : petite taille, état désactivé, survol. Le bouton Book a demo réutilise les classes existantes sans CSS propre.
Les hypothèses personnelles, le comptage avant/après et la comparaison avec une première analyse par l’élève ne sont pas présentés comme réalisés.
