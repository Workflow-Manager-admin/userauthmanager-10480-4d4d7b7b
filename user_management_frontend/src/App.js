import React, { useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

// PUBLIC_INTERFACE
function App() {
  /**
   * Root authentication app with theme toggle and navigation
   */
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState("login"); // "login" or "register"

  // Apply theme to root document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // PUBLIC_INTERFACE
  const handleNav = (nav) => {
    setPage(nav);
  };

  return (
    <div className="App">
      <header className="auth-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>
      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-toggle-tabs">
            <button
              className={`auth-tab ${page === "login" ? "active" : ""}`}
              onClick={() => handleNav("login")}
              type="button"
              aria-current={page === "login" ? "page" : undefined}
            >
              Login
            </button>
            <button
              className={`auth-tab ${page === "register" ? "active" : ""}`}
              onClick={() => handleNav("register")}
              type="button"
              aria-current={page === "register" ? "page" : undefined}
            >
              Register
            </button>
          </div>
          {page === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </main>
      <footer className="auth-footer">
        <span>
          <strong>UserAuth</strong> · Minimal React UI &nbsp;|&nbsp;{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            React
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
