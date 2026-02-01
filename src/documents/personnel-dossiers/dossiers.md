---
layout: layouts/base.njk
title: Personnel Dossiers
document_id: PD
clearance_required: 1
pagefind_ignore: true
tags: ["hub"]
permalink: /documents/personneldossiers/
eleventyNavigation:
  key: PD
  title: Personnel Dossiers
  parent: IN
  order: 1
---

{% sectionHeader "Personnel Dossiers" %}
A Brief Overview
{% endsectionHeader %}

A hub for files on persons of interest, both external and internal to OVERSIGHT.

<div class="card">
  <h2>Index</h2>
  <p>A list of available dossiers. Select an entry to open the full record.</p>
  <hr>

  <ol>
    {# EXPECTS: collections["personnel-dossier"] #}
    {% for doc in collections["personnel-dossier"] | sort(attribute="data.title") %}
      <li>
        <a href="{{ doc.url }}">{{ doc.data.title }}</a>
      </li>
    {% else %}
      <li><em>No dossiers are currently listed.</em></li>
    {% endfor %}
  </ol>
</div>
