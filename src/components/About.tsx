
import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled developers and designers have years of experience in cutting-edge technologies."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We pride ourselves on delivering projects on schedule without compromising quality."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure flawless application performance."
    },
    {
      icon: CheckCircle,
      title: "Ongoing Support",
      description: "Comprehensive post-launch support and maintenance to keep your applications running smoothly."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose TechFlow?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're not just developers – we're your strategic partners in digital transformation. 
              With a proven track record of delivering exceptional mobile and web applications, 
              we combine technical expertise with creative vision to build solutions that drive real business results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our agile development process ensures transparency, flexibility, and continuous 
              collaboration throughout your project journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
