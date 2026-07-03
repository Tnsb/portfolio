import { assetUrl } from "../utils/assetUrl.js";

/**
 * Product case studies (PM-artifact framing). Engineering framing for the
 * same work lives in `projects` in siteContent.js — keep the two independent.
 *
 * Section shape: { label, paragraphs: [string], decisions?: [{ title, text }] }
 * Sections render in order with numbered mono eyebrow labels.
 */
export const caseStudies = [
  {
    slug: "vantage",
    name: "Vantage",
    tagline: "Predicted-revenue simulation for AI agents",
    eyebrow: "Co-founder · Currently building · 2026",
    logoSrc: assetUrl("/logos/vantage.png"),
    logoAlt: "Vantage logo",
    summary:
      "Run hundreds of realistic synthetic customers against an AI support or retention agent and get a one-page revenue forecast (churn-save, conversion, and escalation by segment) before the agent touches a real customer.",
    repoUrl: "https://github.com/Tnsb/vantage",
    sections: [
      {
        label: "Problem, and who has it",
        paragraphs: [
          "Companies are handing revenue-critical conversations (cancellations, renewals, support escalations) to AI agents, and the person accountable for the result has no way to know what the agent will do to the business before it goes live. Today's tooling answers a different question: it runs test cases and returns QA scores, written for engineers. But the deploy decision belongs to the P&L owner, and a QA score doesn't tell them whether the agent will save churning customers or quietly lose an entire segment.",
          "That's the gap I'm building Vantage for. Point it at your AI support or retention agent and it runs hundreds of realistic synthetic customers against it, then returns a one-page forecast: churn-save rate, conversion, and escalation by customer segment, before the agent touches a real customer. Every run saves its predictions; when real results come in, Vantage shows predicted vs. actual.",
        ],
      },
      {
        label: "Market & alternatives",
        paragraphs: [
          "The simulation-and-evals space splits into two camps. Maxim, Coval, LangSmith, Arize, and Snowglobe sell QA scores to engineers, useful for catching regressions, silent on revenue. Cresta and Sierra bundle simulation inside their own agent platforms, which means a vendor grading its own agent.",
          "Vantage takes a third position: the independent layer that sells predicted revenue impact to the P&L owner, and the only tool that tracks whether its predictions were right. Simulation as outcome prediction has been validated in academia (SimGym, 2026); no product owns it yet.",
        ],
      },
      {
        label: "Key decisions & trade-offs",
        paragraphs: [],
        decisions: [
          {
            title: "Sell predicted revenue impact, not QA scores.",
            text: "The buyer is the P&L owner, not the engineering team. A revenue forecast is a harder claim to make credibly than a test score. It can be wrong in ways a test suite can't, which is exactly why the calibration record exists.",
          },
          {
            title: "Stay independent of agent vendors.",
            text: "Bundled simulation from Cresta or Sierra is a vendor grading its own agent. Positioning Vantage as the independent referee gives up their distribution, but independence is the whole basis of trust in the number.",
          },
          {
            title: "Make calibration the compounding moat.",
            text: "Anyone can prompt an “angry customer.” No one can show “our simulation predicted real churn-save within X%.” Every customer run adds a predicted-vs-actual data point, making the persona models more accurate per vertical. That dataset compounds, and it can't be copied from a screenshot.",
          },
          {
            title: "Ship a one-page forecast, not a dashboard.",
            text: "The artifact is executive-readable: one page, segment-level numbers, a clear delta between runs. It trades away the knob-level depth engineers might want, but it matches how the actual buyer makes the deploy decision.",
          },
        ],
      },
      {
        label: "What we shipped",
        paragraphs: [
          "The demo scenario is a subscription company's cancellation agent. Run 1 sends 250 synthetic customers through it; the report shows the agent losing 60% of price-sensitive customers at turn 3, where it fails to offer a discount. Change one line in the agent's instructions and rerun. Run 2 shows churn-save up 18 points in that segment, presented as a before/after delta.",
          "The demo closes on the prediction record: the forecast is saved and later reconciled against real retention data. That loop (predict, ship, reconcile) is the calibration flywheel the product is built around.",
        ],
      },
      {
        label: "Metrics & outcomes",
        paragraphs: [
          "Honest status: pre-launch. I'm building Vantage now (2026), so there are no revenue or usage numbers to report yet. The metric that will matter most isn't sign-ups; it's prediction accuracy per vertical: how close each forecast lands to the real churn-save and conversion numbers it predicted. Every reconciled run either builds or spends trust in the number on the page.",
        ],
      },
      {
        label: "What's next",
        paragraphs: [
          "First design partners: teams running AI retention or support agents who will let Vantage forecast a rollout, then reconcile the prediction against real retention data. Each one starts the calibration flywheel turning in a real vertical.",
        ],
      },
    ],
  },
  {
    slug: "tessa",
    name: "Tessa",
    tagline: "Agentic email triage for freight operations",
    eyebrow: "CMU capstone · Client: Armada · 2026",
    heroSrc: assetUrl("/projects/tessa-mockup.png"),
    heroAlt:
      "Tessa workflow mockup: inbound email trigger flowing through a LangGraph intent router into Load Tracking, Load Watch, Freight Intelligence, and Exception Monitoring sub-flows.",
    summary:
      "An intent-routing layer in LangGraph that triages inbound freight emails into four operational sub-flows for Armada, from an efficiency goal to a shipped orchestration system.",
    sections: [
      {
        label: "Problem, and who has it",
        paragraphs: [
          "Freight operations teams drown in inbound email. Every message is a request: where is my load, watch this shipment, what's moving in this lane, something went wrong. Every request type needs different handling. Triage was manual: a person reads each email, decides what kind of request it is, and kicks off the right process. That's slow, error-prone, and it doesn't scale with volume.",
          "Armada, a transportation and freight client, brought our CMU capstone team a clear goal: reduce the human effort spent on email handling and increase operational efficiency.",
        ],
      },
      {
        label: "Market & alternatives",
        paragraphs: [
          "The realistic alternatives were the status quo (manual triage), heavier inbox rules and filters, or a single do-everything agent that reads each email and improvises. Rules are brittle against the variety of real freight email, and a monolithic agent is hard to trust and harder to debug. When it misbehaves, you can't tell which of its many jobs failed.",
          "We chose a middle architecture: classify each email once, then route it to a purpose-built flow.",
        ],
      },
      {
        label: "Key decisions & trade-offs",
        paragraphs: [],
        decisions: [
          {
            title: "Classify once, route once, not one mega-agent.",
            text: "Each inbound email is classified a single time at the router, then handled end-to-end by the matching sub-flow. The trade-off is upfront scoping work on intents, but every failure becomes attributable: either the router misclassified, or a sub-flow mishandled. That made the system reliable and debuggable in a way a monolithic agent wouldn't be.",
          },
          {
            title: "Scope to four sub-flows that map to Armada's real operations.",
            text: "Load Tracking, Load Watch, Freight Intelligence, and Exception Monitoring aren't abstract categories; they're the operational buckets Armada's team actually works in. Scoping to those four kept every flow accountable to a real workflow instead of a hypothetical one.",
          },
          {
            title: "Phase the rollout so the client saw value each phase.",
            text: "We phased the rollout across a technical roadmap through the semester so Armada saw value each phase. Each phase delivered something they could react to, which kept feedback tight and de-risked the final delivery.",
          },
          {
            title: "Translate efficiency goals into weekly requirements.",
            text: "Armada's goal was operational efficiency, not a spec. My job each week was turning that goal into concrete requirements the team could build against: the core PM loop of the project.",
          },
        ],
      },
      {
        label: "What we shipped",
        paragraphs: [
          "A working LangGraph orchestration system, delivered to Armada: an intent router at the front, four end-to-end sub-flows behind it. An inbound email arrives, is classified once, and the matching flow (Load Tracking, Load Watch, Freight Intelligence, or Exception Monitoring) handles it through to resolution, with no human triage step in the path.",
        ],
      },
      {
        label: "Metrics & outcomes",
        paragraphs: [
          "The system reduced the need for human involvement in email handling and increased operational efficiency for Armada's team. Just as importantly, it was delivered as a working system to a real client, not a class demo. As a capstone we didn't instrument long-run production metrics; the outcome that mattered was Armada taking delivery of an orchestration system that removes manual triage from their inbound email path.",
        ],
      },
      {
        label: "What's next",
        paragraphs: [
          "Two extensions: expanding intent coverage beyond the initial four categories, and an evaluation harness for routing accuracy: measuring how often the router picks the right sub-flow, which is the single number that governs trust in the whole system.",
        ],
      },
    ],
  },
];
