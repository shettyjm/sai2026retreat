import Image from "next/image";

export function PageBanner() {
  return (
    <section className="page-shell pt-6 lg:pt-8">
      <div className="card overflow-hidden">
        <div className="relative aspect-[16/5.4] min-h-[126px] w-full bg-navy sm:aspect-[16/6] sm:min-h-[200px] lg:aspect-[16/4] lg:min-h-[240px]">
          <div
            className="absolute inset-y-0 left-0 w-[68%] [mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)] sm:[mask-image:none] sm:[-webkit-mask-image:none]"
          >
            <Image
              src="/photo2.png"
              alt="Sathya Sai Baba"
              fill
              priority
              sizes="(min-width: 1280px) 750px, 62vw"
              className="object-cover [object-position:center_50%] sm:[object-position:center_35%]"
            />
          </div>
          <div
            className="absolute inset-y-0 right-0 w-[68%]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, black 0%, black 40%, transparent 100%)",
              maskImage:
                "linear-gradient(to left, black 0%, black 40%, transparent 100%)",
            }}
          >
            <Image
              src="/sitepic.jpeg"
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
