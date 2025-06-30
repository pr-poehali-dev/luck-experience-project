import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface GameResultProps {
  result: "win" | "lose";
}

const GameResult = ({ result }: GameResultProps) => {
  const isWin = result === "win";

  return (
    <div className="flex flex-col items-center space-y-8 animate-fade-in">
      <div
        className={`rounded-full p-6 ${isWin ? "bg-green-100" : "bg-red-100"}`}
      >
        <Icon
          name={isWin ? "Trophy" : "X"}
          size={64}
          className={`${isWin ? "text-green-600" : "text-red-600"}`}
        />
      </div>

      <div className="text-center space-y-4">
        <h2
          className={`text-4xl font-light tracking-tight ${isWin ? "text-green-700" : "text-red-700"}`}
        >
          {isWin ? "Ты выиграл!" : "Ты проиграл!"}
        </h2>
        <p className="text-lg text-gray-500 font-light">
          {isWin
            ? "Поздравляем! Ты единственный победитель!"
            : "К сожалению, победитель уже определен."}
        </p>
      </div>
    </div>
  );
};

export default GameResult;
