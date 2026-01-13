import React from "react";

export default function ProductCard(url: string, text: string) {
  return (
    <div className="flex gap-3 items-center">
      <img src={url} alt={""} width={52} height={52} />
      <p>{text}</p>
    </div>
  );
}
