import React, {useState} from "react";

function Contact() {

  const [submitted,setSubmitted]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-5 bg-light">

      <div className="container">

        <h2 className="text-center mb-4">Contact Us</h2>

        <form className="col-lg-6 mx-auto" onSubmit={handleSubmit}>

          <input
          className="form-control mb-3"
          placeholder="Name"
          required
          />

          <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          required
          />

          <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Message"
          required
          />

          <button className="btn btn-primary w-100">
            Send Message
          </button>

          {submitted && (
            <p className="text-success text-center mt-3">
              Message sent successfully!
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;