import React from 'react'



const Home = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-[#f0effa] text-[#29272b]">
      {/* Navigation */}
      <nav className="relative z-30 flex min-h-16 items-center justify-between gap-3 bg-[#faf9f4] px-4 py-3 sm:px-6 lg:px-12 xl:px-16">
        {/* Logo */}
        <a
          href="/"
          className="shrink-0 text-lg font-semibold tracking-tight sm:text-xl"
        >
          Vendora
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 text-[11px] font-medium uppercase tracking-wider lg:flex xl:gap-8 xl:text-xs">
          <a href="#" className="transition-colors hover:text-indigo-600">
            Home
          </a>
          <a href="#shop" className="transition-colors hover:text-indigo-600">
            Shop
          </a>
          <a
            href="#vendors"
            className="transition-colors hover:text-indigo-600"
          >
            Vendors
          </a>
          <a
            href="#categories"
            className="transition-colors hover:text-indigo-600"
          >
            Categories
          </a>
          <a href="#sell" className="transition-colors hover:text-indigo-600">
            Sell
          </a>
        </div>

        {/* Navigation Actions */}
        <div className="flex shrink-0 items-center gap-2 text-sm sm:gap-4">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-8 items-center justify-center rounded-lg text-xl transition hover:bg-[#eeecf8] sm:w-9"
          >
            ⌕
          </button>

          <button
            type="button"
            aria-label="Shopping cart"
            className="flex h-9 w-8 items-center justify-center rounded-lg text-base transition hover:bg-[#eeecf8] sm:w-9"
          >
            🛒
          </button>

          <a
            href="#signin"
            className="hidden whitespace-nowrap font-medium transition-colors hover:text-indigo-600 sm:inline-block"
          >
            Sign in
          </a>

          <a
            href="#get-started"
            className="whitespace-nowrap rounded-lg bg-[#6255d9] px-3 py-2.5 text-[10px] font-semibold text-white transition hover:bg-[#5043c3] sm:px-5 sm:text-xs"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Container */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 md:gap-12 md:px-10 md:py-16 lg:grid-cols-2 lg:px-12 lg:py-20 xl:px-16">
        {/* Left Content */}
        <div className="relative z-10 min-w-0">
          {/* Badge */}
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#d9d5f4] bg-[#e6e3fa] px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-[#6255c7] sm:mb-6 sm:px-4 sm:text-[10px]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7164e8]" />
            <span>Premium curated vendors</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-xl font-serif text-4xl font-bold leading-[1.08] tracking-tight min-[400px]:text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-7xl">
            Discover unique
            <br />
            finds from
            <br />
            <span className="text-[#6255d9]">independent</span>
            <br />
            <span className="text-[#6255d9]">creators</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-md text-sm leading-6 text-[#77747f] sm:mt-6 sm:text-base sm:leading-7">
            Shop handcrafted goods, premium essentials, and one-of-a-kind
            finds from trusted vendors around the world. Elevate your
            lifestyle today.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-7 flex flex-col items-stretch gap-4 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8 sm:gap-6">
            <a
              href="#shop"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#6255d9] px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-[#5043c3] sm:px-6"
            >
              Explore Collection
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#vendors"
              className="inline-flex min-h-10 items-center justify-center text-sm font-medium text-[#55515c] transition hover:text-[#6255d9] min-[420px]:justify-start"
            >
              Meet Our Makers
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
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
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
                It's original
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
    </section>
  );
};

export default Home;

