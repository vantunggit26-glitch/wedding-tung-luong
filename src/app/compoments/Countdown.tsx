"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const animationDelays = ['0.2s', '0.4s', '0.6s', '0.8s'];

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      <TimeUnit value={timeLeft.days} label="Ngày" delay={animationDelays[0]} />
      <TimeUnit value={timeLeft.hours} label="Giờ" delay={animationDelays[1]} />
      <TimeUnit value={timeLeft.minutes} label="Phút" delay={animationDelays[2]} />
      <TimeUnit value={timeLeft.seconds} label="Giây" delay={animationDelays[3]} />
    </div>
  );
}

function TimeUnit({ value, label, delay }: { value: number; label: string; delay: string }) {
  return (
    <div 
      className="flex flex-col items-center" 
      style={{
        animation: `bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay} forwards`,
        opacity: 0
      }}
    >
      <div className="bg-[#f5f0ea] rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px] shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
        <div className="font-serif text-2xl md:text-4xl text-[#c9a87b] font-bold animate-pulse">
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-[#8b7355] text-xs md:text-sm mt-2 uppercase tracking-wider font-montserrat">
        {label}
      </div>
    </div>
  );
}
