---
layout: layouts/base.njk
title: BRIEFINGS
document_id: BR
clearance_required: 1
permalink: /documents/briefings/
eleventyNavigation:
  key: BR
  title: Briefings
  parent: IN
  order: 1
---

{% sectionHeader "Briefings" %}
A Brief Overview
{% endsectionHeader %}

All briefings are collected here. These represent either primers on various protocols (rules), geopolitical affairs (background lore), or mission objectives/key intel.

<div class="card">
  {% sectionHeader "Memorandium" %} 
  From Overseer Chen
  {% endsectionHeader %}
  <p>Briefings may be subject to clearance level locks, or redaction, as deeemed appropriate by Oversight Command.</p>
</div>

---


<div class="card">
  <h2>Index</h2>
  <p>A list of available briefings. Select an entry to open the full record.</p>
  <hr>

  <ol>
    {% for doc in collections["briefing"] | sort(attribute="url") %}
      <li>
        <a href="{{ doc.url }}">{{ doc.data.title }}</a>
      </li>
    {% endfor %}
  </ol>
</div>

