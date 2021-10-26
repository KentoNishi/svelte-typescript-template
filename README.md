# svelte-ts-template

An opinionated template for my Svelte projects.

## What's Included

* TypeScript
* Svelte (with TS support)
* ESLint (with TS support)
* Prettier (with Svelte support)
* Preconfigured `svelte-i18n`
* GitHub Actions template for GitHub Pages 
* Vite with preconfigured Svelte support
* Preconfigured VSCode settings for ESLint, i18n, etc.

I prefer this template over other existing templates for several reasons:

* Prettier properly formats everything in `.svelte` files
* ESLint properly lints and autofixes `<script>` tags in `.svelte` files
* ESLint works with TypeScript in both `.svelte` and `.ts` files
* i18n support in Svelte components
* Easy deploy to GitHub Pages
* VSCode extensions work out of the box 

At the time of writing, no other template satisfied all of the above. As an autoformat and autofix ~~ab~~user, I NEED this template. I hope you like it too!

## Usage

Click the [***Use this template***](https://github.com/KentoNishi/svelte-typescript-template/generate) button in GitHub to use this template.

## Commands

```bash
yarn        # install
yarn dev    # dev server
yarn build  # prod build
yarn serve  # serve prod
yarn check  # ts checks
yarn format # autofix from cli
```
