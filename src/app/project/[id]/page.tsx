"use client"
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FaGithub } from "react-icons/fa";
import { useParams } from "next/navigation";
import Link from "next/link";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl font-bold mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Project Not Found
          </motion.h1>
          <Link href="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </motion.div>
      </div>
    );
  }

  const IconComponent = project.icon;
  const images = project.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <motion.div 
          className="container px-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link href="/portfolio">
              <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="gap-2 group">
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Portfolio
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Image Gallery */}
          {images.length > 0 && (
            <motion.div 
              variants={itemVariants}
              className="mb-12 relative rounded-3xl overflow-hidden"
            >
              <AspectRatio ratio={16 / 9}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </AspectRatio>
              
              {images.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
                  >
                    <ChevronLeft size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? "bg-primary w-6" : "bg-foreground/30"
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}

          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center glow-primary"
                style={{ background: "var(--gradient-primary)" }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <IconComponent className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <div>
                <motion.span 
                  className="text-primary font-mono text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.category.toUpperCase()}
                </motion.span>
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.title}
                </motion.h1>
              </div>
            </div>

            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {project.fullDescription}
            </motion.p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="gap-2">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" asChild className="gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={18} />
                    View Code
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-8 mb-8"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-8 mb-8"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <CheckCircle className="text-primary" size={24} />
              </motion.div>
              <span>Key Features</span>
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-3xl p-8"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AlertTriangle className="text-accent" size={24} />
              </motion.div>
              <span>Challenges Solved</span>
            </h2>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <motion.li
                  key={challenge}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {challenge}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProjectDetail;
