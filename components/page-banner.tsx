import Image from "next/image";

export function PageBanner() {
  return (
    <section className="page-shell pt-6 pb-2 lg:pt-8 lg:pb-4">
      <div className="card overflow-hidden">
        <div className="relative aspect-[16/4] min-h-[140px] w-full bg-navy sm:min-h-[180px] lg:min-h-[240px]">
          <div
            className="absolute inset-y-0 left-0 w-[62%]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 65%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, black 0%, black 65%, transparent 100%)",
            }}
          >
            <Image
              src="/nat04.jpg"
              alt="Sathya Sai Baba"
              fill
              priority
              sizes="(min-width: 1280px) 750px, 62vw"
              className="object-cover"
              style={{ objectPosition: "27% 10%" }}
            />
          </div>
          <div
            className="absolute inset-y-0 right-0 w-[62%]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, black 0%, black 65%, transparent 100%)",
              maskImage:
                "linear-gradient(to left, black 0%, black 65%, transparent 100%)",
            }}
          >
            <Image
              src="/site.jpg"
              alt="Monte Toyon Camp & Conference Center"
              fill
              priority
              sizes="(min-width: 1280px) 750px, 62vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
