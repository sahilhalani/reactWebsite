import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
      e.preventDefault();
      alert(`My Name is ${data.fname} and my phone number is ${data.phone} and my email is ${data.email} and my message is ${data.message}`)
      setData({
          fname: "",
    phone: "",
    email: "",
    message: "",
      })
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  required
                  type="text "
                  className="form-control"
                  name="fname"
                  value={data.fname}
                  onChange={inputChange}
                  placeholder="Enter you name"
                />
                <label className="form-label">
                  Phone
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={data.phone}
                  onChange={inputChange}
                
                />
                <label className="form-label">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={inputChange}
                  placeholder="Enter your E-mail"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={data.message}
                  onChange={inputChange}
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
