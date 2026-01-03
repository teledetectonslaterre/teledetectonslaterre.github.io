---
layout: default
title: Capteurs
slug: outils-capteurs
---


<div class="two-columns">

<section class="column">
<h2>Les capteurs optiques</h2>

L'appareil photo comporte principalement deux composantes : une lentille et un capteur. La lentille permet de focaliser la lumière sur le capteur à l'arrière de l'appareil. Le capteur est un assemblage de petits carrés, des pixels. Chaque pixel mesure l'intensité lumineuse reçue. Il transforme cette intensité en énergie életrique. Le signal électrique est ensuite transformé en nombre pour reconstituer une image numérique. Ce fonctionnement donne une image en noir et blanc (
<span class="definition" tabindex="0" data-def="Les pixels captent toute la lumière, peu importe la longueur d'onde.">
panchromatique
</span>
). Pour obtenir des images en couleur, on utilise des filtres. Avec un filtre, un pixel ne capte que la lumière à une certaine longueur d'onde, donc à une couleur spécifique. En ajoutant plusieurs filtres différents et faisant la synthèse des signaux reçus, on obtient une image en couleur. Les capteurs optiques utilisent les ondes dont la longueur est principalement comprise entre 10nm et 1mm. Les capteurs optiques sont 
<span class="definition" tabindex="0" data-def="Capteurs qui reçoivent une énergie qu'ils n'ont pas eux-même émis.">
«passifs».
</span>

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/outils/outils-capteurs/spectre_electromagnetique.png' | relative_url }}"
        alt="Spectre électromagnétique"
        class="img-fluid">
    <figcaption>Spectre électromagnétique<br>Source : Wikimedia Commons</figcaption>
</figure>
</center>

</section>



<section class="column">
<h2>Les capteurs radar</h2>

Contrairement aux capteurs optiques, les capteurs radar sont actifs, c'est-à-dire qu'ils émettent eux-même un signal et utilise le retour du signal émis. Le radar capte les signaux dont les longeurs d'onde sont comprises entre 1mm et 1m. Les radars envoeient un rayonnement et mesurent l'intensité du rayonnement réfléchi. L'avantage du radar est qu'il n'est pas gêné par les nuages : les micro-ondes traversent la couverture nuageuse.

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/outils/outils-capteurs/capteur_passif.png' | relative_url }}"
        alt="Spectre électromagnétique"
        class="img-fluid">
    <figcaption>Capteur passif</figcaption>
</figure>
</center><br>
<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/outils/outils-capteurs/capteur_actif.png' | relative_url }}"
        alt="Spectre électromagnétique"
        class="img-fluid">
    <figcaption>Capteur actif</figcaption>
</figure>
</center>

</section>
</div>


<div class="container-content">
<h2>Les capteurs LiDAR</h2>
Comme le radar, le LiDAR (Light Detection and Ranging) est un capteur actif qui émet son propre rayonnement. Le LiDAR envoit une impulsion laser et mesure différents paramètres du signal renvoyé : le nombre d'«échos», l'intensité du signal et surtout le temps entre l'émission du signal et son retour. Cette durée permet de déterminer la distance à laquelle se trouve l'objet réfléchissant. Le LiDAR est donc un excellent outil pour mesurer des altitudes.

</div>
