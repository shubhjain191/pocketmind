import ContactForm from "@/components/contact-form";
import HeroSection from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData, aboutUsData } from "@/data/landing";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="py-16 md:py-24 bg-[#1E3A8A]/20">        
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center p-4 md:p-6">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-3">{statsData.value}</div>
                <div className="text-gray-600 text-sm md:text-base">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="features">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E3A8A]">Everything you need to manage your finances</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {featuresData.map((feature, index) => (
              <Card key={index} className="border-2 border-[#FFD700] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-[#FFD700] w-12 h-12 mx-auto mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#1E3A8A]/20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E3A8A]">How It Works</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFD700] hidden md:block"></div>
            <div className="space-y-12 relative">
              {howItWorksData.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-[#FFD700] relative">
                      <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#1E3A8A] border-4 border-[#FFD700] flex items-center justify-center z-10">
                      <div className="text-[#FFD700]">{step.icon}</div>
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white" id="about-us">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#1E3A8A]">About Us</h2>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 mb-6">{aboutUsData.mission}</p>
            <p className="text-gray-600">{aboutUsData.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {aboutUsData.values.map((value, index) => (
              <Card key={index} className="border-2 border-[#FFD700] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-[#FFD700] w-12 h-12 mx-auto mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#1E3A8A]/20" id="testimonials">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E3A8A]">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-[#FFD700]">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-[#FFD700]"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-[#1E3A8A]">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="contact-us">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E3A8A]">Contact Us</h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-gray-700">Have questions or suggestions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#1E3A8A]/20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1E3A8A]">Ready to Take Control of Your Finances?</h2>
            <p className="text-xl text-gray-700 mb-8">Join thousands of users who are already mastering their financial future with PocketMind.</p>
            <Link href='/dashboard' >
            <button className="bg-[#1E3A8A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1E3A8A]/90 transform hover:scale-105 transition-all duration-300 border-2 border-[#FFD700] shadow-lg hover:shadow-xl">
              Get Started Now
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}