const BASE_URL =
  typeof window === "undefined" ? process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:2025" : "";

export { BASE_URL };
