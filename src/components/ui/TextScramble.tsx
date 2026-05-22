"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextScramble({
  text,
  className = "",
  delay = 0,
  duration = 1400,
}: TextScrambleProps) {
  const [output, setOutput] = useState(() =>
    text
      .split("")
      .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
      .join(""),
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isInView) return;

    timeoutRef.current = setTimeout(() => {
      let iteration = 0;
      const totalSteps = duration / 30;

      timerRef.current = setInterval(() => {
        setOutput(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < (iteration / totalSteps) * text.length) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );

        iteration++;
        if (iteration >= totalSteps) {
          if (timerRef.current) clearInterval(timerRef.current);
          setOutput(text);
        }
      }, 30);
    }, delay * 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isInView, text, delay, duration]);

  return (
    <span ref={ref} className={className}>
      {output}
    </span>
  );
}
