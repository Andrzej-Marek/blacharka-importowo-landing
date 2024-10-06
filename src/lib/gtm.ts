"use client";
import { sendGTMEvent } from "@next/third-parties/google";

export const gtmPageView = (rest = {}) => {
  if (typeof window === "undefined") return;

  sendGTMEvent({ event: "page_view", url: window.location.href, ...rest });
};

export const gtmOnPhoneClick = (rest = {}) => {
  if (typeof window === "undefined") return;

  sendGTMEvent({ event: "phone_clicked", url: window.location.href, ...rest });
};
