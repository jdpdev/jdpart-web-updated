import create from 'zustand';
import { ImageData } from './ImageService';

export const usePortfolioStore = create((set, get) =>({
    images: [],
    events: [],
    fetch: async () => {
        if (get().images.length > 0) {
            return;
        }

        const response = await fetch('/portfolio.json');
        const items = await response.json();
        set({ images: items.items.map(i => new ImageData(i)) });
    },
    fetchEvents: async () => {
        if (get().events.length > 0) {
            return;
        }

        const response = await fetch('/events.json');
        const items = await response.json();
        set({ events: items });
    }
}))