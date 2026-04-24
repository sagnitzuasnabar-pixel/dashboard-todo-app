import { Flame, Droplets, Leaf, Zap, Snowflake, Swords,
  FlaskConical, Mountain, Wind, Brain, Bug, Gem,
  Ghost, Sparkles, Moon, Shield, Dna, Circle } from "lucide-react";

export const DisplayType = ({ type }) => {
  if (type === "fire")     return <Flame className="text-orange-500" />;
  if (type === "water")    return <Droplets className="text-blue-400" />;
  if (type === "grass")    return <Leaf className="text-green-400" />;
  if (type === "electric") return <Zap className="text-yellow-400" />;
  if (type === "ice")      return <Snowflake className="text-cyan-300" />;
  if (type === "fighting") return <Swords className="text-red-600" />;
  if (type === "poison")   return <FlaskConical className="text-purple-400" />;
  if (type === "ground")   return <Mountain className="text-yellow-700" />;
  if (type === "flying")   return <Wind className="text-sky-300" />;
  if (type === "psychic")  return <Brain className="text-pink-400" />;
  if (type === "bug")      return <Bug className="text-lime-400" />;
  if (type === "rock")     return <Gem className="text-yellow-600" />;
  if (type === "ghost")    return <Ghost className="text-indigo-400" />;
  if (type === "fairy")    return <Sparkles className="text-pink-300" />;
  if (type === "dark")     return <Moon className="text-gray-400" />;
  if (type === "steel")    return <Shield className="text-gray-300" />;
  if (type === "dragon")   return <Dna className="text-indigo-500" />;

  return <Circle className="text-gray-400" />; // normal y desconocido
};