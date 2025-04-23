
import { Check } from "lucide-react";

interface AccessStepsProps {
  title: string;
  steps: string[];
}

export const AccessSteps = ({ title, steps }: AccessStepsProps) => {
  return (
    <div className="bg-secondary/50 border border-secondary/80 backdrop-blur-sm rounded-lg p-6 mt-6">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-primary/20 p-1 rounded-full text-primary mt-0.5">
              <Check className="h-4 w-4" />
            </div>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

