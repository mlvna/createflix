import React from "react";
import moviePoster from "./img/movie-poster.png";

const data: {
  posterImage: string;
  title: string;
  description: string;
} = {
  posterImage: moviePoster,
  title: "Spider-Man: No Way Home",
  description:
    "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange’s help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who’ve ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.",
};

export default function MovieListItem() {
  const { title, posterImage, description } = data;

  return (
    <article className={["mt-6", "mb-12", "shadow-xl", "h-max"].join(" ")}>
      <div className={["flex", "font-sans"].join(" ")}>
        <div className={["flex-none", "w-48", "relative"].join(" ")}>
          <img
            src={posterImage}
            alt="Movie Poster"
            className={[
              "absolute",
              "inset-0",
              "w-full",
              "h-full",
              "object-cover",
            ].join(" ")}
          />
        </div>
        <div className={["flex-auto", "p-6"].join(" ")}>
          <div className={["flex", "flex-wrap"].join(" ")}>
            <h3
              className={[
                "flex-auto",
                "text-lg",
                "font-semibold",
                "text-slate-900",
              ].join(" ")}
            >
              {title}
            </h3>
            <div
              className={[
                "text-lg",
                "font-semibold",
                "text-slate-500",
                "mb-4",
              ].join(" ")}
            >
              <button
                className={[
                  "flex-none",
                  "flex",
                  "items-center",
                  "justify-center",
                  "w-9",
                  "h-9",
                  "rounded-md",
                  "text-slate-300",
                  "border",
                  "border-slate-200",
                ].join(" ")}
                type="button"
                aria-label="Like"
              >
                <svg width="20" height="20" fill="black" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={[
              "flex",
              "space-x-4",
              "mb-6",
              "text-sm",
              "font-medium",
            ].join(" ")}
          />
          <p className={["text-sm", "text-slate-700"].join(" ")}>
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
