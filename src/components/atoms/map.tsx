"use client";
import { cn } from "@/utils";

export const Map = ({ className }: { className?: string }) => (
  <div className={cn("min-h-[400px]", className)}>
    <iframe
      width="100%"
      height="400px"
      id="gmap_canvas"
      src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Pszczy%C5%84ska%20116%20%20Warszowice+(Serwis%20Blacharsko%20Lakierniczy%20IMPORTOWO)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    />
  </div>
);
