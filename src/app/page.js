"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from './Home.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="container mt-4">
      <h1 className={styles.title}>Home Page</h1>
      <p>Welcome to our website!</p>
    </div>
  );
}
