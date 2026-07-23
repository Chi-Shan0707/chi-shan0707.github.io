---
layout: archive
title: "Tech"
permalink: /tech/
author_profile: true
redirect_from:
  - /notes/
---

{% for post in site.categories.tech %}
  {% include archive-single.html %}
{% endfor %}