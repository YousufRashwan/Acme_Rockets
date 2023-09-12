import React from "react";
import rocketdab from "./assets/rocketdab.png";
import rocketman from "./assets/rocketman.png";
import rocketlaunch from "./assets/rocketlaunch.png";
import rocketride from "./assets/rocketride.png";

function App() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div>
            <button
              id="hamburger-button"
              onClick={() => setShowMenu(!showMenu)}
              className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
            >
              {/* &#9776; */}
              <div
                className={`bg-white w-8 h-1 rounded absolute top-4
              transition-all duration-500 -mt-0.5 before:content-[''] before:bg-white before:w-8
              before:h-1 before:rounded before:absolute before:-translate-x-4
              before:-translate-y-3 before:duration-500 before:transition-all
              after:content-[''] after:bg-white after:w-8
              after:h-1 after:rounded after:absolute after:-translate-x-4
              after:translate-y-3 after:duration-500 after:transition-all 
              ${
                showMenu &&
                `before:translate-y-0 before:rotate-45 after:-translate-y-0
                after:-rotate-45 bg-transparent rotate-[720deg]`
              }`}
              ></div>
            </button>
            <nav
              className="hidden md:block space-x-8 text-xl"
              aria-label="main"
            >
              <a href="#rockets" className="hover:opacity-90">
                Our Rockets
              </a>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact Us
              </a>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          className={`${showMenu ? "flex" : "hidden"}
        bg-black absolute top-68 text-5xl flex-col
        justify-content-center w-full origin-top animate-open-menu`}
          onClick={() => setShowMenu(false)}
        >
          {/* <button className="text-8xl px-6 self-end">
            &times;
          </button> */}
          <nav
            className="min-h-screen bg-black flex flex-col py-8 items-center"
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full text-center py-8 hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full text-center py-8 hover:opacity-90"
            >
              Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full text-center py-8 hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full text-center py-8 hover:opacity-90"
            >
              Contact
            </a>
            <a
              href="#footer"
              className="w-full text-center py-8 hover:opacity-90"
            >
              Footer
            </a>
          </nav>
        </section>
      </header>
      <main className="max-w-4xl mx-auto">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row
        p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height
        tallscreen:section-min-height"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
              We Boldy Go{" "}
              <span className="text-indigo-700 dark:text-indigo-300">
                Where No Rocket
              </span>{" "}
              Has Gone Before...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              We&apos;re building rockets for the next century today. From the
              moon to Mars, Jupiter and beyond...
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              Think Acme Rockets.
            </p>
          </article>
          <img src={rocketdab} alt="Rocket Dab" className="w-1/2" />
        </section>

        <hr className="w-1/2 mx-auto bg-black dark:bg-white" />

        <section
          id="rockets"
          className="my-12 p-6 scroll-mt-20 widescreen:section-min-height
        tallscreen:section-min-height"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-slate-900 dark:text-white">
            Our Rockets
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
              <img src={rocketman} alt="Explorer" className="w-1/2 mb-8" />
              <h3 className="text-3xl text-slate-900 dark:text-white text-center">
                Explorer
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
                $
              </p>
              <p className="block sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Affordable Exploration
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
              <img src={rocketride} alt="Adventurer" className="w-1/2 mb-8" />
              <h3 className="text-3xl text-slate-900 dark:text-white text-center">
                Adventurer
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
                $$
              </p>
              <p className="block sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Best Selling Rocket!
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 py-6 px-2 rounded-3xl shadow-xl">
              <img src={rocketlaunch} alt="Infinity" className="w-1/2 mb-8" />
              <h3 className="text-3xl text-slate-900 dark:text-white text-center">
                Infinity
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
                $$$
              </p>
              <p className="block sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Luxury Starship
              </p>
            </li>
          </ul>
        </section>

        <hr className="w-1/2 mx-auto bg-black dark:bg-white" />
        <section
          id="testimonials"
          className="my-12 p-6 scroll-mt-20 widescreen:section-min-height
        tallscreen:section-min-height"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-slate-900 dark:text-white">
            Testimonials
          </h2>
          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black py-12 pl-14 pr-8 rounded-3xl relative">
              <p
                className="text-2xl sm:text-3xl text-left mt-2 text-white
              dark:text-slate-400 before:content-['\201C'] before:font-serif
              before:text-white before:text-9xl before:top-0 before:left-0
              before:absolute before:opacity-25 before:translate-x-2 before:translate-y-2
              after:content-['\201D'] after:font-serif
              after:text-white after:text-9xl after:-bottom-20 after:right-0
              after:absolute after:opacity-25 after:-translate-x-2 after:-translate-y-2"
              >
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden crate as expected. Life-long customer! A++ shopping
                experience.
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212;Wile E. Coyote, Genius
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black py-12 pl-14 pr-8 rounded-3xl relative">
              <p
                className="text-2xl sm:text-3xl text-left mt-2 text-white
              dark:text-slate-400 before:content-['\201C'] before:font-serif
              before:text-white before:text-9xl before:top-0 before:left-0
              before:absolute before:opacity-25 before:translate-x-2 before:translate-y-2
              after:content-['\201D'] after:font-serif
              after:text-white after:text-9xl after:-bottom-20 after:right-0
              after:absolute after:opacity-25 after:-translate-x-2 after:-translate-y-2"
              >
                The Acme Adventurer Rocket has thwarted my Illudium Q-36
                Explosive Space Modulator on several occassions.{" "}
                <span className="italic">This makes me very, very angry!</span>{" "}
                Nevertheless, K-9 and I have awarded Acme the Martian contract
                for space exploration rockets based on Acme&apos;s quality and
                sturdy designs.
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212;Marvin The Martian &amp; K-9
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black py-12 pl-14 pr-8 rounded-3xl relative">
              <p
                className="text-2xl sm:text-3xl text-left mt-2 text-white
              dark:text-slate-400 before:content-['\201C'] before:font-serif
              before:text-white before:text-9xl before:top-0 before:left-0
              before:absolute before:opacity-25 before:translate-x-2 before:translate-y-2
              after:content-['\201D'] after:font-serif
              after:text-white after:text-9xl after:-bottom-20 after:right-0
              after:absolute after:opacity-25 after:-translate-x-2 after:-translate-y-2"
              >
                I knew I not only wanted &#8212;{" "}
                <span className="italic">I needed</span> &#8212; Acme&apos;s
                Infinity Rocket for my mission in space. Acme delivered in one
                day! Nothing says
                <q className="italic">Takeme to your leader</q> like Acme&apos;s
                Infinity Rocket! 💯
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212;Buzz Lightyear
            </figcaption>
          </figure>
        </section>

        <hr className="w-1/2 mx-auto bg-black dark:bg-white" />

        <section
          id="contact"
          className="my-12 p-6 scroll-mt-16 widescreen:section-min-height
        tallscreen:section-min-height"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-slate-900 dark:text-white">
            Contact Us
          </h2>
          <form
            action=""
            className="max-w-4xl mx-auto text-2xl sm:text-3xl
          flex flex-col items-left gap-4"
          >
            <label htmlFor="subjects">Subject</label>
            <input
              type="text"
              id="subjects"
              name="subjects"
              required
              minLength={3}
              maxLength={60}
              placeholder="Your Subject"
              className="w-full text-2xl sm:text-3xl p-3
            text-black border border-solid border-slate-900
            dark:border-none rounded-xl"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
              className="w-full text-2xl sm:text-3xl p-3
            text-black border border-solid border-slate-900
            dark:border-none rounded-xl"
            ></textarea>

            <button
              className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500
            w-48 p-3 rounded-xl border border-solid text-white
            border-slate-900 dark:border-none"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer id="footer" className="bg-teal-700 text-white text-xl">
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row justify-between">
          <address>
            <h2>Acme Rocket-Powered Products, Inc.</h2>
            555 Astro Way
            <br />
            Fairfield, New Jersey 12345-5555
            <br />
            Email:{" "}
            <a href="mailto:inquiries@acmerockets.com">
              Inquires@AcmeRockets.com
            </a>
            <br />
            Phone: <a href="tel:+15555555555">(555) 555-5555</a>
          </address>
          <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">
              Copyright &copy; <span id="year">2022</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
