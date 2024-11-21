"use client";

import { useEffect } from "react";

export default function TermlyScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.termly.io/embed-policy.js?policy=2f954640-8750-4a06-ace7-eb62b4f32f4e";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
