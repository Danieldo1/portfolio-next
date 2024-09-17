import React from "react";
import PageWrapper from "../PageTransitionWrapper";
import PageTransitionWrapper from "../PageTransitionWrapper";

const AboutPage = () => {
  return (
    <PageTransitionWrapper>
    <PageWrapper>
      <main>
        <h1>About Us</h1>
        {/* Your about page content here */}
      </main>
    </PageWrapper>
  </PageTransitionWrapper>
  );
};

export default AboutPage;
