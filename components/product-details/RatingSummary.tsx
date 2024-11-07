import StarRating from "./StarRating";
import StarRatingRow from "./StarRatingRow";

const RatingSummary = () => {
  const ratingData = [
    { filledStars: 5, count: 400 },
    { filledStars: 4, count: 300 },
    { filledStars: 3, count: 200 },
    { filledStars: 2, count: 100 },
    { filledStars: 1, count: 50 },
  ];

  return (
    <section>
      <h3 className="text-xl font-bold mt-6">
        Customer Reviews <span>(230)</span>
      </h3>
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 my-6">
        {/* Average Rating Box */}
        <div className="flex flex-col justify-center bg-defaultHover p-6 rounded-lg shadow-sm w-full">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            4.9
          </h2>
          <StarRating rating={4.9} />
        </div>

        {/* Detailed Ratings Box */}
        <div className="flex flex-col gap-4 p-6 rounded-lg shadow-sm w-full bg-defaultHover">
          {ratingData.map((rating, index) => (
            <StarRatingRow
              key={index}
              filledStars={rating.filledStars}
              count={rating.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingSummary;
