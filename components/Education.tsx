import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Education = () => {
  const data = [
    {
      title: "2022-2026",
      content: (
        <div className="break-words">
          <p className="text-neutral-800 dark:text-neutral-200 text-wrap sm:text-sm md:text-base font-normal mb-4">
            Bachelor of Engineering (B.E) in Information Science
            <br />
            <span className="font-semibold">BMS College of Engineering</span>
            <br />
            Bengaluru, India
            <br />
            <span className="text-green-500 font-semibold">GPA: 9.76</span>
            <br />
            Pursuing a comprehensive program that covers key areas including software engineering, machine learning, artificial intelligence, and web development. Actively engaged in hands-on projects and internships that have enhanced practical skills and industry knowledge. Participated in coding competitions, workshops, and seminars to stay abreast of emerging technologies and trends.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm md:text-base font-normal mb-8">
            Key Courses: Data Structures, Algorithms, Database Management Systems, Operating Systems, Web Technologies
            <br />
            Extracurriculars: Member of the university coding club, volunteer for tech events,
          </p>
        </div>
      ),
    },
    {
      title: "2020-2022",
      content: (
        <div className="break-words">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-4">
            Higher Secondary Education (12th)
            <br />
            <span className="font-semibold">Jawahar Navodaya Vidyalaya</span>
            <br />
            Hassan, India
            <br />
            <span className="text-blue-500 font-semibold">Grade: 95%</span>
            <br />
            Completed a rigorous curriculum focusing on Science and Mathematics, which laid a strong foundation for analytical thinking and problem-solving. Engaged in various academic and extracurricular activities that fostered a holistic development approach, including leadership roles in student organizations and participation in many scientific events.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm md:text-base font-normal mb-8">
            Achievements: Top performer in Board Examinations, elected as the House Captain, and actively involved in community service projects.
            <br />
            Achieved Rajya Purskar in Scout-and-Guides
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="education">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-20 bg-white dark:bg-neutral-950 overflow-x-hidden">
        <h2 className="text-lg sm:text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Educational Background
        </h2>
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Education;
