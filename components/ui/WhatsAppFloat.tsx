"use client";

import React, { useState, useRef, useEffect } from "react";
import { COMPANY } from "@/lib/constants";
import { GripHorizontal } from "lucide-react";

/**
 * WhatsAppFloat Component
 * A floating, draggable WhatsApp button that users can move around the screen.
 * Supports both mouse drag and touch gestures on mobile devices.
 */
export default function WhatsAppFloat() {
  const phoneNumber = COMPANY.phone.replace(/[^0-9]/g, "");
  const message = encodeURIComponent("Hello! I'm interested in a consultation with Unovia Consulting.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; initialX: number; initialY: number }>({
    mouseX: 0,
    mouseY: 0,
    initialX: 0,
    initialY: 0,
  });

  // Initialize position in bottom-right corner after mount
  useEffect(() => {
    const defaultRightMargin = 24;
    const defaultBottomMargin = 24;
    const initialX = window.innerWidth - 80 - defaultRightMargin;
    const initialY = window.innerHeight - 80 - defaultBottomMargin;
    setPosition({ x: initialX, y: initialY });
  }, []);

  // Handle window resize to keep button inside viewport
  useEffect(() => {
    const handleResize = () => {
      if (!position) return;
      const maxX = window.innerWidth - 70;
      const maxY = window.innerHeight - 70;
      setPosition((prev) => (prev ? { x: Math.min(prev.x, maxX), y: Math.min(prev.y, maxY) } : null));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [position]);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!position) return;
    setIsDragging(true);
    setHasMoved(false);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };
  };

  // Touch Drag Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!position || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setHasMoved(false);
    dragStartRef.current = {
      mouseX: touch.clientX,
      mouseY: touch.clientY,
      initialX: position.x,
      initialY: position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStartRef.current.mouseX;
      const deltaY = e.clientY - dragStartRef.current.mouseY;

      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        setHasMoved(true);
      }

      const newX = Math.max(10, Math.min(window.innerWidth - 70, dragStartRef.current.initialX + deltaX));
      const newY = Math.max(10, Math.min(window.innerHeight - 70, dragStartRef.current.initialY + deltaY));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - dragStartRef.current.mouseX;
      const deltaY = touch.clientY - dragStartRef.current.mouseY;

      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        setHasMoved(true);
      }

      const newX = Math.max(10, Math.min(window.innerWidth - 70, dragStartRef.current.initialX + deltaX));
      const newY = Math.max(10, Math.min(window.innerHeight - 70, dragStartRef.current.initialY + deltaY));

      setPosition({ x: newX, y: newY });
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  const handleClick = (e: React.MouseEvent) => {
    if (hasMoved) {
      e.preventDefault();
    }
  };

  if (!position) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: "none",
      }}
      aria-label="Floating and movable WhatsApp button"
      className="z-50 select-none group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={`flex items-center gap-2 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-2xl border border-emerald-500/30 transition-all duration-200 cursor-grab active:cursor-grabbing hover:shadow-emerald-500/20 ${
          isDragging ? "scale-105 shadow-emerald-500/40 border-emerald-500" : ""
        }`}
        aria-label="Contact on WhatsApp (Drag to move)"
      >
        {/* Drag Grip Handle */}
        <span className="pl-1 text-slate-400 group-hover:text-emerald-600 transition-colors">
          <GripHorizontal className="w-4 h-4" />
        </span>

        {/* WhatsApp Icon Circle with Pulse Effect */}
        <div className="relative w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
          {!isDragging && (
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30 pointer-events-none" />
          )}

          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="currentColor"
            className="text-white relative z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>

        {/* Hover Label */}
        <span className="pr-3 text-xs font-bold text-navy-900 group-hover:text-emerald-600 transition-colors whitespace-nowrap hidden sm:inline">
          Drag / Chat
        </span>
      </a>
    </div>
  );
}
