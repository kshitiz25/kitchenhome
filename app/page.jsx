'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Sparkles, Heart, Users, Award, Clock, ArrowRight, Menu, X, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const features = [
    {
      icon: ChefHat,
      title: 'Expert Recipes',
      description: 'Handpicked recipes from professional chefs and passionate home cooks',
      gradient: 'from-orange-500 to-rose-500',
    },
    {
      icon: Clock,
      title: 'Quick & Easy',
      description: 'Time-saving meals perfect for your busy lifestyle',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Heart,
      title: 'Healthy Options',
      description: 'Nutritious meals that taste incredible and fuel your body',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with thousands of home chefs worldwide',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in culinary innovation',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Sparkles,
      title: 'Fresh Ideas',
      description: 'Trendy recipes and creative twists on classics',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Home Chef',
      content: 'These recipes transformed my daily cooking. My family loves every meal!',
      rating: 5,
      initials: 'SM',
      gradient: 'from-orange-400 to-rose-400',
    },
    {
      name: 'Michael Chen',
      role: 'Food Enthusiast',
      content: 'Simple instructions with amazing results. I became a confident cook!',
      rating: 5,
      initials: 'MC',
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Busy Parent',
      content: 'Quick, healthy meals that my kids actually eat. Game-changer!',
      rating: 5,
      initials: 'ER',
      gradient: 'from-emerald-400 to-teal-400',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Recipe Collections' },
    { value: '100K+', label: 'Happy Chefs' },
    { value: '1000+', label: 'Expert Tips' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-900/40 border-b border-slate-800/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 relative z-10"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white hidden sm:inline">HomeKitchen</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8 relative z-10"
          >
            {['Features', 'Gallery', 'Testimonials'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0">
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-10 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-800"
            >
              <div className="px-4 py-4 space-y-3">
                {['Features', 'Gallery', 'Testimonials'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-slate-400 hover:text-white transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <Button className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white border-0">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-rose-500/20 border border-orange-500/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">
                  Welcome to Your Kitchen Revolution
                </span>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Cook{' '}
              <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                Delicious
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                Meals at Home
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your kitchen into a culinary haven with expertly crafted recipes,
              professional cooking tips, and meal planning tools designed for home chefs of all levels.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16 flex-wrap"
            >
              <motion.div {...scaleOnHover}>
                <Button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0 text-base px-8 py-6 rounded-full h-auto flex items-center gap-2">
                  Explore Recipes
                  <ArrowRight size={20} />
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-white text-base px-8 py-6 rounded-full h-auto flex items-center gap-2">
                  <Play size={20} />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image/Video Area */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden aspect-video border border-slate-700/50">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={floatingVariants.animate}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Play className="w-8 h-8 text-white fill-white" />
                  </motion.div>
                  <p className="text-slate-400">Click to explore culinary magic</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose HomeKitchen?
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Everything you need to become a confident and creative home chef
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="group relative"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${feature.gradient})`,
                  }}
                  animate={hoveredFeature === index ? { opacity: 0.2 } : { opacity: 0 }}
                />
                <Card className="relative bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm h-full hover:border-slate-600/50 transition-colors duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}
                      animate={hoveredFeature === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Culinary Inspiration
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Discover a world of flavors and creative possibilities
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              'from-orange-500 to-rose-500',
              'from-emerald-500 to-teal-500',
              'from-amber-500 to-orange-500',
              'from-pink-500 to-rose-500',
              'from-blue-500 to-cyan-500',
              'from-fuchsia-500 to-purple-500',
            ].map((gradient, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.08, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative group cursor-pointer"
              >
                <motion.div
                  className={`relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br ${gradient}`}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <ChefHat className="w-16 h-16 text-white/60 group-hover:text-white/80 transition-colors" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                  >
                    <p className="text-white font-semibold text-lg">Explore Recipe</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Chefs Say
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Join thousands of happy home cooks transforming their kitchens
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></motion.div>
                <Card className="relative bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm h-full">
                  <CardContent className="p-6 sm:p-8">
                    <motion.div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <p className="text-slate-300 mb-6 leading-relaxed italic text-sm sm:text-base">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-white font-bold text-lg">
                          {testimonial.initials}
                        </span>
                      </motion.div>
                      <div>
                        <p className="font-semibold text-white text-sm sm:text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-orange-600/20 to-rose-600/20 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Culinary Journey?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Join our thriving community of passionate home chefs and discover the joy of creating incredible meals
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0 text-base px-8 py-6 rounded-full h-auto">
                  Get Started Today
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 py-12 px-4 sm:px-6 mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="w-6 h-6 text-orange-500" />
                <span className="text-lg font-bold text-white">HomeKitchen</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering home chefs to create delicious memories.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Recipes</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Breakfast</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Lunch</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Dinner</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Desserts</a></li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Cooking Tips</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Meal Plans</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Community</a></li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms</a></li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm"
          >
            <p>&copy; 2024 HomeKitchen. All rights reserved. Built with passion.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
