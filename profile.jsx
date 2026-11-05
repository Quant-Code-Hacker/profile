import { useState, useEffect } from "react";

const C = {
  bg: "#060d1a", bg2: "#0d1f35", bg3: "#132840",
  cyan: "#00c8ff", green: "#00e5a0", amber: "#fbbf24", coral: "#ff6b6b", violet: "#a78bfa",
  gold: "#FFD700",
  border: "rgba(0,200,255,.2)", borderH: "rgba(0,200,255,.5)",
  text: "#ccdff5",
  textM: "#8ab0cc",
  textB: "#f5faff",
};

const mono = { fontFamily: "'Fira Code', 'Courier New', monospace" };

const GH = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const EX = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const chipColors = {
  cyan:   { bg: "rgba(0,200,255,.14)",   color: "#b8f0ff", bd: "rgba(0,200,255,.38)" },
  green:  { bg: "rgba(0,229,160,.14)",   color: "#9effd8", bd: "rgba(0,229,160,.38)" },
  amber:  { bg: "rgba(251,191,36,.14)",  color: "#fde68a", bd: "rgba(251,191,36,.38)" },
  coral:  { bg: "rgba(255,107,107,.14)", color: "#ffd0d0", bd: "rgba(255,107,107,.38)" },
  violet: { bg: "rgba(167,139,250,.16)", color: "#ddd0ff", bd: "rgba(167,139,250,.42)" },
  gold:   { bg: "rgba(255,215,0,.15)",   color: "#fff188", bd: "rgba(255,215,0,.45)" },
};

const Chip = ({ t, c = "cyan" }) => {
  const s = chipColors[c] || chipColors.cyan;
  return (
    <span style={{
      ...mono, fontSize: ".7rem", padding: ".22rem .55rem", borderRadius: 5,
      border: `1px solid ${s.bd}`, background: s.bg, color: s.color,
      letterSpacing: ".02em", whiteSpace: "nowrap", display: "inline-block"
    }}>{t}</span>
  );
};

const Chips = ({ items }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem" }}>
    {items.map(([t, c]) => <Chip key={t} t={t} c={c} />)}
  </div>
);

const GhBtn = ({ url, label = "GitHub" }) => (
  <a href={url} target="_blank" rel="noreferrer" style={{
    ...mono, display: "inline-flex", alignItems: "center", gap: ".3rem",
    fontSize: ".68rem", color: "#a8ccec", border: `1px solid rgba(0,200,255,.28)`,
    padding: ".22rem .58rem", borderRadius: 5, textDecoration: "none",
    background: "rgba(0,200,255,.06)"
  }}><GH /> {label}</a>
);

const ExBtn = ({ url, label }) => (
  <a href={url} target="_blank" rel="noreferrer" style={{
    ...mono, display: "inline-flex", alignItems: "center", gap: ".3rem",
    fontSize: ".68rem", color: "#a8ccec", border: `1px solid rgba(0,200,255,.28)`,
    padding: ".22rem .58rem", borderRadius: 5, textDecoration: "none",
    background: "rgba(0,200,255,.06)"
  }}><EX /> {label}</a>
);

const SectionHeading = ({ id, n, label }) => (
  <h2 id={id} style={{
    ...mono, fontWeight: 600, fontSize: "1.35rem", color: C.textB,
    marginBottom: "2rem", display: "flex", alignItems: "center", gap: ".75rem",
    scrollMarginTop: 72, borderBottom: `1px solid rgba(0,200,255,.25)`, paddingBottom: ".75rem"
  }}>
    <span style={{ color: C.cyan, fontSize: ".8rem", opacity: .8 }}>{String(n).padStart(2, "0")}</span>
    {label}
  </h2>
);

const StatusBadge = ({ isPaper, isActive, venue }) => {
  if (isPaper) return (
    <div style={{
      ...mono, display: "inline-flex", alignItems: "center", gap: ".35rem",
      fontSize: ".65rem", borderRadius: 4, padding: ".2rem .55rem", marginBottom: ".6rem",
      color: "#fde68a", background: "rgba(251,191,36,.12)", border: "1px solid rgba(251,191,36,.4)"
    }}>● Under Review{venue ? ` · ${venue}` : " · Paper Submitted"}</div>
  );
  if (isActive) return (
    <div style={{
      ...mono, display: "inline-flex", alignItems: "center", gap: ".35rem",
      fontSize: ".65rem", borderRadius: 4, padding: ".2rem .55rem", marginBottom: ".6rem",
      color: "#7effd4", background: "rgba(0,229,160,.12)", border: "1px solid rgba(0,229,160,.35)"
    }}>● Active</div>
  );
  return null;
};

const EntryCard = ({ title, org, period, points, isActive, isPaper, venue }) => (
  <div style={{
    background: isPaper ? "rgba(251,191,36,.04)" : isActive ? "rgba(0,229,160,.04)" : C.bg2,
    border: `1px solid ${isPaper ? "rgba(251,191,36,.35)" : isActive ? "rgba(0,229,160,.3)" : C.border}`,
    borderRadius: 12, padding: "1.4rem", marginBottom: "1.1rem"
  }}>
    <StatusBadge isPaper={isPaper} isActive={isActive} venue={venue} />
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: ".5rem" }}>
      <div>
        <div style={{ ...mono, fontSize: ".92rem", color: C.textB, fontWeight: 600, lineHeight: 1.3 }}>{title}</div>
        {org && <div style={{ fontSize: ".85rem", color: "#4dd8ff", marginTop: ".18rem" }}>{org}</div>}
      </div>
      <div style={{
        ...mono, fontSize: ".68rem", color: "#a8ccec", padding: ".22rem .55rem",
        background: "rgba(0,200,255,.08)", borderRadius: 5, border: `1px solid rgba(0,200,255,.28)`, flexShrink: 0
      }}>{period}</div>
    </div>
    {points && (
      <ul style={{ paddingLeft: "1.2rem", marginTop: ".7rem" }}>
        {points.map((p, i) => (
          <li key={i} style={{ fontSize: ".87rem", color: C.text, marginBottom: ".4rem", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </ul>
    )}
  </div>
);

const accentColor = { quantum: C.violet, quant: C.green, ml: C.cyan, systems: C.coral, other: C.amber };

const ProjCard = ({ p, accent }) => {
  const ac = accentColor[accent] || C.cyan;
  return (
    <div style={{
      background: C.bg2,
      border: `1px solid ${accent === "quantum" ? "rgba(167,139,250,.28)" : C.border}`,
      borderRadius: 12, padding: "1.3rem", display: "flex", flexDirection: "column", gap: ".7rem",
      position: "relative", overflow: "hidden"
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${ac},transparent)` }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: ".5rem" }}>
        <div style={{ ...mono, fontSize: ".84rem", color: C.textB, fontWeight: 600, lineHeight: 1.35 }}>{p.title}</div>
        <div style={{ ...mono, fontSize: ".63rem", color: "#a8ccec", flexShrink: 0,
          background: "rgba(0,200,255,.07)", border: "1px solid rgba(0,200,255,.22)",
          padding: ".18rem .42rem", borderRadius: 4 }}>{p.period}</div>
      </div>
      <Chips items={p.tech} />
      <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
        {p.desc.map((d, i) => (
          <li key={i} style={{ fontSize: ".83rem", color: C.text, marginBottom: ".3rem", lineHeight: 1.68 }}
            dangerouslySetInnerHTML={{ __html: d }} />
        ))}
      </ul>
      <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap", marginTop: "auto" }}>
        {p.github && <GhBtn url={p.github} />}
        {p.link && <ExBtn url={p.link} label={p.linkLabel || "Link"} />}
      </div>
    </div>
  );
};

const CourseProjCard = ({ p }) => (
  <div style={{ background: C.bg2, border: `1px solid rgba(251,191,36,.22)`, borderRadius: 12, padding: "1.3rem", display: "flex", flexDirection: "column", gap: ".65rem" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: ".5rem", flexWrap: "wrap" }}>
      <div style={{ ...mono, fontSize: ".84rem", color: C.textB, fontWeight: 600, lineHeight: 1.35 }}>{p.title}</div>
      <div style={{ ...mono, fontSize: ".63rem", color: "#a8ccec", flexShrink: 0,
        background: "rgba(251,191,36,.08)", border: "1px solid rgba(251,191,36,.28)",
        padding: ".18rem .42rem", borderRadius: 4 }}>{p.period}</div>
    </div>
    <div style={{ ...mono, fontSize: ".65rem", color: "#fde68a", letterSpacing: ".04em" }}>{p.course}</div>
    <Chips items={p.tech} />
    <p style={{ fontSize: ".83rem", color: C.text, lineHeight: 1.68, margin: 0 }}>{p.desc}</p>
    <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap", marginTop: "auto" }}>
      {p.github && <GhBtn url={p.github} />}
      {p.canva && <ExBtn url={p.canva} label="Canva Slides" />}
    </div>
  </div>
);

const SectionLabel = ({ label, type }) => {
  const m = {
    quantum: { bg: "rgba(167,139,250,.13)", color: "#c8b0ff", bd: "rgba(167,139,250,.4)" },
    quant:   { bg: "rgba(0,229,160,.13)",   color: "#6effd4", bd: "rgba(0,229,160,.4)" },
    ml:      { bg: "rgba(0,200,255,.13)",   color: "#6ae8ff", bd: "rgba(0,200,255,.4)" },
    systems: { bg: "rgba(255,107,107,.13)", color: "#ffb8b8", bd: "rgba(255,107,107,.4)" },
    other:   { bg: "rgba(251,191,36,.13)",  color: "#fde090", bd: "rgba(251,191,36,.4)" },
  };
  const s = m[type] || m.ml;
  return (
    <div style={{
      ...mono, display: "inline-flex", alignItems: "center", fontSize: ".7rem",
      letterSpacing: ".1em", textTransform: "uppercase", padding: ".35rem .8rem",
      borderRadius: 6, marginBottom: "1.1rem", background: s.bg, color: s.color, border: `1px solid ${s.bd}`
    }}>{label}</div>
  );
};

const GRID = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(295px, 1fr))", gap: "1rem" };

// ── DATA ────────────────────────────────────────────────────────────────

const TIMELINE = [
  { date: "DEC 2024", title: "VaR Methodologies — Parametric, Historical, Monte Carlo Risk Modeling", tag: "QUANT FINANCE", tc: "coral" },
  { date: "DEC 2024 – FEB 2025", title: "Undergraduate Researcher — Hybrid HMM-GARCH-EVT VaR · Dr. Bhawana Rudra, NITK", tag: "RESEARCH", tc: "green" },
  { date: "JAN 2025", title: "VaR Analysis with Monte Carlo GARCH(1,1) on NIFTY 50", tag: "QUANT PROJECT", tc: "coral" },
  { date: "FEB 2025", title: "Research Paper Presented · icSoftComp 2025 · Springer Publication (2026)", tag: "PUBLICATION", tc: "coral" },
  { date: "JUL 2025", title: "Full-Stack Algorithmic Trading Application — FastAPI + Alpaca + Backtrader", tag: "QUANT PROJECT", tc: "green" },
  { date: "JUL – OCT 2025", title: "Open Source Contributor · GirlScript Summer of Code (PR #593, PR #710)", tag: "OPEN SOURCE", tc: "green" },
  { date: "AUG 2025", title: "News Sentiment Stock Price Predictor — LSTM + FinBERT · R² 94.7%", tag: "MACHINE LEARNING", tc: "cyan" },
  { date: "AUG 2025 – APR 2026", title: "Undergraduate Researcher · NITK — Quantum-Secure Blockchain · Under Review (IET InfoSec)", tag: "QUANTUM · RESEARCH", tc: "violet" },
  { date: "SEP 2025", title: "ChronoForge Hackathon — 2nd Runner-Up · CoinQuest AI Trading Agent", tag: "AWARD", tc: "amber" },
  { date: "NOV – DEC 2025", title: "Quantum Data Encoding · Quantum ML Kernel Estimation · Shor's Algorithm (IBM Quantum)", tag: "QUANTUM", tc: "violet" },
  { date: "NOV 2025 – FEB 2026", title: "Fusion-Based Blockchain IDS — Federated Learning + eBPF + Ensemble ML", tag: "COMPLETED", tc: "green" },
  { date: "DEC 2025 – JAN 2026", title: "Time Series Forecasting — AR, MA, ARIMA, SARIMA, SARIMAX", tag: "TIME SERIES", tc: "green" },
  { date: "JAN 2026 – PRESENT", title: "Custom Operating System — Bootloader & Kernel in C / Assembly", tag: "SYSTEMS", tc: "coral", active: true },
  { date: "JAN 2026 – PRESENT", title: "Research — Quantum Cryptographic Primitives via Chaotic Circuits & Quantum Scrambling", tag: "ACTIVE RESEARCH", tc: "violet", active: true },
  { date: "FEB 2026", title: "Social Saver Bot — Multi-Platform Media Downloader", tag: "PROJECT", tc: "cyan" },
  { date: "MAR 2026", title: "Open-Source Contribution · sktime/pytorch-forecasting · PR #2199 merged & Issue #2187", tag: "OPEN SOURCE", tc: "green" },
  { date: "MAY 2026 – PRESENT", title: "WorldQuant BRAIN — Quantitative Research Consultant · Gold Level · 35+ Alphas", tag: "QUANT FINANCE", tc: "amber", active: true },
  { date: "MAY 2026 – PRESENT", title: "JARVIS — Personal AI Productivity System", tag: "ONGOING AI/ML", tc: "amber", active: true },
  { date: "OCT 2026", title: "QuantForge — Multi-Backend Risk Computing Engine (C++20, CUDA, OpenMP)", tag: "HIGH PERFORMANCE QUANT", tc: "coral" },
];

const SKILLS = [
  {
    title: "⬡ Quantum Computing & Post-Quantum", q: true, items: [
      ["Qiskit", "violet"], ["IBM Quantum Platform", "violet"], ["QiskitRuntimeService", "violet"],
      ["StatevectorSampler", "violet"], ["QuantumCircuit", "violet"], ["QFT", "violet"],
      ["Bloch Sphere", "violet"], ["Amplitude Encoding", "violet"], ["Angle Encoding", "violet"],
      ["Phase Estimation", "violet"], ["Shor's Algorithm", "violet"], ["Qubit Recycling", "violet"],
      ["Post-Quantum Cryptography", "violet"], ["Chaotic Quantum Circuits", "violet"], ["Quantum Scrambling", "violet"]
    ]
  },
  {
    title: "Systems & High-Performance Computing", items: [
      ["C++17 / C++20", "coral"], ["C", "coral"], ["CUDA", "coral"], ["OpenMP (Multithreading)", "coral"],
      ["Lock-Free Data Structures", "coral"], ["STL", "coral"], ["Memory Management", "coral"],
      ["CMake", "coral"], ["Linux", "coral"], ["eBPF", "coral"], ["OS Development", "coral"],
      ["x86 Assembly", "coral"], ["CTest", "coral"]
    ]
  },
  {
    title: "Quantitative Finance & Risk", items: [
      ["Volatility Modeling", "green"], ["Risk Modeling", "green"], ["HMM-GARCH-EVT", "green"],
      ["VaR Parametric / Monte Carlo", "green"], ["Historical Simulation", "green"], ["Expected Shortfall", "green"],
      ["Factor Modeling", "green"], ["Ranking Operators", "green"], ["Strategy Backtesting", "green"],
      ["Portfolio Optimization", "green"], ["arch (GARCH)", "green"], ["Backtrader", "green"],
      ["yfinance", "green"], ["CCXT", "green"], ["Alpaca API", "green"]
    ]
  },
  {
    title: "Machine Learning & Deep Learning", items: [
      ["TensorFlow", "cyan"], ["PyTorch", "cyan"], ["Scikit-learn", "cyan"],
      ["XGBoost", "cyan"], ["LightGBM", "cyan"], ["Transformers", "cyan"],
      ["NLP", "cyan"], ["Time Series Modeling", "cyan"], ["Feature Engineering", "cyan"],
      ["LSTM", "cyan"], ["GRU", "cyan"], ["CNN", "cyan"], ["Ensemble Learning", "cyan"]
    ]
  },
  {
    title: "Agentic AI & LLM Tooling", items: [
      ["Claude", "amber"], ["LLM-Assisted Workflows", "amber"], ["FinBERT", "amber"],
      ["HuggingFace", "amber"], ["Multi-LLM Systems", "amber"], ["Prompt Engineering", "amber"],
      ["Streamlit", "amber"]
    ]
  },
  {
    title: "Mathematics & Statistics", items: [
      ["Probability Theory", "violet"], ["Statistics", "violet"], ["Linear Algebra", "violet"],
      ["Stochastic Processes", "violet"], ["Extreme Value Theory (EVT)", "violet"],
      ["Regime Switching (HMM)", "violet"], ["ADF Test", "violet"], ["ACF / PACF", "violet"]
    ]
  },
  {
    title: "Networking & Security", items: [
      ["TCP/UDP Socket Programming", "coral"], ["Network Protocols", "coral"],
      ["PBFT Consensus", "coral"], ["ECDSA Signatures", "coral"], ["AES-256-GCM", "coral"],
      ["IDS Anomaly Detection", "coral"], ["Zero-Knowledge Proofs", "coral"]
    ]
  },
  {
    title: "Programming Languages & Tools", items: [
      ["C++", "cyan"], ["C", "cyan"], ["Python", "cyan"], ["Java", "cyan"],
      ["SQL", "cyan"], ["Bash", "cyan"], ["Git", "cyan"], ["FastAPI", "cyan"],
      ["SQLite", "cyan"], ["MySQL", "cyan"], ["Asyncio", "cyan"], ["WebSocket", "cyan"]
    ]
  },
];

// ── PROJECT DATA ────────────────────────────────────────────────────────

const QC_PROJ = [
  {
    title: "Adaptive Quantum-Secure Blockchain with ML-Orchestrated Threat Protection",
    period: "Aug 2025 – Apr 2026",
    tech: [["Qiskit", "violet"], ["TensorFlow", "violet"], ["Post-Quantum Crypto", "violet"], ["eBPF", "coral"], ["PBFT Consensus", "coral"], ["ECDSA", "coral"], ["AES-256-GCM", "coral"]],
    desc: [
      "Quantum-resilient permissioned blockchain framework for secure, quantum-resilient transaction validation in distributed ecosystems",
      "Achieved <strong>100% attack detection</strong>, <strong>99.5% budget utilisation</strong>, and <strong>22% qubit savings</strong> under active attacks",
      "Delivered <strong>52.5% higher security value</strong> than standard optimization methods under fixed qubit budgets",
      "Research paper submitted & under review at <strong>IET Information Security (2026)</strong>"
    ],
    github: "https://github.com/Pranathi-Udaya-Kumar/Fusion-Based-Blockchain-Integrated-Intrusion-Detection-System-IDS-"
  },
  {
    title: "Quantum Data Encoding · Kernel Estimation · Shor's Algorithm",
    period: "Nov – Dec 2025",
    tech: [["Qiskit", "violet"], ["IBM Quantum", "violet"], ["StatevectorSampler", "violet"], ["unitary_overlap", "violet"], ["QFT", "violet"], ["SamplerV2", "violet"]],
    desc: [
      "Amplitude / Angle / Basis encoding evaluated on IBM Quantum hardware; Bloch sphere visualisation via custom N-state plotting",
      "20×20 quantum kernel matrix (10,000-shot sampling); parameterised Ry+CZ+Rz feature map with Pass Manager opt-level 3",
      "Shor's algorithm implementation for N=15 via Quantum Phase Estimation; qubit-recycling variant with hardware-aware transpilation"
    ],
    github: "https://github.com/Quant-Code-Hacker/Quantum_Computing_Experiments"
  },
  {
    title: "Quantum Cryptographic Primitives via Chaotic Circuits",
    period: "Jan 2026 – Present",
    tech: [["Chaotic Quantum Circuits", "violet"], ["Quantum Scrambling", "violet"], ["QKD", "violet"], ["Secure MPC", "violet"]],
    desc: [
      "Researching quantum cryptographic primitives using chaotic quantum circuits and quantum scrambling techniques",
      "Investigating information-theoretic security properties achievable through quantum chaos with implications for QKD and secure MPC"
    ],
  },
];

const QF_PROJ = [
  {
    title: "QuantForge — Multi-Backend Risk Computing Engine",
    period: "Oct 2026",
    tech: [["C++20", "coral"], ["CUDA", "coral"], ["OpenMP", "coral"], ["CMake", "amber"], ["CTest", "green"], ["Template Dispatch", "cyan"]],
    desc: [
      "Architected a high-performance C++20 backend-agnostic risk engine supporting <strong>CPU, OpenMP, and CUDA</strong> execution targets with zero-overhead template dispatch",
      "Engineered data-parallel Monte Carlo risk simulations with hierarchical parallel reduction across GPU threads and CPU cores",
      "Rigorous validation via CTest: achieved <strong>CPU/OpenMP numerical agreement within 2% across 2M+ simulated paths</strong>"
    ],
    github: "https://github.com/Quant-Code-Hacker"
  },
  {
    title: "WorldQuant BRAIN — Quantitative Alpha Research",
    period: "May 2026 – Present",
    tech: [["Factor Modeling", "coral"], ["Ranking Operators", "coral"], ["Time Series Signals", "cyan"], ["Cross-Universe Validation", "green"], ["Alpha Backtesting", "green"]],
    desc: [
      "Developed and submitted <strong>35+ high-performing quantitative alphas</strong> using factor modeling, ranking operators, and time-series signals",
      "Analyzed <strong>10+ years</strong> of global market data to identify momentum, volatility, and cross-sectional inefficiency patterns",
      "Performed cross-universe alpha validation and robustness testing across diverse global market regimes under strict production constraints",
      "Achieved <strong>Gold Level</strong> status and ranked in the <strong>Top 20% globally in IQC 2026 Stage 1</strong>"
    ],
    link: "https://platform.worldquantbrain.com/profile/performance",
    linkLabel: "WorldQuant Profile"
  },
  {
    title: "Hybrid HMM-GARCH-EVT VaR Framework",
    period: "Dec 2024 – Feb 2025",
    tech: [["arch (GARCH)", "coral"], ["HMM", "cyan"], ["EVT", "cyan"], ["EWMA", "cyan"], ["Kupiec PoF", "green"], ["Christoffersen Test", "green"], ["yfinance", "coral"]],
    desc: [
      "Built HMM-GARCH-EVT VaR framework for NSEI, GSPC, and QQQ with calibrated 99% VaR coverage",
      "Achieved the lowest quantile loss (<strong>0.354×10⁻³</strong>) benchmarked against standard VaR models for NSEI",
      "Realized exception rates of <strong>1.03%–1.21%</strong> against a 1% VaR target across volatile market regimes",
      "Published and presented at <strong>icSoftComp 2025 · Springer</strong>"
    ],
    github: "https://github.com/Quant-Code-Hacker/Methods_Var"
  },
  {
    title: "Full-Stack Algorithmic Trading Application",
    period: "Jul 2025",
    tech: [["FastAPI · Jinja2", "amber"], ["SQLite", "amber"], ["Alpaca API", "coral"], ["Backtrader", "coral"], ["RSI-14 · SMA 20/50", "cyan"], ["ORB Strategy", "cyan"]],
    desc: [
      "ORB, ORBd, Daily Liquidation strategies on 100+ QQQ stocks with <strong>+30% returns</strong> evaluated over 43 days of minute-bar data",
      "FastAPI backend with 30-sec live dashboard refresh, bracket orders (stop-loss/take-profit), dynamic position sizing, and automated alerts"
    ],
    github: "https://github.com/Quant-Code-Hacker/FULL_STACK_TRADING_APP"
  },
  {
    title: "VaR Methodologies — Parametric, Historical, Monte Carlo",
    period: "Dec 2024",
    tech: [["NumPy · Pandas", "coral"], ["SciPy · Statsmodels", "coral"], ["Monte Carlo", "cyan"], ["Expected Shortfall", "cyan"], ["Kupiec PoF", "green"]],
    desc: [
      "Parametric (Variance-Covariance), Historical Simulation, and Monte Carlo GARCH(1,1) VaR built from scratch on NIFTY 50 (1,200+ daily bars)",
      "Comparative empirical analysis across methodologies; benchmarked parametric vs non-parametric estimators under diverse volatility regimes"
    ],
    github: "https://github.com/Quant-Code-Hacker/VAR_PARAMETRIC_VARIANCE_MONTECARLO_HISTORIC"
  },
];

const ML_PROJ = [
  {
    title: "Real-Time AI Trading Agent (ChronoForge 2nd Runner-Up)",
    period: "Sep 2025",
    tech: [["TensorFlow", "green"], ["XGBoost", "green"], ["Random Forest", "green"], ["LSTM", "amber"], ["FastAPI", "coral"], ["WebSocket", "cyan"], ["Alpaca API", "coral"]],
    desc: [
      "Built an AI trading system using ensemble models (Random Forest, XGBoost, LSTM) for real-time market signal generation",
      "Incorporated human-in-the-loop control with automated <strong>5-minute retraining cycles</strong> for adaptive signal updates",
      "Enforced strict risk controls: <strong>2% position sizing</strong>, automated stop-loss, and a maximum portfolio drawdown cap under 15%",
      "Processed 1,000+ market ticks/min via async WebSockets across Binance and Coinbase with 5,000+ logged trade records"
    ],
    github: "https://github.com/Quant-Code-Hacker/CoinQuest"
  },
  {
    title: "News Sentiment-Based Stock Price Prediction",
    period: "Aug 2025",
    tech: [["TensorFlow", "green"], ["FinBERT", "violet"], ["HuggingFace", "violet"], ["NLTK", "violet"], ["yfinance", "coral"], ["LSTM 128/64", "amber"]],
    desc: [
      "Hybrid 100-day lookback LSTM (128/64 units, 20% dropout) + FinBERT financial sentiment embeddings yielding <strong>R² 94.7%, MAE 3.2%</strong>",
      "Automated NLP pipeline parsing 10,000+ financial news articles across 7+ years into 1,711 training sequences",
      "Merged into GSSoC DataSentience-AIML as <strong>PR #593</strong>"
    ],
    github: "https://github.com/Quant-Code-Hacker/Finbert_Price_Predictor"
  },
  {
    title: "Fusion-Based Blockchain IDS with ML Orchestration",
    period: "Nov 2025 – Feb 2026",
    tech: [["LightGBM", "green"], ["XGBoost", "green"], ["Random Forest", "green"], ["Isolation Forest", "green"], ["Federated Learning", "green"], ["eBPF", "coral"], ["PBFT", "coral"]],
    desc: [
      "Decentralised blockchain-based IDS for real-time threat detection; ensemble of LightGBM, XGBoost, Random Forest, and Isolation Forest",
      "PBFT consensus with ECDSA + AES-256-GCM; federated learning pipeline with eBPF-based kernel-level network traffic telemetry"
    ],
    github: "https://github.com/Pranathi-Udaya-Kumar/Fusion-Based-Blockchain-Integrated-Intrusion-Detection-System-IDS-"
  },
  {
    title: "Time Series Forecasting Suite",
    period: "Dec 2025 – Jan 2026",
    tech: [["AR / MA", "green"], ["ARIMA", "green"], ["SARIMA", "green"], ["SARIMAX", "green"], ["ADF Test", "green"], ["Statsmodels", "coral"]],
    desc: [
      "AR, MA, ARIMA, and SARIMA implementations on macroeconomic & financial datasets; ACF/PACF lag selection and ADF stationarity validation",
      "Constructed custom MA(2) simulation: yₜ = 50 + 0.4εₜ₋₁ + 0.3εₜ₋₂ + εₜ; SARIMA seasonal grid optimization"
    ],
    github: "https://github.com/Quant-Code-Hacker/Quantum_Computing_Experiments"
  },
];

const SYS_PROJ = [
  {
    title: "Custom Operating System",
    period: "Jan 2026 – Present",
    tech: [["C", "coral"], ["x86 Assembly", "coral"], ["Bootloader", "coral"], ["Paging", "coral"], ["Process Scheduling", "coral"], ["IDT Interrupts", "coral"], ["VGA Driver", "coral"]],
    desc: [
      "Building a custom operating system from scratch: bootloader → 32-bit protected mode → kernel → virtual memory paging → process scheduler",
      "Implemented Interrupt Descriptor Table (IDT), Programmable Interrupt Controller (PIC), VGA text-mode driver, and early shell interface in C and Assembly"
    ],
  },
  {
    title: "JARVIS — Personal AI Productivity System",
    period: "May 2026 – Present",
    tech: [["Agentic AI", "amber"], ["Claude & LLMs", "amber"], ["Task Orchestration", "amber"], ["Python", "cyan"]],
    desc: [
      "Personal AI-powered productivity and multi-agent task management system providing automated context extraction and workflow acceleration",
      "Architecture and agentic loop fully specified; active implementation ongoing"
    ],
    link: "https://docs.google.com/document/d/1T8sbaDxrYnQCM5ONrnTkkFZMAOgrLrrR4qaCByad6k8/edit?tab=t.0",
    linkLabel: "Specification Doc"
  },
  {
    title: "Social Saver Bot — Multi-Platform Media Downloader",
    period: "Feb 2026",
    tech: [["Python", "amber"], ["Automation", "amber"], ["Media APIs", "amber"], ["Asyncio", "cyan"]],
    desc: ["Automated bot service for fetching and caching high-res media streams across multiple social platforms with robust rate-limiting"],
    github: "https://github.com/Quant-Code-Hacker/Social_Saver_Bot"
  },
];

const COURSE_PROJ = [
  {
    title: "Campus Smart Event Ticketing & Seat Management",
    course: "IT206 — Data Structures & Algorithms",
    period: "2024 – 2025",
    tech: [["C++", "cyan"], ["Hash Map", "green"], ["Queue", "green"], ["2D Matrix", "green"], ["Heap", "green"], ["Trie", "green"], ["QR Verification", "amber"]],
    desc: "DSA-based campus event platform: O(1) attendee lookups with Hash Maps, FCFS waitlist Queues, 2D Matrix seat allocation, Max-Heap popularity tracking, Trie prefix attendee search, and QR code verification.",
    github: "https://github.com/Quant-Code-Hacker/DSA-CAMPUS_EVENT"
  },
  {
    title: "ATLAS — Interactive Web-Based Study Companion",
    course: "IT254 — Web Technologies and Applications",
    period: "Jan 2026",
    tech: [["HTML · CSS · JS", "cyan"], ["Python", "cyan"], ["AI Chatbot", "violet"], ["REST APIs", "amber"]],
    desc: "Gamified study companion: virtual robot guide, 3D/2D interactive workspace, AI chatbot for doubt clarification, task management, study time tracking, syllabus organiser, and music playback.",
    github: "https://github.com/Quant-Code-Hacker/REPO_NAME"
  },
  {
    title: "MediRoute — Smart Symptom-Based Doctor Routing",
    course: "Database Management Systems",
    period: "2024 – 2025",
    tech: [["SQL", "cyan"], ["ER Modelling", "amber"], ["Normalization", "green"], ["Triggers & Views", "green"], ["Transaction Mgmt", "amber"]],
    desc: "Relational DB architecture: ER modeling, normalization (1NF–BCNF), multi-table joins, nested subqueries, stored procedures, audit triggers, ACID transaction controls, and performance indexing.",
    github: "https://github.com/Quant-Code-Hacker/DATABASE_MANAGEMENT_SYSTEM_PROJECT",
    canva: "https://www.canva.com/design/DAHDJgLvj4Y/j1dEdvI8KLFxTwMQNGnFpw/edit"
  },
  {
    title: "Operating System Simulation Project",
    course: "Operating Systems",
    period: "2024 – 2025",
    tech: [["C", "cyan"], ["Process Scheduling", "amber"], ["Memory Management", "green"], ["IPC", "coral"]],
    desc: "Core OS primitives implemented in C: FCFS, SJF, Round Robin, and Priority CPU scheduling; paging, segmentation, virtual memory management, deadlock detection, and POSIX IPC interfaces.",
    github: "https://github.com/Quant-Code-Hacker/OPERATING_SYSTEM_PROJECT"
  },
];

// ── NAV ─────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "home", label: "~/home" },
  { id: "about", label: "about" },
  { id: "publications", label: "publications" },
  { id: "research", label: "research" },
  { id: "experience", label: "experience" },
  { id: "hackathons", label: "hackathons" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "achievements", label: "achievements" },
  { id: "leadership", label: "leadership" },
  { id: "timeline", label: "timeline" },
];

// ── MAIN ─────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handler = () => {
      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top };
      });
      const visible = offsets.filter(o => o.top <= 120);
      if (visible.length) setActiveId(visible[visible.length - 1].id);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const LinkBtn = ({ href, label, primary }) => (
    <a href={href} target="_blank" rel="noreferrer" style={{
      display: "inline-flex", alignItems: "center", gap: ".4rem",
      padding: ".4rem .85rem", borderRadius: 6, ...mono, fontSize: ".7rem",
      border: `1px solid ${primary ? C.cyan : "rgba(0,200,255,.4)"}`,
      color: primary ? "#030d1a" : "#6ae8ff",
      background: primary ? C.cyan : "rgba(0,200,255,.1)",
      textDecoration: "none", fontWeight: primary ? 600 : 400
    }}>{label}</a>
  );

  const statCards = [
    { n: "8.7",     label: "CGPA / 10 · NITK",      color: C.cyan },
    { n: "35+",    label: "WorldQuant Alphas",      color: "#FFD700", isGold: true },
    { n: "Top 20%",label: "IQC 2026 Stage 1",       color: "#FFD700", isGold: true },
    { n: "1456",   label: "CF Specialist",          color: C.green },
    { n: "656",    label: "ICPC AlgoQueen",         color: C.violet },
    { n: "1",      label: "Published (Springer)",   color: C.green },
    { n: "1",      label: "Under Review (IET)",     color: C.amber },
    { n: "2nd",    label: "Runner-Up ChronoForge",  color: C.coral },
    { n: "9th/3rd",label: "State Ranks XII / X",    color: C.coral },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          background: #060d1a;
          color: #ccdff5;
          font-family: 'Inter', system-ui, sans-serif;
          line-height: 1.7;
          overflow-x: hidden;
          font-size: 15px;
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #060d1a; }
        ::-webkit-scrollbar-thumb { background: rgba(0,200,255,.3); border-radius: 3px; }
        li { list-style: disc; }
        strong { font-weight: 600; }
      `}</style>

      {/* BG grid */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,200,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,.03) 1px,transparent 1px)",
        backgroundSize: "48px 48px", pointerEvents: "none", zIndex: 0
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        backdropFilter: "blur(16px)", background: "rgba(6,13,26,.93)",
        borderBottom: `1px solid rgba(0,200,255,.22)`
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: ".65rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: ".5rem" }}>
          <button onClick={() => scrollTo("home")} style={{ ...mono, fontSize: ".95rem", color: C.cyan, fontWeight: 700, background: "none", border: "none", cursor: "pointer" }}>
            pranathi<span style={{ color: C.green }}>.dev</span>
          </button>
          <div style={{ display: "flex", gap: ".15rem", flexWrap: "wrap" }}>
            {NAV_ITEMS.map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                ...mono, fontSize: ".64rem", padding: ".26rem .48rem", borderRadius: 6,
                color: activeId === id ? C.cyan : "#7aabcc",
                border: `1px solid ${activeId === id ? C.borderH : "transparent"}`,
                background: activeId === id ? "rgba(0,200,255,.1)" : "transparent",
                cursor: "pointer", letterSpacing: ".04em"
              }}>{label}</button>
            ))}
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 1160, margin: "0 auto", padding: "88px 1.5rem 4rem", position: "relative", zIndex: 1 }}>

        {/* ── HOME ── */}
        <section id="home" style={{ marginBottom: "6rem" }}>
          <div style={{ ...mono, fontSize: ".72rem", color: C.green, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: "1.1rem", display: "flex", alignItems: "center", gap: ".55rem" }}>
            <span style={{ width: 28, height: 1, background: C.green, display: "inline-block" }} />
            B.Tech IT · NIT Karnataka, Surathkal · 2024–2028 · CGPA: 8.7/10
          </div>
          <h1 style={{ ...mono, fontWeight: 700, fontSize: "clamp(2rem,5.5vw,3.4rem)", lineHeight: 1.1, marginBottom: ".8rem" }}>
            <span style={{ color: C.textB }}>Pranathi </span>
            <span style={{ color: C.cyan }}>Udaya Kumar</span>
          </h1>
          <p style={{ ...mono, fontSize: ".85rem", color: "#9abdd8", marginBottom: "2.2rem", maxWidth: 740, lineHeight: 1.9 }}>
            <span style={{ color: C.green }}>Quantitative Finance & Risk Modeling</span> &nbsp;·&nbsp;
            <span style={{ color: "#c8aaff" }}>Quantum Computing</span> &nbsp;·&nbsp;
            <span style={{ color: C.amber }}>AI / ML & Agentic Systems</span> &nbsp;·&nbsp;
            <span style={{ color: "#ff9090" }}>High-Performance Systems (C++20 / CUDA)</span><br />
            Undergraduate researcher at NITK building scalable risk computing engines, quantum-secure distributed systems, mathematical alpha models (WorldQuant Gold / IQC Top 20%), and low-level systems.
          </p>

          {/* Stat cards */}
          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginBottom: "2.2rem" }}>
            {statCards.map(({ n, label, color, isGold }) => (
              <div key={label} style={{
                background: isGold ? "rgba(255,215,0,.07)" : C.bg2,
                border: `1px solid ${isGold ? "rgba(255,215,0,.45)" : C.border}`,
                borderRadius: 12, padding: ".85rem 1.15rem",
                boxShadow: isGold ? "0 0 20px rgba(255,215,0,.13)" : "none"
              }}>
                <div style={{
                  ...mono, fontSize: "1.35rem", fontWeight: 700, color: color, lineHeight: 1,
                  textShadow: isGold ? "0 0 14px rgba(255,215,0,.55)" : "none"
                }}>{n}</div>
                <div style={{ fontSize: ".62rem", color: isGold ? "#d4a800" : "#8ab0cc", textTransform: "uppercase", letterSpacing: ".07em", marginTop: ".28rem" }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
            {[
              ["GitHub: Quant-Code-Hacker",    "https://github.com/Quant-Code-Hacker"],
              ["GitHub: Pranathi-Udaya-Kumar", "https://github.com/Pranathi-Udaya-Kumar"],
              ["LinkedIn",                     "https://linkedin.com/in/pranathi-udaya-kumar"],
              ["Codeforces: pranathi.uk",       "https://codeforces.com/profile/pranathi.uk"],
              ["Email: pranathiudayakumar@gmail.com", "mailto:pranathiudayakumar@gmail.com"],
              ["Phone: +91 8088655740",        "tel:+918088655740"],
            ].map(([l, h]) => <LinkBtn key={l} href={h} label={l} />)}
            <LinkBtn href="https://drive.google.com/file/d/1bM5MT67asDZGpTRQXLMY3UJrN5L1hysD/view?usp=drive_link" label="▼ Resume" primary />
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section style={{ marginBottom: "3rem" }}>
          <SectionHeading id="timeline" n={10} label="Activity Timeline" />
          <p style={{ ...mono, fontSize: ".76rem", color: "#8ab0cc", marginBottom: "1.75rem" }}>
            <span style={{ color: "#9effd8" }}>●</span> ongoing &nbsp;·&nbsp; <span style={{ color: "#fde68a" }}>●</span> under review / submitted
          </p>
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom,transparent,rgba(0,200,255,.25) 5%,rgba(0,200,255,.25) 95%,transparent)` }} />
            {TIMELINE.map((t, i) => {
              const tagColors = { coral: "#ffd0d0", green: "#9effd8", cyan: "#b8f0ff", violet: "#ddd0ff", amber: "#fde68a" };
              const tagBgs   = { coral: "rgba(255,107,107,.12)", green: "rgba(0,229,160,.12)", cyan: "rgba(0,200,255,.12)", violet: "rgba(167,139,250,.14)", amber: "rgba(251,191,36,.12)" };
              const tagBds   = { coral: "rgba(255,107,107,.35)", green: "rgba(0,229,160,.35)", cyan: "rgba(0,200,255,.35)", violet: "rgba(167,139,250,.38)", amber: "rgba(251,191,36,.35)" };
              return (
                <div key={i} style={{ position: "relative", marginBottom: "1.3rem", paddingLeft: "1.6rem" }}>
                  <div style={{
                    position: "absolute", left: "-2rem", top: ".42rem", width: 9, height: 9,
                    borderRadius: "50%", transform: "translateX(.5px)",
                    background: t.active ? "#00e5a0" : C.bg,
                    border: `1px solid ${t.active ? "#00e5a0" : "#00c8ff"}`,
                    boxShadow: t.active ? `0 0 8px #00e5a0` : "none"
                  }} />
                  <div style={{ ...mono, fontSize: ".64rem", color: "#7aabcc", letterSpacing: ".07em", marginBottom: ".12rem" }}>{t.date}</div>
                  <div style={{ ...mono, fontSize: ".79rem", color: C.textB, fontWeight: 500, lineHeight: 1.5 }}>
                    {t.title}
                    <span style={{
                      display: "inline-block", ...mono, fontSize: ".55rem",
                      padding: ".12rem .4rem", borderRadius: 3, marginLeft: ".45rem",
                      background: tagBgs[t.tc], color: tagColors[t.tc],
                      border: `1px solid ${tagBds[t.tc]}`,
                      letterSpacing: ".06em", verticalAlign: "middle"
                    }}>{t.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section style={{ marginBottom: "5.5rem" }}>
          <SectionHeading id="about" n={1} label="About" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: "1.25rem" }}>
            <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1.5rem" }}>
              <div style={{ ...mono, fontSize: ".7rem", color: "#4dd8ff", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: "1rem" }}>// bio</div>
              <p style={{ fontSize: ".9rem", color: C.text, marginBottom: ".75rem", lineHeight: 1.78 }}>
                Motivated student researcher at NIT Karnataka with deep focus in <strong style={{ color: "#fde68a" }}>Quantitative Finance & Risk</strong>, <strong style={{ color: "#ffd0d0" }}>High-Performance Systems (C++20 / CUDA)</strong>, <strong style={{ color: "#ddd0ff" }}>Quantum Computing</strong>, and <strong style={{ color: "#9effd8" }}>Applied Machine Learning</strong>.
              </p>
              <p style={{ fontSize: ".9rem", color: C.text, lineHeight: 1.78 }}>
                Quantitative Research Consultant (Gold Level, Top 20% globally in IQC 2026 Stage 1) at WorldQuant BRAIN with 35+ submitted alphas. Author of research in regime-switching EVT risk models published at Springer (icSoftComp 2025) and quantum-secure blockchain infrastructure under review at IET Information Security.
              </p>
            </div>
            <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1.5rem" }}>
              <div style={{ ...mono, fontSize: ".7rem", color: "#4dd8ff", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: "1rem" }}>// education</div>
              <div style={{ fontSize: ".95rem", color: C.textB, fontWeight: 600 }}>B.Tech — Information Technology</div>
              <div style={{ fontSize: ".87rem", color: "#9abdd8", marginTop: ".2rem" }}>National Institute of Technology Karnataka, Surathkal</div>
              <div style={{ ...mono, fontSize: ".8rem", color: "#6effd4", marginTop: ".35rem" }}>CGPA: 8.7 / 10 &nbsp;·&nbsp; Aug 2024 – May 2028</div>
              <div style={{ ...mono, fontSize: ".7rem", color: "#4dd8ff", letterSpacing: ".12em", textTransform: "uppercase", margin: "1.2rem 0 .8rem" }}>// core pillars</div>
              <Chips items={[
                ["Quant Risk (VaR/GARCH/EVT)", "green"],
                ["Factor Modeling & Alphas", "green"],
                ["C++20 / CUDA / OpenMP", "coral"],
                ["Quantum Computing & Crypto", "violet"],
                ["Machine Learning & NLP", "cyan"],
                ["Operating Systems", "coral"],
                ["Competitive Programming", "amber"]
              ]} />
            </div>
          </div>
        </section>

        {/* ── PUBLICATIONS ── */}
        <section style={{ marginBottom: "5.5rem" }}>
          <SectionHeading id="publications" n={2} label="Publications" />
          <div style={{ background: C.bg2, border: "1px solid rgba(0,229,160,.35)", borderRadius: 12, padding: "1.5rem", marginBottom: "1.1rem" }}>
            <div style={{ ...mono, display: "inline-flex", alignItems: "center", gap: ".4rem", fontSize: ".68rem", color: "#9effd8", background: "rgba(0,229,160,.12)", border: "1px solid rgba(0,229,160,.38)", borderRadius: 4, padding: ".22rem .56rem", marginBottom: ".8rem" }}>✓ Published & Presented · Springer (2026)</div>
            <div style={{ ...mono, fontSize: ".95rem", color: C.textB, fontWeight: 600, marginBottom: ".5rem" }}>A Hybrid Regime-Switching GARCH-EVT Model for Adaptive Value-at-Risk Estimation</div>
            <div style={{ fontSize: ".86rem", color: "#9abdd8", lineHeight: 1.65 }}>Seventh International Conference on Soft Computing and its Engineering Applications (icSoftComp 2025) · Springer · 2025–2026</div>
            <p style={{ fontSize: ".84rem", color: C.text, marginTop: ".55rem", lineHeight: 1.68 }}>
              Proposes a hybrid risk model integrating HMM-based regime detection, GARCH volatility, and EVT tail risk; outperforms benchmark VaR methods across NSEI, GSPC, and QQQ indices with calibrated 99% VaR coverage and lowest quantile loss (0.354×10⁻³).
            </p>
            <div style={{ display: "flex", gap: ".45rem", marginTop: ".95rem", flexWrap: "wrap" }}>
              <ExBtn url="https://link.springer.com/chapter/10.1007/978-3-032-22065-3_29" label="Springer Paper Link" />
              <ExBtn url="https://icsoftcomp.org/" label="icSoftComp 2025" />
            </div>
          </div>
          <div style={{ background: C.bg2, border: "1px solid rgba(251,191,36,.35)", borderRadius: 12, padding: "1.5rem" }}>
            <div style={{ ...mono, display: "inline-flex", alignItems: "center", gap: ".4rem", fontSize: ".68rem", color: "#fde68a", background: "rgba(251,191,36,.12)", border: "1px solid rgba(251,191,36,.4)", borderRadius: 4, padding: ".22rem .56rem", marginBottom: ".8rem" }}>● Under Review · IET Information Security (2026)</div>
            <div style={{ ...mono, fontSize: ".95rem", color: C.textB, fontWeight: 600, marginBottom: ".5rem" }}>Quantum-Secure Blockchain Framework with ML-Orchestrated Threat Protection</div>
            <div style={{ fontSize: ".86rem", color: "#9abdd8", lineHeight: 1.65 }}>Submitted to IET Information Security · 2026</div>
            <p style={{ fontSize: ".84rem", color: C.text, marginTop: ".55rem", lineHeight: 1.68 }}>
              Architected a quantum-resilient permissioned blockchain framework for secure transaction processing. Features adaptive security orchestration, achieving 100% attack detection, 99.5% budget utilisation, 22% qubit savings under attack scenarios, and 52.5% higher security value than standard optimization models under fixed qubit budgets.
            </p>
          </div>
        </section>

        {/* ── RESEARCH ── */}
        <section style={{ marginBottom: "5.5rem" }}>
          <SectionHeading id="research" n={3} label="Research" />
          <EntryCard
            title="Undergraduate Researcher — Quantum-Secure Blockchain"
            org="National Institute of Technology Karnataka · Surathkal"
            period="Aug 2025 – Apr 2026"
            isPaper
            venue="IET Information Security (Under Review)"
            points={[
              "Developed a quantum-secure blockchain framework for secure, quantum-resilient transaction processing",
              "Achieved <strong style='color:#7effd4'>100% attack detection</strong>, <strong style='color:#7effd4'>99.5% budget utilisation</strong>, and <strong style='color:#7effd4'>22% qubit savings</strong> under active attacks",
              "Achieved <strong style='color:#fde68a'>52.5% higher security value</strong> than standard optimization methods under fixed qubit budgets",
              "Paper submitted and under peer review at <strong style='color:#f5faff'>IET Information Security (2026)</strong>"
            ]}
          />
          <EntryCard
            title="Undergraduate Researcher — Quantitative Risk Modeling"
            org="National Institute of Technology Karnataka · Surathkal (under Dr. Bhawana Rudra)"
            period="Dec 2024 – Feb 2025"
            points={[
              "Built <strong style='color:#f5faff'>HMM-GARCH-EVT VaR model</strong> for NSEI, GSPC, and QQQ indices with calibrated 99% VaR coverage",
              "Achieved the lowest quantile loss (<strong style='color:#7effd4'>0.354×10⁻³</strong>) when benchmarked against standard VaR models for NSEI",
              "Achieved <strong style='color:#7effd4'>1.03%–1.21%</strong> realized exception rates against a 1% VaR target across multiple volatile market regimes",
              "Presented and published at <strong style='color:#f5faff'>icSoftComp 2025 · Springer</strong>"
            ]}
          />
          <EntryCard
            title="Research — Quantum Cryptographic Primitives via Chaotic Circuits & Quantum Scrambling"
            org="National Institute of Technology Karnataka · Surathkal"
            period="Jan 2026 – Present"
            isActive
            points={[
              "Researching quantum cryptographic primitives using <strong style='color:#ddd0ff'>chaotic quantum circuits</strong> and <strong style='color:#ddd0ff'>quantum scrambling</strong> techniques",
              "Investigating information-theoretic security properties achievable through quantum chaos — implications for QKD and secure multiparty computation"
            ]}
          />
        </section>

        {/* ── EXPERIENCE ── */}
        <section style={{ marginBottom: "5.5rem" }}>
          <SectionHeading id="experience" n={4} label="Experience" />
          <EntryCard
            title="Quantitative Research Consultant"
            org="WorldQuant BRAIN · Remote"
            period="May 2026 – Present"
            isActive
            points={[
              "Developed and submitted <strong style='color:#FFD700'>35+ quantitative alphas</strong> using factor modeling, ranking operators, and time-series signals",
              "Analyzed <strong style='color:#f5faff'>10+ years</strong> of global market data to identify momentum, volatility, and cross-sectional inefficiency patterns",
              "Performed cross-universe alpha validation and robustness testing across diverse global market regimes under production constraints",
              "Achieved <strong style='color:#FFD700'>Gold Level</strong> on WorldQuant BRAIN and ranked in the <strong style='color:#FFD700'>Top 20% globally in IQC 2026 Stage 1</strong>"
            ]}
          />
          <EntryCard
            title="Open Source Contributor"
            org="sktime / pytorch-forecasting · Remote"
            period="2025 – 2026"
            points={[
              "Merged <strong style='color:#f5faff'>PR #2199</strong> — enabling <code style='background:rgba(0,200,255,.1);color:#b8f0ff;padding:.1rem .3rem;border-radius:3px'>_load_config()</code> support for <code style='background:rgba(0,200,255,.1);color:#b8f0ff;padding:.1rem .3rem;border-radius:3px'>.pkl</code> pipelines in pytorch-forecasting",
              "Identified and resolved the missing <code style='background:rgba(0,200,255,.1);color:#b8f0ff;padding:.1rem .3rem;border-radius:3px'>get_model_cls()</code> definition in the forecasting pipeline (<strong style='color:#f5faff'>Issue #2187</strong>)"
            ]}
          />
          <EntryCard
            title="Open Source Contributor"
            org="GirlScript Summer of Code (GSSoC) · Remote"
            period="Jul 2025 – Oct 2025"
            points={[
              "Merged <strong style='color:#f5faff'>PR #593</strong> — FinBERT-based stock prediction model (LSTM-Transformer, <strong style='color:#f5faff'>R² 94.7%</strong>) into DataSentience-AIML",
              "Merged <strong style='color:#f5faff'>PR #710</strong> — NLP spam classifier achieving <strong style='color:#f5faff'>96% accuracy</strong> on 5,000+ benchmark messages",
              "Implemented complete pipelines: preprocessing → feature extraction → cross-validated training → hyperparameter tuning"
            ]}
          />
        </section>

        {/* ── HACKATHONS ── */}
        <section style={{ marginBottom: "5.5rem" }}>
          <SectionHeading id="hackathons" n={5} label="Hackathons & Competitions" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.2rem" }}>
            <div style={{ background: "rgba(251,191,36,.04)", border: "1px solid rgba(251,191,36,.35)", borderRadius: 12, padding: "1.6rem" }}>
              <div style={{ ...mono, display: "inline-flex", alignItems: "center", gap: ".5rem", fontSize: ".72rem", color: "#fde68a", background: "rgba(251,191,36,.12)", border: "1px solid rgba(251,191,36,.38)", borderRadius: 4, padding: ".28rem .65rem", marginBottom: "1rem" }}>
                🏆 2nd Runner-Up · ChronoForge Hackathon · Sep 2025
              </div>
              <div style={{ ...mono, fontSize: "1rem", color: C.textB, fontWeight: 600, marginBottom: ".3rem" }}>Real-Time AI Trading Agent (CoinQuest)</div>
              <Chips items={[["TensorFlow", "green"], ["XGBoost", "green"], ["LSTM", "amber"], ["Random Forest", "amber"], ["FastAPI", "coral"], ["WebSocket", "cyan"], ["Alpaca API", "coral"]]} />
              <ul style={{ paddingLeft: "1.2rem", marginTop: ".9rem" }}>
                {[
                  "Built AI trading system using ensemble models (Random Forest, XGBoost, LSTM) for signal generation",
                  "Incorporated human-in-the-loop control with <strong style='color:#f5faff'>5-minute retraining cycles</strong> for adaptive signal updates",
                  "Enforced risk controls: <strong style='color:#f5faff'>2% position sizing</strong>, automated stop-loss, and portfolio drawdown cap below 15%",
                  "Async WebSocket streaming processing 1,000+ ticks/min from Binance & Coinbase; logged 5,000+ trades"
                ].map((p, i) => <li key={i} style={{ fontSize: ".85rem", color: C.text, marginBottom: ".38rem", lineHeight: 1.68 }} dangerouslySetInnerHTML={{ __html: p }} />)}
              </ul>
              <div style={{ marginTop: "1rem" }}><GhBtn url="https://github.com/Quant-Code-Hacker/CoinQuest" label="View on GitHub" /></div>
            </div>

            <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1.6rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ ...mono, display: "inline-flex", alignItems: "center", gap: ".5rem", fontSize: ".72rem", color: "#9effd8", background: "rgba(0,229,160,.12)", border: "1px solid rgba(0,229,160,.38)", borderRadius: 4, padding: ".28rem .65rem", marginBottom: "1rem" }}>
                  ★ National Level Finalist · Smart India Hackathon
                </div>
                <div style={{ ...mono, fontSize: "1rem", color: C.textB, fontWeight: 600, marginBottom: ".5rem" }}>Smart India Hackathon (SIH)</div>
                <p style={{ fontSize: ".87rem", color: C.text, lineHeight: 1.7, marginBottom: ".8rem" }}>
                  Selected as National Level Finalist in Smart India Hackathon, tackling large-scale real-world technological challenges and software architecture.
                </p>
                <div style={{ ...mono, fontSize: ".8rem", color: "#4dd8ff", marginTop: ".4rem" }}>
                  Quantstorm Quantitative Competition: <strong style={{ color: "#FFD700" }}>Rank 202</strong>
                </div>
                <p style={{ fontSize: ".85rem", color: "#9abdd8", lineHeight: 1.6, marginTop: ".4rem" }}>
                  Competed in algorithmic strategy formulation, portfolio optimization, and quantitative risk management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section style={{ marginBottom: "5.5rem" }}>
          <SectionHeading id="projects" n={6} label="Projects" />

          <div style={{ marginBottom: "2.5rem" }}>
            <SectionLabel label="$  Quantitative Finance & Risk Computing" type="quant" />
            <div style={GRID}>{QF_PROJ.map(p => <ProjCard key={p.title} p={p} accent="quant" />)}</div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <SectionLabel label="⬡  Quantum Computing & Cryptography" type="quantum" />
            <div style={GRID}>{QC_PROJ.map(p => <ProjCard key={p.title} p={p} accent="quantum" />)}</div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <SectionLabel label=">_  Machine Learning & AI" type="ml" />
            <div style={GRID}>{ML_PROJ.map(p => <ProjCard key={p.title} p={p} accent="ml" />)}</div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <SectionLabel label="▣  Systems Programming & Tools" type="systems" />
            <div style={GRID}>{SYS_PROJ.map(p => <ProjCard key={p.title} p={p} accent="systems" />)}</div>
          </div>

          <div>
            <SectionLabel label="◈  Course Projects (NITK)" type="other" />
            <p style={{ ...mono, fontSize: ".76rem", color: "#8ab0cc", marginBottom: "1.1rem" }}>Academic projects from core computer science and IT curriculum courses at NIT Karnataka.</p>
            <div style={GRID}>{COURSE_PROJ.map(p => <CourseProjCard key={p.title} p={p} />)}</div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section style={{ marginBottom: "5.5rem" }}>
          <SectionHeading id="skills" n={7} label="Technical Skills" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem" }}>
            {SKILLS.map(sg => (
              <div key={sg.title} style={{ background: C.bg2, border: `1px solid ${sg.q ? "rgba(167,139,250,.3)" : C.border}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ ...mono, fontSize: ".68rem", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".85rem", paddingBottom: ".55rem", borderBottom: `1px solid rgba(0,200,255,.18)`, color: sg.q ? "#c8aaff" : "#4dd8ff" }}>{sg.title}</div>
                <Chips items={sg.items} />
              </div>
            ))}
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <SectionHeading id="achievements" n={8} label="Achievements & Competitive Accolades" />
          {[
            { icon: "◆", text: "Achieved <strong style='color:#FFD700'>Gold Level</strong> on WorldQuant BRAIN and ranked in the <strong style='color:#FFD700'>Top 20% globally in IQC 2026 Stage 1</strong> (May 2026)", color: "#FFD700" },
            { icon: "★", text: "Codeforces: <strong style='color:#f5faff'>Specialist</strong> (Max Rating: <strong style='color:#7effd4'>1456</strong>) · Handle: <code style='background:rgba(0,200,255,.1);color:#b8f0ff;padding:.1rem .3rem;border-radius:3px'>pranathi.uk</code>", color: C.green },
            { icon: "★", text: "ICPC AlgoQueen 2026: <strong style='color:#f5faff'>Rank 656</strong> nationally in competitive programming", color: C.violet },
            { icon: "★", text: "Smart India Hackathon (SIH): <strong style='color:#f5faff'>National Level Finalist</strong>", color: C.amber },
            { icon: "★", text: "Quantstorm (Quantitative Finance Competition): <strong style='color:#f5faff'>Rank 202</strong>", color: C.cyan },
            { icon: "🏆", text: "<strong style='color:#fde68a'>2nd Runner-Up</strong> — ChronoForge Hackathon · CoinQuest AI Trading Agent (Sep 2025)", color: C.amber },
            { icon: "◈", text: "Research paper published & presented at <strong style='color:#f5faff'>icSoftComp 2025 · Springer</strong> (2025–2026)", color: C.green },
            { icon: "◈", text: "Research paper under peer review at <strong style='color:#f5faff'>IET Information Security</strong> (2026)", color: C.violet },
            { icon: "→", text: "PR #2199 merged into <strong style='color:#f5faff'>sktime / pytorch-forecasting</strong>; Issue #2187 resolved (2025–2026)", color: C.green },
            { icon: "→", text: "PR #593 & PR #710 merged into <strong style='color:#f5faff'>GSSoC DataSentience-AIML</strong> (Oct 2025)", color: C.green },
            { icon: "★", text: "State Rank <strong style='color:#f5faff'>9th</strong> in XII Board Examinations — <strong style='color:#f5faff'>98.33%</strong>", color: C.coral },
            { icon: "★", text: "State Rank <strong style='color:#f5faff'>3rd</strong> in X Board Examinations — <strong style='color:#f5faff'>99.68%</strong>", color: C.coral },
          ].map((a, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: ".8rem", padding: ".95rem 1.15rem", background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 8, marginBottom: ".6rem" }}>
              <span style={{ color: a.color, flexShrink: 0, fontSize: "1rem" }}>{a.icon}</span>
              <span style={{ fontSize: ".88rem", color: C.text, lineHeight: 1.68 }} dangerouslySetInnerHTML={{ __html: a.text }} />
            </div>
          ))}
        </section>

        {/* ── LEADERSHIP ── */}
        <section style={{ marginBottom: "5.5rem" }}>
          <SectionHeading id="leadership" n={9} label="Leadership & Activities" />
          <EntryCard
            title="IEEE Student Member"
            org="NIT Karnataka Chapter · Surathkal"
            period="2025 – Present"
            isActive
            points={[
              "Organising Knowledge Sharing Sessions on machine learning as part of the <strong style='color:#f5faff'>Eureka</strong> IEEE technical event series at NIT Karnataka",
              "Presented a session on ML workflow fundamentals: data preprocessing, model training, and evaluation for a cross-disciplinary student audience"
            ]}
          />
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid rgba(0,200,255,.22)`, padding: "2rem 1.5rem", textAlign: "center", ...mono, fontSize: ".72rem", color: "#8ab0cc", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: ".7rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          {[
            ["GitHub (Quant-Code-Hacker)",    "https://github.com/Quant-Code-Hacker"],
            ["GitHub (Pranathi-Udaya-Kumar)",  "https://github.com/Pranathi-Udaya-Kumar"],
            ["LinkedIn",                       "https://linkedin.com/in/pranathi-udaya-kumar"],
            ["Codeforces",                     "https://codeforces.com/profile/pranathi.uk"],
            ["Springer Publication",           "https://link.springer.com/chapter/10.1007/978-3-032-22065-3_29"],
            ["WorldQuant BRAIN",               "https://platform.worldquantbrain.com/profile/performance"],
          ].map(([l, h]) => (
            <a key={l} href={h} target="_blank" rel="noreferrer" style={{ color: "#7aabcc", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <div style={{ color: "#6090b0" }}>© 2025–2026 Pranathi Udaya Kumar · NIT Karnataka · Surathkal</div>
      </footer>
    </>
  );
}
