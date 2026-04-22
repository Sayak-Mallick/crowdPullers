import { create } from "zustand";
import { getEventById, getEvents } from "./services/api/events.endpoints";

export interface IEvents {
  _id: string;
  title: string;
  description: string;
  year: number;
  month: number;
  location: string;
  organization: string;
  category: string;
  eventImage: string;
  createdAt: string;
  updatedAt: string;
}

interface EventsState {
  events: IEvents[];
  selectedEvent: IEvents | null;
  isLoading: boolean;
  isEventLoading: boolean;
  isError: boolean;
  fetchEvents: () => Promise<void>;
  fetchEventById: (id: string) => Promise<IEvents | null>;
}

export const useEventsStore = create<EventsState>((set, get) => ({
  events: [],
  selectedEvent: null,
  isLoading: false,
  isEventLoading: false,
  isError: false,

  fetchEvents: async () => {
    const { events, isLoading } = get();
    if (events.length > 0 || isLoading) return;

    set({ isLoading: true, isError: false });
    try {
      const res = await getEvents();
      set({ events: res?.data?.data ?? [], isLoading: false });
    } catch {
      set({ isError: true, isLoading: false });
    }
  },

  fetchEventById: async (id: string) => {
    // 1. Check cache first — no network call needed if already loaded
    const cached = get().events.find((e) => e._id === id) ?? null;
    if (cached) {
      set({ selectedEvent: cached });
      return cached;
    }

    // 2. Not in cache — fetch individually (direct URL visit)
    set({ isEventLoading: true, isError: false });
    try {
      const res = await getEventById(id);
      const event: IEvents = res?.data?.data ?? null;
      set({ selectedEvent: event, isEventLoading: false });
      return event;
    } catch {
      set({ isError: true, isEventLoading: false });
      return null;
    }
  },
}));
