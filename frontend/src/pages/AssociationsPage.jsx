import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import data from "../data/associations.json"; // Adjust the path as necessary
import CreateSection from "../admin/CreateSection";

const AssociationsPage = () => {
  console.log(data);
  return (
    <main className="main">
      {data.sections.map((section, ind) => (
        <section id={section.id} key={ind}>
          <div className="container mt-5">
            <h1 className="mb-4">{section.title}</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {section.items.map((item, index) => (
                <div className="col" key={index}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                      <a href={item.linkHref}>{item.linkText}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <CreateSection />
    </main>
  );
};

export default AssociationsPage;
