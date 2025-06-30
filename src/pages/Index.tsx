import { useState } from "react";
import LuckButton from "@/components/LuckButton";
import GameResult from "@/components/GameResult";

type GameState = "waiting" | "playing" | "finished";
type Result = "win" | "lose";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("waiting");
  const [result, setResult] = useState<Result | null>(null);

  const handleLuckTest = () => {
    setGameState("playing");

    setTimeout(() => {
      const participants = 11;
      const winner = Math.floor(Math.random() * participants) + 1;
      const userNumber = Math.floor(Math.random() * participants) + 1;

      setResult(userNumber === winner ? "win" : "lose");
      setGameState("finished");
    }, 2000);
  };

  const resetGame = () => {
    setGameState("waiting");
    setResult(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-8">
        {gameState === "waiting" && <LuckButton onClick={handleLuckTest} />}

        {gameState === "playing" && (
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            <p className="text-lg text-gray-600 font-light">
              Определяем победителя...
            </p>
          </div>
        )}

        {gameState === "finished" && result && (
          <GameResult result={result} onReset={resetGame} />
        )}
      </div>
    </div>
  );
};

export default Index;
