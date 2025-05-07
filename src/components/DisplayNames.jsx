import React, { useState } from "react";

const DisplayNames = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      setError("Please fill out both first and last names.");
      setSubmittedName(""); // Don't show old name
    } else {
      setError("");
      setSubmittedName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)
            }
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submittedName && (
        <p>
          <strong>Full Name:</strong> {submittedName}
        </p>
      )}
    </div>
  );
};

export default DisplayNames;
