
import React from 'react';
import {
  Smartphone, Globe, Code, Palette, Shield, Zap, FolderOpen, BookOpen, Server,
  Layout, Briefcase, Wrench, Cable
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, React Native, and Flutter solutions that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-platform", "App Store Publishing", "Maintenance & Updates"],
      slug: "mobile-app-development"
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: ["React & Next.js", "Node.js Backend", "Cloud Deployment", "SEO Optimization"],
      slug: "web-application-development"
    },
    {
      icon: Code,
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed to meet your specific business requirements and goals.",
      features: ["API Development", "Database Design", "Third-party Integrations", "Legacy Modernization"],
      slug: "custom-software-solutions"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user engagement and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      slug: "ui-ux-design"
    },
    {
      icon: Shield,
      title: "Security & Testing",
      description: "Comprehensive security audits and testing to ensure your applications are robust and secure.",
      features: ["Security Audits", "Automated Testing", "Performance Testing", "Code Reviews"],
      slug: "security-testing"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your applications for speed, scalability, and efficiency across all platforms.",
      features: ["Speed Optimization", "Scalability Planning", "Monitoring Setup", "Performance Analytics"],
      slug: "performance-optimization"
    },
    {
      icon: FolderOpen,
      title: "Portfolio Designing",
      description: "Stand out with a stunning digital portfolio that showcases your best work to clients and employers.",
      features: ["Custom Layouts", "Interactive Galleries", "Personal Branding", "Mobile Responsive"],
      slug: "portfolio-designing"
    },
    {
      icon: BookOpen,
      title: "Brochure Designing",
      description: "Professional digital and print brochures designed to captivate and inform your audience.",
      features: ["Print & Digital Design", "Brand Consistency", "Compelling Copywriting", "Creative Layouts"],
      slug: "brochure-designing"
    },
    {
      icon: Server,
      title: "Hosting Service",
      description: "Reliable, scalable hosting with expert setup and proactive support for your applications.",
      features: ["Cloud Hosting", "Managed Services", "24/7 Support", "High Uptime SLA"],
      slug: "hosting-service"
    },
    {
      icon: Layout,
      title: "Marketing Brochure Designing",
      description: "Creative marketing brochures that effectively communicate your brand message and drive engagement.",
      features: ["Custom Graphics", "Targeted Messaging", "Print & Digital Delivery", "Brand Consistency"],
      slug: "marketing-brochure-designing"
    },
    {
      icon: Briefcase,
      title: "Company Profiles Designing",
      description: "Detailed company profiles crafted to build trust and showcase your business strengths.",
      features: ["Professional Layouts", "Brand Alignment", "Content Strategy", "Editable Formats"],
      slug: "company-profiles-designing"
    },
    {
      icon: Wrench,
      title: "Network Troubleshooting",
      description: "Comprehensive network diagnosis and troubleshooting to keep your systems healthy and connected.",
      features: ["Connectivity Checks", "Hardware Testing", "Issue Isolation", "Performance Optimization"],
      slug: "network-troubleshooting"
    },
    {
      icon: Cable,
      title: "IT Equipment Installation & Configuration",
      description: "Expert installation and setup of IT equipment ensuring smooth operations from day one.",
      features: ["Workstation Setup", "Network Devices", "Peripheral Integration", "Configuration & Testing"],
      slug: "it-equipment-installation"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive development services 
            to bring your digital vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={`/services/${service.slug}`}>
              <Card className="group hover:shadow-2xl transition-all duration-300 border border-border shadow-lg hover:-translate-y-2 cursor-pointer h-full bg-card hover:bg-accent/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

