import React from 'react'
import Carousel from '../ui/Carousel';
import Reviews from './Reviews';



const Home = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-[#f0effa] text-[#29272b]">

      {/* Hero Container */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 md:gap-12 md:px-10 md:py-16 lg:grid-cols-2 lg:px-12 lg:py-20 xl:px-16">
        {/* Left Content */}
        <div className="relative z-10 min-w-0">
          {/* Badge */}
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#d9d5f4] bg-[#e6e3fa] px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-[#6255c7] sm:mb-6 sm:px-4 sm:text-[10px]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7164e8]" />
            <span>Premium Services</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-xl font-serif text-4xl font-bold leading-[1.08] tracking-tight min-[400px]:text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-7xl">
            At Easy Logistics,
            <br />
            We deliver
            <br />
            <span className="text-[#6255d9]">International</span>
            <br />
            <span className="text-[#6255d9]">Shipping Services</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-md text-sm leading-6 text-[#77747f] sm:mt-6 sm:text-base sm:leading-7">
            At Easy Logistics, we provide comprehensive vehicle support, warehousing, and international shipping services to meet all your logistics needs.
            Internatonal shipping services, Transport services inclusive.
            Taxi Truck and metro Regional inter state transport services.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-7 flex flex-col items-stretch gap-4 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8 sm:gap-6">
            <a
              href="#shop"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#6255d9] px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-[#5043c3] sm:px-6"
            >
              Contact Us
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#vendors"
              className="inline-flex min-h-10 items-center justify-center text-sm font-medium text-[#55515c] transition hover:text-[#6255d9] min-[420px]:justify-start"
            >
              Trust and reliable services
            </a>
          </div>
        </div>

        {/* Right Image Composition */}
        <div className="relative mx-auto w-full min-w-0 max-w-md py-5 sm:max-w-lg sm:py-8 lg:max-w-none lg:py-10">
          {/* Decorative Background */}
          <div className="absolute inset-5 rounded-[1.5rem] bg-[#e3e0f5] sm:inset-6 sm:rounded-[2rem]" />

          {/* Main Image */}
          <div className="relative z-10 overflow-hidden rounded-[1.5rem] border border-white/70 bg-[#d9d6e6] shadow-xl shadow-[#aaa4d0]/20 sm:rounded-[2rem]">
            <img
              src="https://unsplash.com/photos/a-white-semi-truck-driving-down-a-rural-road-ZhNYKwjRMh4"
              alt="Tastefully decorated modern living room"
              loading="eager"
              className="aspect-[4/3.8] w-full object-cover sm:aspect-[4/4.2] lg:aspect-[4/4.2]"
            />
          </div>

          {/* Floating Product Card */}
          <div className="absolute -right-1 top-0 z-20 flex h-28 w-24 flex-col items-center justify-center rounded-xl border border-white/70 bg-[#c8e3f3] p-2 shadow-lg sm:-right-2 sm:h-32 sm:w-28 sm:p-3 md:-right-3 lg:-right-4">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-[#b9d8ec]">
              <div className="mb-2 h-10 w-8 rounded-sm border border-[#d8b9a7] bg-[#bb6665] shadow-sm sm:h-12 sm:w-10" />

              <span className="text-center text-[8px] font-bold uppercase tracking-wider text-[#393442] sm:text-[9px]">
                The Top Label
                <br />
                design
              </span>
            </div>
          </div>

          {/* Image Caption */}
          <span className="absolute -bottom-1 right-3 z-20 text-[11px] italic text-[#77718b] sm:right-4 sm:text-xs">
            — Decor
          </span>
        </div>
      </div>

       <section className="w-full px-2 py-5 sm:px-5 sm:py-7 md:px-5 md:py-8 lg:px-8">
      <div
        className="relative flex min-h-[400px] w-full flex-col
                   items-center justify-center overflow-hidden
                   rounded-2xl bg-gradient-to-br
                   from-[#1747d5] via-[#2458f5] to-[#4965ee]
                   px-4 py-12 text-center text-white
                   shadow-inner
                   sm:min-h-[440px] sm:rounded-3xl sm:px-8 sm:py-14
                   md:min-h-[500px] md:px-12 md:py-16
                   lg:min-h-[720px] lg:px-16"
      >
        {/* Subtle Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0
                     bg-[radial-gradient(ellipse_at_center,rgba(120,150,255,0.25),transparent_70%)]"
        />

        {/* Decorative Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-20
                     h-40 w-40 rounded-full bg-white/10 blur-3xl
                     sm:h-56 sm:w-56"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-16
                     h-48 w-48 rounded-full bg-indigo-300/20 blur-3xl
                     sm:h-64 sm:w-64"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-3xl">
          {/* Eyebrow Label */}
          <div
            className="mb-5 flex items-center justify-center gap-2
                       text-[11px] font-medium tracking-wide
                       text-white/80 sm:mb-6 sm:text-xs"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
              aria-hidden="true"
            >
              <path
                d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"
                fill="currentColor"
              />
            </svg>

            <span>For Creators</span>
          </div>

          {/* Heading */}
          <h2
            className="mx-auto max-w-full font-serif
                       text-3xl font-bold leading-tight
                       tracking-tight
                       min-[400px]:text-4xl
                       sm:text-5xl
                       md:text-6xl
                       lg:text-7xl"
          >
            Start selling with us
          </h2>

          {/* Description */}
          <p
            className="mx-auto mt-4 max-w-md text-sm
                       leading-6 text-white/75
                       sm:mt-5 sm:text-base sm:leading-7
                       md:max-w-xl"
          >
            Join our community of independent creators and reach
            thousands of customers worldwide.
          </p>

          {/* Call to Action */}
          <div className="mt-7 flex w-full justify-center sm:mt-8">
            <a
              href="/become-a-vendor"
              className="inline-flex min-h-12 w-full max-w-[240px]
                         items-center justify-center gap-3
                         rounded-full bg-[#f8f8fb]
                         px-5 py-3.5 text-xs font-semibold
                         text-[#373744] shadow-sm
                         transition duration-300
                         hover:-translate-y-0.5 hover:bg-white
                         hover:shadow-lg
                         focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-white
                         focus-visible:ring-offset-2
                         focus-visible:ring-offset-blue-600
                         sm:w-auto sm:min-w-[190px] sm:gap-4
                         sm:px-7"
            >
              Become a Vendor

              <span aria-hidden="true" className="text-base">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div>
      <Carousel slides={[]} />
       
    </div>
    <div>
        <Reviews />
    </div>

    </section>
  );
};

export default Home;

