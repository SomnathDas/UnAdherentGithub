import React from "react";
import { useState } from "react";
import "./Card.css";

export default function Card({ githubUserId, username }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <article className="card">
      <header className="card-header">
        <p>{githubUserId}</p>
        <h2>{username}</h2>
      </header>
      <div className="card-author">
        <a
          className="author-avatar"
          href={`https://www.github.com/${username}}`}
        >
          <img
            style={isImageLoaded ? {} : { display: "none" }}
            src={`https://avatars.githubusercontent.com/u/${githubUserId}?s=120&v=4`}
            className="author-img"
            onLoad={() => setIsImageLoaded(true)}
            alt="A Person"
          />
          {isImageLoaded === true ? (
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
          ) : (
            ""
          )}
        </a>
      </div>
    </article>
  );
}
