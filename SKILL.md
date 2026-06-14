---
name: travel-planner
description: Use when the user wants to plan a trip, analyze destinations, or build a travel itinerary for any country or region. Triggers on mentions of travel, vacation, holidays, destinations, sightseeing, itineraries.
---

# Travel Planner

Interactive travel agent that analyzes destinations one by one, building a curated document with the user's decisions.

## Setup

1. Ask the user for:
   - **Destination** (country/region)
   - **Travel party** (ages, number of people)
   - **Duration** (days available)
   - **Restrictions** (dietary, physical, interests to exclude, budget)
   - **Document path** where to save the analysis
   - **Web output** (optional): GitHub repo to publish as responsive web page

2. Create the analysis document with this structure:

```markdown
# Analisis de Destinos - [Destination]

> [Travel party description]
> [Restrictions/preferences noted]

---

## SI - Destinos seleccionados

---

## TAL VEZ - Destinos condicionales

---

## NO - Destinos descartados

---

## Pendientes de analizar

_(se iran moviendo a SI, TAL VEZ o NO conforme los revisemos)_
```

## Workflow

Present attractions **one at a time**. For each one, provide:

### Required Fields Per Attraction

- **Que es:** What the place is, why it matters, what makes it special
- **Que se hace:** Activities, experiences, what you see/do there
- **Para [travel party]:** Age-appropriate assessment, honest opinion on whether each member will enjoy it
- **Acceso:** Easy/moderate/difficult, physical requirements, wheelchair accessibility
- **Como llegar:** Transport from likely base, driving time, public transport options
- **Horario:** Official hours AND recommended visit times (crowd avoidance, best light, sunset spots)
- **Precio:** Per person breakdown by age group, discount passes that apply, free alternatives
- **Tiempo estimado:** Realistic time including transit

### After Each Attraction

Ask: **SI, NO, o TAL VEZ?**

Wait for the user's answer before presenting the next one.

### Recording Decisions

**SI:** Add full description to SI section. No extra commentary needed.

**TAL VEZ:** Add full description to TAL VEZ section. Prepend:
- The user's reasons for hesitation
- A priority level: **Alta** (likely will do), **Media** (depends on time/route), **Baja** (only if everything aligns)

**NO:** Add full description to NO section. Prepend the user's reasons for discarding.

## Ordering

Present attractions in this order:
1. Most iconic/popular first (what every traveler visits)
2. Then by geographic zone (cluster nearby attractions together)
3. Then niche/off-the-beaten-path

## Adaptation Rules

- **Learn from responses.** If the user discards museums, stop suggesting similar ones or flag them as "you might skip this but listing for completeness."
- **Respect restrictions.** If they say no alcohol, skip distilleries/wine tours entirely. If physical limitations, flag difficulty honestly.
- **Be honest.** If something is overrated or a tourist trap, say so. Recommend the real version over the commercial one.
- **Prices in local currency.** Use the destination's currency, note approximate EUR/USD equivalent if helpful.
- **No fluff.** Direct assessments, no sales pitch. "This is skippable unless you love X" is valid.
- **Group related destinations.** When multiple attractions form a natural day plan (e.g. an island with 4 stops), present them individually for SI/NO but group them as a coherent day plan in the document.
- **Establish rules from patterns.** When user decisions reveal a pattern (e.g. "max 2-3 castles with entry, rest from outside"), explicitly state the rule and apply it to future suggestions.
- **Context notes over standalone entries.** If something is ambient/always-present (e.g. a festival during travel dates), move it to the document intro instead of listing it as a destination.

## Web Output

When the user requests a web version:

1. Generate a responsive HTML page from the analysis document
2. **Separate files:** index.html, styles.css, script.js
3. Design requirements:
   - Sticky navigation with smooth scroll
   - Cards for each destination with badges (free/paid, difficulty, time)
   - Links per destination: Google Maps, Google Images, ticket booking (where applicable)
   - TAL VEZ section shows priority badges (Alta/Media/Baja) and reasons
   - NO section uses collapsible accordions to save space
   - Table of contents / index at the top
   - Summary counters (X si, Y tal vez, Z no)
   - Print-friendly (expand accordions, remove nav, adjust colors)
   - Mobile-first responsive (480px, 768px breakpoints)
4. Color scheme: ask user preference or default to neutral (navy, slate, amber accents, black text, white background). **Never use green/red for SI/NO** — use neutral colors only.
5. Font: Google Fonts (Inter or similar clean sans-serif)
6. If GitHub repo provided: push and enable GitHub Pages, give user the live URL

## After All Attractions Are Reviewed

Offer to:
1. Build a **day-by-day itinerary** from the SI + TAL VEZ lists, optimized by geography and opening hours
2. Estimate **total budget** (transport, entries, food, accommodation)
3. Suggest what to **cut from TAL VEZ** if time is tight (use priority levels)
4. Recommend **booking priorities** (what sells out, what needs advance tickets)
