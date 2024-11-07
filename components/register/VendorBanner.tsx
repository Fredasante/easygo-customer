import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const VendorBanner = () => {
  return (
    <section className="bg-primaryBrown mt-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row p-5">
        <div className="w-full md:w-auto">
          <Image
            src="/images/new-entries-image.png"
            width={500}
            height={500}
            alt="Discount banner"
            className="md:rounded-s-lg"
          />
        </div>

        <div className="bg-secondaryGreen w-full flex flex-col justify-center p-1 md:rounded-e-lg">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-white mb-3">
              Enjoy unbeatable discounts and great collection of products
            </CardTitle>
            <CardDescription className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              error voluptate similique maxime quae soluta, quibusdam asperiores
              nihil ea, at id fugiat, nesciunt odit! Commodi minus distinctio
              culpa expedita rem fugiat nesciunt odit comodi sancheba.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="brown" size="lg" className="font-semibold">
              SIGN UP AS A VENDOR
            </Button>
          </CardContent>
        </div>
      </div>
    </section>
  );
};

export default VendorBanner;
