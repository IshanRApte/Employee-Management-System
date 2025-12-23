function About() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "60px auto",
        padding: "30px",
        fontFamily: "Arial",
        color: "#333",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>
        Employee Management System
      </h1>

      <p style={{ fontSize: "16px", color: "#555" }}>
        A simple and user-friendly application to manage employee information efficiently.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h2>About the Application</h2>
      <p>
        This Employee Management System is a frontend-focused web application
        built using React. It allows users to view and manage basic employee
        details through a clean and intuitive interface.
      </p>

      <p>
        The project is designed to demonstrate core React concepts such as
        component-based architecture, state handling, and reusable UI design.
      </p>

      <h2>Purpose</h2>
      <p>
        The main goal of this project is to practice and apply modern frontend
        development concepts while building a practical application that
        resembles real-world systems.
      </p>

      <h2>Technologies Used</h2>
      <ul>
        <li>React (JavaScript)</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>

      <p style={{ marginTop: "30px", color: "#777", fontSize: "14px" }}>
        This project is created for learning and demonstration purposes.
      </p>
    </div>
  );
}

export default About;
