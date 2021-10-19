import React from "react";
import Card from "./Card";

export default function List({ list }) {
  return (
    <section className="card-list">
      {list.length === 0 ? (
        <h2>No Non-Followers Found</h2>
      ) : (
        list.map((x) => <Card githubUserId={x.id} username={x.login} />)
      )}
    </section>
  );
}
