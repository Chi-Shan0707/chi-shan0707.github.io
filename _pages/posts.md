---
layout: archive
title: "Posts"
permalink: /posts/
author_profile: true
header:
  overlay_color: "#101010"
  overlay_text: "Articles"
---

<p>Welcome to my <strong>Posts</strong> section. My first completed article is <strong>Why Learn Math</strong>, written on March 7, 2026, reflecting on focus and deep thinking during Advanced Algebra class. More articles will be published here as I complete them.</p>

{% assign focus_titles = "Why Learn Math,AI Hackathon Journey" | split: "," %}
{% assign focus_posts = site.posts | where_exp: "post", "focus_titles contains post.title" | sort: "date" %}
{% assign first_post = focus_posts | first %}
{% assign later_posts = focus_posts | slice: 1, 10 %}

{% if first_post %}
  <section class="posts__first">
    <h2>First Post · {{ first_post.date | date: "%B %-e, %Y" }}</h2>
    {% include archive-single.html post=first_post %}
  </section>
{% endif %}

{% if later_posts and later_posts.size > 0 %}
  <section class="posts__more">
    <h3>More Posts</h3>
    {% for post in later_posts %}
      {% include archive-single.html post=post %}
    {% endfor %}
  </section>
{% endif %}


