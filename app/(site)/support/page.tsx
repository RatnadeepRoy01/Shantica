import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shantica Support - We're Here to Help",

  // other metadata
  description: "Need assistance? Explore our support resources or contact our team for help with Shantica services.",
};


const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
