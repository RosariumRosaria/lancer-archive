---
layout: layouts/base.njk
title: Briefings
document_id: BR
clearance_required: 1
permalink: /documents/briefings/
eleventyNavigation:
  key: BR
  title: Briefings
  parent: ID
  order: 1
---

{% sectionHeader "Briefings" %}
A Brief Overview
{% endsectionHeader %}

This section contains official briefings prepared for operational awareness.

Briefings serve as primers on key objectives, strategic conditions, and mission-relevant intelligence.

Information presented here is considered authoritative at the time of issue.

---

<div class="card">
  <h2>Index</h2>
  <p>A list of available briefings. Select an entry to open the full record.</p>
  <hr>

  <ol>
    {# EXPECTS: collections["briefing"] #}
    {% for doc in collections["briefing"] | sort(attribute="data.document_id") %}
      <li>
        <a href="{{ doc.url }}">
          {{ doc.data.document_id }} — {{ doc.data.title }}
        </a>
      </li>
    {% else %}
      <li><em>No briefings are currently listed.</em></li>
    {% endfor %}
  </ol>
</div>
