
import React from 'react';
import { CheckCircle, Users, Award, Clock, Shield, Zap } from 'lucide-react';

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
      icon: Shield,
      title: "Security First",
      description: "We implement industry-leading security practices to protect your data and applications."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance and cutting-edge technologies for exceptional user experiences."
    },
    {
      icon: CheckCircle,
      title: "Ongoing Support",
      description: "Comprehensive post-launch support and maintenance to keep your applications running smoothly."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        {/* Why Choose Us Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Syncsoft?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just developers – we're your strategic partners in digital transformation. 
            With a proven track record of delivering exceptional solutions, we combine technical expertise 
            with creative vision to build applications that drive real business results.
          </p>
        </div>

        {/* Office Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern office workspace with iMac"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration workspace"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Programming on multiple monitors"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern tech displays"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              State-of-the-Art Development Environment
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our modern office spaces are equipped with cutting-edge technology and designed to foster 
              creativity and collaboration. We believe that the right environment drives innovation and 
              exceptional results for our clients.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From high-performance development workstations to collaborative spaces, every aspect of 
              our workspace is optimized for delivering world-class software solutions.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
