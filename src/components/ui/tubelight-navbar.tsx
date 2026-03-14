"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav
      aria-label="Mobile navigation"
      className={cn(
        "fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-4",
        className,
      )}
    >
      {/* Frosted pill container — brand navy background */}
      <ul className="flex items-center gap-1 bg-primary-navy/90 border border-white/10 backdrop-blur-lg py-1.5 px-1.5 rounded-full shadow-2xl shadow-primary-navy/40" role="list">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <li key={item.name}>
            <Link
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative cursor-pointer text-xs font-semibold px-4 py-2.5 rounded-full transition-colors block",
                // Default state: muted white, hover brighter
                "text-white/60 hover:text-white",
                // Active state: white text, slightly lighter bg
                isActive && "bg-white/10 text-white",
              )}
            >
              {/* Always show icon on this mobile-only nav */}
              <span className="flex flex-col items-center gap-1">
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] leading-none tracking-wide font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {item.name}
                </span>
              </span>

              {/* Animated lamp effect on active tab */}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary-teal/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Lamp bar at top of pill item */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-teal rounded-t-full">
                    {/* Outer wide glow */}
                    <div className="absolute w-10 h-4 bg-primary-teal/20 rounded-full blur-md -top-1 -left-2" />
                    {/* Inner medium glow */}
                    <div className="absolute w-6 h-4 bg-primary-teal/30 rounded-full blur-sm -top-0.5" />
                    {/* Core tight glow */}
                    <div className="absolute w-3 h-3 bg-primary-teal/40 rounded-full blur-sm top-0 left-1.5" />
                  </div>
                </motion.div>
              )}
            </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
