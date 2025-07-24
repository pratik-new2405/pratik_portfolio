import React, { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let start = 0;
        const increment = percentage / 50;
        const animate = () => {
          start += increment;
          if (start < percentage) {
            setAnimatedPercentage(Math.floor(start));
            requestAnimationFrame(animate);
          } else {
            setAnimatedPercentage(percentage);
          }
        };
        animate();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div ref={skillRef} className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{animatedPercentage}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;