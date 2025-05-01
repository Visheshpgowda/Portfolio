import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Calendar, School, MapPin, Trophy, Star, BookMarked } from "lucide-react";

// Define proper TypeScript interfaces
interface GradeInfo {
  label: string;
  value: string;
}

interface EducationCardProps {
  type: "university" | "highSchool" | "certificate";
  title: string;
  institution: string;
  location: string;
  period: string;
  grade: GradeInfo;
  description: string;
  courses?: string[];
  achievements?: string[];
  skills?: string[];
  delay?: number;
}

interface EducationData extends EducationCardProps {}

// EducationCard component
const EducationCard: React.FC<EducationCardProps> = ({
  type,
  title,
  institution,
  location,
  period,
  grade,
  description,
  courses,
  achievements,
  skills,
  delay = 0
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getTypeIcon = () => {
    switch (type) {
      case "university":
        return GraduationCap;
      case "highSchool":
        return BookOpen;
      case "certificate":
        return Award;
      default:
        return GraduationCap;
    }
  };

  const TypeIcon = getTypeIcon();

  const getCardStyle = () => {
    switch (type) {
      case "university":
        return "from-indigo-900/40 to-indigo-800/20 border-indigo-700/30 hover:shadow-indigo-500/20";
      case "highSchool":
        return "from-blue-900/40 to-blue-800/20 border-blue-700/30 hover:shadow-blue-500/20";
      case "certificate":
        return "from-emerald-900/40 to-emerald-800/20 border-emerald-700/30 hover:shadow-emerald-500/20";
      default:
        return "from-indigo-900/40 to-indigo-800/20 border-indigo-700/30 hover:shadow-indigo-500/20";
    }
  };

  const getIconColor = () => {
    switch (type) {
      case "university":
        return "text-indigo-300 bg-indigo-900/60";
      case "highSchool":
        return "text-blue-300 bg-blue-900/60";
      case "certificate":
        return "text-emerald-300 bg-emerald-900/60";
      default:
        return "text-indigo-300 bg-indigo-900/60";
    }
  };

  const getBadgeStyle = () => {
    switch (type) {
      case "university":
        return "from-indigo-900 to-indigo-800 text-indigo-300";
      case "highSchool":
        return "from-blue-900 to-blue-800 text-blue-300";
      case "certificate":
        return "from-emerald-900 to-emerald-800 text-emerald-300";
      default:
        return "from-indigo-900 to-indigo-800 text-indigo-300";
    }
  };

  const getHeadingColor = () => {
    switch (type) {
      case "university":
        return "text-indigo-200";
      case "highSchool":
        return "text-blue-200";
      case "certificate":
        return "text-emerald-200";
      default:
        return "text-indigo-200";
    }
  };

  const getAccentColor = () => {
    switch (type) {
      case "university":
        return "text-indigo-300";
      case "highSchool":
        return "text-blue-300";
      case "certificate":
        return "text-emerald-300";
      default:
        return "text-indigo-300";
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <Card className={`overflow-hidden bg-gradient-to-br ${getCardStyle()} shadow-lg transition-all duration-300 border`}>
        <CardContent className="p-0">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className={`flex-shrink-0 hidden md:flex items-center justify-center w-16 h-16 rounded-full ${getIconColor()}`}>
                <TypeIcon className="h-8 w-8" />
              </div>
              
              <div className="flex-grow">
                {/* Period badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300 font-medium">{period}</span>
                </div>
                
                {/* Title */}
                <div className="flex items-center gap-2 mb-1">
                  <TypeIcon className={`h-5 w-5 ${getAccentColor()} md:hidden`} />
                  <h3 className={`text-xl font-bold ${getHeadingColor()}`}>
                    {title}
                  </h3>
                </div>
                
                {/* Institution */}
                <div className="flex items-center gap-2 mb-2">
                  <School className="h-4 w-4 text-gray-400" />
                  <p className="text-gray-200 font-medium">
                    {institution}
                  </p>
                </div>
                
                {/* Location */}
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <p className="text-gray-400 text-sm">
                    {location}
                  </p>
                </div>
                
                {/* Grade badge */}
                <div className={`flex items-center bg-gradient-to-r ${getBadgeStyle()} rounded-full px-3 py-1 w-fit mb-4`}>
                  <span className="font-bold text-sm">{grade.label}: {grade.value}</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
                  {description}
                </p>
                
                {/* Details */}
                <div className="space-y-4">
                  {courses && courses.length > 0 && (
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="flex items-center gap-2">
                        <BookMarked className={`h-4 w-4 ${getAccentColor()}`} />
                        <span className={`${getAccentColor()} font-semibold whitespace-nowrap`}>Key Courses:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {courses.map((course: string, index: number) => (
                          <Badge key={index} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">{course}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {achievements && achievements.length > 0 && (
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="flex items-center gap-2">
                        <Trophy className={`h-4 w-4 ${getAccentColor()}`} />
                        <span className={`${getAccentColor()} font-semibold whitespace-nowrap`}>Achievements:</span>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {achievements.join(", ")}
                      </p>
                    </div>
                  )}
                  
                  {skills && skills.length > 0 && (
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="flex items-center gap-2">
                        <Star className={`h-4 w-4 ${getAccentColor()}`} />
                        <span className={`${getAccentColor()} font-semibold whitespace-nowrap`}>Skills:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill: string, index: number) => (
                          <Badge key={index} variant="secondary" className={`${
                            type === "university" ? "bg-indigo-900/60 text-indigo-300" : 
                            type === "highSchool" ? "bg-blue-900/60 text-blue-300" : 
                            "bg-emerald-900/60 text-emerald-300"
                          }`}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main EducationSection component
const EducationSection: React.FC = () => {
  // Education data
  const educationData: EducationData[] = [
    {
      type: "university",
      title: "Bachelor of Engineering (B.E) in Information Science",
      institution: "BMS College of Engineering",
      location: "Bengaluru, India",
      period: "2022 - 2026",
      grade: { label: "GPA", value: "9.73" },
      description: "Pursuing a comprehensive program that covers key areas including software engineering, machine learning, artificial intelligence, and web development. Actively engaged in hands-on projects and internships that have enhanced practical skills and industry knowledge.",
      courses: ["Data Structures", "Algorithms", "Database Management", "Web Technologies", "Operating Systems"],
      achievements: ["Internship at Fidelity Investments", "Hackathon Winner"],
      skills: ["Java", "Python", "JavaScript", "React", "Node.js"]
    },
    {
      type: "highSchool",
      title: "Higher Secondary Education (12th)",
      institution: "Jawahar Navodaya Vidyalaya",
      location: "Hassan, India",
      period: "2020 - 2022",
      grade: { label: "Grade", value: "95%" },
      description: "Completed a rigorous curriculum focusing on Science and Mathematics, which laid a strong foundation for analytical thinking and problem-solving. Engaged in various academic and extracurricular activities that fostered a holistic development approach.",
      achievements: ["Top performer in Board Examinations", "House Captain", "Community service projects"],
      skills: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section id="education" className="w-full py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-400">
            Educational Journey
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-500 rounded-full mb-4"></div>
          <p className="text-gray-300 text-center max-w-2xl text-lg">
            My academic background that has shaped my knowledge and skills in the field of technology.
          </p>
        </motion.div>
        
        {/* Timeline-like structure with cards */}
        <div className="relative">
          {/* Vertical timeline line - only visible on medium screens and up */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-600/70 via-blue-500/70 to-emerald-500/70"></div>
          
          {/* Glowing effect */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-400 via-blue-400 to-emerald-400 blur-lg opacity-50"></div>
          
          {/* Education cards with timeline connections */}
          <motion.div 
            className="space-y-16 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {educationData.map((education, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - only visible on medium screens and up */}
                <div className="hidden md:block absolute left-8 top-10 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transform -translate-x-1/2 z-10 shadow-lg shadow-indigo-500/50"></div>
                
                {/* Timeline date label - only visible on medium screens and up */}
                <div className="hidden md:block absolute left-20 top-8 bg-gray-800/80 text-gray-200 px-3 py-1 rounded-md text-sm font-medium">
                  {education.period.split(" - ")[0]}
                </div>
                
                {/* Card with offset for timeline - has different margin for mobile and desktop */}
                <div className="md:ml-32">
                  <EducationCard
                    type={education.type}
                    title={education.title}
                    institution={education.institution}
                    location={education.location}
                    period={education.period}
                    grade={education.grade}
                    description={education.description}
                    courses={education.courses}
                    achievements={education.achievements}
                    skills={education.skills}
                    delay={index * 0.2}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;