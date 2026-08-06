import { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  icon?: React.ReactNode;
}

export const SkillBar = ({ skill, icon }: SkillBarProps) => {
  return (
    <div className="flex items-center gap-2 py-2">
      {icon && <span className="text-primary">{icon}</span>}
      <span className="font-medium">{skill}</span>
    </div>
  );
};
