---
layout: layouts/base.njk
title: TEST1
document_id: TEST1
clearance_required: 2
permalink: /documents/incidents/test1/
tags: ["incident-report"]
eleventyNavigation:
  key: TEST1
  parent: IR
  order: 2
---

{% sectionHeader "TEST 1" %}
TEST
{% endsectionHeader %}

### TEST

You should be able to see {% redact 'this', 2 %}

But not {% redact 'this', 3 %}

---
