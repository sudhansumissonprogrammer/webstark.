import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Filter, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Cta from '@/components/pages/shared/Cta';

const WorkPage = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Website Development', 'E-commerce', 'Portfolio', 'Branding'];

  const projects = [
    {
      id: 1,
      title: 'TechStart Solutions',
      category: 'Website Development',
      description: 'Modern SaaS platform with interactive demos and conversion optimization.',
      image: 'Modern tech startup website with clean design and interactive elements',
      tags: ['React', 'Node.js', 'MongoDB'],
      results: ['300% increase in sign-ups', '50% faster loading time', '95% mobile score']
    },
    {
      id: 2,
      title: 'Fashion Forward Store',
      category: 'E-commerce',
      description: 'Complete fashion marketplace with advanced filtering and social commerce.',
      image: 'Stylish fashion e-commerce website with product galleries and shopping cart',
      tags: ['E-commerce', 'Payment Gateway', 'Inventory'],
      results: ['500% increase in sales', '60% higher conversion', '40% increase in AOV']
    },
    {
      id: 3,
      title: 'Creative Artist Portfolio',
      category: 'Portfolio',
      description: 'Interactive portfolio showcasing digital art with smooth animations.',
      image: 'Creative artist portfolio with interactive gallery and artwork showcase',
      tags: ['Portfolio', 'Animation', 'Gallery'],
      results: ['200% more inquiries', '4.9/5 client rating', '80% mobile traffic']
    },
    {
      id: 4,
      title: 'Restaurant Chain Website',
      category: 'Website Development',
      description: 'Multi-location restaurant website with online ordering and reservations.',
      image: 'Professional restaurant website with menu display and reservation system',
      tags: ['Restaurant', 'Booking', 'Multi-location'],
      results: ['200% increase in orders', '40% more reservations', '4.8/5 user rating']
    },
    {
      id: 5,
      title: 'Electronics Marketplace',
      category: 'E-commerce',
      description: 'Multi-vendor electronics platform with comparison tools and reviews.',
      image: 'Modern electronics e-commerce site with product comparisons and reviews',
      tags: ['Multi-vendor', 'Comparison', 'Reviews'],
      results: ['300% growth in revenue', '45% less cart abandonment', '4.8/5 satisfaction']
    },
    {
      id: 6,
      title: 'Photography Studio',
      category: 'Portfolio',
      description: 'Professional photography website with client galleries and booking.',
      image: 'Professional photographer portfolio with stunning galleries and booking system',
      tags: ['Photography', 'Client Portal', 'Booking'],
      results: ['150% more bookings', '90% client retention', '5/5 average rating']
    },
    {
      id: 7,
      title: 'Startup Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity and website for innovative tech startup.',
      image: 'Modern startup branding with logo design and brand guidelines',
      tags: ['Branding', 'Logo Design', 'Guidelines'],
      results: ['Brand recognition up 400%', 'Investor interest increased', 'Market presence established']
    },
    {
      id: 8,
      title: 'Consultant Professional Site',
      category: 'Website Development',
      description: 'Business consultant website with case studies and testimonials.',
      image: 'Professional consultant website with case studies and testimonials',
      tags: ['Consulting', 'Case Studies', 'Lead Generation'],
      results: ['250% increase in leads', '60% higher conversion', '4.9/5 client satisfaction']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleViewProject = (project) => {
    toast({
      title: "🚧 Project Details Coming Soon!",
      description: "Detailed project view isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleContactUs = () => {
    toast({
      title: "🚧 Contact Form Loading!",
      description: "Contact form isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Work & Portfolio | DigitalCraft Projects | Web Development Showcase</title>
        <meta name="description" content="Explore DigitalCraft's portfolio of successful web development, e-commerce, and portfolio projects. See our work and results for clients in Bhubaneswar and beyond." />
      </Helmet>

      <section className="relative pt-24 pb-20 hero-bg overflow-hidden">
        <div className="absolute inset-0 geometric-pattern"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight text-shadow">
              Our <span className="gradient-text">Work</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects and see how we've helped businesses 
              transform their digital presence with innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'border-white/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleViewProject(project)}
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt={project.title}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-cyan-400 font-medium mb-2">
                    {project.category}
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-cyan-400 text-sm">Key Results:</h4>
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="text-xs text-gray-300">
                        • {result}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Project <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real projects - see the impact of our work
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '300%', label: 'Average Sales Increase' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              How We <span className="gradient-text">Deliver Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven process ensures every project exceeds expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We dive deep into your business goals, target audience, and project requirements.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We create a comprehensive strategy and roadmap tailored to your objectives.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Our team brings the strategy to life with expert design and development.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously monitor, test, and optimize for maximum performance.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Cta 
        title="Ready to Start Your Project?"
        description="Let's discuss your vision and create something amazing together. Join our list of successful clients and transform your digital presence."
        primaryButtonText="Start Your Project"
        secondaryButtonText="Schedule Consultation"
        secondaryButtonLink="/contact"
      />
    </>
  );
};

export default WorkPage;