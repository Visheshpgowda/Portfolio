"use client";

import Terminal from '../../components/Terminal';
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { tnavItems } from '@/data';
export default function Terminalpage() {

  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-8 space-y-6">
    <FloatingNav navItems={tnavItems} className="mb-6 shadow-md rounded-xl bg-card p-3" />
    <div className="w-full max-w-4xl">
      <Terminal />
    </div>
  </div>
);

  
}
