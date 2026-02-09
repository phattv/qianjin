"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BASE_URL } from "./_constants";
import styles from "./page.module.css";

export default function Home() {
  const [input, setInput] = useState("前进");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (input) {
      setIsLoading(true);
      fetchOpenAIResponse(input)
        .then((response) => setResponse(response))
        .catch((error) => {
          setResponse(null);
          console.error("fetchOpenAIResponse error:", error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [input]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/icon.svg"
          alt="logo"
          width={200}
          height={200}
          priority
        />
        <input
          disabled={isLoading}
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.response}>
            {response ? (
              <pre>{JSON.stringify(response, null, 2)}</pre>
            ) : (
              <p>Enter a search query to get started.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

const fetchOpenAIResponse = async (input: string) => {
  const response = await fetch(`${BASE_URL}/api/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input }),
  });
  if (!response.ok) throw new Error(`Error: ${response.status}`);

  return response.json();
};
