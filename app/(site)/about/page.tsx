import React from "react";
import { Metadata } from "next";
import About from "@/components/About";
import OurJourney from "@/components/ourJourney/ourJouney";
import Feature from "@/components/Features";

export const metadata: Metadata = {
  title: "About Us | Shantica Leadership Academy",
  description: "Learn about the story behind Shantica, our mission, and the founders who walked away from corporate careers to empower youth in Northeast India.",
};

const AboutPage = () => {
  const values = [
    { icon: "🔥", title: "Radical Belief", description: "Every young person in Northeast India carries untapped potential. We exist to unlock it." },
    { icon: "🤝", title: "Genuine Mentorship", description: "Our mentors don't just advise — they courier books, fly across continents, and call before job interviews." },
    { icon: "🌍", title: "Global Access", description: "We bring mentors from Amsterdam, Dubai, London & the USA directly to students in tier-3 towns." },
    { icon: "🎯", title: "Action Over Theory", description: "Street plays, mock interviews, live sales challenges — every module is built around doing." },
    { icon: "💡", title: "Inclusive by Design", description: "Accessibly priced programs and free initiatives ensure no student is left behind." },
    { icon: "📈", title: "Measurable Impact", description: "We track every participant's growth — from their first hesitant introduction to their final placement." },
  ];

  const whyNE = [
    { stat: "~50%", label: "Youth Unemployment", desc: "Nearly half of NE India's educated youth remain unemployed — not from lack of talent, but lack of exposure." },
    { stat: "3x", label: "Fewer Opportunities", desc: "Access to quality internships and career networks is up to 3× lower in tier-3 towns vs metros." },
    { stat: "1 in 10", label: "Students Leave NE India", desc: "Brain drain is real. We build enough opportunity that youth can thrive right here at home." },
  ];


  return (
    <div className="pb-20 pt-35 md:pt-40">

      {/* Hero */}
      <section className="px-4 md:px-8 xl:px-0 mb-10">
        <div className="mx-auto max-w-c-1154 text-center">
          <span className="mb-4.5 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">OUR MISSION</span>
          </span>
          <h1 className="mx-auto mb-6 text-4xl font-extrabold text-black dark:text-white md:text-6xl lg:w-4/5 leading-tight">
            Potential is everywhere. It just needs the right guidance.
          </h1>
          <p className="mx-auto text-xl text-waterloo dark:text-manatee md:w-3/4 leading-relaxed">
            We close the gap between where young people start and what they're capable of becoming.
          </p>
        </div>
      </section>

      {/* About Component */}
      <About variant="about" />

      {/* Why NE India */}
      <section className="mt-24 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-c-1235">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">The Opportunity Gap</h2>
            <p className="text-xl text-waterloo dark:text-manatee md:w-1/2 mx-auto">
              The real story is the young person in a small town with big dreams and no roadmap.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyNE.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-stroke dark:border-strokedark bg-white dark:bg-black p-8 shadow-solid-2 text-center">
                <div className="text-6xl font-extrabold text-primary mb-3">{item.stat}</div>
                <div className="text-base font-bold text-black dark:text-white uppercase tracking-wider mb-3">{item.label}</div>
                <p className="text-base text-waterloo dark:text-manatee leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mt-24 bg-alabaster dark:bg-blacksection py-20 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-c-1235">
          <Feature variant="about" />
        </div>
      </section>

      <OurJourney />

      {/* Founders */}
      <section className="mt-24 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-c-1235">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Meet Our Founders</h2>
            <p className="text-xl text-waterloo dark:text-manatee md:w-1/2 mx-auto">
              Corporate leaders who walked away from big careers to build something that matters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Sucharita */}
            <div className="rounded-2xl border border-stroke dark:border-strokedark bg-white dark:bg-black p-10 shadow-solid-3 hover:border-primary/50 transition-colors duration-300">
              <div className="flex items-center gap-5 mb-6">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-3xl uppercase select-none">SD</div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">Sucharita Dhar</h3>
                  <p className="text-base font-medium text-primary uppercase tracking-wider">Founder & CEO</p>
                </div>
              </div>
              <p className="text-lg text-waterloo dark:text-manatee mb-6 leading-relaxed">
                Former HR Leader at Genpact (11+ years, 15+ awards). Young India Fellow, Ashoka University. Left corporate life to build Shantica and give Northeast India's youth the mentor she wishes she had.
              </p>
              <ul className="text-base text-waterloo dark:text-manatee space-y-2 list-disc pl-5">
                <li>200+ Career & Leadership Sessions conducted</li>
                <li>100+ Global Volunteer Mentors built</li>
                <li>Personally mentored by Sandeep Maheshwari</li>
              </ul>
            </div>

            {/* Tapashree */}
            <div className="rounded-2xl border border-stroke dark:border-strokedark bg-white dark:bg-black p-10 shadow-solid-3 hover:border-secondary/50 transition-colors duration-300">
              <div className="flex items-center gap-5 mb-6">
                <div className="h-20 w-20 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-3xl uppercase select-none">TD</div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">Tapashree Deb</h3>
                  <p className="text-base font-medium text-secondary uppercase tracking-wider">Co-Founder & L&D Director</p>
                </div>
              </div>
              <p className="text-lg text-waterloo dark:text-manatee mb-6 leading-relaxed">
                10+ years in Learning & Development across Hospitality and F&B. IHM Guwahati graduate, certified Happiness Coach and Train-the-Trainer. Started by empowering rural youth in Assam under DDU-GKY.
              </p>
              <ul className="text-base text-waterloo dark:text-manatee space-y-2 list-disc pl-5">
                <li>Leadership workshops for 2000+ individuals</li>
                <li>Led CISF Leadership Sessions at Silchar Airport</li>
                <li>DDU-GKY rural empowerment trainer</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Life at Shantica */}
      <section className="mt-24 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-c-1235">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Life at Shantica</h2>
            <p className="text-xl text-waterloo dark:text-manatee md:w-1/2 mx-auto">
              Interactive workshops, street plays, global mentor sessions, and a community that pushes you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: "EXPERIENTIAL LEARNING", color: "text-primary", title: "Workshops & Bootcamps", desc: "Leadership activities and public-speaking exercises built to push comfort zones." },
              { tag: "OUTDOOR EXPOSURE", color: "text-secondary", title: "Street Plays & Sales Challenges", desc: "Facing real crowds to build raw, unshakeable confidence." },
              { tag: "GLOBAL NETWORK", color: "text-primary", title: "Weekly Mentor Sessions", desc: "Live sessions with coaches from Amsterdam, Bangalore, Dubai and beyond." },
              { tag: "CAREER READINESS", color: "text-secondary", title: "Mock Interviews & Resume Labs", desc: "Hands-on resume reviews, LinkedIn audits, and industry mock rounds." },
              { tag: "COMMUNITY", color: "text-primary", title: "Cohort Bonding", desc: "A close-knit group who push each other and celebrate every win together." },
              { tag: "GUEST SESSIONS", color: "text-secondary", title: "Industry Masterclasses", desc: "Fireside conversations with leaders from IIT, IIM, and global MNCs." },
            ].map((card, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl bg-alabaster dark:bg-blacksection p-8 flex flex-col justify-end aspect-[4/3] border border-stroke dark:border-strokedark hover:border-primary/50 transition-all">
                <span className={`text-xs uppercase ${card.color} font-semibold tracking-wider mb-2`}>{card.tag}</span>
                <h4 className="text-xl font-bold text-black dark:text-white mb-2">{card.title}</h4>
                <p className="text-base text-waterloo dark:text-manatee">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-c-1154 text-center rounded-3xl 
    bg-gradient-to-br from-indigo-50 to-blue-100 
    dark:bg-none dark:bg-[radial-gradient(ellipse_at_top,_#312e81,_#0f172a)]
    border border-indigo-200 dark:border-indigo-700/60
    shadow-[0_4px_32px_rgba(99,102,241,0.10)] dark:shadow-[0_0_48px_rgba(99,102,241,0.18)]
    p-14">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-5">
            Ready to be part of Shantica?
          </h2>
          <p className="text-xl text-waterloo dark:text-indigo-200 mb-10 md:w-2/3 mx-auto">
            Student, institution, or mentor — there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/stories"
              className="inline-block rounded-full bg-primary px-10 py-4 text-lg font-semibold text-white hover:bg-primaryho transition-colors"
            >
              Explore success Stories
            </a>
            <a
              href="/contact"
              className="inline-block rounded-full 
          border border-indigo-300 dark:border-indigo-500/70 
          px-10 py-4 text-lg font-semibold 
          text-black dark:text-indigo-100 
          hover:border-primary dark:hover:border-indigo-400 
          hover:bg-indigo-50 dark:hover:bg-indigo-900/30
          transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;
