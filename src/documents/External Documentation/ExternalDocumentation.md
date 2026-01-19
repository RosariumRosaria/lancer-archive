---
layout: layouts/base.njk
title: External Documentation
document_id: ED
clearance_required: 1
permalink: /documents/externaldocumentation/
eleventyNavigation:
  key: ED
  title: External Documentation
  parent: IN
  order: 1
---

{% sectionHeader "External Documentation" %}
A Brief Overview
{% endsectionHeader %}

A repository for documentation originating from outside the organization.

### Be Vigilant

Information contained within may be incorrect, biased, incomplete, or deliberately misleading. Most documents are presented as received, without commentary, correction, or verification.

---

<div class="card">
  {% sectionHeader "Memorandum" %}
  From Overseer Chen
  {% endsectionHeader %}
  <p>For the love of Cradle: if one more of you posts personal information here, I’m violating all three pillars.</p>
</div>

<div class="card">
  <h2>Index</h2>
  <p>A list of available external documents. Select an entry to open the full record.</p>
  <hr>

  <ol>
    {# EXPECTS: collections["external-doc"] #}
    {% for doc in collections["external-doc"] | sort(attribute="data.title") %}
      <li>
        <a href="{{ doc.url }}">{{ doc.data.title }}</a>
      </li>
    {% else %}
      <li><em>No external documents are currently listed.</em></li>
    {% endfor %}
  </ol>
</div>
