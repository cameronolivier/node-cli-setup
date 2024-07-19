# Lightweight (Markdown) Architecture Decision Record

This is based on the [ADR](https://adr.github.io/) system. Please see [this](https://github.com/joelparkerhenderson/architecture-decision-record) documentation for a good explanation on what ADR is and how to use it.

## Rationale:

It's recommended on the [ThoughtWorks Radar](https://www.thoughtworks.com/en-us/radar/techniques/lightweight-architecture-decision-records).

And Github has an entire website dedicated to it: [Architecture Decision Records](https://adr.github.io/)

Specifically, they recommend the 'Lightweight Architecture Decision Records' approach, which is a simplified version of the ADR system.

The **Lightweight Architectural Decision Record (LADR)** is a method of documenting important architectural decisions made during the development of software. It provides a way to capture the reasoning behind decisions, who was involved in the decision-making process, and what the outcomes were. This information can be useful for future reference and for ensuring consistency across the architecture of the software.

The LADR typically includes the following information:

- **Context**: A description of the problem or issue that the decision is addressing.

- **Decision**: A statement of the decision that was made, including the options considered and the reasoning behind the choice.

- **Consequences**: A description of the potential impact of the decision, both positive and negative.

- **Status**: A record of the current status of the decision, including any follow-up actions that are required.

- **Date**: The date the decision was made.

The use of LADR helps to ensure that important architectural decisions are recorded and can be easily referenced in the future. It also helps to promote consistency and transparency in the decision-making process, and can improve communication between members of the development team.

We'll be using the Markdown-flavour of LADR which simple means we'll document in markdown files.

## Some guidelines:

Characteristics of a good LADR:

- **Rationale**: Explain the reasons for doing the particular AD. This can include the context (see below), pros and cons of various potential choices, feature comparisons, cost/benefit discussions, and more.

- **Specific**: Each ADR should be about one AD, not multiple ADs.

- **Timestamps**: Identify when each item in the ADR is written. This is especially important for aspects that may change over time, such as costs, schedules, scaling, and the like.

- **Immutable**: Don't alter existing information in an ADR. Instead, amend the ADR by adding new information, or supersede the ADR by creating a new ADR.
