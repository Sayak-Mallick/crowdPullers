"use client";

import { useEffect } from "react";
import { useClientsStore } from "@/clients.store";
import { useEventsStore } from "@/events.store";

export default function AppInitializer() {
  const fetchClients = useClientsStore((s) => s.fetchClients);
  const fetchEvents = useEventsStore((s) => s.fetchEvents);

  useEffect(() => {
    fetchClients();
    fetchEvents();
  }, [fetchClients, fetchEvents]);

  return null;
}
