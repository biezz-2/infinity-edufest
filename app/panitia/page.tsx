"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import LiquidGlassNav from "@/components/ui/LiquidGlassNav";

// Committee data types and structure
type CommitteeType = "core" | "division";

interface Member {
  id: string;
  role?: string;
  name: string;
  photo?: string;
}

interface Division {
  id: string;
  label: string;
  type: CommitteeType;
  coordinator?: string;
  members: Member[] | string[];
}

// Extended committee data with more structure
const committeeData: Division[] = [
  {
    id: "div_inti",
    label: "Panitia Inti",
    type: "core",
    members: [
      { id: "inti_1", role: "主席 (Ketua Umum)", name: "Azzam" },
      { id: "inti_2", role: "副主席 (Waket)", name: "Novel" },
      { id: "inti_3", role: "秘书 (Sek)", name: "Hammam" },
      { id: "inti_4", role: "财务 (Bend)", name: "Lingga" },
    ],
  },
  {
    id: "div_acara",
    label: "Divisi Acara",
    type: "division",
    coordinator: "Sigit",
    members: ["Ghina", "Wania", "Rhadit", "Aqila", "Namira", "Fajri", "Irsyad A.", "Ahmad", "Haidar"],
  },
  {
    id: "div_lomba",
    label: "Divisi Lomba",
    type: "division",
    coordinator: "Shyfa",
    members: ["Irsyad M.", "Almer", "Lian", "Yussie", "Saskia", "Fathimah", "Thifani", "Aina", "Roziq", "Qaila"],
  },
  {
    id: "div_konsumsi",
    label: "Konsumsi & P3K",
    type: "division",
    coordinator: "Kayyisa",
    members: ["Fathia", "Zalfa", "Afiqoh", "Alifah", "Raissa", "Afiyah", "Annisa"],
  },
  {
    id: "div_humas",
    label: "Humas",
    type: "division",
    coordinator: "Jasmine",
    members: ["Anakia", "Ray Jibril", "Kaulan", "Shafa", "Syarla", "Laila", "Irga"],
  },
  {
    id: "div_kesekre",
    label: "Kesekretariatan",
    type: "division",
    coordinator: "Rizka",
    members: ["Aisha", "Zaki", "Tsuraya", "Aluna", "Kasih", "Rama"],
  },
  {
    id: "div_keamanan",
    label: "Keamanan",
    type: "division",
    coordinator: "Taqi",
    members: ["Kiki", "Reyfa", "Ananda", "Raihan", "Akbar Darel", "Reifa"],
  },
  {
    id: "div_pubdok",
    label: "Pubdok",
    type: "division",
    coordinator: "Keysha",
    members: ["Hafidh", "Attabi", "Tangguh", "Najwan", "Athaya", "Fahmi", "Rizqu", "Rizki"],
  },
  {
    id: "div_lo",
    label: "Liaison Officer (LO)",
    type: "division",
    coordinator: "Adhiena",
    members: ["Vanesha", "Cleo", "Rashi", "Marisa", "Zahra", "Aisyah", "Nazmia", "Haifa"],
  },
  {
    id: "div_danus",
    label: "Danus",
    type: "division",
    coordinator: "Kezzia",
    members: ["Azkarin", "Zulfan", "Nabilah", "Alfira", "Nafeeza", "Sofwan", "Hadziq"],
  },
  {
    id: "div_artistik",
    label: "Artistik",
    type: "division",
    coordinator: "Banita",
    members: ["Aliya", "Rere", "Medina", "Nasya", "Keanu", "Alfian", "Hanum"],
  },
];

// Get initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Get accent color based on role/position
function getRoleAccentColor(role?: string): string {
  if (!role) return "from-white/10 to-white/5";
  const lowerRole = role.toLowerCase();
  if (lowerRole.includes("主席") || lowerRole.includes("ketua")) {
    return "from-amber-500/20 to-amber-500/5";
  }
  if (lowerRole.includes("副主席") || lowerRole.includes("waket")) {
    return "from-orange-500/20 to-orange-500/5";
  }
  if (lowerRole.includes("秘书") || lowerRole.includes("sek")) {
    return "from-cyan-500/20 to-cyan-500/5";
  }
  if (lowerRole.includes("财务") || lowerRole.includes("bend")) {
    return "from-emerald-500/20 to-emerald-500/5";
  }
  return "from-white/10 to-white/5";
}

// Get border color based on role
function getRoleBorderColor(role?: string): string {
  if (!role) return "border-white/10";
  const lowerRole = role.toLowerCase();
  if (lowerRole.includes("主席") || lowerRole.includes("ketua")) {
    return "border-amber-500/30";
  }
  if (lowerRole.includes("副主席") || lowerRole.includes("waket")) {
    return "border-orange-500/30";
  }
  if (lowerRole.includes("秘书") || lowerRole.includes("sek")) {
    return "border-cyan-500/30";
  }
  if (lowerRole.includes("财务") || lowerRole.includes("bend")) {
    return "border-emerald-500/30";
  }
  return "border-white/10";
}

// Get glow color based on role
function getRoleGlowColor(role?: string): string {
  if (!role) return "rgba(255,255,255,0.1)";
  const lowerRole = role.toLowerCase();
  if (lowerRole.includes("主席") || lowerRole.includes("ketua")) {
    return "rgba(245,158,11,0.15)";
  }
  if (lowerRole.includes("副主席") || lowerRole.includes("waket")) {
    return "rgba(249,115,22,0.15)";
  }
  if (lowerRole.includes("秘书") || lowerRole.includes("sek")) {
    return "rgba(6,182,212,0.15)";
  }
  if (lowerRole.includes("财务") || lowerRole.includes("bend")) {
    return "rgba(16,185,129,0.15)";
  }
  return "rgba(255,255,255,0.1)";
}

// Member Card Component - Modern Futuristik Minimalis
interface MemberCardProps {
  member: Member | string;
  index: number;
  isCore?: boolean;
}

function MemberCard({ member, index, isCore = false }: MemberCardProps) {
  const name = typeof member === "string" ? member : member.name;
  const role = typeof member === "string" ? undefined : member.role;
  const initials = getInitials(name);
  const gradientClass = getRoleAccentColor(role);
  const borderClass = getRoleBorderColor(role);
  const glowColor = getRoleGlowColor(role);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      className={`relative p-5 bg-gradient-to-br ${gradientClass} backdrop-blur-md border ${borderClass} rounded-xl hover:bg-white/10 transition-all duration-300 group`}
    >
      {/* Subtle glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)` }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center">
        {/* Photo circle dengan subtle ring */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-transparent p-[1px] mb-3">
          <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center">
            {typeof member !== "string" && member.photo ? (
              <img 
                src={member.photo} 
                alt={name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-lg font-semibold text-white/90">{initials}</span>
            )}
          </div>
        </div>

        {/* Name dengan subtle gradient */}
        <h4 className="text-sm font-semibold text-white/90 mb-1 tracking-wide">
          {name}
        </h4>

        {/* Role */}
        {role && (
          <p className="text-xs text-white/50 font-light px-2">
            {role.split(" ").slice(1).join(" ")}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// Connector Line Component - Thin and elegant
interface ConnectorProps {
  type: "vertical" | "horizontal" | "branch";
  count?: number;
}

function Connector({ type, count = 1 }: ConnectorProps) {
  if (type === "vertical") {
    return (
      <div className="flex justify-center py-3">
        <div className="w-px h-6 bg-gradient-to-b from-white/20 to-white/10" />
      </div>
    );
  }

  if (type === "horizontal") {
    return (
      <div className="flex items-center justify-center py-2">
        <div className="h-px w-full max-w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    );
  }

  // Branch connector
  return (
    <div className="flex items-center justify-center py-1">
      <div className="flex space-x-2">
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
            className="h-px bg-white/15"
            style={{ width: "32px" }}
          />
        ))}
      </div>
    </div>
  );
}

// Level Container
interface LevelProps {
  title?: string;
  children: React.ReactNode;
  isCore?: boolean;
}

function Level({ title, children, isCore = false }: LevelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      {title && (
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-xs font-medium tracking-widest mb-5 px-4 py-1.5 rounded-full border ${
            isCore 
              ? "bg-amber-500/10 text-amber-300/80 border-amber-500/20" 
              : "bg-white/5 text-white/50 border-white/10 uppercase tracking-wider"
          }`}
        >
          {title}
        </motion.h3>
      )}
      
      <div className="flex flex-wrap justify-center gap-3 px-2">
        {children}
      </div>
    </motion.div>
  );
}

// Division Section with tree structure
interface DivisionSectionProps {
  division: Division;
  index: number;
}

function DivisionSection({ division, index }: DivisionSectionProps) {
  const isCore = division.type === "core";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex flex-col items-center"
    >
      {/* Division header card - Minimal */}
      <div className={`relative px-5 py-2.5 mb-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10`}>
        <div className="text-center">
          <h3 className="text-sm font-medium text-white/80 tracking-wide">
            {division.label}
          </h3>
          {division.coordinator && (
            <p className="text-xs text-white/40 mt-0.5">
              Koord. <span className="text-white/60">{division.coordinator}</span>
            </p>
          )}
        </div>
      </div>

      {/* Members grid */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {division.members.map((member, idx) => (
          <MemberCard 
            key={typeof member === 'string' ? `${division.id}_${idx}` : member.id} 
            member={member} 
            index={idx}
            isCore={isCore}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Tree connector between levels
function TreeConnector({ index, total }: { index: number; total: number }) {
  return (
    <div className="flex justify-center py-2">
      <div className="relative">
        {/* Vertical line */}
        <div className="w-px h-5 bg-gradient-to-b from-white/25 to-white/10" />
      </div>
    </div>
  );
}

export default function PanitiaPage() {
  const [hoveredDivision, setHoveredDivision] = useState<string | null>(null);
  
  // Separate core and divisions
  const coreDivision = committeeData.find(d => d.type === "core");
  const otherDivisions = committeeData.filter(d => d.type !== "core");
  
  // Group divisions into rows for better layout
  const divisionRows = useMemo(() => {
    const rows: Division[][] = [];
    let currentRow: Division[] = [];
    let currentCount = 0;
    
    otherDivisions.forEach((div) => {
      const count = div.members.length + 1;
      if (currentCount + count > 4 && currentRow.length > 0) {
        rows.push(currentRow);
        currentRow = [div];
        currentCount = count;
      } else {
        currentRow.push(div);
        currentCount += count;
      }
    });
    
    if (currentRow.length > 0) {
      rows.push(currentRow);
    }
    
    return rows;
  }, [otherDivisions]);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <LiquidGlassNav />

      {/* Background - Deep dark dengan subtle gradient & grid pattern */}
      <div className="fixed inset-0 bg-[#0a0a0f]">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a2e]/30 via-[#0a0a0f] to-[#050508]" />
        
        {/* Grid pattern - subtle */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Subtle glow accents */}
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-24 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-3 tracking-tight">
            Struktur <span className="font-medium text-white">Panitia</span>
          </h1>
          <p className="text-sm md:text-base text-white/40 max-w-lg mx-auto font-light">
            Tim yang akan mewujudkan Edufest 2025
          </p>
        </motion.div>

        {/* Tree Container - Hierarchical Structure */}
        <div className="max-w-6xl mx-auto">
          {/* Level 1: Core Committee (Top) */}
          {coreDivision && (
            <Level title="Dewan Pengurus" isCore={true}>
              {coreDivision.members.map((member, idx) => (
                <MemberCard 
                  key={typeof member === 'string' ? `core_${idx}` : member.id} 
                  member={member} 
                  index={idx}
                  isCore={true}
                />
              ))}
            </Level>
          )}

          {/* Connector to next level */}
          {coreDivision && otherDivisions.length > 0 && (
            <TreeConnector index={0} total={divisionRows.length + 1} />
          )}

          {/* Level 2+: Divisions in rows */}
          <div className="space-y-8">
            {divisionRows.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`}>
                {rowIndex > 0 && (
                  <TreeConnector index={rowIndex} total={divisionRows.length} />
                )}
                
                {/* Subtle divider line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: rowIndex * 0.08 }}
                  className="flex justify-center mb-6"
                >
                  <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </motion.div>
                
                {/* Division cards in this row */}
                <div className="flex flex-wrap justify-center gap-6">
                  {row.map((division, idx) => (
                    <DivisionSection 
                      key={division.id} 
                      division={division} 
                      index={rowIndex * row.length + idx}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-amber-400/60" />
            <span className="text-xs text-white/50">Ketum</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-orange-400/60" />
            <span className="text-xs text-white/50">Waket</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-cyan-400/60" />
            <span className="text-xs text-white/50">Sekretaris</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
            <span className="text-xs text-white/50">Bendahara</span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-xs text-white/25 font-light">Edufest 2025 ©</p>
      </footer>
    </main>
  );
}
