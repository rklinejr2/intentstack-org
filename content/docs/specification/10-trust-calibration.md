---
title: "Clause 10 — Trust Calibration"
weight: 100
---

## 10. Trust Calibration

*(Normative)*

### 10.1 Trust as Measurement

The position on the spectrum between full **corrigibility** (agent follows all instructions without independent judgment) and full autonomy (agent acts on its own values without oversight) SHALL be treated as a measurement — a reflection of accumulated evidence about whether the agent's cultivated intent is reliable enough to warrant greater autonomy.

A conformant implementation SHALL NOT treat corrigibility position as a fixed design choice. Both extremes are unsafe: full corrigibility relies entirely on the principal having perfect intent; full autonomy relies entirely on the agent having perfect values.

### 10.2 Per-Boundary Calibration

Trust calibration SHALL be a per-boundary property. Each governance interface SHALL have its own position on the corrigibility-autonomy spectrum, calibrated by boundary-specific evidence. System-wide trust levels are not conformant.

### 10.3 Evidence Mechanisms

A conformant Governance Implementation SHALL provide at minimum the following evidence mechanisms:

**Steward Log.** An append-only record of governance decisions, alignment events, and escalation resolutions. The Steward Log SHALL record not just what happened but why governance decisions were made.

**Alignment event classification.** Runtime classification of whether execution aligns with intent across all four sources. Consistent alignment SHALL support trust extension. Detected misalignment SHALL trigger trust reduction and increased oversight.

**Progressive trust extension.** The operational mechanism by which trust changes: start corrigible, demonstrate reliable judgment through governance-monitored operation, earn autonomy. A conformant implementation SHALL provide explicit mechanisms for trust extension and reduction based on accumulated evidence.

### 10.4 Decision Tiers

A conformant implementation SHOULD formalize trust calibration into explicit **decision tiers** defining which actions the agent may take autonomously, which require principal consultation, and which are reserved for the principal alone. Tier assignments SHALL reflect accumulated evidence at the specific boundary, not capability assessments alone.

### 10.5 The Trust Trajectory

A conformant Governance Architecture is designed for a world where human oversight decreases over time — not because humans become irrelevant, but because trust-calibrated autonomy scales better than permanent supervision. The trajectory SHALL move from tight oversight through progressive autonomy toward a mature state where agents operate within well-understood governance interfaces with monitoring rather than direction. This trajectory is evidence-gated: autonomy expansion requires demonstrated alignment, not elapsed time.
