import React, { useState } from "react";

/**
 * RegisterForm for creating a new user account.
 * Includes:
 *  - Validation (all fields required, email format, password requirements, match)
 *  - Mask/unmask for password/confirm
 *  - Minimal error messaging
 *  - Modern, minimalistic, responsive styling
 */
// PUBLIC_INTERFACE
function RegisterForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: ""
  });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState(null);

  // Basic password requirement: 6+ chars for demo purposes.
  const passwordValid = (str) => str.length >= 6;
  const emailValid = (str) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str.trim());

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // All fields required
    if (!form.email.trim() || !form.password || !form.confirm) {
      setError("All fields are required.");
      return;
    }
    if (!emailValid(form.email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!passwordValid(form.password)) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError(
      "Registration failed (simulated — integration pending)."
    );
    // Reset form or select-to-login on success in a full app
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
      <h2 className="auth-title">Register</h2>
      <div className="form-group">
        <label htmlFor="reg-email">Email</label>
        <input
          id="reg-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@email.com"
          autoFocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="reg-password">Password</label>
        <div className="password-field">
          <input
            id="reg-password"
            type={showPass ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Choose a password"
          />
          <button
            type="button"
            className="mask-toggle"
            tabIndex={-1}
            aria-label={showPass ? "Hide password" : "Show password"}
            onClick={() => setShowPass((b) => !b)}
          >
            {showPass ? "🙈" : "👁️"}
          </button>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="reg-confirm">Confirm Password</label>
        <div className="password-field">
          <input
            id="reg-confirm"
            type={showConfirm ? "text" : "password"}
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Repeat password"
          />
          <button
            type="button"
            className="mask-toggle"
            tabIndex={-1}
            aria-label={showConfirm ? "Hide password" : "Show password"}
            onClick={() => setShowConfirm((b) => !b)}
          >
            {showConfirm ? "🙈" : "👁️"}
          </button>
        </div>
      </div>
      {error && (
        <div className="form-error" role="alert">
          {error}
        </div>
      )}
      <button className="form-btn" type="submit">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
