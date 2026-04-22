"use client";

import { useEffect } from "react";
import { useClientsStore } from "@/clients.store";
import { useEventsStore } from "@/events.store";

/**
 * Renders nothing. Placed in RootLayout so it mounts as early as possible,
 * kicking off background fetches before any page component even renders.
 */
export default function AppInitializer() {
  const fetchClients = useClientsStore((s) => s.fetchClients);
  const fetchEvents = useEventsStore((s) => s.fetchEvents);

  useEffect(() => {
    fetchClients();
    fetchEvents();
  }, [fetchClients, fetchEvents]);

  return null;
}
