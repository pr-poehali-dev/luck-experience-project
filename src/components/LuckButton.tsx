import { Button } from "@/components/ui/button";

interface LuckButtonProps {
  onClick: () => void;
}

const LuckButton = ({ onClick }: LuckButtonProps) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-light text-gray-900 tracking-tight">
          Испытать удачу!
        </h1>
        <p className="text-lg text-gray-500 font-light max-w-md mx-auto">
          Розыгрыш среди 11 участников. Шанс выигрыша 50/50. Один победитель.
        </p>
      </div>

      <Button
        onClick={onClick}
        size="lg"
        className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Испытать удачу!
      </Button>
    </div>
  );
};

export default LuckButton;
