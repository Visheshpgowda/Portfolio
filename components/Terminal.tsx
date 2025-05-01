"use client";

import React, { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';

// Define types for terminal lines and commands
type TerminalLine =
  | { type: 'help'; html: string }
  | { type: 'input'; html: string }
  | { type: 'output'; html: string };

type CommandAction = string | (() => string);

// Help message HTML - properly formatted for display
const helpMessage = `
<div class="space-y-4">
  <div>
    <span class="text-cyan-400 font-bold">💻 System Commands:</span><br/>
    <span class="text-yellow-400 font-bold">help</span> or <span class="text-yellow-400 font-bold">h</span> - Show available commands<br/>
    <span class="text-yellow-400 font-bold">clear</span> or <span class="text-yellow-400 font-bold">cls</span> - Clear the terminal<br/>
    <span class="text-yellow-400 font-bold">neofetch</span> or <span class="text-yellow-400 font-bold">fetch</span> - Display system info
  </div>
  
  <div>
    <span class="text-cyan-400 font-bold">👤 Personal Information:</span><br/>
    <span class="text-yellow-400 font-bold">whoami</span> - Display my identity<br/>
    <span class="text-yellow-400 font-bold">skills</span> - Show my technical skills<br/>
    <span class="text-yellow-400 font-bold">education</span> - Show my education background<br/>
    <span class="text-yellow-400 font-bold">experience</span> - Show my work experience<br/>
    <span class="text-yellow-400 font-bold">projects</span> - List my featured projects<br/>
    <span class="text-yellow-400 font-bold">awards</span> - Display my achievements<br/>
    <span class="text-yellow-400 font-bold">certifications</span> - Show my certifications<br/>
    <span class="text-yellow-400 font-bold">responsibilities</span> - Show my responsibilities
  </div>
  
  <div>
    <span class="text-cyan-400 font-bold">🌐 Online Profiles:</span><br/>
    <span class="text-yellow-400 font-bold">linkedin</span> or <span class="text-yellow-400 font-bold">ln</span> - Open my LinkedIn profile<br/>
    <span class="text-yellow-400 font-bold">github</span> or <span class="text-yellow-400 font-bold">gh</span> - Open my GitHub profile<br/>
    <span class="text-yellow-400 font-bold">portfolio</span> - Open my portfolio website<br/>
   
  </div>
  

</div>
`;
 // <span class="text-yellow-400 font-bold">leetcode</span> - Open my LeetCode profile
// Command definitions
//   <div>
//     <span class="text-cyan-400 font-bold">📄 Documents:</span><br/>
//     <span class="text-yellow-400 font-bold">resume</span> or <span class="text-yellow-400 font-bold">r</span> - Download my resume
//   </div>
const commands: Record<string, CommandAction> = {
  help: helpMessage,
  h: 'help',
  clear: 'clear',
  cls: 'clear',
  exit: 'clear',
  neofetch: () => {
    const currentTime = new Date().toLocaleTimeString();
    return `
<div class="p-2 flex">
  <pre class="text-blue-400 mr-4">
  /\\      
 /  \\     
/    \\    
  /\\  \\   
 / (--) \\  
/    \\  
\\    /___/  
  </pre>
  <div class="ml-2">
    <span class="text-green-400 font-bold">User:</span> vishesh
    <br><span class="text-green-400 font-bold">OS:</span> Arch Linux
    <br><span class="text-green-400 font-bold">Hostname:</span> visheshpgowda.in
    <br><span class="text-green-400 font-bold">Time:</span> ${currentTime}
    <br><span class="text-green-400 font-bold">Email:</span> <a href="mailto:visheshhirrisave@gmail.com" class="text-blue-400 hover:underline">visheshhirrisave@gmail.com</a>
    <br><span class="text-green-400 font-bold">Phone:</span> +91-9481262426
    <br><span class="text-green-400 font-bold">GitHub:</span> <a href="https://github.com/Visheshpgowda" target="_blank" class="text-blue-400 hover:underline">github.com/Visheshpgowda</a>
    <br><span class="text-green-400 font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/vishesh-p-gowda/" target="_blank" class="text-blue-400 hover:underline">linkedin.com/in/vishesh-p-gowda/</a>
  </div>
</div>`;
  },
  fetch: 'neofetch',
  github: () => { window.open('https://github.com/Visheshpgowda', '_blank'); return `<span class="text-green-400">Opening GitHub profile...</span>`; },
  gh: 'github',
  linkedin: () => { window.open('https://www.linkedin.com/in/vishesh-p-gowda/', '_blank'); return `<span class="text-green-400">Opening LinkedIn profile...</span>`; },
  ln: 'linkedin',
  portfolio: () => { window.open('https://github.com/Visheshpgowda', '_blank'); return `<span class="text-green-400">Opening portfolio website...</span>`; },
//   leetcode: () => { window.open('https://leetcode.com/vishesh-p-gowda/', '_blank'); return `<span class="text-green-400">Opening LeetCode profile (1853 rating)...</span>`; },
  whoami: `<span class="font-bold text-xl text-purple-400">Vishesh P Gowda</span> | <span class="text-blue-400">Backend Developer | Software Engineer</span>
<div class="mt-2 text-gray-300">
Tech enthusiast with hands-on experience in 10+ projects, demonstrating strong problem-solving skills, effective communication, and a collaborative mindset. Committed to using technology to create meaningful impact while excelling in communication and adaptability.
</div>`,
  skills: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <span class="text-cyan-400 font-bold">Languages:</span>
      <ul class="list-disc ml-5 text-gray-300">
        <li>C, C++, Java</li>
        <li>Python, SQL</li>
      </ul>
    </div>
    <div>
      <span class="text-cyan-400 font-bold">Frameworks:</span>
      <ul class="list-disc ml-5 text-gray-300">
        <li>React, Next.js</li>
        <li>Pandas, NumPy, Scikit-Learn</li>
      </ul>
    </div>
    <div>
      <span class="text-cyan-400 font-bold">Frontend Technologies:</span>
      <ul class="list-disc ml-5 text-gray-300">
        <li>HTML, CSS, JavaScript, TypeScript</li>
        <li>UI/UX Design</li>
      </ul>
    </div>
    <div>
      <span class="text-cyan-400 font-bold">Backend Technologies:</span>
      <ul class="list-disc ml-5 text-gray-300">
        <li>Node.js, Express</li>
        <li>REST APIs, Postman</li>
      </ul>
    </div>
    <div>
      <span class="text-cyan-400 font-bold">Tools:</span>
      <ul class="list-disc ml-5 text-gray-300">
        <li>Git, GitHub</li>
      </ul>
    </div>
    <div>
      <span class="text-cyan-400 font-bold">Database:</span>
      <ul class="list-disc ml-5 text-gray-300">
        <li>MySQL, MongoDB</li>
      </ul>
    </div>
  </div>`,
  education: `<div class="space-y-4">
    <div class="border-l-4 border-blue-500 pl-3">
      <span class="text-yellow-400 font-bold">Bachelor of Engineering</span>
      <p class="text-gray-300">BMS College of Engineering | 2022-2026</p>
      <p class="text-green-400">CGPA: 9.73</p>
    </div>
    <div class="border-l-4 border-blue-500 pl-3">
      <span class="text-yellow-400 font-bold">Higher Secondary Education (12th)</span>
      <p class="text-gray-300">J.N.V HASSAN (CBSE) | 2020-2022</p>
      <p class="text-green-400">Percentage: 95%</p>
    </div>
  </div>`,
  experience: `<div class="space-y-6">
    <div class="border-l-4 border-purple-500 pl-3">
      <span class="text-yellow-400 font-bold">Tejas Technological Co.</span>
      <p class="text-gray-300">Software Engineer Intern | Bengaluru | Jan 2024 – May 2024</p>
      <ul class="list-disc ml-5 text-gray-300 mt-2">
        <li>Engineered and optimized API endpoints, enhancing system performance and data retrieval efficiency</li>
        <li>Managed a large-scale database, ensuring data integrity and implementing quality assurance practices</li>
        <li>Led efficient management of academic data, optimizing marks, timetables, and institutional activities</li>
      </ul>
    </div>
    <div class="border-l-4 border-purple-500 pl-3">
      <span class="text-yellow-400 font-bold">Crush Holidays</span>
      <p class="text-gray-300">Backend Developer Intern | Bengaluru | Nov 2024 – Feb 2025</p>
      <ul class="list-disc ml-5 text-gray-300 mt-2">
        <li>Architected and implemented backend models, ensuring efficient data structuring and seamless functionality for the touring website</li>
        <li>Orchestrated deployment and domain configurations, troubleshooting domain-related issues to ensure a seamless online presence</li>
      </ul>
    </div>
  </div>`,
  projects: `<div class="space-y-6">
    <div class="border-l-4 border-green-500 pl-3">
      <span class="text-yellow-400 font-bold">FusionGenAI: A SaaS Project</span>
      <p class="text-gray-300 text-sm">Oct 2023 - Feb 2025</p>
      <p class="text-blue-400 text-sm italic">Next.js, TypeScript, Tailwind CSS, Cloudinary, Tessereact.js</p>
      <p class="text-gray-300 mt-2">Implemented real-time functionalities for image and music generation, code execution, and conversation capabilities, while also integrating video uploads via Cloudinary and an image converter optimized for social media.</p>
    </div>
    <div class="border-l-4 border-green-500 pl-3">
      <span class="text-yellow-400 font-bold">Edu-Streamliner: Digital School Management System</span>
      <p class="text-gray-300 text-sm">Jan 2024 - Mar 2024</p>
      <p class="text-blue-400 text-sm italic">ReactJs, NodeJS, Tailwind</p>
      <p class="text-gray-300 mt-2">Designed and built an intuitive dashboard for teachers and administrators to manage attendance, timetables, and announcements efficiently. Integrated secure role-based access for admins, teachers, and students, ensuring secure and streamlined operations.</p>
    </div>
    <div class="border-l-4 border-green-500 pl-3">
      <span class="text-yellow-400 font-bold">Health Predict: ML-Based Prediction Model</span>
      <p class="text-gray-300 text-sm">Nov 2024 - Feb 2025</p>
      <p class="text-blue-400 text-sm italic">XGBoost, ANN, React, Flask, Vercel, Railway.app</p>
      <p class="text-gray-300 mt-2">Engineered a robust machine learning model to predict risks for asthma, diabetes, stroke, and cardiovascular diseases. Designed a scalable and user-friendly system with an interactive UI, API-driven backend, and modular architecture for future disease model expansions.</p>
    </div>
  </div>`,
  awards: `<div class="space-y-3">
    <div class="flex items-start">
      <span class="text-yellow-400 mr-2">🏆</span>
      <span>Finalist in the Innovation for Education Equity Hackathon, securing a spot in the top 12 out of 100+ teams</span>
    </div>
    <div class="flex items-start">
      <span class="text-yellow-400 mr-2">🥈</span>
      <span>Secured 2nd place in The Lazarus Missions Machine Learning Hackathon, organized by IEEE NITK competing against 50+ teams</span>
    </div>
    <div class="flex items-start">
      <span class="text-yellow-400 mr-2">🌟</span>
      <span>Contributed to open-source during Girl script Summer of Code by resolving bugs and enhancing UI styling in a React-based financial news website</span>
    </div>
  </div>`,
  certifications: `<div class="space-y-3">
    <div class="flex items-start">
      <span class="text-cyan-400 mr-2">📜</span>
      <span>Supervised Machine Learning: Regression and Classification (Coursera)</span>
    </div>
    <div class="flex items-start">
      <span class="text-cyan-400 mr-2">📜</span>
      <span>Unsupervised Learning, Recommenders, Reinforcement Learning (Coursera)</span>
    </div>
  </div>`,
  responsibilities: `<div class="space-y-3">
    <div class="flex items-start">
      <span class="text-green-400 mr-2">👨‍💻</span>
      <span>Technical Head of Augment AI Technical Club, leading a team of 100+ students in various AI-driven projects and initiatives</span>
    </div>
    <div class="flex items-start">
      <span class="text-green-400 mr-2">🎖️</span>
      <span>Senior coordinator of the Prize Committee in UTSAV fest, leading a team of eight members to ensure efficient and accurate transaction processing</span>
    </div>
    <div class="flex items-start">
      <span class="text-green-400 mr-2">💻</span>
      <span>Served as a Backend Developer at The Big Foundation, BMSCE E-Cell, contributing to scalable backend solutions</span>
    </div>
  </div>`,
  resume: () => { 
    const link = document.createElement('a'); 
    link.href = '/resume.pdf'; 
    link.download = 'Vishesh_Resume.pdf'; 
    link.target = '_blank';
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
    return '<span class="text-green-400">Downloading resume...</span>'; 
  },
  r: 'resume',
};

const Terminal = () => {
  const [history, setHistory] = useState<TerminalLine[]>([{ type: 'help', html: helpMessage }]);
  const [inputValue, setInputValue] = useState<string>('');
  const [hint, setHint] = useState<string>('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // Refs for input and terminal container
  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  // Cache command keys for autocomplete
  const commandList = Object.keys(commands);

  // Focus on input element when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Process a command
  const handleCommand = (raw: string) => {
    const cmdInput = raw.trim();
    console.log(cmdInput);
    if (!cmdInput) return;

    // Add to command history
    setCommandHistory(prev => [...prev, cmdInput]);
    setHistoryIndex(commandHistory.length + 1);

    // For display in terminal
    const lowerInput = cmdInput.toLowerCase();

    // Resolve aliases recursively
    let resolvedCommand = lowerInput;
    const visited = new Set<string>();
    
    while (typeof commands[resolvedCommand] === "string" && commands[resolvedCommand] !== 'clear') {
      if (visited.has(resolvedCommand)) break; // Prevent circular alias
      visited.add(resolvedCommand);
      
    }

    // Clear command is special
    if (resolvedCommand === "clear") {
      setHistory([{ type: 'help', html: helpMessage }]);
      return;
    }

    // Get action for command
    console.log(resolvedCommand);
    const action = commands[resolvedCommand];

    // Get result
    let result: string;
    if (typeof action === "function") {
      result = action();
    } else if (action) {
      result = action;
    } else {
      result = `<span class="text-red-400">Command not found: ${cmdInput}. Type 'help' to see available commands.</span>`;
    }

    // Add command and output to history
    setHistory(prev => [
      ...prev, 
      { type: 'input', html: cmdInput },
      { type: 'output', html: result }
    ]);
  };

  // Handle keyboard events
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
      setInputValue('');
      setHint('');
    } else if ((e.key === 'Tab' || (e.key === 'ArrowRight' && hint)) && inputValue) {
      e.preventDefault();
      const match = commandList.find(c => c.toLowerCase().startsWith(inputValue.toLowerCase()));
      if (match) setInputValue(match);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex] || '');
      } else {
        setHistoryIndex(commandHistory.length);
        setInputValue('');
      }
    }
  };

  // Update input and hint for autocomplete
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    
    if (val) {
      const match = commandList.find(c => c.toLowerCase().startsWith(val.toLowerCase()));
      
      setHint(match ? match.slice(val.length) : '');
    } else {
      setHint('');
    }
  };

  // Focus terminal when clicking anywhere in the component
  const focusTerminal = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="h-screen max-h-screen flex items-center justify-center bg-gray-900 p-4 font-mono">
      <div className="w-full max-w-4xl h-5/6 flex flex-col bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-sm flex-grow text-center">vishesh@terminal:~</div>
        </div>
        
        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          onClick={focusTerminal}
          className="flex-grow overflow-y-auto bg-gray-900 text-gray-200 p-4"
        >
          {history.map((line, idx) => (
            <div key={idx} className="mb-2">
              {line.type === 'input' ? (
                <div className="flex">
                  <span className="text-green-400 mr-2">λ</span>
                  <span className="text-cyan-300">{line.html}</span>
                </div>
              ) : (
                <div
                  className={`${line.type === 'help' ? 'text-gray-300 leading-relaxed' : 'text-gray-300 ml-5'}`}
                  dangerouslySetInnerHTML={{ __html: line.html }}
                />
              )}
            </div>
          ))}
          
          {/* Input Line */}
          <div className="flex mt-2">
            <span className="text-green-400 mr-2">λ</span>
            <div className="relative flex-grow">
              <span className="text-cyan-300">{inputValue}</span>
              <span className="text-gray-600">{hint}</span>
              <input
                ref={inputRef}
                value={inputValue}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                className="absolute inset-0 w-full bg-transparent outline-none text-transparent caret-green-400"
                aria-label="Terminal input"
              />
             
            </div>
          </div>
        </div>
        
        {/* Command Bar */}
        <div className="bg-gray-800 p-2 border-t border-gray-700 overflow-x-auto">
          <div className="flex flex-wrap gap-2">
            {['help', 'clear', 'whoami', 'skills', 'projects', 'experience', 'education', 'awards', 'github', 'linkedin', 'resume'].map(cmd => (
              <button 
                key={cmd}
                onClick={() => {
                  handleCommand(cmd);
                  inputRef.current?.focus();
                }}
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded text-xs transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;