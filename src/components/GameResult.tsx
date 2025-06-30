import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface GameResultProps {
  result: "win" | "lose";
  onReset: () => void;
}

const GameResult = ({ result, onReset }: GameResultProps) => {
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
            ? "Поздравляем! Удача была на твоей стороне!"
            : "В этот раз не повезло. Попробуй еще раз!"}
        </p>
      </div>

      <Button
        onClick={onReset}
        variant="outline"
        size="lg"
        className="px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
      >
        Играть снова
      </Button>
    </div>
  );
};

export default GameResult;
