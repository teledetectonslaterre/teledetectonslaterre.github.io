---
layout: default
title: Applications - Thematic maps
slug: applications-thematic-maps
header: Applications - Thematic maps
lang: en
ref: applications-thematic-maps
---

<div class="container-content">

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/applications/Axe_1939_1941.gif' | relative_url }}"
        alt="Expansion of the Axis in Europe between 1939 and 1941"
        class="img-fluid">
    <figcaption>Expansion of the Axis in Europe between 1939 and 1941</figcaption>
</figure>
</center>

This map shows the expansion of the Axis territories and the alliances that were formed in the early years of World War II.<br><br>

This simple illustration draws on various disciplines. Geomatics provides the technology for creating the map, but historical resources are also necessary. Finally, the modes of representation are chosen according to the purpose of the map. Thus, the creation of this image involves several questions and steps.<br><br>
</div>

<div class="container-content">
<center>
<h1><strong>Define the need and the working framework</strong></h1><br>
</center>
<h2>1. What is the purpose of the map?</h2>
This map is designed for a history and geography class. It should show that the Axis powers (Third Reich, Italy, USSR) gained ground in Europe from 1939 to 1941.<br><br>

<em><u>Who is this map for?</u></em><br>
To middle school students in 9th grade (ages 13-14) in France.<br>
<span class="arrow-inline">→</span>It must be legible and focus solely on the topics covered in class.<br><br>

<em><u>What is the area of interest?</u></em><br>
Continental Europe and North Africa.<br><br>

<em><u>What will be the final medium for the map?</u></em><br>
The map will be displayed using a video projector during a class that uses a PowerPoint presentation.<br>

<span class="arrow-inline">→</span>It must be possible to add it to PowerPoint slides.<br>
<span class="arrow-inline">→</span>Colors and
<span class="definition" tabindex="0" data-def="place names">
toponyms
</span>
should be easily distinguishable from the back row of the classroom.<br><br>

<h2>2. What data is required?</h2><br>
<u>Key elements to be represented on the map</u><br>
<span class="arrow-inline">→</span>A chronology of territorial changes and political alliances between 1939 and 1941 in Europe<br><br> 

- A base map showing administrative boundaries in 1939 <span class="arrow-inline">→</span>A 
<span class="definition" tabindex="0" data-def="A set of data that lies on the same plane. In a GIS, layers are superimposed on one another.">
layer
</span>
of
<span class="definition" tabindex="0" data-def="Data type with points, lines, or polygons defined by spatial coordinates.">
vectors
</span>
<br>
- Maps showing territorial changes<span class="arrow-inline">→</span>Vector layers or
<span class="definition" tabindex="0" data-def="image">
raster
</span>
layers
<br><br>


<h2>3. What technical tools are needed?</h2>
To create this map, we use a GIS (Geographic Information System). There are various software programs available, both paid and free. The main 
<span class="definition" tabindex="0" data-def="LSoftware that can be used, studied, modified, and distributed without restriction thanks to a specific license.">
open-source 
</span>
software program is QGIS. GIS allows you to create maps. To achieve a more attractive result, CAD (computer-aided design) software such as Gimp or Adobe Illustrator is generally used. Since this map will be used in a PowerPoint presentation, the simplest solution is to do the finishing touches in PowerPoint.

</div>

<div class="container-content">
<center>
<h1><strong>Creating the map</strong></h1><br>
</center>

<h2>1. Research and download data</h2>
<strong>Basemap :</strong>
The base map has two purposes here: it illustrates the initial state of territorial development and serves as a geometric reference. National archives and universities provide access to historical vector data. This is the case for the
<a href="https://conservancy.umn.edu/items/4ee837e4-9b34-406e-b4d2-b53a6ae0707c"
target="_blank"
rel="noopener noreferrer">
Univesity of Minnesota</a>.<br><br>

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/applications/cartes-facon/fond_univ_minnesota.png' | relative_url }}"
        alt="Kropelnicki, Jeffrey; Johnson, Grace; Kne, Len; Lindberg, Mark. (2022). Historical National Boundaries. Retrieved from the Data Repository for the University of Minnesota (DRUM), https://doi.org/10.13020/146x-1412."
        class="img-fluid">
    <figcaption>National borders in Europe in 1939, University of Minnesota</figcaption>
</figure>
</center>

<strong>Maps showing territorial changes:</strong> Between 1939 and 1941, some countries were partially or entirely annexed, such as Finland and Poland. The borders of other countries were completely redrawn, such as Slovakia, Hungary, and Romania. This therefore requires bibliographic research to find reference maps. Institutes such as the 
<a href="https://catalogue.bnf.fr/affiner.do?motRecherche=ligne+d%C3%A9marcation&index=&numNotice=&listeAffinages=FacNatDoc_e&afficheRegroup=false&trouveDansFiltre=NoticePUB&nbResultParPage=10&triResultParPage=0&critereRecherche=0&typeNotice="
target="_blank"
rel="noopener noreferrer">
BNF</a>
(Bibliothèque nationale de France) archive and digitize historical documents and then publish them whenever possible. Universities do the same thing. In this case, a map from the 
<a href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~247153~5515299:Invasion-Study-map-of-Northern-Euro?sort=Pub_List_No_InitialSort%2CPub_Date%2CPub_List_No%2CSeries_No?&qvq=q:europe%2B1939;sort:Pub_List_No_InitialSort%2CPub_Date%2CPub_List_No%2CSeries_No;lc:RUMSEY~8~1&mi=8&trs=10#"
target="_blank"
rel="noopener noreferrer">
David Rumsey collection</a> served as a reference for the annexation of Karelia, Finland.
<br>

<h2>2. Georeferencing historical maps</h2>
Historical maps are generally available in image form, without being associated with geographic coordinates. To use them, they must therefore be placed in the map space. This step is called georeferencing. Notable points (borders, cities, coastal features, etc.) are identified on the raster and their counterparts on the map. The GIS automatically performs the necessary geometric transformations to realign the image on the map.

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/applications/cartes-facon/georef.png' | relative_url }}"
        alt="Overlay of the georeferenced historical map and the base map"
        class="img-fluid">
    <figcaption>Georeferencing of the historical map</figcaption>
</figure>
</center>

In cartography, it is easier to manipulate vector data than raster data. Vectorized objects can be selected individually to choose how they are represented. Using georeferenced historical maps, boundary changes can therefore be redrawn as vectors. It's like tracing!<br><br>

<h2>3. Organizing data in the GIS</h2>

GIS software allows layers of data to be superimposed, like layers. To facilitate layout, the distribution of data between the different layers and their order of superimposition are chosen.

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/applications/cartes-facon/organisation_couches.png' | relative_url }}"
        alt="Overlaying vector layers"
        class="img-fluid">
    <figcaption>Overlaying vector layers in the GIS</figcaption>
</figure>
</center>

<h2>4. Doing the layout</h2>
Each layout corresponds to a snapshot of the layers in the GIS at a given moment. Contextual information must then be added: a title, a legend, symbols, etc.<br><br>

<h2>5. Checking the maps produced</h2>
The map presented is actually a sequence of thirteen different maps, in chronological order. It is therefore necessary to ensure that the layout of each individual image fits coherently into the chronological series and that all the important historical (see chronology of events) and cartographic (legend, title, etc.) elements are present.<br><br>

<h2>6. Preparing the final rendering</h2>
Once each image has been exported in raster format, they are added to PowerPoint slides. This is when the arrows are added.<br><br>

To illustrate this web page, an animated image (.gif) replaces the PowerPoint presentation to visualize the time series of maps.<br><br>

<h2>7. Assessing the quality of the map</h2>
<strong>The map shown here includes approximations:</strong><br>

- <strong>Spatial :</strong> The georeferencing was done using poor-quality images, so it is not very accurate.<br>

- <strong>Historical :</strong> Since the map is intended for middle school students rather than university students, alliances and annexations have been simplified.<br>

<span class="arrow-inline">→</span>The map is suitable for its intended use: as a teaching aid for history and geography classes in middle school. However, it is not suitable for other uses such as historical research or as a source for producing other maps.<br><br>

<h2>8. Adding metadata</h2>
Metadata is all the information surrounding the map that is essential for the reader. Metadata must include, among other things, the author and date of creation of the map. It is also important to include the sources used and the context in which it was created. Metadata helps readers understand how to read the map and know what it contains or does not contain, and how it can or cannot be used.<br><br>

</div>