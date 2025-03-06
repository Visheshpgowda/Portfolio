import { FaLocationArrow } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add entrance animation after component loads
    setIsLoaded(true);
  }, []);

  return (
    <div className="pb-20 pt-36 relative overflow-hidden">
      {/* Spotlights */}
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      
      {/* Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center z-0"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      
      {/* Content */}
      <div className="flex justify-center relative z-10 my-20">
        <Card className="max-w-[90vw] md:max-w-3xl lg:max-w-[60vw] bg-background/80 backdrop-blur-sm border-opacity-40 p-6">
          <CardContent className="flex flex-col items-center justify-center p-0 space-y-6">
            {/* Avatar with circular animation on hover */}
            <div 
              className={`relative mb-2 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-primary/40 to-blue-500/40 rounded-full blur-lg transition-opacity duration-500 ${isHovering ? 'opacity-70 scale-110' : 'opacity-0 scale-100'}`}></div>
              
              {/* Avatar container - handles the shape transition */}
              <div className={`w-32 h-32 overflow-hidden transition-all duration-500 ease-out cursor-pointer
                ${isHovering ? 'rounded-full scale-110 shadow-lg shadow-primary/20' : 'rounded-lg scale-100'}
              `}>
                <Avatar 
                  className="w-full h-full border-4 border-primary/20 relative z-10 
                    transition-all duration-500 ease-out hover:border-primary/60"
                >
                  <AvatarImage src="/ava.webp" alt="Vishesh" className="object-cover" />
                  <AvatarFallback className="text-3xl">VS</AvatarFallback>
                </Avatar>
              </div>
              
              <div 
                className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${isHovering ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-2'}`}
              >
                <Badge variant="outline" className="shadow-md bg-background/90 backdrop-blur-sm">
                  Hello there!
                </Badge>
              </div>
              
              {/* Animated rings around avatar */}
              <div className={`absolute inset-0 rounded-full border border-primary/30 transition-all duration-700 ${isHovering ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}`}></div>
              <div className={`absolute inset-0 rounded-full border border-primary/20 transition-all duration-1000 delay-100 ${isHovering ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`}></div>
            </div>
            
            {/* Intro Badge */}
            <Badge variant="secondary" className="uppercase tracking-widest text-xs">
             5th Sem ISE at BMSCE
            </Badge>
            
            {/* Main Heading */}
            <div className="px-4">
              <TextGenerateEffect
                words="Vishesh P Gowda"
                className="text-center text-[25px] sm:text-[36px] md:text-5xl lg:text-6xl font-bold"
              />
              <TextGenerateEffect
                words="Building a better world through engineering innovation."
                className="text-center text-[10px] sm:text-[36px] md:text-1xl lg:text-1xl"
              />
            </div>
            
            {/* Bio */}
            <p className="text-center text-muted-foreground tracking-wide text-sm sm:text-base md:text-lg lg:text-xl max-w-[80%]">
              I&apos;m Vishesh, a 5th-semester Information Science and Engineering student at BMS College of Engineering (BMSCE). I&apos;m passionate about tech solutions and have a solid foundation in programming, data structures, and software development. Eager to learn and collaborate for impactful innovations!
            </p>
            
            {/* CTA Button */}
            <a href="/resume.pdf" download>
              <Button className="group relative overflow-hidden rounded-full px-8 py-2 transition-all duration-300 ease-out hover:bg-primary/90">
                <span className="relative z-10 flex items-center gap-2">
                  Download My Resume
                  <FaLocationArrow className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary/60 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hero;