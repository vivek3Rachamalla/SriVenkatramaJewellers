/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_GOLD_PRICE: string;
  readonly VITE_APP_SILVER_PRICE: string;
  readonly VITE_APP_PLATINUM_PRICE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}