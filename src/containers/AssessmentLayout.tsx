import React, { useEffect } from "react";
import AssessmentHero from "@/components/AssessmentHero";

interface IAssessmentLayoutProps {}

const AssessmentLayout: React.FunctionComponent<IAssessmentLayoutProps> = (
  props
) => {
  useEffect(() => {
    localStorage.openpages = Date.now();
    window.addEventListener(
      "storage",
      (e) => {
        if (e.key === "openpages") {
          localStorage.page_available = Date.now();
        }
        if (e.key === "page_available") {
          console.log("hi 1");
        }
      },
      false
    );
  }, []);
  return <AssessmentHero />;
};

export default AssessmentLayout;
