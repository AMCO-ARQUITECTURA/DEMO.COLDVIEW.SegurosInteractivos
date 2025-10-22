import { create } from 'zustand';

interface VersionState {
  version: 'mx' | 'ar' | 'ch';
  setVersion: (value: 'mx' | 'ar' | 'ch') => void;
  getVersionJson: <T = any>(type: 'general' | 'car' | 'life') => Promise<T>;
}

// Zustand Store
const useVersionStore = create<VersionState>((set, get) => ({
  version: 'mx',
  setVersion: (version: 'mx' | 'ar' | 'ch') => {
    set({ version });
  },
  getVersionJson: async <T = any>(type: 'general' | 'car' | 'life'): Promise<T> => {
    const { version } = get();
    let fileName = "data-" + type + "-" + version + ".json";
    const filePath = `/data/` + fileName;
    try {
      const response = await fetch(filePath);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch JSON: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data as T;
    } catch (error) {
      console.error(`Error fetching JSON from ${filePath}:`, error);
      throw error;
    }
  }
}));

export default useVersionStore;