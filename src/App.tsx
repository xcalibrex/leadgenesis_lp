import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { DemoWidget } from './components/sections/DemoWidget';
import { ProcessGrid } from './components/sections/ProcessGrid';
import { FeatureSection } from './components/sections/FeatureSection';
import { CTASection } from './components/sections/CTASection';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { AgentVisual } from './components/ui/AgentVisual';
import { ScaleOnScroll } from './components/ui/ScaleOnScroll';

// @ts-ignore
import portalMockup from './assets/images/portal-mockup.png';
// @ts-ignore
import bookingMockup from './assets/images/booking-mockup.png';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-cyan/30 flex flex-col font-inter">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <ScaleOnScroll>
          <DemoWidget />
        </ScaleOnScroll>

        <ScaleOnScroll>
          <ProcessGrid />
        </ScaleOnScroll>

        {/* New Technology Section for the CSS Agent Visual */}
        <ScaleOnScroll>
          <section className="py-32 bg-brand-dark/50 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 order-2 lg:order-1">
                <AgentVisual />
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <h2 className="type-h2 mb-6 text-white">
                  Powered by <span className="text-brand-cyan">Advanced AI.</span>
                </h2>
                <p className="type-body mb-8">
                  Our proprietary AI agents are designed to mimic human psychology and sales tactics.
                  They don't just read scripts; they understand context, manage objections, and close deals
                  with the same nuance as your top performer.
                </p>
              </div>
            </div>
          </section>
        </ScaleOnScroll>

        <ScaleOnScroll>
          <FeatureSection
            title="1,000 Person Sales Force."
            description="Scale your outreach instantly. Our AI agents work 24/7 to engage leads, handle objections, and book meetings without the overhead of a human team."
            features={[
              "No sick days or holidays",
              "Consistent performance",
              "Instant scalability",
              "Real-time analytics"
            ]}
            imageSrc={portalMockup}
            reversed={false}
          />
        </ScaleOnScroll>

        <ScaleOnScroll>
          <FeatureSection
            title="24/7 Booking Machine."
            description="Never miss a lead again. Whether it's 2 AM or 2 PM, your AI setter is ready to qualify prospects and fill your calendar."
            features={[
              "Instant response times",
              "Multi-channel engagement",
              "Direct calendar integration",
              "Smart follow-ups"
            ]}
            imageSrc={bookingMockup}
            reversed={true}
          />
        </ScaleOnScroll>

        <ScaleOnScroll>
          <Pricing />
        </ScaleOnScroll>

        <FAQ />

        <CTASection /> {/* Added CTASection */}
      </main>

      <Footer />
    </div>
  )
}

export default App
