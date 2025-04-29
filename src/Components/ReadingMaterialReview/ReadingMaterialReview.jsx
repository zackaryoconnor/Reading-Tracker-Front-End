const ReadingMaterialReview = () => {
  return (
    <div className="absolute top-0 left-64 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div>
        <h1 className="text-xl font-bold">Title of Book</h1>
        <h2>Author of Book</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow space-y-4">
          <h2 className="text-sm font-semibold text-gray-500">Setting</h2>
          <Stars />
          <h2 className="text-sm font-semibold text-gray-500">Plot</h2>
          <Stars />
          <h2 className="text-sm font-semibold text-gray-500">Characters</h2>
          <Stars />
          <h2 className="text-sm font-semibold text-gray-500">Style</h2>
          <Stars />
          <h2 className="text-sm font-semibold text-gray-500">Engagement</h2>
          <Stars />
          <div className="border-t pt-4">
            <h2 className="text-sm font-semibold text-gray-500">
              Overall rating
            </h2>
            <Stars />
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <label className="block text-lg font-medium mb-2">
            Your thoughts about the book here
          </label>
          <textarea
            className="w-full h-64 md:h-80 p-3 border border-gray-300 rounded resize-none"
            placeholder="Write your notes..."
          />
        </div>

        <div className="bg-white p-4 rounded shadow space-y-3">
          <img src="#" alt="Book Cover" className="rounded mb-4 mx-auto" />
          <p>
            <strong>Start date:</strong> Apr 2025
          </p>
          <p>
            <strong>Finish date:</strong> Apr 2025
          </p>
          <p>
            <strong>Format:</strong> Ebook
          </p>
          <p>
            <strong>Genre:</strong> Mystery, Thriller, Contemporary, Adult,
            Humor, Romance
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-black">
        <ReviewCard
          title="Quotes to remember"
          content="..."
        />
        <ReviewCard title="Most surprising moment" content="..." />
        <ReviewCard title="Favorite character" content="..." />
        <ReviewCard title="Least favorite character" content="..." />
        <ReviewCard
          title="The ending"
          content="Liked it? Why? Why not? How should it have ended?"
        />
      </div>
    </div>
  );
};

const Stars = () => (
  <div className="flex gap-1 text-yellow-400">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const ReviewCard = ({ title, content, emoji }) => (
  <div className="bg-white p-4 rounded shadow text-sm space-y-2">
    <h3 className="font-semibold">{title}</h3>
    <p>
      {content} {emoji && <span>{emoji}</span>}
    </p>
  </div>
);

export default ReadingMaterialReview;
