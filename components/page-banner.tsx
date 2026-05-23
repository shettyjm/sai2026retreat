import Image from "next/image";

import heroBanner from "@/assets/herobanner.png";

export function PageBanner() {
  return (
    <section className="page-shell pt-6 pb-2 lg:pt-8 lg:pb-4">
      <div className="card overflow-hidden">
        <div className="relative aspect-[16/4] min-h-[140px] w-full sm:min-h-[180px] lg:min-h-[240px]">
          <Image
            src={heroBanner}
            alt="Region 7 Sai Retreat banner"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
            style={{ objectPosition: "20% 35%" }}
          />
        </div>
      </div>
    </section>
  );
}
