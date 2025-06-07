import { Timeline } from "@/components/ui/timeline";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const achievements = [
  {
    title: "The Kickoff",
    year: "2023",
    points: ["Bootstrapped IIT Delhi's first dedicated AI-ML society", "Started small, built from scratch"]
  },
  {
    title: "Expansion Mode", 
    year: "2024",
    points: ["Hosted packed events, hackathons, and bootcamps", "Collaborated with tech companies and student communities"]
  },
  {
    title: "Vertical Launch and infra upgrade",
    year: "2025", 
    points: ["Split into two verticals — Canvas for research, Brain for events", "Allows us to deeper without overlap", "Fully revamped our website", "Turned scattered docs into a central hub for projects, content, and resources"]
  },
  {
    title: "Ongoing Journey",
    year: "Present",
    points: ["Still student-run, still curiosity-led", "Building smarter, scaling wider, keeping it real"]
  }
].reverse();

const timelineData = achievements.map((a) => {
  return {
    title: a.year,
    content: (
      <div key={a.year}>
        <h3 className="text-xl font-bold text-white mb-4">{a.title}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-400 mb-2">Milestones</h4>
            <ul className="text-neutral-300 space-y-2">
              {a.points.map((p) => <li key={p}>• {p}</li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

export const LegacySection = () => {
  return (
    <div className="relative w-full bg-black min-h-screen">
      {/* Stars Background - Covers entire section */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <StarsBackground 
          starDensity={0.0005}
          allStarsTwinkle={true}
          twinkleProbability={0.8}
          minTwinkleSpeed={0.5}
          maxTwinkleSpeed={1.5}
          className="absolute inset-0"
        />
        <ShootingStars 
          minSpeed={15}
          maxSpeed={35}
          minDelay={800}
          maxDelay={3000}
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          starWidth={12}
          starHeight={2}
          className="absolute inset-0"
        />
      </div>
      
      {/* Header */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Our Legacy
          </h1>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            From humble beginnings to becoming IIT Delhi's premier AI society, our journey has been marked by 
            innovation, dedication, and the relentless pursuit of excellence in artificial intelligence.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative z-10">
        <Timeline data={timelineData} />
      </div>

      {/* Impact Statistics */}
      <div className="relative z-10 py-20 bg-neutral-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-4">5</div>
              <div className="text-neutral-300 font-medium">Research Papers</div>
              <div className="text-sm text-neutral-500 mt-1">Published & presented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">15+</div>
              <div className="text-neutral-300 font-medium">Industry Partners</div>
              <div className="text-sm text-neutral-500 mt-1">Leading AI companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">3000+</div>
              <div className="text-neutral-300 font-medium">Lives Impacted</div>
              <div className="text-sm text-neutral-500 mt-1">Through our initiatives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Past OCs */}
      <div className="relative z-10 py-20 bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Past Trailblazers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 border border-neutral-700">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">Vaibhav Seth</h3>
                <p className="text-sm text-neutral-400">Batch of 2025</p>
              </div>
              <p className="text-neutral-300">
                A compassionate core and a calming presence. His grace under pressure and unwavering support shaped the
                very heartbeat of ARIES. Thank you for leading with kindness and quiet strength.
              </p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 border border-neutral-700">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">Rudrakshi Singhal</h3>
                <p className="text-sm text-neutral-400">Batch of 2025</p>
              </div>
              <p className="text-neutral-300">
                Smart, driven and a true visionary. Her incredible work ethic and sharp mind inspired us all
                to push boundaries and dream bigger. Her legacy will echo in every project we take on.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Vision */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-black/80 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Looking Ahead</h2>
          <p className="text-lg text-neutral-300 mb-8">
            As we continue our journey, we remain committed to pushing the boundaries of AI research, 
            fostering innovation, and building the next generation of AI leaders who will shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/events"
              className="px-8 py-4 rounded-md bg-gradient-to-b from-blue-500 to-blue-700 text-white text-lg font-bold relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
            >
              Join Our Journey
            </a>
            <a
              href="/team"
              className="px-8 py-4 rounded-md border border-neutral-600 text-white text-lg font-medium relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center hover:border-neutral-400"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}; 