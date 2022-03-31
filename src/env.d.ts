/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POST_REPOSITORY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
