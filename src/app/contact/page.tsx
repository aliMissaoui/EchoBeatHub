import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | We're Here to Help",
  description: "We are committed to providing exceptional support to ensure you have the best experience with our music app. Whether you have questions, need technical assistance, or require guidance on using our features, our dedicated support team is here to assist you. Explore our comprehensive FAQs, access helpful resources, or reach out directly to our support team for personalized help. Your satisfaction is our top priority, and we're here to resolve any issues you may encounter and enhance your overall experience.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Support: We're Here to Help"
        description="We are committed to providing exceptional support to ensure you have the best experience with our music app. Whether you have questions, need technical assistance, or require guidance on using our features, our dedicated support team is here to assist you. Explore our comprehensive FAQs, access helpful resources, or reach out directly to our support team for personalized help. Your satisfaction is our top priority, and we're here to resolve any issues you may encounter and enhance your overall experience."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
