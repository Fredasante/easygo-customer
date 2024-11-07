import Image from "next/image";

const SellerInfo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full">
        <Image
          src="/images/kpa-logo.png"
          alt="Product Image"
          width={100}
          height={100}
        />
      </div>
      <div>
        <div className="font-medium">Kpa-Aps Technologies</div>
        <div className="text-sm text-brandDisabled">Active 7 minutes ago</div>
      </div>
    </div>
  );
};

export default SellerInfo;
