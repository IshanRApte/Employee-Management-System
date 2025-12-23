function Contact() {
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
      <h1>Contact Us</h1>

      <p style={{ fontSize: "16px", color: "#555" }}>
        We’re here to help. Reach out to us for any questions, feedback, or support
        related to the Employee Management System.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h2>Contact Information</h2>

      <p>
        <strong>Email:</strong> support@abcdef.com
      </p>

      <p>
        <strong>Phone:</strong> +91 1111111111
      </p>

      <p>
        <strong>Location:</strong> Pune, India
      </p>

      <h2>Support Hours</h2>
      <p>
        Monday – Friday<br />
        9:00 AM – 6:00 PM
      </p>

      <p style={{ marginTop: "30px", color: "#777", fontSize: "14px" }}>
        This is a demo project created for learning purposes. Contact details are
        for demonstration only.
      </p>
    </div>
  );
}

export default Contact;
