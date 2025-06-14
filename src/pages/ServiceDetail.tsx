
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Smartphone, Globe, Code, Palette, Shield, Zap, ArrowLeft, CheckCircle } from 'lucide-react';
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
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-6">
              <service.icon className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 mb-8">
                {service.longDescription}
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Today
              </Button>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{benefit}</span>
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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
