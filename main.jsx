import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [page, setPage] = useState("Home");
  const [reports, setReports] = useState([
    { id: "CA1001", title: "Road damage", location: "Mysuru", category: "Road", status: "In Progress", priority: "High" },
    { id: "CA1002", title: "Water leakage", location: "Vijayanagar", category: "Water", status: "Pending", priority: "Critical" },
    { id: "CA1003", title: "Garbage overflow", location: "Kuvempunagar", category: "Waste", status: "Resolved", priority: "Medium" }
  ]);
  const [form, setForm] = useState({
    title: "", location: "", category: "Road", description: ""
  });
  const [search, setSearch] = useState("");
  const [submitted, setSubmitted] = useState("");

  const go = (p) => {
    setPage(p);
    setSubmitted("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function submitReport(e) {
    e.preventDefault();
    const id = "CA" + (1004 + reports.length - 3);
    setReports([{ ...form, id, status: "Pending", priority: "Under review" }, ...reports]);
    setSubmitted(id);
    setForm({ title: "", location: "", category: "Road", description: "" });
  }

  const nav = ["Home", "Citizen Portal", "Track Complaint", "AI Intelligence", "City Map", "About Us"];

  return (
    <div className="website">

      <header className="header">
        <div className="logo" onClick={() => go("Home")}>
          <span className="logo-icon">✦</span>
          <span>Civic<span className="green">AI</span>
            <small>SMART CITY SOLUTIONS</small>
          </span>
        </div>

        <nav>
          {nav.map(n => (
            <button key={n}
              className={page === n ? "nav-active" : ""}
              onClick={() => go(n)}>
              {n}
            </button>
          ))}
        </nav>

        <button className="nav-cta" onClick={() => go("Citizen Portal")}>
          Report an Issue ↗
        </button>
      </header>

      <main>

        {page === "Home" && (
          <>
            <section className="hero-section">
              <div className="hero-content">
                <div className="tag">✦ TECHNOLOGY FOR BETTER COMMUNITIES</div>
                <h1>Building a better city,<br />
                  <span>one action at a time.</span>
                </h1>
                <p>
                  Empower your community. Report civic problems.
                  Let intelligent technology turn complaints into
                  meaningful action.
                </p>
                <div className="hero-buttons">
                  <button className="main-btn" onClick={() => go("Citizen Portal")}>
                    Report a Problem ↗
                  </button>
                  <button className="outline-btn" onClick={() => go("AI Intelligence")}>
                    Explore AI Intelligence
                  </button>
                </div>
                <div className="hero-trust">
                  <span>✓ Easy reporting</span>
                  <span>✓ Transparent tracking</span>
                  <span>✓ Smarter decisions</span>
                </div>
              </div>
              <div className="hero-visual">
                <div className="visual-circle">
                  <div className="city-emoji">🏙️</div>
                  <div className="visual-label label-one">✦ AI Analysis</div>
                  <div className="visual-label label-two">📍 City Insights</div>
                  <div className="visual-label label-three">✓ Smart Solutions</div>
                </div>
              </div>
            </section>

            <section className="stats-strip">
              <div><h2>{reports.length}+</h2><p>Demo Reports</p></div>
              <div><h2>24/7</h2><p>Digital Access</p></div>
              <div><h2>4</h2><p>Problem Categories</p></div>
              <div><h2>AI</h2><p>Smart Intelligence</p></div>
            </section>

            <section className="section">
              <div className="center-heading">
                <span className="tag">OUR PLATFORM</span>
                <h2>One platform. <span>Many solutions.</span></h2>
                <p>Everything your community needs to create a better city.</p>
              </div>

              <div className="feature-grid">
                {[
                  ["📢", "Easy Complaint Reporting", "Report damaged roads, water problems, waste and more."],
                  ["🧠", "AI-Powered Analysis", "Understand reports and identify similar problems."],
                  ["📍", "Smart City Mapping", "Discover problem locations and recurring hotspots."],
                  ["📊", "Live Insights", "Turn complaint data into useful decision-making insights."],
                  ["🔎", "Track Progress", "Follow your complaint from submission to resolution."],
                  ["🤝", "Transparent Action", "Help citizens and authorities work together."]
                ].map(f => (
                  <div className="feature-card" key={f[1]}>
                    <div className="feature-icon">{f[0]}</div>
                    <h3>{f[1]}</h3>
                    <p>{f[2]}</p>
                    <span>Discover more ↗</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="action-banner">
              <div>
                <span className="tag">BE THE CHANGE</span>
                <h2>Your city deserves better.</h2>
                <p>One small report can start a meaningful change.</p>
              </div>
              <button className="main-btn" onClick={() => go("Citizen Portal")}>
                Submit a Complaint →
              </button>
            </section>
          </>
        )}

        {page === "Citizen Portal" && (
          <section className="inner-page">
            <span className="tag">CITIZEN SERVICES</span>
            <h1>Make your voice <span>count.</span></h1>
            <p className="page-intro">Report a civic issue and help us make your neighbourhood better.</p>

            <div className="form-layout">
              <form className="complaint-form" onSubmit={submitReport}>
                <h2>Submit a complaint</h2>
                <p>Fill in the details below to report an issue.</p>

                <label>Problem title</label>
                <input required placeholder="Example: Damaged road near school"
                  value={form.title}
                  onChange={e => setForm({...form, title:e.target.value})}/>

                <label>Problem category</label>
                <select value={form.category}
                  onChange={e => setForm({...form, category:e.target.value})}>
                  <option>Road</option>
                  <option>Water</option>
                  <option>Waste</option>
                  <option>Electricity</option>
                  <option>Public Safety</option>
                  <option>Other</option>
                </select>

                <label>Location</label>
                <input required placeholder="Enter street or area"
                  value={form.location}
                  onChange={e => setForm({...form, location:e.target.value})}/>

                <label>Problem description</label>
                <textarea required rows="4"
                  placeholder="Explain the problem..."
                  value={form.description}
                  onChange={e => setForm({...form, description:e.target.value})}/>

                <button className="main-btn full-button">Submit Complaint →</button>

                {submitted && (
                  <div className="success-message">
                    ✓ Complaint submitted! Your ID is {submitted}.
                    Save this ID to track your complaint.
                  </div>
                )}
              </form>

              <div className="side-info">
                <div className="side-info-icon">📋</div>
                <h2>How it works</h2>
                <p>01. Submit your civic complaint.</p>
                <p>02. The report enters the review process.</p>
                <p>03. Authorities review and assign the issue.</p>
                <p>04. Follow the resolution progress.</p>
                <div className="info-note">Your voice matters. Every report can help improve the community.</div>
              </div>
            </div>
          </section>
        )}

        {page === "Track Complaint" && (
          <section className="inner-page">
            <span className="tag">TRANSPARENT SERVICES</span>
            <h1>Track your <span>complaint.</span></h1>
            <p className="page-intro">Enter your complaint ID to check its current status.</p>

            <div className="tracking-box">
              <h2>Complaint tracking</h2>
              <input placeholder="Example: CA1001"
                value={search} onChange={e => setSearch(e.target.value)}/>
              <button className="main-btn" onClick={() => setSubmitted("searched")}>Track Now →</button>

              {submitted === "searched" && (
                <div className="tracking-result">
                  {reports.filter(r => r.id.toLowerCase() === search.trim().toLowerCase()).length ? (
                    reports.filter(r => r.id.toLowerCase() === search.trim().toLowerCase()).map(r => (
                      <div key={r.id}>
                        <h3>{r.title}</h3>
                        <p>Complaint ID: {r.id}</p>
                        <p>Location: {r.location}</p>
                        <strong className="green">{r.status}</strong>
                        <div className="timeline">
                          <span>✓ Submitted</span>
                          <span>{r.status === "Pending" ? "● Under review" : "✓ Reviewed"}</span>
                          <span>{r.status === "Resolved" ? "✓ Resolved" : "○ Resolution pending"}</span>
                        </div>
                      </div>
                    ))
                  ) : <p>No matching complaint found. Check your ID.</p>}
                </div>
              )}
            </div>
          </section>
        )}

        {page === "AI Intelligence" && (
          <section className="inner-page">
            <span className="tag">INTELLIGENT CIVIC TECHNOLOGY</span>
            <h1>Meet the power of <span>AI.</span></h1>
            <p className="page-intro">Transform unstructured citizen reports into actionable insights.</p>
            <div className="ai-grid">
              {[
                ["🧠", "Smart Classification", "Organize citizen reports into meaningful categories."],
                ["🔍", "Duplicate Detection", "Identify reports that may describe the same problem."],
                ["⚡", "Priority Analysis", "Help identify urgent problems based on public safety and impact."],
                ["📍", "Hotspot Discovery", "Find areas with recurring civic complaints."],
                ["📝", "Action Briefs", "Create concise summaries to help authorities decide what to do."],
                ["📊", "Pattern Recognition", "Discover trends hidden in complaint data."]
              ].map(a => (
                <div className="ai-card" key={a[1]}>
                  <span>{a[0]}</span>
                  <h2>{a[1]}</h2>
                  <p>{a[2]}</p>
                  <small>AI FEATURE · DEVELOPMENT DEMO</small>
                </div>
              ))}
            </div>
          </section>
        )}

        {page === "City Map" && (
          <section className="inner-page">
            <span className="tag">LOCATION INTELLIGENCE</span>
            <h1>Explore your <span>city.</span></h1>
            <p className="page-intro">View reported civic issues and their locations.</p>
            <div className="map-demo">
              <div className="map-road road-a"></div>
              <div className="map-road road-b"></div>
              <div className="map-road road-c"></div>
              <div className="map-city-name">MYSURU</div>
              <span className="map-marker marker-a">📍</span>
              <span className="map-marker marker-b">📍</span>
              <span className="map-marker marker-c">📍</span>
              <span className="map-marker marker-d">📍</span>
            </div>
            <p className="demo-disclaimer">Illustrative map preview. Real geographic locations will be connected in the next development stage.</p>
            <div className="map-list">
              {reports.map(r => (
                <div key={r.id}><span>📍</span><strong>{r.title}</strong><small>{r.location}</small><b>{r.status}</b></div>
              ))}
            </div>
          </section>
        )}

        {page === "About Us" && (
          <section className="inner-page about-page">
            <span className="tag">ABOUT CIVICAI</span>
            <h1>Technology for a <span>better tomorrow.</span></h1>
            <p className="page-intro">CivicAI is a smart civic complaint intelligence concept designed to connect citizens and authorities through technology.</p>
            <div className="about-card">
              <h2>Our Mission</h2>
              <p>To transform scattered citizen complaints into prioritized, explainable and trackable action.</p>
            </div>
            <div className="about-card">
              <h2>The Problem We Solve</h2>
              <p>Repeated complaints, delayed responses and lack of transparency make it difficult to identify and solve community problems.</p>
            </div>
            <div className="about-card">
              <h2>Our Vision</h2>
              <p>A future where every citizen can report problems easily and follow meaningful progress towards resolution.</p>
            </div>
          </section>
        )}

      </main>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="logo footer-logo">
              <span className="logo-icon">✦</span>
              <span>Civic<span className="green">AI</span><small>SMART CITY SOLUTIONS</small></span>
            </div>
            <p>Building better communities through intelligent civic technology.</p>
          </div>
          <div><h3>Explore</h3>
            {nav.map(n => <button key={n} onClick={() => go(n)}>{n}</button>)}
          </div>
          <div><h3>Get involved</h3>
            <button onClick={() => go("Citizen Portal")}>Report an Issue</button>
            <button onClick={() => go("Track Complaint")}>Track a Complaint</button>
            <button onClick={() => go("AI Intelligence")}>AI Intelligence</button>
          </div>
        </div>
        <div className="footer-bottom">© 2026 CivicAI. Built for smarter and better communities.</div>
      </footer>

      <button className="admin-shortcut" onClick={() => go("Admin Dashboard")}>Admin ↗</button>

      {page === "Admin Dashboard" && (
        <section className="inner-page">
          <span className="tag">ADMINISTRATION</span>
          <h1>City <span>Dashboard.</span></h1>
          <div className="admin-stats">
            <div><small>Total Reports</small><h2>{reports.length}</h2></div>
            <div><small>Pending</small><h2>{reports.filter(r=>r.status==="Pending").length}</h2></div>
            <div><small>In Progress</small><h2>{reports.filter(r=>r.status==="In Progress").length}</h2></div>
            <div><small>Resolved</small><h2>{reports.filter(r=>r.status==="Resolved").length}</h2></div>
          </div>
          {reports.map(r => (
            <div className="admin-report" key={r.id}>
              <div><strong>{r.title}</strong><small>{r.id} · {r.location}</small></div>
              <select value={r.status} onChange={e => setReports(reports.map(x=>x.id===r.id?{...x,status:e.target.value}:x))}>
                <option>Pending</option><option>In Progress</option><option>Resolved</option>
              </select>
            </div>
          ))}
        </section>
      )}

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);