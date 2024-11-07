import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface StarRatingRowProps {
  filledStars: number;
  count: number;
}
const StarRatingRow: React.FC<StarRatingRowProps> = ({
  filledStars,
  count,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        {[...Array(5)].map((_, index) =>
          index < filledStars ? (
            <AiFillStar key={index} className="text-secondaryYellow w-5 h-5" />
          ) : (
            <AiOutlineStar
              key={index}
              className="text-secondaryYellow w-5 h-5"
            />
          )
        )}
      </div>
      <span className="text-gray-700 font-medium">{count}</span>
    </div>
  );
};

export default StarRatingRow;
