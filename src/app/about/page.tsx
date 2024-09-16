import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Crafting Your Perfect Sound Experience",
  description: "Welcome to EchoBeatHub, where we transform the way you experience music. Our mission is to deliver a seamless, personalized listening journey that adapts to your unique tastes and preferences. We are a dedicated team of music enthusiasts and tech innovators committed to bringing you the highest quality in music streaming. With a blend of cutting-edge technology and a passion for melody, we strive to make every moment you spend with our app a harmonious escape. Learn more about our story, our vision, and the people who make it all possible.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Crafting Your Perfect Sound Experience"
        description="Welcome to EchoBeatHub, where we transform the way you experience music. Our mission is to deliver a seamless, personalized listening journey that adapts to your unique tastes and preferences. We are a dedicated team of music enthusiasts and tech innovators committed to bringing you the highest quality in music streaming. With a blend of cutting-edge technology and a passion for melody, we strive to make every moment you spend with our app a harmonious escape. Learn more about our story, our vision, and the people who make it all possible."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
