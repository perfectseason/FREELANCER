import { useEffect, useState } from "react";

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  message: string;
  image: string;
}

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "/api"
).replace(/\/+$/, "");

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchReviews() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_BASE_URL}/reviews/`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(
            `Unable to load reviews. Server returned ${response.status}.`
          );
        }

        const data: Review[] | { results?: Review[] } =
          await response.json();

        // Supports both ordinary lists and Django REST Framework
        // paginated responses.
        const reviewList = Array.isArray(data)
          ? data
          : data.results ?? [];

        setReviews(reviewList);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "An unexpected error occurred while loading reviews."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchReviews();

    return () => controller.abort();
  }, []);

  return (
    <section
      aria-labelledby="reviews-heading"
      className="w-full overflow-hidden bg-blue-700 px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-10 text-center">
          <h1
            id="reviews-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Our Reviews
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            See what our customers have to say about their experience.
          </p>
        </header>

        {loading && (
          <p className="text-center text-white" role="status">
            Loading reviews...
          </p>
        )}

        {!loading && error && (
          <p
            className="mx-auto max-w-xl text-center text-white"
            role="alert"
          >
            {error}
          </p>
        )}

        {!loading && !error && reviews.length === 0 && (
          <p className="text-center text-white">
            No reviews are available yet.
          </p>
        )}

        {!loading && !error && reviews.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
            {reviews.map((review, index) => (
              <article
                key={review.id}
                className="review-fade-in relative isolate aspect-square min-w-0 overflow-hidden rounded-2xl bg-blue-950 shadow-lg"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Full-card image: crop to fill, never overflow. */}
                {review.image && (
                  <img
                    src={review.image}
                    alt={`Photo for ${review.name}'s review`}
                    loading="lazy"
                    className="absolute inset-0 z-0 h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                )}

                {/* Keeps the text visible over light or dark photos. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/45 to-black/10"
                />

                {/* Review content stays inside the card. */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end overflow-hidden p-4 text-white sm:p-5">
                  <div
                    className="mb-2 flex items-center gap-1 text-amber-300"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <span
                        key={starIndex}
                        aria-hidden="true"
                        className={
                          starIndex < review.rating
                            ? "text-amber-300"
                            : "text-white/50"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <h2 className="truncate text-sm font-bold sm:text-base">
                    {review.name}
                  </h2>

                  {review.role && (
                    <p className="mt-1 truncate text-xs text-white/80">
                      {review.role}
                    </p>
                  )}

                  <p className="mt-3 max-h-20 overflow-hidden text-xs leading-5 text-white/95 sm:text-sm">
                    “{review.message}”
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
