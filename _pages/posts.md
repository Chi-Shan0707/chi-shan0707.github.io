---
layout: archive
title: "Posts"
permalink: /posts/
author_profile: true
header:
  overlay_color: "#101010"
  overlay_text: "文章辑"
---

<p>这是我正式标记 "Posts" 小节的起点：第一篇完成的文章是 <strong>《Why Learn Math》</strong>，写于 2026 年 3 月 7 日，记下了我在代数课上对专注与思维方式的反思。接下来的几篇都将在这里顺序推出。</p>

{% assign focus_titles = "Why Learn Math,AI Hackathon Journey" | split: "," %}
{% assign focus_posts = site.posts | where_exp: "post", "focus_titles contains post.title" | sort: "date" %}
{% assign first_post = focus_posts | first %}
{% assign later_posts = focus_posts | slice: 1, 10 %}

{% if first_post %}
  <section class="posts__first">
    <h2>第一篇 · {{ first_post.date | date: "%B %-e, %Y" }}</h2>
    {% include archive-single.html post=first_post %}
  </section>
{% endif %}

{% if later_posts and later_posts.size > 0 %}
  <section class="posts__more">
    <h3>后续文章</h3>
    {% for post in later_posts %}
      {% include archive-single.html post=post %}
    {% endfor %}
  </section>
{% endif %}


