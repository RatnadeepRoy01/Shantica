import ResearchCarousel from "./MessageCard"

export default function FacultyResearchSection() {
  return (
  <section className="w-full bg-white">
   <div className="mx-auto px-6 pt-16 sm:pt-20 flex flex-col items-center w-full">
    <h2 className="text-3xl font-bold mb-4 text-black text-center">Media</h2>
    <p className="text-gray-600 mb-8 text-center">Explore the latest media coverage of our business</p>
   </div>
   {/* Discussion papers carousel */}
  <ResearchCarousel />
</section>
  );
}



