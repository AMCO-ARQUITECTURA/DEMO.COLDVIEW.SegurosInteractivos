import { create } from 'zustand';

interface VersionState {
  version: 'mx' | 'ar';
  setVersion: (value: 'mx' | 'ar') => void;
  getVersionJson: <T = any>(type: 'general' | 'car' | 'life') => Promise<T>;
}

// Zustand Store
const useVersionStore = create<VersionState>((set, get) => ({
  version: 'mx',
  setVersion: (version: 'mx' | 'ar') => {
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
      console.log(response);
      const data = await response.json();
      return data as T;
    } catch (error) {
      console.log("wtf2");
      console.error(`Error fetching JSON from ${filePath}:`, error);
      throw error;
    }
  }
}));

export default useVersionStore;