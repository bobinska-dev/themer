// Automatically generated by running `npm run build:snippets`
import JSON5 from 'json5'
const projectId = JSON5.stringify(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
const dataset = JSON5.stringify(process.env.NEXT_PUBLIC_SANITY_DATASET)

export function snippet(id: 'import-dynamic-ts'): (first: string) => string
export function snippet(id: 'import-static'): (first: string) => string
export function snippet(id: 'studio-config'): (first: string) => string
export function snippet(id: 'studio-config-local-import'): () => string
export function snippet(id: 'studio-config-local-import-ts'): () => string
export function snippet(id: 'studio-config-next-runtime-1'): () => string
export function snippet(id: 'studio-config-next-runtime-2'): () => string
export function snippet(
  id: 'studio-config-create-theme'
): (first: string) => string
export function snippet(
  id: 'import-create-theme-static'
): (first: string) => string
export function snippet(
  id: 'import-create-theme-dynamic'
): (first: string) => string
export function snippet(id: 'themer.d.ts'): (first: string) => string
export function snippet(id: 'tsconfig'): () => string
export function snippet(id: '_document.tsx'): (first: string) => string
export function snippet(id: '_document.js'): (first: string) => string
export function snippet(
  id: 'next-config-build-time-js'
): (first: string) => string
export function snippet(
  id: 'next-config-build-time-ts'
): (first: string) => string
export function snippet(
  id: 'studio-config-create-theme-static-import'
): (first: string) => string
export function snippet(id: 'pages-index'): (first: string) => string
export function snippet(id) {
  switch (id) {
    case 'import-dynamic-ts':
      return (first: string) => `const {theme} = (await import(
  // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
  ${first}
)) as {theme: import('sanity').StudioTheme}`

    case 'import-static':
      return (first: string) => `import {theme} from ${first}`

    case 'studio-config':
      return (first: string) => `// 1. Add the import
${first}

import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

export default createConfig({
  theme, // <-- 2. add the theme here

  projectId: ${projectId},
  dataset: ${dataset},
  plugins: [deskTool()],
  schema: {types: []}
})`

    case 'studio-config-local-import':
      return () => `import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// 1. Add the import to the theme.js you downloaded
import {theme} from './theme'

export default createConfig({
  theme, // <-- 2. add the theme here

  projectId: ${projectId},
  dataset: ${dataset},
  plugins: [deskTool()],
  schema: {types: []}
})`

    case 'studio-config-local-import-ts':
      return () => `// Add the theme import and its typings to your workspace

import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// 1. Add the import to the theme.js you downloaded
import {theme as _theme} from './theme'

// 2. Assign typings to the theme
const theme = _theme as import('sanity').StudioTheme

export default createConfig({
  theme, // <-- 3. add the theme here

  projectId: ${projectId},
  dataset: ${dataset},
  plugins: [deskTool()],
  schema: {types: []}
})`

    case 'studio-config-next-runtime-1':
      return () => `// There's no theme import in this file since we're handling that in a useEffect in the index page

import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

export default createConfig({
  projectId: ${projectId},
  dataset: ${dataset},
  plugins: [deskTool()],
  schema: {types: []}
})`

    case 'studio-config-next-runtime-2':
      return () => `// Allow reading the default theme variables while the custom theme is loading

import {createConfig, defaultTheme} from 'sanity'
import {deskTool} from 'sanity/desk'

export default createConfig({
  theme: defaultTheme,

  projectId: ${projectId},
  dataset: ${dataset},
  plugins: [deskTool()],
  schema: {types: []}
})`

    case 'studio-config-create-theme':
      return (
        first: string
      ) => `// Import createTheme and hues to quickly modify your theme without changing the import URL

import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

${first}

export default createConfig({
  theme: createTheme({...hues, primary: {...hues.primary, mid: '#22fca8'}}),

  title: 'My Sanity Project',
  projectId: ${projectId},
  dataset: ${dataset},
  plugins: [deskTool()],
  schema: {types: schemaTypes}
})`

    case 'import-create-theme-static':
      return (first: string) => `import {createTheme, hues} from ${first}`

    case 'import-create-theme-dynamic':
      return (first: string) => `const {createTheme, hues} = await import(
  ${first}
)`

    case 'themer.d.ts':
      return (first: string) => `declare module ${first} {
  interface Hue
    extends Omit<import('@sanity/color').ColorHueConfig, 'title' | 'midPoint'> {
    midPoint: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
  }
  interface Hues {
    default: Hue
    transparent: Hue
    primary: Hue
    positive: Hue
    caution: Hue
    critical: Hue
  }
  export const hues: Hues
  type Theme = import('sanity').StudioTheme
  export function createTheme(_hues: Hues): Theme
  export const theme: Theme
}`

    case 'tsconfig':
      return () => `{
  "compilerOptions": {
    // target needs to be es2017 or newer to allow top-level await
    "target": "esnext",

    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}`

    case '_document.tsx':
      return (
        first: string
      ) => `// This is to generate a <link rel="modulepreload" href=${first}> to the <head>
// As Studio v3 is in developer preview there's not yet a simple way to just add a <link> tag to the <head>
// Thus we have to re-implement DefaultDocument to make it happen.
// Expect this to get much easier before v3 hits stable

import React from 'react'
import {type DefaultDocumentProps} from 'sanity'
import {GlobalErrorHandler} from 'sanity/_unstable'

const globalStyles = ${'`'}
  html {
    background-color: #f1f3f6;
  }
  html,
  body,
  #sanity {
    height: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
${'`'}

interface FaviconProps {
  basePath: string
}

function Favicons({basePath}: FaviconProps) {
  const base = ${'`'}${'${'}basePath.replace(${/\/+$/}, '')}/static${'`'}
  return (
    <>
      <link rel="icon" href={${'`'}${'${'}base}/favicon.ico${'`'}} sizes="any" />
      <link rel="icon" href={${'`'}${'${'}base}/favicon.svg${'`'}} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={${'`'}${'${'}base}/apple-touch-icon.png${'`'}} />
      <link rel="manifest" href={${'`'}${'${'}base}/manifest.webmanifest${'`'}} />
    </>
  )
}

const EMPTY_ARRAY: never[] = []
export default function DefaultDocument(
  props: DefaultDocumentProps
): React.ReactElement {
  const {entryPath, css = EMPTY_ARRAY, basePath = '/'} = props
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="robots" content="noindex" />
        <meta name="referrer" content="same-origin" />
        {/* This is the only line of code we're adding that is different from the default implementation of DefaultDocument */}
        <link
          rel="modulepreload"
          href={${first}}
        />

        <Favicons basePath={basePath} />

        <title>Sanity Studio</title>

        <GlobalErrorHandler />

        {css.map(href => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <style>{globalStyles}</style>
      </head>
      <body>
        <div id="sanity" />
        <script type="module" src={entryPath} />
      </body>
    </html>
  )
}`

    case '_document.js':
      return (
        first: string
      ) => `// This is to generate a <link rel="modulepreload" href=${first}> to the <head>
// As Studio v3 is in developer preview there's not yet a simple way to just add a <link> tag to the <head>
// Thus we have to re-implement DefaultDocument to make it happen.
// Expect this to get much easier before v3 hits stable

import React from 'react'
import {GlobalErrorHandler} from 'sanity/_unstable'

const globalStyles = ${'`'}
  html {
    background-color: #f1f3f6;
  }
  html,
  body,
  #sanity {
    height: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
${'`'}

function Favicons({basePath}) {
  const base = ${'`'}${'${'}basePath.replace(${/\/+$/}, '')}/static${'`'}
  return (
    <>
      <link rel="icon" href={${'`'}${'${'}base}/favicon.ico${'`'}} sizes="any" />
      <link rel="icon" href={${'`'}${'${'}base}/favicon.svg${'`'}} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={${'`'}${'${'}base}/apple-touch-icon.png${'`'}} />
      <link rel="manifest" href={${'`'}${'${'}base}/manifest.webmanifest${'`'}} />
    </>
  )
}

const EMPTY_ARRAY = []
export default function DefaultDocument(props) {
  const {entryPath, css = EMPTY_ARRAY, basePath = '/'} = props
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="robots" content="noindex" />
        <meta name="referrer" content="same-origin" />
        {/* This is the only line of code we're adding that is different from the default implementation of DefaultDocument */}
        <link
          rel="modulepreload"
          href={${first}}
        />

        <Favicons basePath={basePath} />

        <title>Sanity Studio</title>

        <GlobalErrorHandler />

        {css.map(href => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <style>{globalStyles}</style>
      </head>
      <body>
        <div id="sanity" />
        <script type="module" src={entryPath} />
      </body>
    </html>
  )
}`

    case 'next-config-build-time-js':
      return (first: string) => `module.exports = {
  experimental: {urlImports: [${first}]}
}`

    case 'next-config-build-time-ts':
      return (first: string) => `// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {urlImports: [${first}]}
}

module.exports = nextConfig`

    case 'studio-config-create-theme-static-import':
      return (
        first: string
      ) => `// Import createTheme and hues to quickly modify your theme without changing the import URL

import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

${first}

import {schemaTypes} from './schemas'

export default createConfig({
  theme: createTheme({...hues, primary: {...hues.primary, mid: '#22fca8'}}),

  title: 'My Sanity Project',
  projectId: ${projectId},
  dataset: ${dataset},
  plugins: [deskTool()],
  schema: {types: schemaTypes}
})`

    case 'pages-index':
      return (
        first: string
      ) => `// Loading the custom theme on the page level instead of in sanity.config

import Head from 'next/head'
import {useEffect, useState} from 'react'
import {NextStudio} from 'next-sanity'

import _config from '../sanity.config'

export default function IndexPage() {
  const [config, setConfig] = useState(_config)

  useEffect(
    // Start fetching the theme in parallel with the Studio auth loading
    () =>
      // The webpackIgnore tells webpack to not attempt bundling this dynamic import,
      // and instead let it run natively in the browser at runtime
      void import(
        /* webpackIgnore: true */ ${first}
      ).then(({theme}) => setConfig(config => ({...config, theme}))),
    []
  )

  return <NextStudio config={config} />
}`

    default:
      throw new TypeError('Unknown snippet id: ' + id)
  }
}

export const snippets = [
  'import-dynamic-ts',
  'import-static',
  'studio-config',
  'studio-config-local-import',
  'studio-config-local-import-ts',
  'studio-config-next-runtime-1',
  'studio-config-next-runtime-2',
  'studio-config-create-theme',
  'import-create-theme-static',
  'import-create-theme-dynamic',
  'themer.d.ts',
  'tsconfig',
  '_document.tsx',
  '_document.js',
  'next-config-build-time-js',
  'next-config-build-time-ts',
  'studio-config-create-theme-static-import',
  'pages-index',
] as const