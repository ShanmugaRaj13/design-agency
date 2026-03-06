import React from "react";

function Services() {

  const services = [
    {
      title: "UI/UX Design",
      desc: "Beautiful and user friendly interfaces",
        img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
    },
    {
      title: "Web Development",
      desc: "Responsive and scalable websites",
        img: "https://cdn-icons-png.flaticon.com/512/2721/2721264.png"

    },
    {
      title: "Branding",
      desc: "Create a strong brand identity",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      title: "Digital Marketing",
      desc: "Grow your online presence",
        img: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
    }
  ];

  return (
    <section id="services" className="services py-5 bg-light">

      <div className="container text-center">

        <h2 className="mb-5">Our Services</h2>

        <div className="row">

          {services.map((service, index) => (

            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>

              <div className="card service-card h-100">

                <div className="card-body">

                  <img
                    src={service.img}
                    alt={service.title}
                    className="service-icon mb-3"
                  />

                  <h5>{service.title}</h5>

                  <p>{service.desc}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;