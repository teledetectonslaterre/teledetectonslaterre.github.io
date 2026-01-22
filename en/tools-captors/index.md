---
layout: default
title: Captors
slug: tools-captors
lang: en
ref: tools-captors
---


<div class="two-columns">

<section class="column">
<h2>Optical captors</h2>

A camera mainly consists of two components: a lens and a sensor. The lens focuses light onto the sensor at the back of the camera. The sensor is an assembly of small squares called pixels. Each pixel measures the intensity of the light it receives. It converts this intensity into electrical energy. The electrical signal is then converted into numbers to reconstruct a digital image. This process produces a black and white (
<span class="definition" tabindex="0" data-def="The pixels capture all light, regardless of wavelength.">
panchromatic
</span>
) image. Filters are used to obtain color images. With a filter, a pixel only captures light at a certain wavelength, and therefore a specific color. By adding several different filters and synthesizing the signals received, a color image is obtained. Optical sensors use waves with a wavelength mainly between 10 nm and 1 mm. Optical sensors are 
<span class="definition" tabindex="0" data-def="Sensors that receive energy that they did not emit themselves.">
“passive.”
</span>

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/outils/outils-capteurs/spectre_electromagnetique_en.png' | relative_url }}"
        alt="Electromagnetic spectrum"
        class="img-fluid">
    <figcaption>Electromagnetic spectrum<br>Source : Wikimedia Commons</figcaption>
</figure>
</center>

</section>



<section class="column">
<h2>Radar captors</h2>

Unlike optical sensors, radar sensors are active, meaning that they emit a signal themselves and use the return signal emitted. Radar detects signals with wavelengths between 1 mm and 1 m. Radars send out radiation and measure the intensity of the reflected radiation. The advantage of radar is that it is not affected by clouds: microwaves pass through cloud cover.

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/outils/outils-capteurs/capteur_passif_en.png' | relative_url }}"
        alt="Spectre électromagnétique"
        class="img-fluid">
    <figcaption>Passive captor</figcaption>
</figure>
</center><br>
<center>
<figure class="image-figure text-center">
    <img 
        src="{{ '/assets/figures/outils/outils-capteurs/capteur_actif_en.png' | relative_url }}"
        alt="Spectre électromagnétique"
        class="img-fluid">
    <figcaption>Active captor</figcaption>
</figure>
</center>

</section>
</div>


<div class="container-content">
<h2>LiDAR captors</h2>
Like radar, LiDAR (Light Detection and Ranging) is an active sensor that emits its own radiation. LiDAR sends out a laser pulse and measures various parameters of the returned signal: the number of “echoes,” the signal intensity, and, most importantly, the time between the signal being emitted and its return. This duration makes it possible to determine the distance to the reflecting object. LiDAR is therefore an excellent tool for measuring altitudes.

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ 'assets/figures/outils/outils-capteurs/lidar_en.png' | relative_url }}"
        alt="LiDAR diagram"
        class="img-fluid">
    <figcaption>How LiDAR works</figcaption>
</figure>
</center>

<center>
<figure class="image-figure text-center">
    <img 
        src="{{ 'assets/figures/outils/outils-capteurs/distance_lidar_en.png' | relative_url }}"
        alt="Height calculation diagram using LiDAR"
        class="img-fluid">
    <figcaption>Calculating height using LiDAR</figcaption>
</figure>
</center>

</div>
