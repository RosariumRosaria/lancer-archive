---
layout: layouts/base.njk
title: Unsorted
document_id: UNSORTED
clearance_required: 0
pagefind_ignore: true
tags: ["hub"]
permalink: /documents/unsorted/
eleventyNavigation:
  key: UNSORTED
  title: Unsorted
  parent: IN
  order: 4
---

{% sectionHeader "Unsorted" %}
Staging Index
{% endsectionHeader %}

An interim collection for documents pending classification.

---

<div class="card">
  <h2>Index</h2>
  <p>A list of available unsorted documents. Select an entry to open the full record.</p>
  <hr>

  <ol>
    {% for doc in collections["unsorted"] | sort(attribute="data.title") %}
      <li>
        <a href="{{ doc.url }}">{{ doc.data.title }}</a>
      </li>
    {% else %}
      <li><em>No unsorted documents are currently listed.</em></li>
    {% endfor %}
  </ol>
</div>
