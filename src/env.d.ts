/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/studio-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly VITE_CONTENTFUL_SPACE_ID: string;
  readonly VITE_CONTENTFUL_DELIVERY_TOKEN: string;
  readonly VITE_CONTENTFUL_PREVIEW_TOKEN: string;
}
