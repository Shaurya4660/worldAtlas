export const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);

    
    event.target.reset();
  };

  return (
    <div className="contact-wrapper container">
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            placeholder="Enter your name"
          />

          <input
            type="email"
            name="email"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your email"
          />

          <textarea
            className="form-control"
            rows="10"
            name="message"
            autoComplete="off"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" className="btn">Send</button>
        </form>
      </section>
    </div>
  );
};
