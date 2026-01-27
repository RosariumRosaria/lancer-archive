---
layout: layouts/base.njk
title: Incident Reports
document_id: IR
clearance_required: 1
pagefind_ignore: true
tags: ["hub"]
permalink: /documents/incident-reports/
eleventyNavigation:
  key: IR
  title: Incident Reports
  parent: IN
  order: 1
---

{% sectionHeader "Incident Reports" %}
A Brief Overview
{% endsectionHeader %}

All operational incidents are catalogued here following debrief and review. Reports are subject to redaction and revision as additional information becomes available.

<div class="card">
  {% sectionHeader "Reminder" %}
  From Overseer Chen
  {% endsectionHeader %}
  <p>All field teams must designate an operative for ARR writeup, please send completed reports to my departments for processing and redaction.</p>
</div>

### Reporting Guidelines

Incident reports are to be submitted following completion of field operations or upon return to secure facilities. All submissions must adhere to the following standards to ensure consistency, traceability, and reviewability.

1. **Objective**  
   Clearly state the mission objective as assigned prior to deployment.

2. **Summary**  
   Provide a concise overview of the incident, including mission context and significant events.

3. **Outcome**  
   Document the results of the operation, mission success or failure, and any immediate consequences.

4. **Personnel**  
   List all operatives involved. Include injuries, fatalities, extractions.

5. **Assets**  
   Record all deployed frames and equipment. Note losses, recoveries, damage assessments, and current operational status.

6. **Assessment**  
   Reserved for Oversight Command. Field personnel should not include recommendations or conclusions in this section unless explicitly directed.

---

<div class="card">
  <h2>Index</h2>
  <p>A list of available incident reports. Select an entry to open the full record.</p>
  <hr>

  <ol>
    {% for doc in collections["incident-report"] | sort(attribute="url") %}
      <li>
        <a href="{{ doc.url }}">{{ doc.data.title }}</a>
      </li>
    {% endfor %}
  </ol>
</div>
