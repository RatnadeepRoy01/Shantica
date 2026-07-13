import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | Shantica Leadership Academy",
  description: "Read the real success stories of Shantica Leadership Academy graduates who secured placements at ONGC, TCS, PwC, and Genpact.",
};

const SuccessStoriesPage = () => {
  const stories = [
    { name: "Aparupa Banerjee", role: "Gandhi Fellow → ONGC Officer", image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/CEB4AEBE-ADF0-42E0-BAA6-678AC793D4DD.JPG%20(1).jpeg", tag: "Government & Fellowship", quote: "I had applied everywhere and got rejected. With constant guidance from Shantica, I cracked the Gandhi Fellowship and landed a job at ONGC. I can't express what Shantica has done for me." },
    { name: "Chitradeep Bhowmik", role: "Offers at TCS, HDFC & TP", image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_20260312_022542.jpg.jpeg", tag: "Multiple Offers", quote: "The trainers were so inspiring I joined their internship too! My mentor guided me for a year. I cracked 3 jobs — it was the best thing that happened to me." },
    { name: "Prabhakaran Singha", role: "Finance Associate, Genpact Bangalore", image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%2010.29.36%20PM.jpeg", tag: "Finance & Corporate", quote: "I spent 6 months building my communication and confidence with Sucharita Ma'am. I got a Finance job in Bangalore. This course changed my life!" },
    { name: "Tanmoy Goswami", role: "Associate Manager, PwC Kolkata", image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG-20260419-WA0005.jpg.jpeg", tag: "Big 4 Placement", quote: "Tanmoy's dedication helped him land a role at PwC Kolkata. His journey reflects the power of clarity, preparation, and perseverance." },
    { name: "Sripali Deb", role: "Young India Fellow, Ashoka University", image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%208.53.08%20PM.jpeg", tag: "Prestigious Fellowship", quote: "Sripali was selected for the prestigious Young India Fellowship at Ashoka University — a programme known for nurturing future leaders and changemakers." },
    { name: "Supradeep Dey", role: "Praxis Business School & International Intern",image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.10.04%20PM.jpeg", tag: "MBA & International", quote: "Supradeep was selected for an international internship at Ask Arun Academy and admitted to the MBA programme at Praxis Business School, Kolkata." },
    { 
      name : "Anusuya Kahar", 
      role: "Management Trainee, Gyanbarry", 
      image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2064.JPG.jpeg",
      tag: "Career Advancement", 
      quote: "With focused guidance and determination, Anusuya earned her position as an Applicant Management Trainee at Gyanbarry, Dubai." 
    },
    { 
     name: "Lingthoibi Singha", 
     role: "KRG Unit Sales Manager, ICICI Lombard", 
     image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%2010.38.32%20PM.jpeg",
     tag: "Sales & Corporate", 
     quote: "Lingthoibi secured her role as KRG Unit Sales Manager at ICICI Lombard through strategic preparation and professional excellence" 
    }
  ];
      
  const speakers = [
    { name: "Debadutta Deb", role: "Lead, Amazon (IIM Bangalore)" },
    { name: "Jayasmita Dutta", role: "AVP, Accenture" },
    { name: "Arunabha", role: "HR Lead, Landmark Group (Dubai)" },
    { name: "Vishakha Phugalia", role: "HR Lead, Miro (Amsterdam)" },
    { name: "Raka Choudhury", role: "Scientist (USA)" },
    { name: "Ratnadeep Deb", role: "Analytics, Mastek (London)" },
  ];

  const impactStats = [
    { number: "10,000+", label: "Students Impacted" },
    { number: "90%", label: "Placement Rate" },
    { number: "15+", label: "Industries Reached" },
    { number: "100+", label: "Global Mentors" },
  ];

  const tagColors: Record<string, string> = {
    "Government & Fellowship": "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    "Multiple Offers": "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    "Finance & Corporate": "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    "Big 4 Placement": "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    "Prestigious Fellowship": "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
    "Career Advancement": "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400",
    "Communications & PR": "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400",
    "Sales & Corporate": "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
  };

const placements = [
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.15.13%20PM%20(2).jpeg", name: "Genpact" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.17.38%20PM.jpeg", name: "TCS" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.15.13%20PM%20(1).jpeg", name: "PwC" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.18.32%20PM.jpeg", name: "ONGC" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/OIP.jpeg", name: "Accenture" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.19.17%20PM.jpeg", name: "HDFC Bank" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.20.16%20PM.jpeg", name: "Qube Communication" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.15.13%20PM.jpeg", name: "Praxis Business School" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.20.17%20PM.jpeg", name: "Ashoka University" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.15.12%20PM.jpeg", name: "Assam University" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.20.17%20PM.jpeg", name: "Ask Arun Academy" },
  { image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-13%20at%201.21.30%20PM.jpeg", name: "Teleperformance" },
];

  const featured = [
    {
      name: "Chitradeep Bhowmik",
      quote: "Shantica builds you from the inside out. It's not coaching — it's a transformation.",
      image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_20260312_022542.jpg.jpeg",
    },
    {
      name: "Prabhakaran Singha",
      quote: "I came in shy and lost. I walked out with a job in Bangalore and confidence to grab every opportunity.",
      image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/WhatsApp%20Image%202026-07-09%20at%2010.29.36%20PM.jpeg",
    },
    {
      name: "Aparupa Banerjee",
      quote: "My mentor stood by me at my lowest and celebrated with me when I cracked it.",
      image: "https://ik.imagekit.io/ptcg0bvf3/Shantica/CEB4AEBE-ADF0-42E0-BAA6-678AC793D4DD.JPG%20(1).jpeg",
    },
  ];

  return (
    <div className="pb-20 pt-35 md:pt-40">

      {/* Hero */}
      <section className="px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-c-1154">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="mb-4.5 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">STUDENT OUTCOMES</span>
              </span>
              <h1 className="mb-6 text-4xl font-extrabold text-black dark:text-white md:text-6xl leading-tight">
                Where you start doesn't define where you finish.
              </h1>
              <p className="text-xl text-waterloo dark:text-manatee leading-relaxed">
                Meet the alumni who rebuilt their confidence, learned practical skills, and landed career-launching roles.
              </p>
            </div>
            <div className="lg:col-span-5">
              {/* TODO: Replace with a real graduation / cohort celebration photo */}
              <img
                src="https://ik.imagekit.io/ptcg0bvf3/Shantica/IMG_2251.JPG.jpeg?updatedAt=1783432450483"
                alt="Shantica Leadership Academy alumni celebrating"
                className="w-full h-auto rounded-3xl border border-stroke dark:border-strokedark shadow-solid-3 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-16 bg-alabaster dark:bg-blacksection py-14 px-4 md:px-8">
        <div className="mx-auto max-w-c-1154">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-extrabold text-primary mb-2">
                  {stat.label === "Students Impacted" ? (
                    <>
                      <span className="block md:hidden">10k+</span>
                      <span className="hidden md:block">{stat.number}</span>
                    </>
                  ) : (
                    stat.number
                  )}
                </div>
                <div className="text-base font-bold text-black dark:text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="mt-24 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-c-1154">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Hear from Our Alumni</h2>
            <p className="text-xl text-waterloo dark:text-manatee md:w-1/2 mx-auto">
              Every story started with doubt, a decision to try, and a mentor who believed first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => {
              const hiddenClass = index >= 4 ? "hidden md:block" : "";
              return (
                <div key={index} className={`rounded-2xl border border-stroke dark:border-strokedark bg-white dark:bg-black p-8 shadow-solid-2 flex flex-col hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 ${hiddenClass}`}>
                  <div className="flex items-center gap-4 mb-4">
                    {/* TODO: Replace with the alumnus's real photo */}
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-14 w-14 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-black dark:text-white">{story.name}</h3>
                      <p className="text-sm font-semibold text-primary uppercase tracking-wide">{story.role}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block w-fit ${tagColors[story.tag] ?? ""}`}>{story.tag}</span>
                  <p className="text-base text-waterloo dark:text-manatee leading-relaxed italic">&ldquo;{story.quote}&rdquo;</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="mt-24 bg-alabaster dark:bg-blacksection py-16 px-4 md:px-8">
        <div className="mx-auto max-w-c-1154">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">In Their Own Words</h2>
            <p className="text-xl text-waterloo dark:text-manatee md:w-1/2 mx-auto">
              Three voices. Three journeys. One recurring theme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((t, idx) => (
              <div key={idx} className="rounded-2xl border border-stroke dark:border-strokedark bg-white dark:bg-black p-8 shadow-solid-2 relative">
                <div className="text-6xl text-primary/20 font-serif absolute top-4 left-6 select-none">&ldquo;</div>
                <div className="flex justify-center mb-6 pt-4">
                  {/* TODO: Replace with the alumnus's real photo */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-20 w-20 rounded-full object-cover border-4 border-alabaster dark:border-blacksection shadow-solid-2"
                  />
                </div>
                <p className="text-lg text-waterloo dark:text-manatee leading-relaxed italic mb-6 text-center">{t.quote}</p>
                <div className="border-t border-stroke dark:border-strokedark pt-4 text-center">
                  <span className="text-base font-bold text-black dark:text-white block">{t.name}</span>
                  <span className="text-sm text-primary">Shantica Alumnus</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sorting Hat Series */}
      <section className="mt-24 bg-alabaster dark:bg-blacksection py-16 px-4 md:px-8">
        <div className="mx-auto max-w-c-1154">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-sm font-bold text-secondary uppercase tracking-widest block mb-3">SIGNATURE INITIATIVE</span>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-5">The Sorting Hat Series</h2>
              <p className="text-xl text-waterloo dark:text-manatee leading-relaxed mb-6">
                A free monthly live series on social media connecting regional youth with international industry experts — giving students in tier-3 towns a window into global careers.
              </p>
              <div className="p-5 rounded-xl border border-secondary/20 bg-secondary/10 text-base font-semibold text-black dark:text-white">
                💡 10+ episodes completed, reaching thousands of youth in Silchar.
              </div>
            </div>
            <div className="lg:col-span-7 bg-white dark:bg-black border border-stroke dark:border-strokedark rounded-2xl p-8 shadow-solid-3">
              <h3 className="text-base font-bold text-black dark:text-white uppercase tracking-wider mb-5">Featured Speakers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {speakers.map((s, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-alabaster dark:bg-blacksection border border-stroke dark:border-strokedark">
                    <span className="text-base font-bold text-black dark:text-white block">{s.name}</span>
                    <span className="text-sm text-waterloo dark:text-manatee">{s.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Destinations */}
      <section className="mt-24 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-c-1154">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Where Alumni Are Today</h2>
            <p className="text-xl text-waterloo dark:text-manatee md:w-1/2 mx-auto">
              Shantica graduates are building careers across industries, cities, and countries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {placements.map((org, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-black p-4 text-center shadow-solid-2 hover:border-primary/40 transition-colors">
                {/* TODO: Replace with the organisation's real logo */}
                <img
                  src={org.image}
                  alt={`${org.name} logo`}
                  className="h-8 w-auto object-contain"
                />
                <span className="text-sm font-semibold text-black dark:text-white">{org.name}</span>
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
            Ready to write your own story?
          </h2>
          <p className="text-xl text-waterloo dark:text-indigo-200 mb-10 md:w-2/3 mx-auto">
            Our mentors are ready. Your seat in the next cohort is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="inline-block rounded-full bg-primary px-10 py-4 text-lg font-semibold text-white hover:bg-primaryho transition-colors"
            >
              Explore About
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

export default SuccessStoriesPage;