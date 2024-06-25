import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full max-w-full"
      data-url="https://calendly.com/s1834r1/30min?background_color=1a1a1a&text_color=8d00fb"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default CalendlyEmbed;
