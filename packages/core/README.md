<br>
<div align="center">

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/33840671/205238939-3cf526f7-8d92-4fa0-8ca3-6c7e4c545f9c.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/33840671/205238945-3295c4f5-a88a-4b58-bca9-770fe7bf894e.svg">
        <img alt="Master" src="https://user-images.githubusercontent.com/33840671/205238945-3295c4f5-a88a-4b58-bca9-770fe7bf894e.svg" width="100%">
    </picture>
</p>
<p align="center">A crafted color system for beautiful user interfaces</p>

<p align="center">
    <a aria-label="GitHub release (latest by date including pre-releases)" href="https://github.com/master-co/colors/releases">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/v/release/master-co/colors?include_prereleases&color=212022&label=&style=for-the-badge&logo=github&logoColor=fff">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/v/release/master-co/colors?include_prereleases&color=f6f7f8&label=&style=for-the-badge&logo=github&logoColor=%23000">
            <img alt="NPM Version" src="https://img.shields.io/github/v/release/master-co/colors?include_prereleases&color=f6f7f8&label=&style=for-the-badge&logo=github">
        </picture>
    </a>
    <a aria-label="NPM Package" href="https://www.npmjs.com/package/@master/colors">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/dm/@master/colors?color=212022&label=%20&logo=npm&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/npm/dm/@master/colors?color=f6f7f8&label=%20&logo=npm&style=for-the-badge">
            <img alt="NPM package ( download / month )" src="https://img.shields.io/npm/dm/@master/colors?color=f6f7f8&label=%20&logo=npm&style=for-the-badge">
        </picture>
    </a>
    <a aria-label="JSDelivr" href="https://www.jsdelivr.com/package/npm/@master/colors">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/jsdelivr/npm/hm/@master/colors?color=212022&label=%20&logo=jsdelivr&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/jsdelivr/npm/hm/@master/colors?color=f6f7f8&label=%20&logo=jsdelivr&style=for-the-badge">
            <img alt="JSDelivr hits (npm scoped)" src="https://img.shields.io/jsdelivr/npm/hm/@master/colors?color=f6f7f8&label=%20&logo=jsdelivr&style=for-the-badge">
        </picture>
    </a>
    <a aria-label="Discord Community" href="https://discord.gg/sZNKpAAAw6">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/discord/917780624314613760?color=212022&label=%20&logo=discord&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/discord/917780624314613760?color=f6f7f8&label=%20&logo=discord&style=for-the-badge">
            <img alt="Discord online" src="https://img.shields.io/discord/917780624314613760?color=f6f7f8&label=%20&logo=discord&style=for-the-badge">
        </picture>
    </a>
    <a aria-label="Follow @mastercorg" href="https://twitter.com/mastercorg">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/static/v1?label=%20&message=twitter&color=212022&logo=twitter&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/static/v1?label=%20&message=twitter&color=f6f7f8&logo=twitter&style=for-the-badge">
            <img alt="Follow @mastercorg" src="https://img.shields.io/static/v1?label=%20&message=twitter&color=f6f7f8&logo=twitter&style=for-the-badge">
        </picture>
    </a>
    <a aria-label="Github Actions" href="https://github.com/master-co/colors/actions/workflows/release.yml">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/actions/workflow/status/master-co/colors/release.yml?branch=rc&label=%20&message=twitter&color=212022&logo=githubactions&style=for-the-badge">
            <source media="(prefers-color-scheme: light)" srcset="https://img.shields.io/github/actions/workflow/status/master-co/colors/release.yml?branch=rc&label=%20&message=twitter&color=f6f7f8&logo=githubactions&style=for-the-badge&logoColor=%23000">
            <img alt="Github release actions" src="https://img.shields.io/github/actions/workflow/status/master-co/colors/release.yml?branch=rc&label=%20&message=twitter&color=f6f7f8&logo=githubactions&style=for-the-badge&logoColor=%23000">
        </picture>
    </a>
</p>

<br>

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/master-co/colors/assets/33840671/7b3fc175-97d3-41bd-9d2f-a45e6ca46014">
        <source media="(prefers-color-scheme: light)" srcset="https://github.com/master-co/colors/assets/33840671/0100ad1f-133c-4901-b70e-f4879fcf920f">
        <img alt="Master Colors" src="https://github.com/master-co/colors/assets/33840671/0100ad1f-133c-4901-b70e-f4879fcf920f" width="100%">
    </picture>
</p>

</div>

## Documentation
Visit [rc.css.master.co/docs/colors](https://rc.css.master.co/docs/colors) to preview the all colors.

## Getting Started
Install the Master Colors v2 via package managers:
```bash
npm install @master/colors@rc
```
Import the colors:
```js
import colors from '@master/colors'
```
The `colors` object contains hue colors on a scale of `5~95` and [Master CSS color variables](https://rc.css.master.co/docs/colors#add-colors-by-theme):
```js
{
    blue: {
        5: '#e5f3fe',
        10: '#dbf2fe',
        ...,
        95: '#102069',
        '@light': '$(blue-60)',
        '@dark': '$(blue-50)'
    },
    invert: {
        '@light': '#000000',
        '@dark': '#ffffff'
    },
    ...
}
```
You can also access filtered hue colors:
```js
import hueColors from '@master/colors/hue'
```
```js
{
    blue: {
        5: '#e5f3fe',
        10: '#dbf2fe',
        ...,
    },
    pink: {
        5: '#fef1f9',
        10: '#fee9f8',
        ...,
    },
    ...
}
```

## Community
The Master community can be found here:

- [Discuss on GitHub](https://github.com/master-co/colors/discussions) - Ask questions, voice ideas, and do any other discussion
- [Join our Discord Server](https://discord.com/invite/sZNKpAAAw6) - Casually chat with other people using the language <sup><sub>✓ 中文</sub></sup>

<sub>Our [《 Code of Conduct 》](https://github.com/master-co/colors/blob/main/.github/CODE_OF_CONDUCT.md) applies to all Master community channels.</sub>

## Contributing
Please see our [CONTRIBUTING](https://github.com/master-co/colors/blob/main/.github/CONTRIBUTING.md) for workflow.
