"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Lightbulb, Users, Download, MapPin, Mail, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency in every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging cutting-edge tech to solve complex problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams across the globe.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="floating-orb w-64 h-64 bg-accent/50 top-0 right-0" />
      <div className="floating-orb w-48 h-48 bg-primary/30 bottom-20 left-10" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-primary font-mono text-sm mb-4 block"
            >
              01. ABOUT ME
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Passionate About Building{" "}
              <span className="gradient-text">Digital Experiences</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
            {/* Profile Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
                
                <div className="relative glass-card rounded-3xl p-6 overflow-hidden">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-2xl overflow-hidden relative">
                    <div 
                        className="w-full h-full flex items-center justify-center text-6xl font-bold"
                        style={{ background: "var(--gradient-primary)" }}
                      >
                        <span className="text-primary-foreground">CM</span>
                      </div>
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/50 animate-pulse" />
                    </div>
                    
                    {/* Status badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2"
                    >
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium">Available for work</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3 mt-8">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>Chattogram, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Mail size={16} className="text-primary" />
                      <span>chminhaz.info@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-primary" />
                      <span>1.5+ Years Experience</span>
                    </div>
                  </div>

                  {/* Download CV Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6"
                  >
                    <Button className="w-full gap-2" size="lg">
                      <Download size={18} />
                      Download CV
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3 space-y-8"
            >
              {/* Bio */}
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi! I'm <span className="text-foreground font-semibold">Chibgatullah Minhaz</span>, a <span className="text-foreground font-semibold">Full Stack Developer</span> with 1.5+ years of experience building
                  web applications and AI-powered solutions. My expertise spans across 
                  the <span className="text-primary font-medium">MERN</span> and <span className="text-primary font-medium">PERN</span> stacks, complemented by modern DevOps practices.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in creating intelligent automation workflows using <span className="text-accent font-medium">n8n</span>, 
                  building <span className="text-accent font-medium">AI agents</span> that enhance business processes, and containerizing 
                  applications with <span className="text-primary font-medium">Docker</span> for seamless deployment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">1.5+</div>
                    <p className="text-sm text-muted-foreground">Years Exp.</p>
                  </div>
                  <div className="text-center border-x border-border">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">5+</div>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">3+</div>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:gradient-text transition-all">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
