"use client"
/**
 * MobileBottomNav
 * ───────────────
 * Thin "use client" wrapper that supplies the nav items (which include Lucide
 * icon functions) to TubelightNav. This wrapper MUST be a Client Component
 * because Lucide icons are function references - they cannot be passed as
 * props from a Server Component across the RSC/Client boundary.
 *
 * Shown only on mobile (md:hidden in layout.tsx).
 * Desktop navigation is handled by the full Navbar component.
 */
import { Home, LayoutGrid, ClipboardCheck, User, Phone } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

const mobileNavItems = [
  { name: "Home",       url: "/",                             icon: Home           },
  { name: "Programs",   url: "/programs/enlightened-learner", icon: LayoutGrid     },
  { name: "Assess",     url: "/assessment",                   icon: ClipboardCheck },
  { name: "About",      url: "/about",                        icon: User           },
  { name: "Contact",    url: "/contact",                      icon: Phone          },
]

export default function MobileBottomNav() {
  return <NavBar items={mobileNavItems} />
}
