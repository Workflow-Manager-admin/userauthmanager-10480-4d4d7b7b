import React, { useState } from "react";

/**
 * LoginForm for authenticating a user.
 * Includes:
 *  - Built-in validation (email & password, both required, valid email).
 *  - Password masking (toggle visibility).
 *  - Minimal error messaging.
 *  - Modern, minimal, responsive card form.
 */
// PUBLIC_INTERFACE
function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError(null); // Clear error on input
  };

  // Email format check
  const emailValid = (str) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str.trim());

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password) {
      setError("Please fill out all fields.");
      return;
    }
    if (!emailValid(form.email)) {
      setError("Enter a valid email address.");
      return;
    }
    // Simulate error for demo (replace with API call in production)
    setError("Login failed: Invalid credentials.");
    // Optionally: Reset fields here or on success
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
      <h2 className="auth-title">Sign in</h2>
      <div className="form-group">
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="user@example.com"
          autoFocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">Password</label>
        <div className="password-field">
          <input
            id="login-password"
            type={showPass ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
          <button
            type="button"
            className="mask-toggle"
            tabIndex={-1}
            aria-label={showPass ? "Hide password" : "Show password"}
            onClick={() => setShowPass((v) => !v)}
          >
            {showPass ? "🙈" : "👁️"}
          </button>
        </div>
      </div>
      {error && (
        <div className="form-error" role="alert">
          {error}
        </div>
      )}
      <button className="form-btn" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
