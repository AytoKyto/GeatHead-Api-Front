import React from "react";
import HeroSite from "../../../components/site/HeroSite";
import FeatureSectionSite from "../../../components/site/FeatureSectionsSite";
import CtaSectionSite from "../../../components/site/CtaSectionsSite";
import FootersSite from "../../../components/site/FootersSite";
import PriceSection from "../../../components/Ui/Other/PriceSection";

export default function Home() {
  return (
    <>
      <HeroSite />
      <FeatureSectionSite />
      <PriceSection />
      <CtaSectionSite />
      <FootersSite />
    </>
  );
}
