import { Navbar } from "@/components/Navbar";
import { TypewriterText } from "@/components/TypewriterText";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBar } from "@/components/SkillBar";
import { ParticleField } from "@/components/ParticleField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import graduationPhoto from "@/assets/graduation-photo.png";
import qarmBlueprint from "@/assets/qarm-blueprint.png";
import qarmAction from "@/assets/qarm-action.png";
import gradegeniusScreenshot from "@/assets/gradegenius-screenshot.png";
import internbaseScreenshot from "@/assets/internbase-screenshot.png";
import { Download, Mail, Phone, Linkedin, Github, Code2, Cpu, Database, FileCode, Users, Lightbulb, Target, MessageSquare, ChevronDown, Rocket, Sparkles, Terminal, Zap, Clock, Presentation } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <ParticleField />
        </div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/30 to-neon-cyan/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-secondary/30 to-neon-pink/30 rounded-full blur-[120px] animate-float" style={{
        animationDelay: "1.5s"
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-[140px] animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-slide-in">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium text-primary">Available for Internships</span>
                </div>
                
                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black leading-none">
                    <span className="block text-foreground">Ronit</span>
                    <span className="block bg-gradient-to-r from-primary via-neon-cyan to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                      Bhanot
                    </span>
                  </h1>
                  
                  {/* Subtitle with Icon */}
                  <div className="flex items-start gap-3 text-xl md:text-2xl font-mono">
                    <Terminal className="h-6 w-6 text-primary animate-pulse mt-1 flex-shrink-0" />
                    <div className="text-muted-foreground min-h-[80px] flex items-center">
                      <TypewriterText text="Computer Engineering Student | Software Developer | Engineering Designer" delay={50} />
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  I'm a 19-year-old, second-year <span className="text-primary font-semibold">Computer Engineering student</span> with over four months of technical work experience. I build practical
  solutions that combine software, hardware, and engineering design.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-neon-cyan hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all hover:scale-105 group" onClick={() => document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                    <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    View Projects
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all group" onClick={() => document.getElementById('resume')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                    <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                    Resume
                  </Button>
                  <Button size="lg" variant="outline" className="border-secondary/50 hover:bg-secondary/10 hover:border-secondary hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all group" onClick={() => document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                    <Zap className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform" />
                    Contact
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-8">
                  <div className="text-center p-4 rounded-lg bg-muted/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all group">
                    <div className="text-3xl font-display font-bold text-primary group-hover:scale-110 transition-transform">3+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all group">
                    <div className="text-3xl font-display font-bold text-primary group-hover:scale-110 transition-transform">2029</div>
                    <div className="text-sm text-muted-foreground">Graduation</div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative lg:block hidden animate-fade-in" style={{
              animationDelay: "0.3s"
            }}>
                <div className="relative w-full aspect-square">
                  {/* Rotating Border Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-neon-cyan to-secondary opacity-20 blur-3xl animate-spin" style={{
                  animationDuration: "10s"
                }} />
                  
                  {/* Main Circle */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 grid-pattern opacity-10" />
                    
                    {/* Center Content */}
                    <div className="relative z-10 text-center space-y-6 p-8">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-neon-cyan flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                        <Code2 className="w-16 h-16 text-white" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-display font-bold text-gradient-blue">
                          Engineering Excellence
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                          Combining technical expertise with creative problem-solving
                        </p>
                      </div>

                      {/* Floating Icons */}
                      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float">
                        <Cpu className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center animate-float" style={{
                      animationDelay: "1s"
                    }}>
                        <Database className="w-8 h-8 text-secondary" />
                      </div>
                      <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center animate-float" style={{
                      animationDelay: "2s"
                    }}>
                        <Sparkles className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin" style={{
                  animationDuration: "20s"
                }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{
                  animationDuration: "15s",
                  animationDirection: "reverse"
                }}>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-muted-foreground font-mono">scroll down</span>
                <ChevronDown className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
              <span className="text-gradient-blue">About Me</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Photo */}
              <div className="relative animate-fade-in flex justify-center">
                <div className="relative w-72 h-80 rounded-xl overflow-hidden border-4 border-primary/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                  <img src={graduationPhoto} alt="Ronit Bhanot" className="w-full h-full object-cover object-[30%_20%] scale-100 translate-x-2 rounded-sm" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              </div>

              {/* Text Content */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                <CardContent className="p-8 space-y-6">
                 <p className="text-lg leading-relaxed">
  I'm a 19-year-old, second-year{" "}
  <span className="text-primary font-semibold">
    Computer Engineering student
  </span>{" "}
  with over four months of technical work experience. I'm passionate
  about software development, engineering design, and building practical
  solutions to real-world problems.
</p>

<p className="text-lg leading-relaxed">
  Before university, I developed leadership and teamwork skills through
  extracurricular activities, including leading the{" "}
  <span className="text-secondary font-semibold">
    Physics Club
  </span>{" "}
  at Garth Webb Secondary School. I was able to strengthen my technical
  abilities through coursework, professional experience, and independent
  software projects.
</p>

<p className="text-lg leading-relaxed">
  During my time at{" "}
  <span className="text-primary font-semibold">Navcast Inc.</span>, I gained
  hands-on experience in RF engineering, working on real-world engineering tasks
  in a professional environment. This experience strengthened my technical
  foundation, problem-solving abilities, and understanding of engineering
  workflows while allowing me to collaborate with experienced engineers.
</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            <span className="text-gradient-red">Skills & Expertise</span>
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Code2 className="h-6 w-6" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <SkillBar skill="Python" icon={<FileCode className="h-4 w-4" />} />
                <SkillBar skill="Java" icon={<Database className="h-4 w-4" />} />
                <SkillBar skill="HTML" icon={<Code2 className="h-4 w-4" />} />
                <SkillBar skill="CSS" icon={<Code2 className="h-4 w-4" />} />
                <SkillBar skill="JavaScript" icon={<FileCode className="h-4 w-4" />} />
                <SkillBar skill="AutoCAD" icon={<Code2 className="h-4 w-4" />} />
                <SkillBar skill="TypeScript" icon={<Database className="h-4 w-4" />} />
                <SkillBar skill="React" icon={<Code2 className="h-4 w-4" />} />
                <SkillBar skill="Systems/RF Engineering" icon={<Lightbulb className="h-4 w-4" />} />
                <SkillBar skill="Git/GitHub" icon={<Database className="h-4 w-4" />} />
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Users className="h-6 w-6" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <SkillBar skill="Problem Solving" icon={<Target className="h-4 w-4" />} />
                <SkillBar skill="Team Collaboration" icon={<Users className="h-4 w-4" />} />
                <SkillBar skill="Leadership" icon={<Lightbulb className="h-4 w-4" />} />
                <SkillBar skill="Technical Communication" icon={<MessageSquare className="h-4 w-4" />} />
                <SkillBar skill="Critical Thinking" icon={<Target className="h-4 w-4" />} />
                <SkillBar skill="Time Management" icon={<Clock className="h-4 w-4" />} />
                <SkillBar skill="Adaptability" icon={<Sparkles className="h-4 w-4" />} />
                <SkillBar skill="Project Management" icon={<Presentation className="h-4 w-4" />} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            <span className="text-gradient-blue">Featured Projects</span>
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <ProjectCard title="Q-Arm Warehouse Project" description="A fully functional robotic arm system combining custom hardware design and Python software to accurately pick up and relocate objects in an automated warehouse simulation. Demonstrated seamless integration of mechanical engineering and programming." technologies={["Python", "Robotics", "Hardware Integration", "Engineering Design"]} images={[qarmBlueprint, qarmAction]} link="https://www.notion.so/Q-Arm-Robotic-Manipulator-Project-2dd3fc50fbaf80a0af59cba8c88862db" />
            
            <ProjectCard title="GradeGenius" description="A web-based GPA calculator built using HTML, CSS, and JavaScript, featuring dynamic course inputs, weighted grade calculations, and a clean interactive interface." technologies={["HTML", "CSS", "JavaScript", "Web Development"]} image={gradegeniusScreenshot} 
            imageCover
            link="https://gradegenius-gpa-calculator.vercel.app/" />



            <ProjectCard
  title="InternBase"
  description="A responsive internship application tracker built to organize applications, interviews, documents, and recruiting progress in one centralized workspace."
  technologies={["React", "TypeScript", "Tailwind CSS", "Vite"]}
  image={internbaseScreenshot}
  imageCover
  link="https://internbase-tau.vercel.app/"
/>
            
            <ProjectCard
  title="Personal Engineering Portfolio"
  description="Designed and developed a responsive personal portfolio website using React, TypeScript, and Tailwind CSS to showcase projects, technical skills, engineering experience, and resume."
  technologies={["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub"]}
  image="/favicon.png"
/>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            <span className="text-gradient-red">Experience</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-l-4 border-l-primary">
  <CardHeader>
    <CardTitle className="text-2xl">Engineering Intern</CardTitle>
    <CardDescription className="text-base">
      Navcast Inc. | 4+ Months
    </CardDescription>
  </CardHeader>

  <CardContent>
    <p className="text-muted-foreground leading-relaxed">
       Completed a 4-month RF Engineering internship at <strong>Navcast Inc.</strong>,
    where I gained hands-on experience supporting real-world engineering projects.
    Worked alongside experienced engineers while developing skills in RF systems,
    testing, technical troubleshooting, documentation, and collaborative engineering
    workflows.
    </p>
  </CardContent>
</Card>

            <Card className="bg-card/50 backdrop-blur-sm border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="text-2xl">Physics Club Leader</CardTitle>
                <CardDescription className="text-base">Garth Webb Secondary School</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Organized experiments, ran group meetings, and taught physics concepts in an engaging way. Developed leadership and teaching skills while fostering a passion for science and engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl">DECA Provincial Competitor</CardTitle>
                    <CardDescription className="text-base">Garth Webb Secondary School</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary">
                    Provincial Level
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced to the <span className="text-primary font-semibold">Provincial Championships</span> in DECA, demonstrating skills in business strategy, case analysis, and professional presentations to industry judges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="text-2xl">ACE Canada Delegate</CardTitle>
                <CardDescription className="text-base">McMaster University</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Represented my school's ACE chapter, supporting student-led engineering and professional development initiatives through meetings, planning, and collaboration with peers to improve the student experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              <span className="text-gradient-blue">Resume</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Download my resume to learn more about my experience, skills, and academic background.
            </p>
            
            <a href="/Ronit_Bhanot_Resume.pdf" download>
              <Button size="lg" className="bg-gradient-to-r from-primary to-neon-cyan hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            <span className="text-gradient-red">Get In Touch</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <a href="mailto:ronit.bhanot@gmail.com" className="flex items-center gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all hover:scale-105 group">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">ronit.bhanot@gmail.com</div>
                    </div>
                  </a>

                  <a href="tel:4374301757" className="flex items-center gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all hover:scale-105 group">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-all">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm text-muted-foreground">437-430-1757</div>
                    </div>
                  </a>

                  <a href="https://linkedin.com/in/ronit-bhanot-48940632a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all hover:scale-105 group">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">View Profile</div>
                    </div>
                  </a>

                  <a href="https://github.com/ronitbhanot4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all hover:scale-105 group">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-all">
                      <Github className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-sm text-muted-foreground">View Profile</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Ronit Bhanot. Built with passion and code.</p>
        </div>
      </footer>
    </div>;
};
export default Index;