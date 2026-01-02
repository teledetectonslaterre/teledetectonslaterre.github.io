---
layout: default
title: Applications - Cartes à façon
slug: applications-cartes-facon
header: Applications - Cartes à façon
---

<div class="container-content">

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/applications/Axe_1939_1941.gif' | relative_url }}"
        alt="Expansion de l’Axe en Europe entre 1939 et 1941"
        class="img-fluid">
    <figcaption>Expansion de l’Axe en Europe entre 1939 et 1941</figcaption>
</figure>
</center>

Sur cette carte, on visualise la progression du territoire de l'Axe et le jeu des alliances qui se met en place dans les premières années de la Seconde guerre mondiale.<br><br>

Cette illustration simple fait appel à différentes disciplines. La géomatique donne la technique pour la réalisation de la carte mais des ressources historiques sont également nécéssaires. Enfin, les modes de représentation sont choisis en fonction de l'objectif de la carte. Ainsi, la réalisation de cette image passe par plusieurs questions et étapes.<br><br>
</div>

<div class="container-content">
<center>
<h1><strong>Définir le besoin et le cadre de travail</strong></h1><br>
</center>
<h2>1. Quel est l'objectif de la carte ?</h2>
Cette carte est conçue pour un cours d'histoire-géographie. Elle doit montrer que les pays de l'Axe (IIIe Reich, Italie, U.R.S.S) gagnent du terrain en Europe, de 1939 à 1941.<br><br>

<em><u>A qui s'adresse cette carte ?</u></em><br>
A des collégiens en classe de troisième (13-14 ans), en France.<br>
<span class="arrow-inline">→</span>Elle doit être lisible et se concentrer uniquement sur les aspects abordés en cours.<br><br>

<em><u>Quelle est la zone d'intérêt ?</u></em><br>
L'Europe continenatale et l'Afrique du Nord.<br><br>

<em><u>Quel sera le support final de la carte ?</u></em><br>
La carte sera affichée avec un vidéoprojecteur lors d'un cours dont le support est une présentation PowerPoint.<br>

<span class="arrow-inline">→</span>Elle doit pouvoir être ajoutée aux diapositives du PowerPoint<br>
<span class="arrow-inline">→</span>Les couleurs et
<span class="definition" tabindex="0" data-def="Noms de lieux.">
toponymes
</span>
doivent être faciles à distinguer depuis le dernier rang de la salle de classe.<br><br>

<h2>2. De quelles données a-t-on besoin ?</h2><br>
<u>Les éléments clefs à représenter sur la carte</u><br>
<span class="arrow-inline">→</span>Une chronologie des changements territoriaux et des alliances politiques entre 1939 et 1941 en Europe<br><br> 

- Un fond de carte avec les limites administratives en 1939 <span class="arrow-inline">→</span>Une 
<span class="definition" tabindex="0" data-def="Un ensemble de données qui se trouvent au même plan. Dans un SIG, les couches se superposent.">
couche
</span>
de 
<span class="definition" tabindex="0" data-def="Type de données avec des points, des lignes ou des polygones définis par des coordonnées spatiales.">
vecteurs
</span>
<br>
- Des cartes figurant les modifications territoriales<span class="arrow-inline">→</span>Des couches de vecteur ou de
<span class="definition" tabindex="0" data-def="image">
raster
</span>
<br><br>


<h2>3. De quels outils techniques a-t-on besoin ?</h2>
Pour réaliser cette carte, on utilise un SIG (Système d'informations géographiques). Il existe différents logiciels payants ou gratuits. Le principal logiciel gratuit et 
<span class="definition" tabindex="0" data-def="Logiciel qui peut être utilisé, étudié, modifié et distribué sans restriction grâce à une licence spécifique">
libre
</span>
est QGIS. Le SIG permet de faire la cartographie. Pour avoir un rendu plus esthétique, on utilise généralement des logiciels de DAO (Dessin assisté par ordinateur) tels que Gimp ou Adobe Illustrator. Puisque cette carte sera utilisée dans un PowerPoint, le plus simple est de faire les finitions dans PowerPoint.

</div>

<div class="container-content">
<center>
<h1><strong>Construire la carte</strong></h1><br>
</center>

<h2>1. Rechercher et télécharger les données</h2>
<strong>Fond de carte :</strong>
Le fond de carte a ici deux utilités : il illustre l'état initial de l'évolution territorial et sert de référence géométrique. Des archives nationales et des universités donnent accès à des données vecteurs historiques. C'est le cas de 
<a href="https://conservancy.umn.edu/items/4ee837e4-9b34-406e-b4d2-b53a6ae0707c"
target="_blank"
rel="noopener noreferrer">
l'université du Minnesota</a>.<br><br>

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/applications/cartes-facon/fond_univ_minnesota.png' | relative_url }}"
        alt="Kropelnicki, Jeffrey; Johnson, Grace; Kne, Len; Lindberg, Mark. (2022). Historical National Boundaries. Retrieved from the Data Repository for the University of Minnesota (DRUM), https://doi.org/10.13020/146x-1412."
        class="img-fluid">
    <figcaption>Frontières nationales en Europe en 1939, Université du Minnesota </figcaption>
</figure>
</center>

<strong>Des cartes montrant les évolutions territoriales :</strong> Entre 1939 et 1941, certains pays sont en partie ou entièrement annexés, comme la Finlande et la Pologne. Les frontières d'autres pays sont complètement redessinées comme la Slovaquie, la Hongrie et la Roumanie. C'est donc un travail biblioraphique qui s'engage pour trouver des cartes de référence. Des instituts comme la 
<a href="https://catalogue.bnf.fr/affiner.do?motRecherche=ligne+d%C3%A9marcation&index=&numNotice=&listeAffinages=FacNatDoc_e&afficheRegroup=false&trouveDansFiltre=NoticePUB&nbResultParPage=10&triResultParPage=0&critereRecherche=0&typeNotice="
target="_blank"
rel="noopener noreferrer">
BNF</a>
(Bibliothèque nationale de France) archivent et numérisent des documents historiques puis les publient dans la mesure du possible. Les universités font la même chose. Dans le cas présent, une carte issue de la collection 
<a href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~247153~5515299:Invasion-Study-map-of-Northern-Euro?sort=Pub_List_No_InitialSort%2CPub_Date%2CPub_List_No%2CSeries_No?&qvq=q:europe%2B1939;sort:Pub_List_No_InitialSort%2CPub_Date%2CPub_List_No%2CSeries_No;lc:RUMSEY~8~1&mi=8&trs=10#"
target="_blank"
rel="noopener noreferrer">
David Rumsey</a> a servi de référence pour l'annexion de la Carélie, en Finlande.
<br>

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/applications/cartes-facon/europe_1943.jpg' | relative_url }}"
        alt="Invasions en Europe entre 1939 et 1943"
        class="img-fluid">
    <figcaption>Invasions en Europe entre 1939 et 1943; Mathews, Northrup & Co. 1943</figcaption>
</figure>
</center>

<h2>2. Géoréférencer les cartes historiques</h2>
Les cartes historiques sont généralement accessibles sous la forme d'images, sans être associées à des coordonnées géographiques. Pour les utiliser, il faut donc les placer dans l'espace de la carte. Cette étape s'appelle le géoréférencement. On repère des points remarquables (frontières, villes, aspérités sur le littoral...) sur le raster et leur homologue sur la carte. Le SIG fait automatiquement les transformations géométriques nécéssaires pour recaler l'image sur la carte.

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/applications/cartes-facon/georef.png' | relative_url }}"
        alt="Superposition de la carte historique géoréférencée et du fond de carte"
        class="img-fluid">
    <figcaption>Géoréférencement de la carte historique</figcaption>
</figure>
</center>

En cartographie, il est plus simple de manipuler des données vecteur que raster. Les objets vectorisés peuvent être sélectionnés individuellement pour choisir leur mode de représentation. A partir des cartes historiques géoréférencées, on peut donc redessiner en vecteurs les changements de frontière. C'est comme un décalquage !<br><br>

<h2>3. Organiser les données dans le SIG</h2>

Le logiciel SIG permet de superposer des couches de données, comme des calques. Afin de faciliter la mise en page, on choisit la répartition des données dans les différentes couches et leur ordre de superposition.

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/applications/cartes-facon/organisation_couches.png' | relative_url }}"
        alt="Superposition des couches de vecteur"
        class="img-fluid">
    <figcaption>Superposition des couches de vecteur dans le SIG</figcaption>
</figure>
</center>

<h2>4. Faire les mises en pages</h2>
Chaque mise en page correspond à une capture des couches dans le SIG à un instant donné. Il faut ensuite ajouter des informations contextuelles : un titre, une légende, des figurés...<br><br>

<h2>5. Vérifier les cartes produites</h2>
La carte présente est en fait une succession de treize cartes différentes, dans l'ordre chonologique. Il faut donc s'assurer à la mise en page de chaque image individuelle qu'elle s'insère avec cohérence dans la série temporelle et que tous les éléments importants historiques (cf. chronologie des évènements) et cartographiques (légende, titre...) sont présents.<br><br>

<h2>6. Préparer le rendu final</h2>
Une fois que chaque image est exportée sous un format raster, on les ajoute aux diapositives d'un PowerPoint. C'est à ce moment que sont ajoutées les flêches.<br><br>

Pour illustrer cette page web, une image animée (.gif) remplace le PowerPoint pour visualiser la série temporelle des cartes.<br><br>

<h2>7. Evaluer la qualité de la carte</h2><br>
<strong><u>La carte présentée ici comprend des approximations :</u></strong><br><br>

- <strong>Spatiales :</strong> Le géoréférencement a été fait à partir d'images de mauvaises qualité donc il est peu précis.<br>

- <strong>Historiques :</strong> La carte s'adressant à des collégiens et non des universitaires, des alliances et des annexions ont été simplifiées.<br><br>

<span class="arrow-inline">→</span>La carte est adaptée pour l'usage prévu : un support de cours d'histoire-géographie au collège. Elle n'est cependant pas adaptée pour d'autres usages tels que de la recherche historique ou une source pour la production d'autres cartes.


</div>