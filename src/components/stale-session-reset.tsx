"use client";

import { useEffect, useRef } from "react";
import { signOut } from "next-auth/react";

export function StaleSessionReset() {
  const hasClearedRef = useRef(false);

  useEffect(() => {
    if (hasClearedRef.current) {
      return;
    }

    hasClearedRef.current = true;
    void signOut({ redirect: false });
  }, []);

  return null;
}
