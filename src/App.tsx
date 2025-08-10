import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Nifty Neuron</span>
          </div>
          <div className="nav-menu">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <button className="nav-cta">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Unlock the Power of
              <span className="gradient-text"> Artificial Intelligence</span>
            </h1>
            <p className="hero-subtitle">
              Nifty Neuron empowers businesses and individuals with cutting-edge AI solutions. Transform your workflow,
              automate complex tasks, and unlock insights with our intelligent platform.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Free Trial</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="neural-network">
              <div className="neural-rings">
                <div className="neural-ring neural-ring-1"></div>
                <div className="neural-ring neural-ring-2"></div>
                <div className="neural-ring neural-ring-3"></div>
              </div>
              <div className="neural-particles">
                <div className="neural-particle particle-1"></div>
                <div className="neural-particle particle-2"></div>
                <div className="neural-particle particle-3"></div>
                <div className="neural-particle particle-4"></div>
              </div>
              <div className="brain-icon"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Powerful AI Features</h2>
          <p className="section-subtitle">Discover how Nifty Neuron can revolutionize your business processes</p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Smart Analytics</h3>
              <p>
                Advanced machine learning algorithms analyze your data to provide actionable insights and predictive
                analytics.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Automated Processing</h3>
              <p>Streamline your workflow with intelligent automation that handles repetitive tasks with precision.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Precision Targeting</h3>
              <p>AI-driven recommendations and targeting help you reach the right audience at the right time.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Enterprise-grade security ensures your data remains protected while leveraging AI capabilities.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-time Insights</h3>
              <p>Get instant feedback and analytics with our real-time processing and monitoring capabilities.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Scalable Solutions</h3>
              <p>From startups to enterprises, our AI solutions scale with your business needs and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Join thousands of companies already using Nifty Neuron to drive innovation and growth.</p>
            <button className="btn-primary large">Get Started Today</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-text">Nifty Neuron</span>
              <p>Empowering the future with AI</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#api">API</a>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#careers">Careers</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="link-group">
                <h4>Resources</h4>
                <a href="#docs">Documentation</a>
                <a href="#blog">Blog</a>
                <a href="#support">Support</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Nifty Neuron. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
