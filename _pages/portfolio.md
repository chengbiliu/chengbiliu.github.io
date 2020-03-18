---
layout: archive
title: "Projects"
permalink: /portfolio/
author_profile: true
---

{% include base_path %}
Here are some small projects I've done in the past. I enjoy creating various kinds of maps as tools to help people better understand our society and environment.

{% for post in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}

**Analyzing Characteristics of User Generated Data in Yelp**

A video presentation of my analysis on [Yelp's open dataset](https://www.yelp.com/dataset). A variety of analyses are implemented in Python and ArcGIS including category analysis, network analysis, and spatial analysis.<br/><iframe width="560" height="315" src="https://www.youtube.com/embed/2woLPRKWBEw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
