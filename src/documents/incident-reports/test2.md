---
layout: layouts/base.njk
title: TEST 2
document_id: TEST 2
clearance_required: 3
permalink: /documents/incidents/test2/
tags: ["incident-report"]
eleventyNavigation:
  key: TEST2
  parent: IR
  order: 2
---

{% sectionHeader "TEST 1" %}
TEST
{% endsectionHeader %}

### TEST

You should not be able to see {% redact 'this', 3%}

---
{% set hash = "TEST" %}
{% include "widgets/passcode.njk" %}
