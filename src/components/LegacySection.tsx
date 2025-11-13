import { Timeline } from "@/components/ui/timeline";
import { Award, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    points: ["Split into two verticals — Canvas for research, Brain for events", "Allows us to go deeper without overlap", "Fully revamped our website", "Turned scattered docs into a central hub for projects, content, and resources"]
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
        <h3 className="text-xl font-semibold text-foreground mb-4">{a.title}</h3>
        <div className="space-y-3">
          <h4 className="font-medium text-accent text-sm uppercase tracking-wide">Milestones</h4>
          <ul className="text-muted-foreground space-y-2">
            {a.points.map((p) => <li key={p} className="flex gap-2"><span className="text-accent">•</span> <span>{p}</span></li>)}
          </ul>
        </div>
      </div>
    )
  }
})

const pastLeaders = [
  {
    name: "Vaibhav Seth",
    batch: "Batch of 2025",
    description: "A compassionate core and a calming presence. His grace under pressure and unwavering support shaped the very heartbeat of ARIES. Thank you for leading with kindness and quiet strength."
  },
  {
    name: "Rudrakshi Singhal",
    batch: "Batch of 2025",
    description: "Smart, driven and a true visionary. Her incredible work ethic and sharp mind inspired us all to push boundaries and dream bigger. Her legacy will echo in every project we take on."
  }
];

export const LegacySection = () => {
  return (
    <div className="relative w-full bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
              Our <span className="font-semibold">Legacy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming IIT Delhi's premier AI society, our journey has been marked by
              innovation, dedication, and the relentless pursuit of excellence in artificial intelligence.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <Timeline data={timelineData} />
          </div>

          {/* Impact Statistics */}
          <div className="py-16 mb-20 bg-secondary/30 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Our <span className="font-semibold">Impact</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto px-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-2">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-semibold text-accent">5</div>
                <div className="space-y-1">
                  <div className="font-medium text-foreground">Research Papers</div>
                  <div className="text-sm text-muted-foreground">Published & presented</div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-2">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-semibold text-accent">15+</div>
                <div className="space-y-1">
                  <div className="font-medium text-foreground">Industry Partners</div>
                  <div className="text-sm text-muted-foreground">Leading AI companies</div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-2">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-semibold text-accent">3000+</div>
                <div className="space-y-1">
                  <div className="font-medium text-foreground">Lives Impacted</div>
                  <div className="text-sm text-muted-foreground">Through our initiatives</div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Trailblazers */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-foreground">
              Past <span className="font-semibold">Trailblazers</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {pastLeaders.map((leader, idx) => (
                <Card key={idx} className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">{leader.name}</CardTitle>
                    <CardDescription className="text-sm">{leader.batch}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {leader.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Future Vision */}
          <div className="py-16 text-center bg-gradient-to-b from-secondary/30 to-accent/5 rounded-2xl">
            <div className="max-w-4xl mx-auto px-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Looking Ahead
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                As we continue our journey, we remain committed to pushing the boundaries of AI research,
                fostering innovation, and building the next generation of AI leaders who will shape the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => window.location.href = '/events'}
                >
                  Join Our Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = '/team'}
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
