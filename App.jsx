import React from "react";
import { Briefcase, GraduationCap, ClipboardList, Users } from "lucide-react";

export default function ABMBenefitsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">ABM Advantage</h1>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Benefits of ABM</h2>
        <p>
          The ABM strand equips students with knowledge and skills in
          accounting, business, and management, preparing them for future
          careers in finance, marketing, entrepreneurship, and leadership.
        </p>
      </main>
    </div>
  );
}
