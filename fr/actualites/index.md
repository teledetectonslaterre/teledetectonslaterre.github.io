---
layout: default
title: Actualités
slug: actualites
lang: fr
ref: news
---


{% assign articles = site.news_fr | sort: "date" | reverse %}

<div class="news-list">

{% for article in articles %}

  <article class="news-card">

    <h2 class="news-title">
      <a href="{{ article.url }}">{{ article.title }}</a>
    </h2>

    <p class="news-date">
      {{ article.date | date: "%d/%m/%Y" }}
    </p>

  </article>

{% endfor %}

</div>