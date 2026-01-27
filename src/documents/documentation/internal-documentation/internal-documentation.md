---
layout: layouts/base.njk
title: Internal Documentation
document_id: ID
clearance_required: 1
pagefind_ignore: true
tags: ["hub"]
permalink: /documents/internal-documentation/
eleventyNavigation:
  key: ID
  title: Internal Documentation
  parent: IN
  order: 1
---

{% sectionHeader "Internal Documentation" %}
A Brief Overview
{% endsectionHeader %}

A repository for documentation produced within the organization.

These materials include procedural primers (game rules), geopolitical briefs (background information), and other documents of relevance.

---

<div class="card">
  <h2>Index</h2>
  <p>A list of available internal documents. Select an entry to open the full record.</p>
  <hr>

  <ol>
    {# EXPECTS: collections["internal-doc"] #}
    {% for doc in collections["internal-doc"] | sort(attribute="data.title") %}
      <li>
        <a href="{{ doc.url }}">{{ doc.data.title }}</a>
      </li>
    {% else %}
      <li><em>No internal documents are currently listed.</em></li>
    {% endfor %}
  </ol>
</div>
