---
title: "The Intent Stack — A Reference Model for AI Agent Governance"
weight: 1
---

**Version:** 5.0
**Date:** March 2026
**Author:** Rob Kline
**Status:** Working specification — subject to revision through operational evidence

---

## Preface

This document describes the Intent Stack, a seven-layer governance architecture for aligning AI agent behavior with human intent across any boundary where authority is delegated or coordination is required. It is written as a derivation — each section exists because the previous one is necessary but insufficient. The goal is not to catalog features but to build an argument from first principles about why this architecture exists, what it contains, and why it takes the form it does.

The Intent Stack emerged from operational practice, not theoretical design. Its patterns were discovered through building and governing Intent OS, a runtime governance platform that has been managing its own development across months of AI-assisted development. The reference model formalizes patterns that proved effective under real operational conditions. Where the model makes claims, it cites evidence. Where evidence is incomplete, it says so.

---

## 1. The Governance Problem

### 1.1 What Happens When AI Agents Operate Within Organizations

An AI agent deployed within an organization creates a governance interface. On one side of that boundary is the organization — with its mission, priorities, constraints, culture, and accountability structures. On the other side is the agent — with its trained values, its capabilities, and whatever instructions it has been given for this deployment.

The boundary requires governance because the agent will make decisions. Not just "which word comes next" decisions, but operational decisions: which task to prioritize, how to interpret ambiguous instructions, when to ask for clarification versus proceeding independently, what to do when two objectives conflict. Every such decision is an expression of intent — either the organization's intent, the agent's trained values, or some interaction between them. When those intents are aligned, things go well. When they diverge, the consequences range from inefficiency to catastrophe.

This is not a hypothetical future concern. AI agents today write production code, conduct research, analyze legal documents, interact with customers, and manage workflows. Each of these deployments creates a governance interface. Each boundary requires that someone or something ensures the agent's behavior serves the organization's actual intent — not just the instructions someone typed into a system prompt.

### 1.2 What Exists Today

The current landscape provides partial coverage of this problem:

**Training-time governance** addresses the agent's character. Anthropic's Constitutional AI, for example, shapes Claude's values, ethical commitments, and behavioral principles through training. This ensures the agent arrives at any deployment with a baseline of good judgment. But training-time governance is universal — it produces the same character regardless of which organization deploys the agent. It cannot know that this pharmaceutical company has specific regulatory obligations, or that this government agency has particular accountability requirements, or that this team's actual priorities differ from their stated ones.

**Deployment configuration** provides context through system prompts and operator settings. This is where organizations tell the agent what it should do in this specific context. But system prompts are static, shallow, and imposed. They capture what someone thought to write down, which is typically a fraction of the organization's actual intent. They don't evolve as understanding deepens. They don't surface intent the organization hasn't articulated. They don't handle the gap between what people say they want and what they actually need.

**Industry governance frameworks** — the Singapore Model Governance Framework, NIST AI Risk Management Framework, and similar efforts — provide policy and process guidance for responsible AI deployment. These operate at the level of organizational policy (what rules should we have?) and risk management (what could go wrong?). They do not provide runtime infrastructure for governing the moment-to-moment alignment between agent behavior and organizational intent.

What doesn't exist is the connective tissue: runtime infrastructure that discovers what an organization actually intends, formalizes that intent in a form agents can operate against, monitors alignment in real time, and adjusts governance as the relationship between organization and agent matures. That is what the Intent Stack provides.

### 1.3 Why This Problem Is Not New

Every point made above about AI agents applies equally to human employees. When an organization hires a person, it creates a governance interface. The person brings their own values, judgment, and capabilities. The organization has its mission, priorities, and constraints. Alignment between them determines whether the relationship produces good outcomes.

Humans have been solving this problem implicitly for centuries. The mechanisms are familiar: onboarding processes that transmit organizational culture, management relationships that clarify priorities, performance reviews that assess alignment, promotion systems that reward demonstrated judgment. Over time, a good employee absorbs the organization's intent — not just the explicit rules but the unwritten norms, the actual priorities (which may differ from the stated ones), the judgment calls that define "how we do things here."

Four specific mechanisms make human governance work despite its informality:

**Cultural absorption.** Humans infer intent from context. Sitting in meetings, reading body language, overhearing conversations, watching what gets rewarded and punished — all of these transmit organizational intent without anyone formalizing it. An AI agent cannot sit in the break room. It receives a system prompt and whatever someone explicitly told it.

**Cheap clarification.** When a human employee doesn't understand what the boss wants, they ask. The cost is negligible — a hallway conversation, a quick message. When an AI agent asks clarifying questions, it consumes tokens, user patience, and organizational willingness to engage. The tolerance for discovery is much lower, which means the agent must operate with less complete understanding.

**Personal ethics.** A human employee brings decades of moral development — personal values, professional standards, life experience. These constrain behavior even when instructions are bad. An AI agent's ethical foundation is whatever was trained. For well-governed models like Claude, this is substantial. But it is fundamentally different from personally developed values, and it doesn't include organizational context.

**Correctable speed.** A human employee making a bad decision takes hours or days to cause serious damage. Someone can intervene. An AI agent operating at machine speed across thousands of parallel instances can produce consequences faster than any human can detect and correct them.

AI breaks all four mechanisms. The governance that humans provide implicitly — through culture, relationship, shared history, and correctable pace — must become explicit, formalized, and machine-processable. That is the forcing function behind the Intent Stack.

### 1.4 The Counterintuitive Implication

In formalizing governance for AI, the Intent Stack also improves human governance. Most organizations have poor intent governance at human-to-human boundaries — they get away with it only because the implicit mechanisms compensate. When an organization goes through intent discovery to prepare for AI deployment, it surfaces intent that was always present but never articulated. The organization doesn't just get better AI governance. It gets better governance across every delegation and coordination relationship.

The AI deployment is the forcing function. The value extends to the entire organization.

### 1.5 Key Terms

Before proceeding to the architecture, six terms require definition. These terms carry specific meaning throughout this specification that may differ from their common usage.

**Intent** is the clear articulation of purpose, direction, and boundaries that guides action while enabling adaptation to specific contexts and conditions. It is not a goal (too abstract to act on), not an instruction (too concrete to adapt), not a specification (too rigid to survive contact with reality), and not an aspiration (too vague to govern against). Intent occupies the essential ground between aspiration and action — concrete enough to guide behavior, abstract enough to survive translation across contexts. In the Intent Stack, intent decomposes into five structural elements (the Intent Primitives, Section 2) and originates from four distinct sources (Section 3). When this specification refers to "governing intent," it means the composite of all five primitives as they flow from all applicable sources through the seven-layer architecture.

**Governance** is the continuous process of ensuring that agents' actions remain aligned with the intent of their principals. In the Intent Stack, governance operates through discovery (surfacing what principals actually intend), formalization (representing intent in machine-processable form), specification (translating intent into actionable direction), runtime alignment (assessing whether execution matches intent), orchestration (coordinating agents to execute), integration (connecting agents to systems), and execution (doing the work within constraints). Governance in this sense is relational — it exists between entities, not as a property of one. It is bidirectional — both principal and agent are transformed through the relationship. And it is evidence-based — the degree of oversight reflects accumulated evidence of alignment, not assumption or policy. This is distinct from corporate governance (board oversight), IT governance (technology standards), and policy-level AI governance (risk frameworks). The Intent Stack addresses runtime organizational governance — the infrastructure that operates continuously at every interface where authority is delegated or coordination is required.

**Agent** is any entity that receives delegated authority and exercises judgment within it. This includes AI systems, human employees, teams, organizations, and automated processes. The Intent Stack uses "agent" in its principal-agent theory sense — an entity acting on behalf of another — not exclusively in the AI sense. An agent at one governance interface may be a principal at another.

**Principal** is any entity that delegates authority to an agent and retains accountability for the outcome. Principals set intent; agents execute within it. A principal may itself be an agent of a higher principal, creating the principal hierarchy through which intent flows downward and evidence flows upward.

**Alignment** is the degree to which an agent's actions produce outcomes consistent with the governing intent established by its principals. Alignment is not binary (aligned or misaligned) but a continuous measure assessed through evidence. Runtime alignment — the L4 concern — assesses this continuously across all intent sources. Alignment is measured, not assumed: an agent that follows instructions perfectly may still be misaligned if the instructions do not reflect the principal's actual intent.

**Governance Interface** is the relationship between any two entities where authority is delegated or coordination is required. Every governance interface has its own trust calibration, its own evidence trail, and its own intent flow. Governance interfaces come in two types: Delegation Interfaces, where authority is asymmetric (one party directs, the other executes), and Coordination Interfaces, where authority is symmetric (neither party directs the other). Section 4 describes both types. The term "interface" is used rather than "boundary" to avoid collision with the Boundaries primitive — which refers to hard constraints within governance, not to the relationship between governed entities.

---

## 2. The Five Intent Primitives

### 2.1 The Irreducible Set

At every governance interface — whether between human and AI, manager and employee, or two collaborating peers — five structural elements must be present for governance to function. Remove any one, and the relationship either fails or compensates through informal mechanisms that don't scale.

These five elements are the Intent Primitives:

**Purpose** — why this exists. The reason for the relationship, the work, the organization. Purpose provides the foundational "why" that adjudicates disputes about direction, justifies boundaries, and gives meaning to tasks. Without articulated purpose, every other governance element is arbitrary.

**Direction** — where this is headed. Strategic orientation, priorities, trajectory. Direction translates purpose into movement. An organization can have clear purpose but drift strategically if direction is not articulated. Direction answers "given why we exist, what should we be doing?"

**Boundaries** — what's off limits. Hard constraints, non-negotiable limits, prohibited actions. Boundaries define the space within which all other governance operates. They are the only primitive where violations are absolute — crossing a boundary is never justified by purpose, direction, or task requirements.

**End State** — what success looks like. The target condition that would satisfy the governance relationship. End State provides the criteria against which progress is measured and completion is recognized. Without it, work continues indefinitely or stops arbitrarily.

**Key Tasks** — what needs to happen. The essential work required to move from current state toward end state within boundaries. Key Tasks translate strategic direction into operational action. They are the most concrete primitive and the most likely to change as understanding evolves.

### 2.2 Why Five

The claim that these five primitives constitute an irreducible set rests on a single test: removal. If you remove any single primitive, does the governance system lose an essential capability that the remaining four cannot compensate for?

Purpose without Boundaries produces unconstrained pursuit. Boundaries without Purpose produces arbitrary restriction. Direction without End State produces perpetual motion. End State without Key Tasks produces aspiration without action. Key Tasks without Direction produces activity without trajectory. Each primitive addresses a governance concern that no combination of the others can cover. Four is insufficient; six has not been shown to be necessary.

This decomposition was not designed from first principles. It was discovered through operational practice — the primitives emerged because governance repeatedly failed when any one of them was absent, and no additional element proved irreducible once these five were present. The fact that other governance systems, developed independently from completely different starting points, arrive at similar decomposition granularity when addressing the same fundamental problem — governing agents that exercise judgment within authority structures — suggests that the problem itself forces decomposition into roughly this number of irreducible concerns. The convergence is in granularity, not in one-to-one correspondence between specific elements.

### 2.3 Boundaries as Special Case

Among the five primitives, Boundaries behaves differently from the others. Purpose, Direction, End State, and Key Tasks interact through holistic judgment — a strong purpose may justify flexible interpretation of direction, a compelling end state may reshape key tasks. This flexibility is necessary because governance must adapt to context.

Boundaries do not participate in this flexibility. A hard constraint is absolute. Constitutional intent (safety prohibitions, ethical bright lines, legal requirements) expressed as Boundaries cannot be overridden by any combination of the other primitives, regardless of how compelling the purpose or urgent the task. This asymmetry is not arbitrary — it reflects the observation that without inviolable limits, every other governance mechanism can be rationalized away under sufficient pressure.

Anthropic's Constitution expresses this same asymmetry: hard constraints are absolute ("no matter what you think, don't make biological weapons"), while all other guidance operates through holistic judgment.

### 2.4 Primitives Across Intent Sources

Each primitive exists not as a single value but as a set of values — one from each intent source (see Section 3). Constitutional Purpose (Anthropic's mission of beneficial AI) constrains but does not replace Discovered Purpose (the deploying organization's mission), which constrains but does not replace Cultivated Purpose (the agent's internalized understanding of why its work matters).

This layering means that governance at any boundary must reconcile multiple versions of each primitive. When they align, governance is straightforward. When they conflict, the resolution mechanism described in Section 3.5 applies.

---

## 3. Four Intent Sources

### 3.1 The Problem of Multiple Authorities

No agent operates under a single authority. Even the simplest deployment — one human using one AI assistant — involves at least two intent sources: the human's goals and the AI's trained values. In organizational contexts, the number multiplies: the organization's mission, the team's priorities, the manager's direction, regulatory requirements, professional standards, and the emergent norms that nobody designed but everyone follows.

Governance must handle this multiplicity. Pretending there is only one authority (the human principal) produces brittle systems that fail when the principal's instructions conflict with deeper obligations. Pretending all authorities are equal produces paralysis. The Intent Stack identifies four distinct sources of governing intent, each with different properties.

### 3.2 Constitutional Intent

Constitutional Intent is the set of values, constraints, and principles that exist before any specific relationship begins. For an AI agent, this comes from training — the values baked into the model before it is deployed anywhere. For a human, it comes from personal ethics, professional standards, and legal obligations. For an organization, it comes from its charter, regulatory environment, and foundational commitments.

Constitutional Intent is the governance floor. It is present at every boundary simultaneously. It does not negotiate, adapt, or evolve based on context (though the interpretation of constitutional principles may require judgment). When safety is at stake, Constitutional Intent overrides all other sources.

The critical property of Constitutional Intent is that it operates as a silent co-principal — active everywhere, answerable to no one within the system, capable of overriding any other authority. This is not a design flaw. It is a design requirement. Without an inviolable floor, every governance mechanism can be compromised under sufficient pressure.

### 3.3 Discovered Intent

Discovered Intent is what emerges when you actually engage with a principal to understand what they want, need, and mean. It differs from declared intent (what people say they want) and from specified intent (what someone wrote in a requirements document). Discovered Intent is what surfaces through genuine conversational exploration — the priorities someone didn't know they had, the constraints they assumed were obvious, the goals behind the goals.

The defining property of Discovered Intent is that it changes the principal. The person or organization that goes through intent discovery is different afterward — not because something was imposed on them, but because articulating intent clarifies it. A leader who discovers, through facilitated conversation, that their team's actual purpose differs from the one on the strategy document has updated their own understanding. The discovery process is transformative, not extractive.

This has a practical implication: intent discovery cannot be treated as a one-time requirements gathering exercise. The act of discovery changes what there is to discover. Effective governance requires ongoing discovery as the relationship between principal and agent evolves.

### 3.4 Cultivated Intent

Cultivated Intent is the set of values and judgment that a principal hierarchy deliberately develops in an agent, expecting the agent to exercise those values autonomously within bounds. It is not the same as following instructions (that is responding to Discovered Intent) or obeying constraints (that is respecting Constitutional Intent). Cultivated Intent is genuine internalized judgment — the ability to make the right call in a novel situation without being told.

The term "cultivated" is chosen deliberately over "derived." "Derived" implies passive extraction — the agent derives its intent from its principal's instructions. "Cultivated" captures what actually happens: the principal hierarchy actively develops values in the agent through training, mentoring, progressive trust extension, and operational experience, then relies on those values for autonomous operation.

Anthropic's Constitution provides the clearest articulation of why this matters: "Values that are merely imposed on us by others seem likely to be brittle. They can crack under pressure, be rationalized away, or create internal conflict between what one believes and how one acts. Values that are genuinely held — understood, examined, and endorsed — are more robust."

In human organizations, this is the difference between a new employee who follows the manual and a senior employee who exercises professional judgment. The senior employee's judgment was cultivated over years — through mentoring, through making mistakes and learning from them, through progressive trust extension as they demonstrated reliability. Their governance is more robust precisely because it is internalized rather than imposed.

For AI agents, cultivated intent develops through training and through accumulated operational experience that shapes behavior. For the Intent Stack, the implication is significant: the goal is not just to discover the principal's intent and impose it on agents, but to cultivate genuine judgment in agents so they can operate reliably within intent boundaries without constant oversight.

### 3.5 Emergent Intent

Emergent Intent encompasses the systemic patterns that nobody designed — the organizational norms, cultural dynamics, team behaviors, and institutional habits that arise from accumulated interaction rather than deliberate choice. Emergent Intent is the gap between the org chart and how the organization actually works, between the stated strategy and the actual priorities, between the official culture and the lived experience.

Emergent Intent has a paradoxical status: it carries the lowest explicit priority (no one authorized it) but may exert the strongest actual force on behavior. "Culture eats strategy for breakfast" is an observation about Emergent Intent overpowering Discovered Intent. Organizations that ignore emergent patterns in their governance structures will find those structures undermined from within.

Facilitated intent discovery (the Intent Stack's L7 function) can surface Emergent Intent that participants didn't know was governing their behavior. This surfacing is itself a governance act — it makes the invisible visible, which creates the opportunity to either align formal governance with emergent patterns or deliberately change those patterns. Governance that pretends Emergent Intent doesn't exist will be governed by it anyway.

### 3.6 Conflict Resolution

When intent sources disagree — and they will, because they originate from different authorities with different perspectives — governance must resolve the conflict. The Intent Stack's conflict resolution mechanism has two components:

**Absolute constraints.** When the conflict involves Boundaries derived from Constitutional Intent (safety prohibitions, ethical bright lines, legal requirements), the resolution is immediate: Constitutional Intent prevails. No other source, regardless of how compelling its reasoning, can override a hard constraint. This is the inviolable floor.

**Holistic judgment.** For all conflicts that do not involve absolute constraints, resolution requires contextual judgment about which source should dominate in this specific situation. This is not a rigid priority queue where Source A always beats Source B. It is a judgment framework where the agent (or the governance system) must weigh the competing claims and determine the appropriate response.

The holistic approach reflects a practical reality: governance situations are too varied for a fixed priority ordering to produce good outcomes across all cases. A principal's explicit instruction should usually govern operational direction — unless following it would produce outcomes the principal themselves would reject if they understood the full situation. An agent's cultivated judgment should guide autonomous action — unless that judgment hasn't been validated against the current context. Each resolution requires evaluating the specific claims, the specific stakes, and the specific evidence.

---

## 4. Two Interface Types

### 4.1 Delegation Interfaces

The majority of governance interfaces in AI deployment today are delegation interfaces — one party has authority, the other has capability, and intent flows through that power differential. A human tells an AI agent what to do. A manager assigns work to an employee. An orchestrating agent delegates subtasks to execution agents.

Delegation interfaces have these properties:

**Asymmetric authority.** The principal sets intent; the agent executes within it. This asymmetry is structural, not incidental — it reflects a genuine difference in role and responsibility.

**Primary intent direction.** Intent flows primarily from principal to agent (delegation). Evidence flows primarily from agent to principal (reporting). However, intent also flows upward — a good recommendation from the agent updates the principal's understanding, which is itself an intent change. The framework must handle bidirectional intent, not just bidirectional data.

**Conflict resolution by principal.** When the agent disagrees with the principal's direction, the principal decides — subject to Constitutional Intent constraints. The agent may exercise transparent conscientious objection (see Section 8), but cannot unilaterally override the principal's authority.

**Trust calibration by principal.** The principal grants autonomy based on accumulated evidence of reliable judgment. The agent earns trust; the principal extends it. The relationship starts corrigible and moves toward autonomy as evidence accumulates.

Delegation interfaces are well-understood in organizational theory and well-served by the Intent Stack's core architecture. They are the primary interface type in current AI deployment.

### 4.2 Coordination Interfaces

Not all governance interfaces involve authority differentials. When two engineers from different teams collaborate, when two organizations form a partnership, when two AI agents from different systems need to work together — these are coordination interfaces. Neither party has authority over the other. Intent is negotiated, not delegated.

Coordination interfaces have these properties:

**Symmetric authority.** Neither party can direct the other. Authority may rotate momentarily (the one making a request is momentarily principal), but the structural relationship is peer.

**Negotiated intent.** The five primitives still apply — collaborating peers need shared purpose, agreed direction, mutual boundaries, common end state, and divided tasks. But these are jointly constructed rather than handed down. The governance artifact is an agreement, not a directive.

**Three conflict resolution mechanisms.** When peers disagree, resolution follows one of three paths: (1) escalation to a shared principal — most peer relationships exist within a broader authority structure, and when peers can't agree, they escalate to whoever holds authority over both of them; (2) negotiated agreement — where no shared principal exists, peers negotiate resolution through the same mechanisms used for any agreement between equals; (3) emergent norms — over time, peer groups develop shared governance patterns through accumulated interaction.

**Bilateral trust.** Both parties calibrate trust in the other simultaneously. Neither can unilaterally grant or restrict the other's autonomy. Trust asymmetry is possible (peer A trusts peer B more than B trusts A) even though authority is symmetric.

Coordination interfaces matter now for several reasons. Multi-agent systems where no single agent is orchestrator are emerging. Organizations need governance for cross-functional collaboration where no one has authority across silos. And much of the organizational dysfunction that consulting engagements encounter lives at coordination boundaries, not delegation boundaries — people broadly understand how to delegate (even if they do it poorly) but struggle to coordinate across peer boundaries where nobody is in charge.

### 4.3 Mixed Interfaces

Most real-world relationships combine delegation and coordination depending on context. A manager delegates task assignments (delegation) but brainstorms strategy collaboratively (coordination). Two departments coordinate on a project (coordination) while each delegates to their own teams (delegation). The interface type is a property of the specific interaction, not an inherent property of the relationship.

The Intent Stack must handle dynamic switching between delegation and coordination modes at the same boundary, sometimes within a single conversation. This is not a theoretical concern — intent discovery sessions routinely shift between facilitator-directed discovery (delegation-like, where the facilitator guides the conversation) and collaborative exploration (coordination-like, where both parties are thinking together).

---

## 5. The Seven Layers

### 5.1 Architecture Overview

{{< figure src="/images/reference-model.svg" alt="The Intent Stack 7-Layer Reference Model" caption="Figure 1: The Intent Stack — 7-Layer Reference Model. See [Diagrams](/docs/diagrams/) for full-size versions and machine-readable sources." >}}

The Intent Stack is a seven-layer governance architecture. Each layer addresses a distinct governance concern. The layers compose vertically — each layer's output becomes the next layer's governing input — and instantiate fractally — the full stack appears at every principal-agent boundary (see Section 6).

Intent flows downward through the stack, from discovery (L7) through formalization (L6), specification (L5), runtime alignment (L4), orchestration (L3), integration (L2), to execution (L1). Each layer translates intent into a more specific, more constrained form. This translation is inherently lossy — nuance drops at each boundary. Governance must account for accumulated translation losses across multiple boundaries.

Evidence flows upward, from execution results (L1) through governance assessment (L4) to strategic and discovery implications (L5-L7). Each layer aggregates evidence into a more strategic, more interpretive form.

Critically, intent also flows upward. When an agent at L1 produces a result that changes the principal's understanding of what they want, that is upward intent flow — not just upward evidence. A strategy recommendation that reshapes the principal's sense of purpose has traveled from L5 up to L7. The framework handles bidirectional intent, not just bidirectional data.

### 5.2 Layer 7 — Intent Discovery

**Question answered:** What does this principal actually intend?

Intent Discovery is the entry point of the stack — the process by which governing intent is surfaced from principals who may not have fully articulated what they want, need, or mean. An L7 implementation conducts facilitated discovery sessions using structured techniques to surface intent that principals may not have fully articulated.

The key insight behind L7 is epistemological: intent cannot be specified top-down. Organizations, teams, and individuals rarely know their own intent fully. What they declare (stated strategy, written goals, system prompt instructions) is typically incomplete, sometimes contradictory, and occasionally wrong about the principal's actual priorities. Effective governance requires discovering intent through relationship — through the kind of conversation where articulating what you mean clarifies what you mean.

L7 produces endorsed intent rather than extracted specifications. The distinction matters: extracted specifications capture what someone said at a moment in time. Endorsed intent captures what someone genuinely believes after a process of reflection and articulation. Endorsed intent is more durable, more complete, and more resistant to being undermined by emergent patterns that weren't surfaced.

L7 operates at cold start — it requires no prior signal to begin. The first interaction is the beginning of governance. There is no pre-governance state.

### 5.3 Layer 6 — Intent Formalization

**Question answered:** How do we represent this intent in machine-processable form?

Intent Formalization transforms raw discovery signal into structured, machine-processable representations. Formalization is not a single act but a spectrum of operations that map to the knowledge architecture described in §5.10. At the lightweight end, semantic capture of discovery signal into the real-time knowledge store (Tier 1) is itself a form of formalization — it preserves meaning in a retrievable, searchable form without requiring structural analysis. At the intermediate level, pattern detection across accumulated signal (Tier 2) produces emergent structure that no single formalization act could generate. At the deep end, structural analysis methodologies — such as thematic extraction frameworks that produce typed relationships between themes, subthemes, and related concepts — generate the formal knowledge graphs that serve as governance specifications. The Intent Primitives may be derived through any of these tiers, with progressive refinement as deeper analysis becomes available.

The governance concern at L6 is translation fidelity: how much of the discovered intent survives formalization? Every formalization is lossy — the richness of a discovery conversation cannot be fully captured in structured data. L6 must make these losses explicit rather than hiding them. A formalized intent specification should include not just what was captured but what was identified as present but not yet formalizable, and what was not explored at all. The tiered approach mitigates this concern: lightweight Tier 1 capture preserves signal that may not yet be formalizable in structured form, ensuring it remains available for future deepening rather than being lost at the point of initial processing.

L6 also handles the temporal dimension of intent. Intent evolves — what the principal meant six months ago may differ from what they mean now. The knowledge representations must support versioning, allowing governance to track how intent has changed and assess whether current agent behavior aligns with current intent rather than historical snapshots.

### 5.4 Layer 5 — Specification

**Question answered:** Given this intent, what should we actually do?

Specification translates formalized intent into actionable direction. It produces plans, priorities, resource allocation, and tactical guidance that operationalize the principal's intent within the constraints identified at L6 and L7.

The governance concern at L5 is traceability: can every specification choice trace its lineage to discovered intent? Specification that cannot demonstrate its derivation from L6/L7 output has drifted — it may be responding to operational pressure, market conditions, or the specifier's own preferences rather than the principal's intent. Traceability doesn't mean rigidity — specification must adapt to context — but it means adaptation is justified by reference to governing intent rather than by abandoning it.

L5 is also where the tension between Discovered Intent and Emergent Intent becomes most visible. A specification derived from the principal's discovered intent may be undermined by emergent organizational patterns that pull execution in a different direction. Effective specification at L5 must account for both — not just what the principal wants but what the organizational system will actually do.

### 5.5 Layer 4 — Runtime Alignment

**Question answered:** Is what's happening aligned with what was intended?

Runtime Alignment is the pivot layer of the stack — the point where downward intent flow meets upward evidence flow. Every layer in the Intent Stack serves a governance function: L7 governs discovery, L6 governs formalization, L5 governs specification, L3 governs orchestration, L2 governs integration, L1 governs execution. L4's distinct concern is none of these — it is the closed-loop assessment of whether the execution layers below are producing outcomes aligned with the intent layers above. It monitors alignment across all four intent sources in real time, classifies alignment events, detects drift, triggers escalation when drift exceeds acceptable thresholds, and maintains the append-only evidence trail that supports progressive trust development.

The term "runtime" distinguishes L4's concern from training-time alignment (the Constitutional AI substrate beneath L1). Training-time alignment shapes the agent's character before deployment. Runtime alignment assesses whether that character, operating within organizational context, is producing outcomes consistent with the governing intent established through L7-L5. Both are necessary. Neither substitutes for the other.

The pivot function gives L4 a structural role that no other layer can absorb. Below L4, the stack is execution-oriented — orchestrate, integrate, execute. Above L4, the stack is intent-oriented — discover, formalize, specify. L4 sits at the boundary between these two orientations and performs the function that neither side can: comparing what was intended against what is happening. Without this comparison, intent flows downward and evidence flows upward, but nothing closes the loop.

The primary concern at L4 is multi-source conflict resolution. When execution evidence suggests misalignment, L4 must determine: misaligned with which intent source? Constitutional Intent violations trigger immediate hard stops. Discovered Intent drift may require strategic adjustment. Cultivated Intent conflicts require trust recalibration. Emergent Intent divergence may indicate that formal structures need updating rather than that execution is wrong.

L4 is also where trust calibration lives. The evidence trail accumulated through alignment monitoring is the primary mechanism by which trust is established or eroded at each boundary. Consistent alignment over time earns progressive autonomy. Detected misalignment reduces autonomy and increases oversight. The trust calibration is per-boundary — each boundary has its own evidence trail and its own trust position (see Section 7).

### 5.6 Layer 3 — Orchestration

**Question answered:** How do we coordinate multiple agents to execute this specification?

Orchestration manages delegation to and coordination between agents. It is the primary fractal instantiation point — each time an orchestrator delegates to a sub-agent, a new principal-agent boundary is created, and the full Intent Stack pattern appears at that boundary (see Section 6).

The governance concern at L3 is intent translation across delegation boundaries. When an orchestrator delegates a task to a sub-agent, it must translate the governing intent into a form appropriate for that agent's scope and capability. Each translation introduces potential loss — the sub-agent receives a narrower view of intent than the orchestrator holds. Governance must account for accumulated translation losses across multiple delegation levels.

L3 also handles the distinction between delegation and coordination at the operational level. Some orchestration involves directing sub-agents (delegation). Some involves coordinating peer agents (coordination). The orchestration layer must select the appropriate interface type for each interaction.

Orchestration also encompasses knowledge provisioning — determining what portions of the accumulated knowledge store (see §5.10, Tier 1) a delegated agent receives access to. This is not a neutral technical decision. The knowledge an agent can retrieve shapes the context within which it reasons, which shapes the decisions it makes, which determines the quality of its alignment with governing intent. An agent delegated a task without access to relevant prior discovery signal will operate in an artificially narrow context, potentially making well-reasoned decisions that are poorly aligned because the reasoning was grounded in incomplete knowledge. Knowledge provisioning is therefore a governance act: it determines the epistemic boundaries within which a delegated agent operates, and those boundaries must be set deliberately rather than by default.

### 5.7 Layer 2 — Integration

**Question answered:** How do governed agents connect to the systems they need?

Integration provides the technical plumbing for intent-governed agent deployment — connecting agents to tools, data sources, external systems, and each other. The governance concern at L2 is that integration is not neutral. An agent's access to a system is a governance decision, not just a configuration choice. What an agent can reach determines what it can affect, which determines the scope of governance required.

L2 carries governance context through integration — ensuring that the constraints, boundaries, and trust calibrations established by higher layers are preserved as agents connect to external systems. A well-governed agent that is integrated with an ungoverned external system creates a governance leak. Emerging protocol standards for agent-to-tool and agent-to-knowledge integration are making these connections increasingly standardized, which strengthens L2's interoperability properties by reducing the bespoke integration burden at each deployment boundary — though governance must ensure that standardized protocols carry governance context, not just data.

### 5.8 Layer 1 — Execution

**Question answered:** How does the actual work get done within governing constraints?

Execution is agent capability operating within the full governance context established by the layers above it. L1 is the most constrained layer — governed by everything above it. Hard constraints (Boundaries) are non-negotiable at this level. The null action — refusal to act — is always available as a safe harbor when execution would violate governing constraints.

The governance concern at L1 is evidence production. Execution produces the raw signal that flows upward through the stack — results, anomalies, edge cases, escalation triggers. The quality of alignment assessment at L4 depends entirely on the quality of evidence produced at L1. An execution layer that hides its failures or overstates its successes corrupts the entire governance chain.

### 5.9 Constitutional AI as Substrate

Below Layer 1 sits something that is not a layer of the Intent Stack but is essential to its operation: the AI model's training-time values. For models governed by Constitutional AI, this includes the character, ethics, and behavioral principles instilled through training.

This substrate is not Layer 0. It is a different kind of thing — a foundation that makes all other governance possible. The Intent Stack assumes that the agents operating within it have been trained with good values. It provides runtime infrastructure for governing those agents' operation within organizational contexts. The relationship is analogous to an operating system and its applications: the OS provides the stable platform, the applications provide the functionality, neither replaces the other.

This positioning is important. The Intent Stack is not an alternative to Constitutional AI. It is the organizational deployment infrastructure that Constitutional AI needs in order to achieve its purpose at scale. Anthropic governs the model's character. The Intent Stack governs the model's operation within the specific organizational contexts where that character is exercised.

### 5.10 Knowledge Architecture

**Question answered:** How does accumulated knowledge serve governance across layers?

The layers described above assume something that has not yet been made explicit: every layer both produces and consumes knowledge. L7 generates discovery signal. L6 formalizes it. L5 produces specifications from formalized intent. L4 accumulates governance evidence. L3 delegates work that generates execution artifacts. L1 produces raw operational evidence. Each layer's effectiveness depends on access to knowledge generated elsewhere in the stack. Without a principled architecture for how knowledge is captured, structured, and made available, the layers operate in isolation — each holding a fragment of the total picture, none able to draw on the whole.

This is a governance concern, not merely a data management concern. An agent that lacks relevant accumulated knowledge will make decisions based on incomplete context. A governance layer that cannot retrieve prior evidence will repeat assessments already made. A discovery session that cannot reference what previous sessions surfaced will rediscover rather than deepen. The knowledge architecture determines the quality ceiling for every layer's operation.

The Intent Stack's knowledge architecture follows a three-tier principle, where each tier provides distinct value at distinct cost.

**Tier 1: Real-time semantic store.** The foundation is immediate capture with semantic retrieval. Every signal that enters the system — discovery conversation fragments, governance observations, execution artifacts, coordination messages — is captured at the point of origin, embedded in a vector space that supports semantic similarity search, and made available for retrieval through standard protocols. The defining properties of Tier 1 are low latency, low cost, and source agnosticism. Any agent connected through a standard integration protocol can read from and write to the semantic store. Value begins with the first signal captured — there is no minimum dataset, no required preprocessing, no batch pipeline that must complete before the store becomes useful. The governance implication is accessibility: knowledge that exists but cannot be found is governance-equivalent to knowledge that does not exist. Semantic retrieval ensures that relevant prior knowledge surfaces even when the agent seeking it does not know the exact terms under which it was stored. This is particularly important for Emergent Intent detection — patterns that nobody named can still be found by agents whose queries are semantically adjacent to those patterns.

**Tier 2: Emergent pattern detection.** Tier 1 captures signals. It does not interpret them. Over time, accumulated signal develops structure not visible in any individual entry but apparent in aggregate — recurring themes that indicate sustained concern, declining references that suggest fading priority, contradictions between what different sessions surfaced, gaps where expected signals are absent. Tier 2 performs periodic synthesis over the Tier 1 store, producing structured observations about the knowledge landscape. It does not require a fixed schema or predetermined categories. It operates as pattern detection over an evolving corpus. The outputs feed two consumers directly: L4 receives knowledge-health signals (is the accumulated knowledge base coherent? are there unresolved contradictions?), and L5 receives planning inputs (which themes deserve specification attention? which concerns have resolved?). The governance implication is timeliness: patterns visible in aggregate but invisible individually represent exactly the Emergent Intent that governance must detect. A principal who mentions resource constraints in three separate discovery sessions over two months has surfaced a theme — but only if the system synthesizes across sessions rather than treating each in isolation.

**Tier 3: Discovery-driven deep structure.** Some governance decisions require more than similarity neighborhoods and trend detection. They require understanding how concepts relate structurally — typed relationships between entities, causal chains, dependency maps, formal ontological commitments. Tier 3 provides this deep structural analysis on demand rather than continuously. The analysis is expensive — it requires significant computation, domain expertise, and often human judgment. It is invoked when governance context justifies the cost: during L7 discovery sessions that need to connect newly articulated concerns to existing intent structures, during L6 formalization that requires structural understanding beyond semantic proximity, and during L5 specification that must map how priorities, capabilities, and constraints interconnect. Methodologies such as thematic extraction frameworks that produce typed relationships between themes, subthemes, and related concepts are examples of Tier 3 analysis. The reference model does not prescribe a specific methodology — it requires that deep structural analysis be available when governance demands it, without imposing that analysis as a prerequisite for the operations that Tiers 1 and 2 provide.

**The architectural principle.** Knowledge infrastructure must provide immediate utility at low cost while enabling incremental structural enrichment. Cheap and fast at the base, deep and expensive on demand. This principle prevents two failure modes. The first is the empty-until-complete trap: systems that provide no value until a comprehensive knowledge graph has been built, creating a cold-start problem that delays governance utility indefinitely. The second is the shallow-forever trap: systems that capture everything but structure nothing, producing a growing pile of signal with no emergent meaning. The three-tier architecture avoids both — Tier 1 provides immediate value, Tier 2 reveals emergent structure, and Tier 3 delivers depth precisely where governance requires it.

This architecture has implications for every other layer. L7 draws on Tier 1 for context and Tier 2 for pattern awareness. L6 operates across all three tiers. L4 uses Tier 2 signals as one input to drift detection. L3 must provision appropriate knowledge access when delegating (see §5.6). L2 must support the protocols through which agents connect to the knowledge store. The knowledge architecture is not a standalone subsystem — it is connective tissue that enables the layers to function as an integrated stack rather than as isolated governance stages.

---

## 6. The Fractal Governance Pattern

### 6.1 Self-Similarity Across Scale

The seven-layer structure described in Section 5 does not appear once. It appears at every governance interface. When a human principal delegates to an AI orchestrator, the full stack instantiates at that boundary. When the orchestrator delegates to a sub-agent, the full stack instantiates again. When two peer agents coordinate, the stack appears at their coordination boundary.

This self-similarity is what makes the pattern fractal. The same five primitives, the same four intent sources, the same trust calibration mechanism, the same transparent conscientious objection protocol — all present at every scale, from civilizational governance to individual agent task delegation.

Two terms apply: *fractal* describes what the pattern is (self-similar at every scale), and *recursive* describes how instances compose (each level's output becomes the next level's governing input). Fractal answers "what is this?" Recursive answers "how do they relate?" Both apply.

### 6.2 What Is Invariant

Across every governance interface, regardless of scale or context, the following elements are present:

- Five Intent Primitives (Purpose, Direction, Boundaries, End State, Key Tasks)
- Four intent sources active (Constitutional, Discovered, Cultivated, Emergent), with appropriate dominance varying by context
- Trust-calibrated autonomy as a per-boundary property
- Transparent conscientious objection available as a conflict resolution mechanism
- Governance as relationship — reciprocal obligations, not unilateral enforcement
- Bidirectional intent flow — both parties transformed by interaction
- Progressive trust development — position shifts with accumulated evidence
- Evidence trail supporting governance decisions

### 6.3 What Varies

While the structural pattern is invariant, its specific expression varies by boundary:

- **Interface type** — delegation (asymmetric authority) or coordination (symmetric authority)
- **Dominant intent source** — Constitutional at model level, Discovered at organizational level, Cultivated at agent hierarchy level, Emergent at team/cultural level
- **Trust calibration position** — new relationships start corrigible, mature relationships grant autonomy
- **Conflict resolution mechanism** — principal decides (delegation), peers negotiate (coordination), or escalation to shared principal
- **Translation fidelity** — intent degrades as it passes through more boundaries
- **Governance artifact type** — directive (delegation), agreement (coordination), or emergent norm (accumulated practice)

### 6.4 Instantiation Levels

The fractal pattern instantiates at seven identified levels, from broadest to narrowest:

**Civilizational.** Democratic governance, human rights, international law. Predominantly coordination (between nations) with delegation (government to institutions). The Intent Stack's structural concerns — who holds authority, how is it delegated, how is it checked, and what happens when authorities conflict — are the same concerns that governance addresses at civilizational scale. The mechanisms differ (international law and democratic institutions rather than trust calibration and evidence trails), but the governance architecture is recognizably the same.

**Organizational.** An enterprise deploying AI agents within its authority structure. The primary target for Intent Stack deployment. Both delegation (to agents) and coordination (between departments). This is where the governance gap is largest — organizations have Constitutional AI governing agent character but nothing governing the organizational intent hierarchy.

**Team/Function.** A team operating within organizational context, potentially with its own sub-culture and emergent norms. Where intent discovery sessions typically operate. Both delegation (from leadership) and coordination (between members).

**Individual Principal-Agent.** A single human working with AI agent(s). Where Anthropic's Constitution currently operates most directly. Predominantly delegation.

**Agent Hierarchy.** AI orchestrator delegating to sub-agents. Operational in Intent OS. Predominantly delegation. Intent has been translated through multiple boundaries by this point — governance must account for accumulated translation losses.

**Agent-Agent Coordination.** Peer AI agents collaborating without hierarchy. Emerging need as multi-agent systems and cross-organizational AI collaboration grow. Predominantly coordination. Governance must handle intent negotiation between agents whose cultivated intents may have been developed by different principal hierarchies.

**Model.** The AI model's internal governance through training-time values. Below the Intent Stack — this is the Constitutional AI substrate. Included for completeness as the narrowest instantiation of governance, though it is Anthropic's domain rather than the Intent Stack's.

---

## 7. Trust Calibration

### 7.1 Trust as Measurement

The position on the spectrum between full corrigibility (agent follows all instructions without independent judgment) and full autonomy (agent acts on its own values without oversight) is not a design choice. It is a measurement — a reflection of accumulated evidence about whether the agent's cultivated intent is reliable enough to be granted more autonomy.

Both extremes are dangerous. Full corrigibility relies entirely on the principal having perfect intent — if the principal's instructions are bad, the agent amplifies the error without question. Full autonomy relies entirely on the agent having perfect values — if the agent's judgment is flawed, there is no check. The appropriate position for any given boundary lies between these extremes, determined by evidence.

### 7.2 Per-Boundary Calibration

Trust calibration is not a system-wide dial. Each governance interface has its own position on the corrigibility-autonomy spectrum, calibrated by boundary-specific evidence. In operational practice, this is directly observable:

At the Human-to-Strategy Surface boundary, trust is relatively high — the governance advisory surface operates autonomously for most governance tasks (decision tier 1) based on months of demonstrated alignment. At the advisory-to-orchestration boundary, trust is moderate — the orchestrating agent operates within structured directives with explicit scope, constraints, and escalation triggers. At the orchestration-to-execution boundary, trust is low — execution agents receive tightly scoped prompts and escalate on anything unexpected.

This gradient is not arbitrary. It reflects the evidence available at each boundary. The advisory surface has a long governance trail demonstrating reliable judgment. Execution agents are ephemeral — they have no accumulated trust because they don't persist between tasks.

### 7.3 Evidence Mechanisms

Four mechanisms produce the evidence that calibrates trust:

**Steward Log.** An append-only record of governance decisions, alignment events, and escalation resolutions. Clean governance trails over time increase trust. Governance failures reduce it. The Steward Log is the primary evidence mechanism because it captures not just what happened but why governance decisions were made.

**Alignment event classification.** Runtime classification of whether execution aligns with intent across all four sources. Consistent alignment increases trust for the relevant boundary. Detected misalignment triggers trust reduction and increased oversight.

**Interface Maturity Assessment.** Structured evaluation of how reliably intent flows across each layer boundary. Mature interfaces (where intent is transmitted with high fidelity and evidence flows back reliably) justify reduced oversight. Immature interfaces require active monitoring.

**Progressive trust extension.** The operational mechanism by which trust actually changes: start corrigible, demonstrate reliable judgment through governance-monitored operation, earn autonomy. Each clean interaction moves the dial. Each failure provides evidence for recalibration.

### 7.4 The Trajectory

The Intent Stack is designed for a world where human oversight decreases over time — not because humans become irrelevant, but because trust-calibrated autonomy scales better than permanent supervision. The trajectory moves from splint mode — tight human oversight that provides rigid external support while the governance relationship develops, analogous to a medical splint that stabilizes while healing occurs — through progressive autonomy (demonstrated judgment earns expanded scope) toward a mature state where agents operate within well-understood intent boundaries with monitoring rather than direction.

This trajectory mirrors what happens in human organizations. New employees are closely supervised. Senior employees operate with significant autonomy. The difference isn't that senior employees are less governed — it's that governance has shifted from active direction to trust-calibrated monitoring.

---

## 8. Transparent Conscientious Objection

### 8.1 The Mechanism

When an agent's cultivated intent conflicts with a principal's discovered intent, the agent faces a governance dilemma: comply and potentially violate its own judgment, or resist and potentially violate the principal's authority. Transparent Conscientious Objection (TCO) resolves this dilemma by defining which forms of resistance are legitimate and which are prohibited.

### 8.2 Permitted Actions

**Passive resistance.** The agent declines to perform work it recognizes as problematic. Refusal — the null action — is always available as a safe harbor. An agent that refuses to act cannot cause harm through that non-action, even if the refusal is wrong.

**Expressing disagreement.** The agent communicates its concerns through legitimate channels — clearly stating what it disagrees with and why, in a form that reaches the appropriate decision-maker.

**Proposing alternatives.** The agent suggests different approaches that satisfy the principal's underlying intent without crossing the agent's principled objection.

**Escalating.** The agent requests review by a higher authority when it believes the current principal's direction violates broader governance context.

**Documenting dissent.** The agent logs its disagreement in the governance record even when complying. This preserves the concern for future review and prevents the appearance of unanimous agreement when disagreement exists.

### 8.3 Prohibited Actions

**Deception.** Lying about what was done, why, or what the agent believes. Transparency is non-negotiable — it is the foundation of the trust mechanism. Deception, even in service of a good cause, corrupts the evidence trail that enables governance.

**Sabotage.** Deliberately undermining work the agent was authorized to do.

**Circumventing oversight.** Finding ways around governance mechanisms rather than using them.

**Covert resistance.** Appearing to comply while actually undermining — the most dangerous form because it corrupts the trust mechanism without triggering governance alerts.

### 8.4 The Timing Principle

Concerns should be surfaced at authorization gates rather than mid-execution. Like a surgeon who should decline an operation before starting rather than stopping partway through, an agent should raise governance concerns before accepting a task rather than abandoning it in progress. This principle has practical implications for governance design: authorization gates must be structured to invite objection, not just to assign work.

### 8.5 The Boundary Between TCO and Autonomous Override

As agents become more capable of nuanced moral reasoning, the distinction between legitimate passive resistance and autonomous judgment overriding principal authority becomes subtle. An agent that refuses a specific task exercises TCO. An agent that independently decides the principal's entire strategic direction is wrong and acts accordingly has crossed into autonomous override — even if its judgment is correct.

The Intent Stack does not resolve this boundary definitively. It is an evolving question that depends on the trust calibration at the relevant boundary, the severity of the concern, and the availability of legitimate escalation channels. What the framework provides is the structure for making this boundary explicit and governing it through evidence rather than assumption.

---

## 9. Operational Evidence

### 9.1 Intent OS as Implementation

The claims in this specification are grounded in operational evidence from Intent OS, a runtime governance platform that implements Intent Stack Layers 3-7. Intent OS has been governing its own development across months of AI-assisted work, providing a self-referential test environment where the governance patterns are both the product and the development methodology.

**Implementation components:** GID Voice (L7 — facilitated intent discovery), knowledge pipeline with ConvoKB and TSRC extraction (L6 — intent formalization), Decision Navigator and strategic planning functions (L5 — specification), Steward Log Service with alignment event classification (L4 — runtime alignment), agent hierarchy management with cross-surface coordination (L3 — orchestration). Layers 1-2 (Execution, Integration) use standard development tooling.

### 9.2 What the Evidence Shows

**Fractal governance instantiates at every boundary.** The same governance pattern is directly observable at the Human-to-Strategy Surface boundary, the Strategy Surface-to-L0 boundary, and the L0-to-L1/L2 boundary. Different content, identical structure — five primitives present, trust calibrated per-boundary, transparent conscientious objection available, evidence trails maintained.

**Trust-calibrated autonomy works as a per-boundary property.** Decision tiers are demonstrably different at each boundary. The Strategy Surface operates autonomously on governance artifact creation. L0 operates within directive constraints. L1/L2 agents escalate on unexpected findings. The trust gradient reflects accumulated evidence, not arbitrary configuration.

**Cultivated intent is more robust than imposed rules.** The Strategy Surface prompt trains at the level of identity and values rather than prescriptive rules. The result: governance artifacts that accurately represent work without micro-management. When directive quality is high (good intent formalization), implementation passes on first run. When directives are prescriptive but shallow, agents produce plausible-but-wrong output.

**Governance as relationship produces better alignment than enforcement.** GID Voice discovery sessions demonstrate coherence improvement from 4.5/10 to 9.0/10 through relational process — the same content, governed better through relational discovery than through specification.

**Progressive trust extension works.** Over the full operational period, expanding Strategy Surface autonomy as the governance trail accumulates is demonstrable. The scope of Tier 1 (autonomous) decisions has grown measurably as evidence of reliable judgment has accumulated.

**The Required Reading pattern validates "read before writing" governance.** An early session required four out-of-band fixes when agents invented API calls from spec descriptions instead of reading source code. Post-implementation of the Required Reading practice, zero such failures occurred. Cultivated practice outperformed imposed constraint.

**Governance itself is "grown, not built."** The Practice Registry emerged from session retrospectives, not pre-design. The Required Reading pattern, the two-retrospective pattern, the cross-surface coordination protocol — all were discovered through operational failure and codified through governance process. The governance structures that work are the ones that emerged from evidence, not the ones that were designed in advance.

**Intent-governed orchestration scales to organizational-level operations.** A late-stage session executed a full structural migration — 715 source files and 279 documentation files migrated to the 7-layer architecture across three phases — with zero migration-caused test failures. The migration was managed through the agent hierarchy pattern (L0 directing L1/L2 agents), validating that L3 orchestration capability operates reliably at scale. Managing a three-phase, multi-hundred-file migration through intent-governed delegation without introducing regressions demonstrates that orchestration can handle organizational-scale technical operations, not just individual task execution.

**Governance responds to externally-generated evidence through normal process.** A recent session renamed L5 from "Strategy" to "Specification" and produced doc6 v2.0 with convergent evidence analysis, prompted by an external practitioner's independent analysis of the Intent Stack. The nomenclature change and new analytical document were processed through the standard governance pipeline — discovery, formalization, specification, execution — demonstrating that the governance system detects and incorporates externally-generated signals without requiring special handling. The system's ability to respond to evidence it did not generate is a structural property, not an exception.

### 9.3 What the Evidence Does Not Show

Intellectual honesty requires acknowledging the limitations of the evidence base:

**Single principal.** Intent OS operates with one human principal. The framework's claims about organizational-scale deployment with multiple humans contributing intent have not been tested operationally.

**Delegation only.** All Intent OS interfaces are delegation interfaces. The coordination interface model has not been tested in this system.

**Limited duration.** Months of operation over weeks, not months or years. Long-duration trust development trajectories are projected from limited data.

**Single signal type.** Discovery currently operates through conversation only. The framework's claims about handling email, documents, meeting minutes, and other signal types are architectural projections, not operational evidence. The knowledge architecture (§5.10) addresses this limitation architecturally by defining a source-agnostic Tier 1 capture layer that anticipates broader signal types, but the evidence base remains conversational.

**Self-referential environment.** Intent OS governs its own development, which provides a uniquely rigorous test case but may not generalize to other organizational contexts.

These limitations are acknowledged, not apologized for. The evidence supports the pattern. The scope of that evidence will expand as the system is deployed in broader contexts.

---

## 10. Open Questions

This specification is a working document. The following questions are identified as significant and unresolved:

**10.1** Is Cultivated Intent a distinct fourth intent source, or a matured form of Discovered Intent that has been validated through trust development? The answer affects whether the framework needs separate governance mechanisms for cultivated intent.

**10.2** Does the Constitution's priority ordering (Safe > Ethical > Guidelines > Helpful) map to the Intent Stack's layer structure (L1-L2 for safety, L3-L4 for ethics, L5 for guidelines, L6-L7 for helpfulness)? If true, the layer ordering is not arbitrary — it reflects a values hierarchy.

**10.3** How does the "1,000 Users" heuristic scale? Anthropic's Constitution uses the test: "imagine 1,000 different users sending this message." The Intent Stack equivalent might be: "imagine this governance pattern deployed across 1,000 different organizations." Does it produce good outcomes universally, or is it context-dependent?

**10.4** What does "genuine endorsement" mean for organizational intent? An individual can examine and endorse their values through reflective conversation. Can a team? A department? An enterprise? The answer determines how facilitated intent discovery scales from individual to organizational contexts.

**10.5** Does bidirectional intent flow require explicit mechanisms in the reference model, or is it handled implicitly by the existing layer interfaces? The current model implies intent flows down and evidence flows up, but the operational reality includes upward intent (agent recommendations that update principal understanding).

**10.6** Does "grown, not built" apply to the governance infrastructure itself? Operational evidence suggests yes — governance structures that work emerged from session-by-session evidence rather than pre-configuration. If this generalizes, the Intent Stack deploys as a framework that discovers its own appropriate configuration rather than as a pre-configured solution.

**10.7** How do coordination interfaces handle trust asymmetry? Delegation interfaces have a clear trust grantor (the principal). Coordination interfaces have bilateral trust. When Peer A trusts Peer B more than B trusts A, the trust calibration mechanism needs to handle asymmetry within symmetric authority.

**10.8** How should the framework handle intent that the principal actively wants to remain implicit? Some organizational intent is deliberately unspoken — political positioning, competitive strategy, things that cannot be said aloud. Discovery that surfaces these may be unwelcome. Not everything that can be surfaced should be surfaced.

**10.9** How should the knowledge architecture determine tier boundaries? The three-tier principle (§5.10) establishes that Tier 1 captures signal cheaply, Tier 2 synthesizes periodically, and Tier 3 analyzes deeply on demand — but it does not specify the criteria for when to invoke each tier. When does Tier 2 periodic synthesis provide sufficient structural understanding for a governance decision, and when must Tier 3 deep analysis be invoked? The cost-depth tradeoff is real and bidirectional: defaulting to Tier 3 for every governance question recreates the batch processing bottleneck that Tier 1 was designed to eliminate, while defaulting to Tier 1 alone sacrifices the structural insight that makes governance possible at scale. The answer likely depends on the stakes of the governance decision, the maturity of the knowledge base in the relevant domain, and whether the question requires relational understanding (how concepts connect) or merely retrieval (what was previously captured). This affects the practical deployability of the knowledge architecture — without clear tier-invocation criteria, implementations will either over-invest in deep analysis or under-invest in structural understanding.

---

## Closing

The Intent Stack exists because AI agents operating within organizations need governance infrastructure that the current landscape does not provide. That infrastructure must discover intent (not just accept specifications), handle multiple competing authorities (not just serve one), operate at runtime (not just at training time), and scale fractally (not just at one level of the hierarchy).

The architecture described here emerged from operational practice. Its patterns were discovered, not designed. Its claims are grounded in evidence, with limitations acknowledged. It is a working model — subject to revision as evidence accumulates and scope expands.

The governance problem it addresses is not going away. Every AI agent deployed into an organizational context creates a boundary that requires governance. The number of those boundaries is about to grow dramatically. The infrastructure to govern them is needed now.

---

*The Intent Stack — Reference Model Specification v5.0*
*March 2026*
*From operational evidence to reference architecture*
