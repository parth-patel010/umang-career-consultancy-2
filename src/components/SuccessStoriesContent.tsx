import Image from "next/image";
import Link from "next/link";
import successStory1 from "../../public/success-story-1.jpg";
import successStory2 from "../../public/success-story-2.jpg";
import successStory3 from "../../public/success-story-3.jpg";
import successStory4 from "../../public/success-story-4.jpg";
import successStory5 from "../../public/success-story-5.jpg";
import successStory6 from "../../public/success-story-6.jpg";
import successStory7 from "../../public/success-story-7.jpg";
import successStory8 from "../../public/success-story-8.jpg";
import successStory9 from "../../public/success-story-9.jpg";

const stories = [
  {
    id: 1,
    name: "Srayan Talukdar",
    from: "Kolkata, West Bengal",
    visa: "France Student Visa",
    image: successStory1,
  },
  {
    id: 2,
    name: "Mukeshbhai Soni",
    from: "Vadodara, Gujarat",
    visa: "Australia Visitor Visa",
    image: successStory2,
  },
  {
    id: 3,
    name: "Mohammad Islam",
    from: "Bangladesh",
    visa: "France Student Visa",
    image: successStory3,
  },
  {
    id: 4,
    name: "Kunal Tayade",
    from: "Vadodara, Gujarat",
    visa: "France Student Visa",
    image: successStory4,
  },
  {
    id: 5,
    name: "Chandreshbhai & Bhartiben Kansara",
    from: "Vadodara, Gujarat",
    visa: "Canada Visitor Visa",
    image: successStory5,
  },
  {
    id: 6,
    name: "Jay Pinakin Vyas",
    from: "Vadodara, Gujarat",
    visa: "Canada Visa",
    image: successStory6,
  },
  {
    id: 7,
    name: "Premkumar Suthar",
    from: "Bangor University, UK • 19-Yr Study Gap",
    visa: "UK Student Visa",
    image: successStory7,
  },
  {
    id: 8,
    name: "Mrunal Patel",
    from: "Vadodara, Gujarat",
    visa: "UK Student Visa",
    image: successStory8,
  },
  {
    id: 9,
    name: "Devika Shah",
    from: "IPSA University • Aerospace Engineering",
    visa: "France Student Visa",
    image: successStory9,
  },
];

export default function SuccessStoriesContent() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1e38] via-[#0f2a4a] to-[#0a1e38] py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Gallery
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Real students, real visas, real dreams fulfilled. See how Umang
            Career Consultancy has helped students and families achieve their
            global aspirations.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest text-[#e52928] uppercase">
              Our Proud Moments
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0a1e38]">
              Dreams We Helped Come True
            </h2>
            <div className="mt-4 w-16 h-1 bg-[#e52928] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stories.map((story) => (
              <div
                key={story.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-50">
                  <Image
                    src={story.image}
                    alt={`${story.name} - ${story.visa} approved`}
                    fill
                    className="object-contain p-1 group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0a1e38]">
                      {story.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">{story.from}</p>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold self-start">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {story.visa} Approved
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0a1e38] to-[#14304d] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Your Success Story Starts Here
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Join hundreds of students and families who trusted Umang Career
            Consultancy to guide their journey abroad. Get expert visa
            consultation today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#e52928] text-white font-semibold rounded-lg hover:bg-[#d12322] transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-white/20 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
