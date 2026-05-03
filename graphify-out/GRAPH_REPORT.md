# Graph Report - .  (2026-05-03)

## Corpus Check
- Corpus is ~174 words - fits in a single context window. You may not need a graph.

## Summary
- 7 nodes · 5 edges · 3 communities detected
- Extraction: 60% EXTRACTED · 40% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.9)
- Token cost: 1,000 input · 500 output

## Community Hubs (Navigation)
- [[_COMMUNITY_User Authentication UI|User Authentication UI]]
- [[_COMMUNITY_Credential Privacy Controls|Credential Privacy Controls]]
- [[_COMMUNITY_Feedback & Response Handling|Feedback & Response Handling]]

## God Nodes (most connected - your core abstractions)
1. `Login Form` - 2 edges
2. `Password Input` - 2 edges
3. `Password Toggle Logic` - 2 edges
4. `Form Submission Logic` - 2 edges
5. `Password Toggle Button` - 1 edges
6. `Status Message Container` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Form Submission Logic` --conceptually_related_to--> `Login Form`  [INFERRED]
  script.js → index.html
- `Password Toggle Logic` --references--> `Password Input`  [EXTRACTED]
  script.js → index.html
- `Password Toggle Logic` --conceptually_related_to--> `Password Toggle Button`  [INFERRED]
  script.js → index.html
- `Form Submission Logic` --references--> `Status Message Container`  [EXTRACTED]
  script.js → index.html

## Hyperedges (group relationships)
- **Login Interaction Flow** — index_login_form, script_submit_logic, index_message_container [INFERRED 0.85]

## Communities

### Community 0 - "User Authentication UI"
Cohesion: 1.0
Nodes (2): Login Form, Password Input

### Community 1 - "Credential Privacy Controls"
Cohesion: 1.0
Nodes (2): Password Toggle Button, Password Toggle Logic

### Community 2 - "Feedback & Response Handling"
Cohesion: 1.0
Nodes (2): Status Message Container, Form Submission Logic

## Knowledge Gaps
- **2 isolated node(s):** `Password Toggle Button`, `Status Message Container`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `User Authentication UI`** (2 nodes): `Login Form`, `Password Input`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Credential Privacy Controls`** (2 nodes): `Password Toggle Button`, `Password Toggle Logic`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Feedback & Response Handling`** (2 nodes): `Status Message Container`, `Form Submission Logic`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Login Form` connect `User Authentication UI` to `Feedback & Response Handling`?**
  _High betweenness centrality (0.400) - this node is a cross-community bridge._
- **Why does `Password Input` connect `User Authentication UI` to `Credential Privacy Controls`?**
  _High betweenness centrality (0.400) - this node is a cross-community bridge._
- **Why does `Password Toggle Logic` connect `Credential Privacy Controls` to `User Authentication UI`?**
  _High betweenness centrality (0.267) - this node is a cross-community bridge._
- **What connects `Password Toggle Button`, `Status Message Container` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._