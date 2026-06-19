import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            A clothes shop or clothes store is any shop which sells items of
            ready-made clothing.A small shop which sells expensive or 
            designer clothing may be called a boutique.A shop that sells 
            clothes for a narrowly restricted market such as school
            uniforms oroutdoor sportsmay be called an outfitter.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
