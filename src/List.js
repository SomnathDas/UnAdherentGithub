import React from "react";
import Card from "./Card";

export default function List({ list }) {
  return (
    <section className="card-list">
      {list.map((x) => (
        <Card githubUserId={x.id} username={x.login} />
      ))}
    </section>
  );
}
