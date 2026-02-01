import { createContext } from "react";

/**
 * status: 'idle' | 'loading' | 'done'
 * progress: number (0–100)
 * total: number
 * loaded: number
 * startPreload: (urls: string[]) => Promise<void>
 */
export const AssetPreloadContext = createContext(null);
