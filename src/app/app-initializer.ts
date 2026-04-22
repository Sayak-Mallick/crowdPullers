"use client";

import { useEffect } from "react";
import { useClientsStore } from "@/clients.store";

/**
 * Renders nothing. Placed in RootLayout so it mounts as early as possible,
 * kicking off background fetches before any page component even renders.
 */
export default function AppInitializer() {
  const fetchClients = useClientsStore((s) => s.fetchClients);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  return null;
}
