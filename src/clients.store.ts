import { create } from "zustand";
import { getClients } from "./services/api/clients.endpoints";

export interface IClient {
  _id: string;
  name: string;
  clientLogo: string;
  createdAt: string;
  updatedAt: string;
}

interface ClientsState {
  clients: IClient[];
  isLoading: boolean;
  isError: boolean;
  /** Call this once — subsequent calls are no-ops if data is already loaded. */
  fetchClients: () => Promise<void>;
}

export const useClientsStore = create<ClientsState>((set, get) => ({
  clients: [],
  isLoading: false,
  isError: false,

  fetchClients: async () => {
    // Dedup guard — don't re-fetch if data already exists or a fetch is in flight
    const { clients, isLoading } = get();
    if (clients.length > 0 || isLoading) return;

    set({ isLoading: true, isError: false });

    try {
      const res = await getClients();
      set({ clients: res?.data?.data ?? [], isLoading: false });
    } catch {
      set({ isError: true, isLoading: false });
    }
  },
}));
