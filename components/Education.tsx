import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Education = () => {
  const data = [
    {
      title: "2022-2026",
      content: (
        <div className="break-words w-full">
          <div className="p-4 sm:p-6 rounded-lg bg-opacity-30 bg-blue-900 border border-blue-700/40">
            <h3 className="text-cyan-300 text-base sm:text-lg font-bold mb-2">
              Bachelor of Engineering (B.E) in Information Science
            </h3>
            <p className="text-cyan-100 text-sm md:text-base font-medium mb-2">
              <span className="font-semibold">BMS College of Engineering</span>
              <br />
              Bengaluru, India
            </p>
            <p className="text-emerald-400 font-bold mb-3 sm:mb-4">GPA: 9.67</p>
            <p className="text-blue-100 text-xs sm:text-sm font-normal mb-3 sm:mb-4">
              Pursuing a comprehensive program that covers key areas including software engineering, 
              machine learning, artificial intelligence, and web development. Actively engaged in hands-on 
              projects and internships that have enhanced practical skills and industry knowledge. 
              Participated in coding competitions, workshops, and seminars to stay abreast of emerging 
              technologies and trends.
            </p>
            <div className="mt-3 sm:mt-4 space-y-2">
              <div>
                <span className="text-cyan-300 font-semibold block sm:inline sm:mr-2">Key Courses:</span>
                <span className="text-blue-200 text-xs sm:text-sm">
                  Data Structures, Algorithms, Database Management Systems, Operating Systems, Web Technologies
                </span>
              </div>
              <div>
                <span className="text-cyan-300 font-semibold block sm:inline sm:mr-2">Extracurriculars:</span>
                <span className="text-blue-200 text-xs sm:text-sm">
                  Member of the university coding club, volunteer for tech events
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020-2022",
      content: (
        <div className="break-words w-full">
          <div className="p-4 sm:p-6 rounded-lg bg-opacity-30 bg-blue-900 border border-blue-700/40">
            <h3 className="text-cyan-300 text-base sm:text-lg font-bold mb-2">
              Higher Secondary Education (12th)
            </h3>
            <p className="text-cyan-100 text-sm md:text-base font-medium mb-2">
              <span className="font-semibold">Jawahar Navodaya Vidyalaya</span>
              <br />
              Hassan, India
            </p>
            <p className="text-blue-400 font-bold mb-3 sm:mb-4">Grade: 95%</p>
            <p className="text-blue-100 text-xs sm:text-sm font-normal mb-3 sm:mb-4">
              Completed a rigorous curriculum focusing on Science and Mathematics, which laid a strong 
              foundation for analytical thinking and problem-solving. Engaged in various academic and 
              extracurricular activities that fostered a holistic development approach, including leadership 
              roles in student organizations and participation in many scientific events.
            </p>
            <div className="mt-3 sm:mt-4 space-y-2">
              <div>
                <span className="text-cyan-300 font-semibold block sm:inline sm:mr-2">Achievements:</span>
                <span className="text-blue-200 text-xs sm:text-sm">
                  Top performer in Board Examinations, elected as the House Captain, and actively involved 
                  in community service projects.
                </span>
              </div>
              <div>
                <span className="text-cyan-300 font-semibold block sm:inline sm:mr-2">Awards:</span>
                <span className="text-blue-200 text-xs sm:text-sm">
                  Achieved Rajya Purskar in Scout-and-Guides
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="relative">
      <div className="absolute inset-0 bg-blue-950 -z-10"></div>
      <div className="w-full px-3 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-12 text-white font-bold pl-2 sm:pl-0">
            <span className="inline-block relative">
              Educational Background
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-cyan-400"></span>
            </span>
          </h2>
          <div className="relative">
            <div className="absolute top-0 left-4 sm:left-8 md:left-12 bottom-0 w-0.5 bg-blue-500"></div>
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;