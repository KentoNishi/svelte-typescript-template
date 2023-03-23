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

Once you clone your repository, run `yarn` to install dependencies. Then, reload VSCode to refresh the ESLint extension. Finally, use the `ESLint: Fix all auto-fixable problems` command to auto-fix any file.

## Commands

```bash
yarn                   # install
yarn dev               # dev server
yarn build             # prod build
yarn format            # autofix from cli
yarn serve             # serve prod
yarn type:check        # ts checks
yarn type:check:watch  # ts checks (watch mode)
```
