"use client";

import { useEffect, useState } from "react";
import Button from "@/components/general/button";

const ScheduleCalendly = () => {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  useEffect(() => {
    const checkCalendly = () => {
      if ((window as any).Calendly) {
        setIsCalendlyReady(true);
      } else {
        setTimeout(checkCalendly, 100);
      }
    };
    checkCalendly();
  }, []);

  const openCalendly = () => {
    if (isCalendlyReady) {
      (window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/msmithburger",
      });
    }
  };

  return (
    <Button
      className="mt-4 w-full md:w-[200px]"
      onClick={openCalendly}
      disabled={!isCalendlyReady}
    >
      Schedule a Call
    </Button>
  );
};

export default ScheduleCalendly;
