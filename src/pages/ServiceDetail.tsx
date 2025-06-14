
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Smartphone, Globe, Code, Palette, Shield, Zap, ArrowLeft, CheckCircle, FolderOpen, BookOpen, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServiceDetail = () => {
  const { slug } = useParams();

  const services = {
    "mobile-app-development": {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Transform your ideas into powerful mobile applications that engage users and drive business growth.",
      longDescription: "Our mobile app development services cover the entire spectrum from concept to deployment. We specialize in creating native iOS and Android applications, as well as cross-platform solutions using React Native and Flutter. Our team ensures your app delivers exceptional performance, intuitive user experience, and seamless integration with device features.",
      features: [
        "Native iOS Development with Swift",
        "Native Android Development with Kotlin",
        "Cross-platform Development with React Native",
        "Flutter App Development",
        "App Store & Google Play Publishing",
        "App Maintenance & Updates",
        "Push Notifications Integration",
        "Offline Functionality",
        "Third-party API Integration",
        "Performance Optimization"
      ],
      benefits: [
        "Reach millions of users on mobile platforms",
        "Increase customer engagement and retention",
        "Generate new revenue streams",
        "Improve brand visibility and recognition"
      ],
      process: [
        "Discovery & Requirements Analysis",
        "UI/UX Design & Prototyping",
        "Development & Testing",
        "App Store Submission",
        "Launch & Marketing Support",
        "Ongoing Maintenance & Updates"
      ]
    },
    "web-application-development": {
      icon: Globe,
      title: "Web Application Development",
      description: "Build scalable, modern web applications that deliver exceptional user experiences across all devices.",
      longDescription: "Our web application development services focus on creating fast, secure, and scalable web solutions. We use cutting-edge technologies like React, Next.js, and Node.js to build applications that not only look great but also perform exceptionally well. From simple websites to complex web applications, we ensure your digital presence stands out.",
      features: [
        "React & Next.js Development",
        "Node.js Backend Development",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "Cloud Deployment & Hosting",
        "SEO Optimization",
        "Responsive Design",
        "Database Integration",
        "Real-time Features"
      ],
      benefits: [
        "Reach users across all devices and platforms",
        "Improve search engine visibility",
        "Reduce development costs with web technologies",
        "Enable real-time collaboration and updates"
      ],
      process: [
        "Project Planning & Architecture",
        "UI/UX Design & Wireframing",
        "Frontend & Backend Development",
        "Testing & Quality Assurance",
        "Deployment & Go-Live",
        "Monitoring & Optimization"
      ]
    },
    "custom-software-solutions": {
      icon: Code,
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed to solve your unique business challenges and requirements.",
      longDescription: "Every business has unique needs that off-the-shelf software can't address. Our custom software development services create bespoke solutions that fit your exact requirements. From enterprise applications to specialized tools, we build software that grows with your business and provides competitive advantages.",
      features: [
        "Enterprise Application Development",
        "API Development & Integration",
        "Database Design & Optimization",
        "Legacy System Modernization",
        "Cloud Migration Services",
        "Microservices Architecture",
        "DevOps Implementation",
        "Third-party Integrations",
        "Automated Workflows",
        "Custom Reporting Solutions"
      ],
      benefits: [
        "Solve unique business challenges efficiently",
        "Improve operational efficiency and productivity",
        "Gain competitive advantages through innovation",
        "Scale solutions as your business grows"
      ],
      process: [
        "Business Analysis & Requirements Gathering",
        "System Architecture & Design",
        "Agile Development Cycles",
        "Integration & Testing",
        "Deployment & Training",
        "Support & Maintenance"
      ]
    },
    "ui-ux-design": {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create beautiful, intuitive designs that enhance user engagement and drive conversions.",
      longDescription: "Great design is more than just aesthetics – it's about creating meaningful experiences that users love. Our UI/UX design services focus on understanding your users' needs and creating interfaces that are both beautiful and functional. We use data-driven design principles to ensure your product not only looks great but also performs exceptionally well.",
      features: [
        "User Research & Analysis",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Design System Creation",
        "Usability Testing",
        "Accessibility Compliance",
        "Mobile-First Design",
        "Interactive Prototypes",
        "Design Handoff & Documentation"
      ],
      benefits: [
        "Increase user satisfaction and engagement",
        "Improve conversion rates and ROI",
        "Reduce development costs through clear designs",
        "Build stronger brand recognition"
      ],
      process: [
        "User Research & Discovery",
        "Information Architecture",
        "Wireframing & User Flows",
        "Visual Design & Prototyping",
        "Usability Testing & Iteration",
        "Design System & Documentation"
      ]
    },
    "security-testing": {
      icon: Shield,
      title: "Security & Testing",
      description: "Comprehensive security audits and testing to ensure your applications are robust and secure.",
      longDescription: "In today's digital landscape, security and quality are paramount. Our security and testing services provide comprehensive coverage to ensure your applications are not only bug-free but also secure from potential threats. We use industry-standard tools and methodologies to identify vulnerabilities and ensure your software meets the highest quality standards.",
      features: [
        "Security Audits & Penetration Testing",
        "Automated Testing Frameworks",
        "Performance & Load Testing",
        "Code Quality Reviews",
        "Vulnerability Assessments",
        "Compliance Testing",
        "API Security Testing",
        "Mobile App Security",
        "Continuous Integration Testing",
        "Bug Tracking & Reporting"
      ],
      benefits: [
        "Protect sensitive data and user information",
        "Ensure compliance with industry standards",
        "Reduce risk of security breaches",
        "Improve application reliability and performance"
      ],
      process: [
        "Security Assessment & Planning",
        "Automated & Manual Testing",
        "Vulnerability Identification",
        "Risk Analysis & Reporting",
        "Remediation Recommendations",
        "Ongoing Monitoring & Support"
      ]
    },
    "performance-optimization": {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your applications for speed, scalability, and efficiency across all platforms.",
      longDescription: "Slow applications lose users and revenue. Our performance optimization services ensure your applications run at peak efficiency across all platforms and devices. We analyze, optimize, and monitor your applications to deliver the fastest possible user experience while maintaining reliability and scalability.",
      features: [
        "Performance Audits & Analysis",
        "Speed Optimization Techniques",
        "Database Query Optimization",
        "Caching Strategy Implementation",
        "CDN Setup & Configuration",
        "Image & Asset Optimization",
        "Code Splitting & Lazy Loading",
        "Server-Side Optimization",
        "Monitoring & Analytics Setup",
        "Scalability Planning"
      ],
      benefits: [
        "Improve user experience and satisfaction",
        "Increase search engine rankings",
        "Reduce server costs and resource usage",
        "Handle increased traffic and user load"
      ],
      process: [
        "Performance Audit & Baseline",
        "Bottleneck Identification",
        "Optimization Strategy Development",
        "Implementation & Testing",
        "Performance Monitoring Setup",
        "Ongoing Optimization & Support"
      ]
    },
    "portfolio-making": {
      icon: FolderOpen,
      title: "Portfolio Making",
      description: "Stand out with a stunning digital portfolio that showcases your best work to clients and employers.",
      longDescription:
        "We create visually impressive, mobile-friendly digital portfolios tailored to your profession—perfect for artists, designers, photographers, and professionals wishing to present their skills and projects. Let us help you tell your story with engaging visuals, personalized design, and seamless user experience. Our team ensures your portfolio leaves a lasting impression on your audience.",
      features: [
        "Custom Portfolio Layouts",
        "Interactive Project Galleries",
        "Personal Branding Integration",
        "Easy Content Management",
        "SEO-friendly Setup",
        "Responsive & Mobile Optimized",
        "Contact & Booking Forms",
        "Animation & Effects",
        "Hosting & Domain Assistance",
        "Analytics Tracking"
      ],
      benefits: [
        "Impress clients and employers with a unique showcase",
        "Mobile-ready for all devices",
        "Enhance personal or company brand",
        "Attract new opportunities and grow your audience"
      ],
      process: [
        "Consultation & Content Planning",
        "Wireframing & Concept Design",
        "Custom Development",
        "Content Upload & Review",
        "Launch and Feedback",
        "Ongoing Support & Updates"
      ]
    },
    "brochure-making": {
      icon: BookOpen,
      title: "Brochure Making",
      description: "Professional digital and print brochures designed to captivate and inform your audience.",
      longDescription:
        "Our brochure-making services deliver both beautiful print and interactive digital brochures that highlight your products, services, or brand. From creative concept and copywriting to final delivery, we focus on clarity, stunning visuals, and message impact. Get an eye-catching brochure that captures your audience’s attention and communicates your value.",
      features: [
        "Print-ready & Digital Brochures",
        "Custom Graphic Design",
        "Compelling Copywriting",
        "Consistent Branding",
        "Product & Service Highlighting",
        "Interactive PDF/Web Versions",
        "Unlimited Revisions (design stage)",
        "Professional Photography Options",
        "Multi-page Layouts",
        "Final Print & Delivery Guidance"
      ],
      benefits: [
        "Engage audiences with memorable visuals",
        "Boost your marketing and promotional materials",
        "Ensure brand consistency across channels",
        "Clear and concise information delivery"
      ],
      process: [
        "Requirements Gathering",
        "Concept & Visual Drafting",
        "Content & Copy Collaboration",
        "Design Creation & Feedback",
        "Digital/Print Setup",
        "Delivery & Project Handover"
      ]
    },
    "hosting-service": {
      icon: Server,
      title: "Hosting Service",
      description: "Reliable, scalable hosting with expert setup and proactive support for your applications.",
      longDescription:
        "Trust your digital presence with our robust hosting services. We handle everything—from initial setup and migration to ongoing security, backups, and 24/7 support. Our solutions scale with you, offering high uptime, performance monitoring, and easy management for websites, portfolios, applications, or e-commerce stores.",
      features: [
        "Managed Cloud Hosting",
        "High Uptime Guarantees",
        "Domain Setup & Email Hosting",
        "DDOS Protection & SSL Security",
        "Automated Backups",
        "Performance Monitoring",
        "One-click App Installations",
        "Flexible Scaling Options",
        "Migration Assistance",
        "24/7 Support"
      ],
      benefits: [
        "Worry-free infrastructure management",
        "Top-tier security and reliability",
        "Technical support, any time you need",
        "Scalable hosting as your business grows"
      ],
      process: [
        "Consultation & Needs Assessment",
        "Hosting Plan Selection",
        "Setup & Domain Configuration",
        "Migration or Deployment",
        "Security Optimization",
        "Ongoing Management & Support"
      ]
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-background via-card to-secondary">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center mr-6">
              <service.icon className="text-primary-foreground" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {service.longDescription}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started Today
              </Button>
            </div>
            <div>
              <Card className="border border-border shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-primary mr-3 mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-card-foreground font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <Card key={index} className="text-center border border-border shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{step}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-card text-card-foreground hover:bg-card/90">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;

// ServiceDetail.tsx is now over 400 lines. You should consider refactoring this file into smaller components soon for easier maintenance.

