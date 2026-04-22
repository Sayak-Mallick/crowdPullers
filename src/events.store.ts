import { create } from "zustand";
import { getEvents } from "./services/api/events.endpoints";

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
  isLoading: boolean;
  isError: boolean;
  fetchEvents: () => Promise<void>;
}

export const useEventsStore = create<EventsState>((set, get) => ({
  events: [],
  isLoading: false,
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
}));
