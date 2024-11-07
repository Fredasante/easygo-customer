// CustomerReviewCard.js
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const CustomerReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm w-full">
      <div className="flex mb-2 gap-3">
        <div className="w-16 h-16 rounded-full">
          <Image
            src="/images/kpa-logo.png"
            alt="Product Image"
            width={55}
            height={55}
          />
        </div>
        <div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`w-5 h-5 mr-1 ${
                  i < review.rating ? "text-secondaryYellow" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <h4 className="font-semibold">{review.name}</h4>
          <p className="text-brandDisabled text-sm my-2">{review.comment}</p>
          <span className="text-sm mt-2 block font-medium">{review.date}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
