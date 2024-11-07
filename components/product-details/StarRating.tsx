import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex mt-5">
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <AiFillStar key={index} className="text-secondaryYellow w-6 h-6" />
        ) : (
          <AiOutlineStar key={index} className="text-secondaryYellow w-6 h-6" />
        )
      )}
    </div>
  );
};

export default StarRating;
