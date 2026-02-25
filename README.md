# 🚀 Smart Auto-Script Engine (SASE) — v1.0

> **Transform Manual Test Cases into Self-Healing Automation Scripts.**

---

## 🎯 Project Vision
SASE is an AI-driven automation framework designed to bridge the gap between test design and execution. It takes structured test cases (from the Smart Test Case Generator) and converts them into high-quality, executable Playwright scripts using the **Page Object Model (POM)** pattern.

## ✨ Core Capabilities

| Feature | Description | Status |
|---------|-------------|--------|
| **Script Generation** | Automatically maps natural language steps to Playwright actions. | ✅ Stable |
| **The Doctor (Self-Healing)** | Heals broken locators by re-scanning the DOM when tests fail. | 🧪 Experimental |
| **Triple-Check System** | Verifies UI + API + Database to prevent false positives. | ✅ Stable |
| **Rich Evidence** | Step-by-step screenshots, videos, and network traces. | ✅ Stable |
| **Data Isolation** | Built-in data seeding to ensure clean test environments. | ✅ Stable |

## 📁 Repository Structure
```
├── tests/               — Executable test scripts (*.spec.js)
├── pages/               — Page Object Model definitions (Locators & Actions)
├── data/                — Parameterized test data (JSON/Env)
├── utils/               — Helper functions (DB connectors, API clients)
├── SASE_Spec.md         — Detailed technical specification
└── playwright.config.js — Global automation configuration
```

## 🛡️ Risk Mitigation (Best-to-Worst Case)
This project is built with a "Nightmare Path" mindset. 
- **Anti-Flakiness:** Uses Playwright's auto-waiting and smart retries.
- **Failover:** Supports multi-LLM providers (Claude/Gemini) if one API goes down.
- **Manual Override:** All AI-generated code is human-readable and manually editable.

## 🚀 Quick Start
1. `npm install`
2. `npx playwright test`
3. `npx playwright show-report`

---
Developed by **Sella** 🦞 — *The next evolution of Agentic Testing.*
