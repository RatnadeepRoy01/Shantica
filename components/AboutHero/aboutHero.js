import Image from "next/image";

const HeroAboutSection = () => {
    return (
        <div className="animate_left relative hidden md:grid md:grid-cols-2 gap-4 h-screen w-full p-4">

            <div className="relative w-full h-full">
                <Image
                    alt="About"
                    fill
                    className="rounded-2xl object-cover"
                    src="/images/about/about-01.webp"
                />
            </div>

            <div className="relative w-full h-full">
                <Image
                    alt="About"
                    fill
                    className="rounded-2xl object-cover"
                    src="/images/about/about-02.webp"
                />
            </div>

            <div className="relative w-full h-full">
                <Image
                    alt="About"
                    fill
                    className="rounded-2xl object-cover"
                    src="/images/about/about-03.webp"
                />
            </div>

            <div className="relative w-full h-full">
                <Image
                    alt="About"
                    fill
                    className="rounded-2xl object-cover"
                    src="/images/about/about-01.webp"
                />
            </div>

        </div>
    );
};

export default HeroAboutSection;