/**
 * This file contains type guards for typescript
 * @param value
 * @returns
 */
import { Film } from "../types";


export function isFilm(body: unknown): body is Film {
  if (typeof body !== "object" || body === null) return false;

  const b = body as Partial<Film>;

  return (
    typeof b.title === "string" &&
    b.title.trim().length > 0 &&
    typeof b.director === "string" &&
    b.director.trim().length > 0 &&
    typeof b.duration === "number" &&
    b.duration > 0 &&
    (b.budget === undefined || typeof b.budget === "number") &&
    (b.description === undefined || typeof b.description === "string") &&
    (b.imageUrl === undefined || typeof b.imageUrl === "string")
  );
}