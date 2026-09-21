import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";

export const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-8 h-8 stroke-[1.5]" />;
      case "Monitor":
        return <Monitor className="w-8 h-8 stroke-[1.5]" />;
      case "Watch":
        return <Watch className="w-8 h-8 stroke-[1.5]" />;
      case "Camera":
        return <Camera className="w-8 h-8 stroke-[1.5]" />;
      case "Headphones":
        return <Headphones className="w-8 h-8 stroke-[1.5]" />;
      case "Gamepad2":
        return <Gamepad2 className="w-8 h-8 stroke-[1.5]" />;
      default:
        return <Smartphone className="w-8 h-8 stroke-[1.5]" />;
    }
  };