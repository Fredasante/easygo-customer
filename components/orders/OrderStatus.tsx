import { ClipboardList, Truck, BaggageClaim, ReceiptText } from "lucide-react";

const StepIcon = ({
  icon,
  isCompleted,
}: {
  icon: JSX.Element;
  isCompleted: boolean;
}) => (
  <div
    className={`p-2 rounded-lg relative z-10 text-brandSecondary ${
      isCompleted ? "bg-brandYellow" : "bg-gray-50"
    }`}
  >
    {icon}
  </div>
);

interface StepProps {
  step: { id: number; label: string; icon: JSX.Element };
  isCompleted: boolean;
  isLastStep: boolean;
}

const Step = ({ step, isCompleted, isLastStep }: StepProps) => (
  <div className="relative flex-1">
    {/* Progress Line */}
    {!isLastStep && (
      <div className="absolute top-5 left-[50%] right-0 h-0.5 w-[calc(100%-1rem)]">
        <div
          className={`h-full ${isCompleted ? "bg-gray-500" : "bg-gray-200"}`}
        ></div>
      </div>
    )}

    {/* Icon and Label */}
    <div className="flex flex-col items-center text-sm space-y-2 relative px-2">
      <StepIcon icon={step.icon} isCompleted={isCompleted} />
      <span
        className={`${
          isCompleted ? "text-secondaryGreen font-semibold" : "text-gray-400"
        } text-center text-xs sm:text-sm whitespace-nowrap`}
      >
        {step.label}
      </span>
    </div>
  </div>
);

interface OrderStatusProps {
  currentStep: number;
}

export default function OrderStatus({ currentStep }: OrderStatusProps) {
  const steps = [
    { id: 1, label: "Submit Order", icon: <ClipboardList size={16} /> },
    { id: 2, label: "Waiting for delivery", icon: <BaggageClaim size={16} /> },
    { id: 3, label: "Been Shipped", icon: <Truck size={16} /> },
    { id: 4, label: "Transaction Complete", icon: <ReceiptText size={16} /> },
  ];

  return (
    <div className="bg-lightYellow p-4 sm:p-6 rounded-lg">
      <div className="text-lg md:text-xl font-semibold">Submit Order</div>
      <div className="text-sm text-gray-500 mt-2">Order date:</div>
      <div className="border-y border-gray-300 my-5"></div>

      <div className="flex overflow-y-scroll md:overflow-hidden items-center mt-4 w-full">
        {steps.map((step, index) => (
          <Step
            key={step.id}
            step={step}
            isCompleted={currentStep >= step.id}
            isLastStep={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
