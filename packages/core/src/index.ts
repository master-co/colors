const colors = {
    'stone': {
        '0': 'oklch(99% 0.0033 72)',
        '5': 'oklch(94.9% 0.0066 72)',
        '10': 'oklch(90.8% 0.0172 72)',
        '20': 'oklch(82.6% 0.0287 72)',
        '30': 'oklch(74.4% 0.04 72)',
        '40': 'oklch(66.2% 0.044 72)',
        '50': 'oklch(58% 0.045 72)',
        '60': 'oklch(49.8% 0.033 72)',
        '70': 'oklch(41.6% 0.0275 72)',
        '80': 'oklch(33.4% 0.022 72)',
        '90': 'oklch(25.2% 0.0105 72)',
        '95': 'oklch(21.1% 0.0079 72)',
        '100': 'oklch(17% 0.0053 72)'
    },
    'gray': {
        '0': 'oklch(98.48% 0 none)',
        '5': 'oklch(96.5% 0 none)',
        '10': 'oklch(90% 0 none)',
        '20': 'oklch(82% 0 none)',
        '30': 'oklch(73.5% 0 none)',
        '40': 'oklch(65% 0 none)',
        '50': 'oklch(55.2% 0 none)',
        '60': 'oklch(48% 0 none)',
        '70': 'oklch(39.5% 0 none)',
        '80': 'oklch(31% 0 none)',
        '90': 'oklch(23.5% 0 none)',
        '95': 'oklch(18.5% 0 none)',
        '100': 'oklch(14.5% 0 none)'
    },
    'grey': {
        '0': 'oklch(98.38% 0.0033 249.7)',
        '5': 'oklch(95.52% 0.0099 270)',
        '10': 'oklch(90% 0.014 272)',
        '20': 'oklch(82% 0.02 272)',
        '30': 'oklch(73.5% 0.027 272)',
        '40': 'oklch(65% 0.032 273)',
        '50': 'oklch(55.2% 0.035 273)',
        '60': 'oklch(48% 0.032 273)',
        '70': 'oklch(39.5% 0.027 273)',
        '80': 'oklch(31% 0.022 273)',
        '90': 'oklch(23.5% 0.016 273)',
        '95': 'oklch(18.5% 0.012 273)',
        '100': 'oklch(14.5% 0.009 273)'
    },
    'slate': {
        '0': 'oklch(98.07% 0.0092 257.1)',
        '5': 'oklch(96.15% 0.0181 267.3)',
        '10': 'oklch(90.16% 0.0352 268.2)',
        '20': 'oklch(82.16% 0.045 268.2)',
        '30': 'oklch(74.16% 0.069 268.2)',
        '40': 'oklch(63.99% 0.0804 266.1)',
        '50': 'oklch(55.43% 0.0949 263.4)',
        '60': 'oklch(45.03% 0.0817 265.9)',
        '70': 'oklch(39% 0.0702 263.9)',
        '80': 'oklch(32.14% 0.0604 264.8)',
        '90': 'oklch(27.33% 0.0536 264.8)',
        '95': 'oklch(21.5% 0.0573 267.4)',
        '100': 'oklch(17.5% 0.0688 267.4)'
    },
    'brown': {
        '0': 'oklch(97% 0.0161 47.15)',
        '5': 'oklch(95.48% 0.0229 34.84)',
        '10': 'oklch(88.65% 0.0606 33.36)',
        '20': 'oklch(81.37% 0.1065 33.59)',
        '30': 'oklch(74.39% 0.12 32.5)',
        '40': 'oklch(67.62% 0.12 32.5)',
        '50': 'oklch(61.9% 0.12 32.5)',
        '60': 'oklch(55.58% 0.12 32.5)',
        '70': 'oklch(49.11% 0.12 32.5)',
        '80': 'oklch(42.07% 0.12 32.5)',
        '90': 'oklch(35.11% 0.12 32.5)',
        '95': 'oklch(24.7% 0.0958 31.18)',
        '100': 'oklch(21.21% 0.0822 31.17)'
    },
    'orange': {
        '0': 'oklch(96.76% 0.0337 84.59)',
        '5': 'oklch(94.78% 0.0521 82.97)',
        '10': 'oklch(89.94% 0.0852 75.65)',
        '20': 'oklch(82.86% 0.1343 69.21)',
        '30': 'oklch(75.09% 0.179 58.39)',
        '40': 'oklch(71.4% 0.1941 48.13)',
        '50': 'oklch(66.61% 0.2247 36.66)',
        '60': 'oklch(61.68% 0.2388 31.22)',
        '70': 'oklch(53.53% 0.2196 29.23)',
        '80': 'oklch(46.33% 0.1901 29.23)',
        '90': 'oklch(36.63% 0.1503 29.23)',
        '95': 'oklch(25.4% 0.1042 29.23)',
        '100': 'oklch(21.44% 0.088 29.23)'
    },
    'amber': {
        '0': 'oklch(97.5% 0.051 98.98)',
        '5': 'oklch(96.24% 0.0716 98.08)',
        '10': 'oklch(93.46% 0.1082 95.78)',
        '20': 'oklch(88.25% 0.1592 91.33)',
        '30': 'oklch(86% 0.1633 86.92)',
        '40': 'oklch(83.04% 0.1701 81.13)',
        '50': 'oklch(79.4% 0.1709 71.06)',
        '60': 'oklch(73.31% 0.1784 56.52)',
        '70': 'oklch(63.23% 0.1757 46.71)',
        '80': 'oklch(53.09% 0.1677 39.66)',
        '90': 'oklch(42.68% 0.138 38.58)',
        '95': 'oklch(29.27% 0.0971 37.42)',
        '100': 'oklch(23.94% 0.0818 36.09)'
    },
    'yellow': {
        '0': 'oklch(98.86% 0.0591 107.4)',
        '5': 'oklch(98.27% 0.0948 108)',
        '10': 'oklch(97.31% 0.1645 109.1)',
        '20': 'oklch(95.82% 0.207 108.4)',
        '30': 'oklch(93.51% 0.1981 104.7)',
        '40': 'oklch(91.5% 0.1909 101.1)',
        '50': 'oklch(87.52% 0.1796 94.59)',
        '60': 'oklch(82.02% 0.169 82.09)',
        '70': 'oklch(72.04% 0.1592 66.98)',
        '80': 'oklch(64.84% 0.1477 63.12)',
        '90': 'oklch(52.17% 0.1199 62.19)',
        '95': 'oklch(33.35% 0.083 54.56)',
        '100': 'oklch(26.22% 0.0646 55.44)'
    },
    'lime': {
        '0': 'oklch(98.05% 0.0665 116)',
        '5': 'oklch(96.62% 0.1 121.2)',
        '10': 'oklch(95.06% 0.1566 121.5)',
        '20': 'oklch(92.45% 0.2251 126)',
        '30': 'oklch(87.79% 0.2261 126.9)',
        '40': 'oklch(82.22% 0.225 131.1)',
        '50': 'oklch(74.39% 0.2131 133.9)',
        '60': 'oklch(66.45% 0.195 135.3)',
        '70': 'oklch(58.7% 0.1769 136.7)',
        '80': 'oklch(51.46% 0.1612 138.7)',
        '90': 'oklch(44.54% 0.1437 140.1)',
        '95': 'oklch(29.84% 0.097 140.4)',
        '100': 'oklch(25.83% 0.0851 141.1)'
    },
    'green': {
        '0': 'oklch(97% 0.0508 145.7)',
        '5': 'oklch(94.95% 0.0888 145.5)',
        '10': 'oklch(92.05% 0.1473 145.7)',
        '20': 'oklch(89.18% 0.2191 143.8)',
        '30': 'oklch(84.3% 0.24 143.9)',
        '40': 'oklch(77.68% 0.25 144.1)',
        '50': 'oklch(72.41% 0.2464 142.5)',
        '60': 'oklch(67.52% 0.2298 142.5)',
        '70': 'oklch(58.66% 0.1996 142.5)',
        '80': 'oklch(51.96% 0.1768 142.5)',
        '90': 'oklch(44.03% 0.1498 142.5)',
        '95': 'oklch(30.17% 0.1027 142.5)',
        '100': 'oklch(26.35% 0.0897 142.5)'
    },
    'beryl': {
        '0': 'oklch(96.57% 0.05 163.7)',
        '5': 'oklch(94.71% 0.0792 163.5)',
        '10': 'oklch(91.87% 0.128 162.2)',
        '20': 'oklch(90.33% 0.1569 161.2)',
        '30': 'oklch(86.43% 0.2104 155.8)',
        '40': 'oklch(82.49% 0.1978 156.6)',
        '50': 'oklch(76.89% 0.1885 155.4)',
        '60': 'oklch(69.77% 0.1794 153.1)',
        '70': 'oklch(60.74% 0.1602 151.9)',
        '80': 'oklch(54.36% 0.1421 152.3)',
        '90': 'oklch(46.09% 0.1213 152)',
        '95': 'oklch(30.39% 0.0888 147.6)',
        '100': 'oklch(26.71% 0.0855 144.4)'
    },
    'teal': {
        '0': 'oklch(97.24% 0.0384 179.8)',
        '5': 'oklch(94.3% 0.0826 180.5)',
        '10': 'oklch(92.33% 0.1148 181.5)',
        '20': 'oklch(91.3% 0.1327 183.1)',
        '30': 'oklch(90.52% 0.1472 184.8)',
        '40': 'oklch(89.99% 0.1577 186.3)',
        '50': 'oklch(86.13% 0.1485 190.5)',
        '60': 'oklch(79.38% 0.1355 194.8)',
        '70': 'oklch(67.86% 0.1154 199.2)',
        '80': 'oklch(60.62% 0.1033 203.7)',
        '90': 'oklch(52.19% 0.0898 208.3)',
        '95': 'oklch(31.94% 0.0584 220.7)',
        '100': 'oklch(28.34% 0.0534 224.3)'
    },
    'cyan': {
        '0': 'oklch(97.47% 0.0367 196.6)',
        '5': 'oklch(95.05% 0.0748 196)',
        '10': 'oklch(92.28% 0.1122 196.9)',
        '20': 'oklch(89.98% 0.1264 200.1)',
        '30': 'oklch(87.28% 0.1376 204.3)',
        '40': 'oklch(84.82% 0.1408 209.5)',
        '50': 'oklch(81.54% 0.1453 216.7)',
        '60': 'oklch(77.57% 0.1494 226.7)',
        '70': 'oklch(70.27% 0.1509 235.9)',
        '80': 'oklch(63.25% 0.1493 241.7)',
        '90': 'oklch(52.16% 0.1354 246.4)',
        '95': 'oklch(35.21% 0.0976 249.2)',
        '100': 'oklch(30.27% 0.0847 249.6)'
    },
    'sky': {
        '0': 'oklch(97.39% 0.0232 209.4)',
        '5': 'oklch(94.65% 0.0448 212.1)',
        '10': 'oklch(90.51% 0.0725 216.5)',
        '20': 'oklch(86.58% 0.0902 224)',
        '30': 'oklch(77.94% 0.1431 228.4)',
        '40': 'oklch(72.24% 0.1626 239)',
        '50': 'oklch(67.09% 0.1828 248.5)',
        '60': 'oklch(62.09% 0.2077 255.4)',
        '70': 'oklch(55.12% 0.2483 261.6)',
        '80': 'oklch(49.98% 0.2769 263.8)',
        '90': 'oklch(40.76% 0.2499 264.2)',
        '95': 'oklch(28.37% 0.1946 265.1)',
        '100': 'oklch(25.85% 0.1768 265.4)'
    },
    'blue': {
        '0': 'oklch(97.5% 0.0175 219.7)',
        '5': 'oklch(93.53% 0.0381 231.3)',
        '10': 'oklch(90.01% 0.0564 236.1)',
        '20': 'oklch(81.69% 0.0975 246.5)',
        '30': 'oklch(72.87% 0.1468 249.3)',
        '40': 'oklch(64.31% 0.1921 258.5)',
        '50': 'oklch(58.22% 0.2279 263.9)',
        '60': 'oklch(51.83% 0.2687 266.1)',
        '70': 'oklch(46.26% 0.3057 266.7)',
        '80': 'oklch(42.89% 0.2907 266.3)',
        '90': 'oklch(39.4% 0.2629 268)',
        '95': 'oklch(28.64% 0.1893 269)',
        '100': 'oklch(25.46% 0.168 269.2)'
    },
    'indigo': {
        '0': 'oklch(97.1% 0.0138 257.2)',
        '5': 'oklch(94.11% 0.0285 279.6)',
        '10': 'oklch(87.83% 0.0595 274.4)',
        '20': 'oklch(77.74% 0.1153 280.2)',
        '30': 'oklch(70.2% 0.1611 282.9)',
        '40': 'oklch(61.3% 0.218 284)',
        '50': 'oklch(56.78% 0.2478 284.1)',
        '60': 'oklch(50.06% 0.2906 282)',
        '70': 'oklch(48.74% 0.2963 279.3)',
        '80': 'oklch(48.25% 0.2976 277.4)',
        '90': 'oklch(41.46% 0.2571 276.7)',
        '95': 'oklch(29.36% 0.1799 278.3)',
        '100': 'oklch(25.28% 0.1551 278.1)'
    },
    'violet': {
        '0': 'oklch(97.96% 0.0166 322.8)',
        '5': 'oklch(94.02% 0.0333 299.5)',
        '10': 'oklch(88.69% 0.0648 300.1)',
        '20': 'oklch(80.47% 0.113 297.7)',
        '30': 'oklch(71.63% 0.1722 298.7)',
        '40': 'oklch(62.1% 0.237 297.8)',
        '50': 'oklch(56.23% 0.2803 297.8)',
        '60': 'oklch(52.55% 0.293 292.4)',
        '70': 'oklch(51.12% 0.2931 287.9)',
        '80': 'oklch(48.43% 0.2798 286.7)',
        '90': 'oklch(40.64% 0.2331 287.9)',
        '95': 'oklch(28.51% 0.1631 288.3)',
        '100': 'oklch(24.44% 0.1403 287.8)'
    },
    'purple': {
        '0': 'oklch(97.07% 0.0259 325.8)',
        '5': 'oklch(94.28% 0.0394 314.4)',
        '10': 'oklch(89.13% 0.0771 314.7)',
        '20': 'oklch(81.4% 0.1318 312.8)',
        '30': 'oklch(72.72% 0.2007 312.8)',
        '40': 'oklch(63.36% 0.2677 310)',
        '50': 'oklch(58.21% 0.2988 307.2)',
        '60': 'oklch(55.59% 0.2952 301)',
        '70': 'oklch(54.45% 0.294 297.9)',
        '80': 'oklch(48.76% 0.264 297.5)',
        '90': 'oklch(39.15% 0.2105 298.7)',
        '95': 'oklch(27.95% 0.1488 300.5)',
        '100': 'oklch(24.3% 0.128 302.4)'
    },
    'fuchsia': {
        '0': 'oklch(97.07% 0.0259 325.8)',
        '5': 'oklch(94.57% 0.0472 324.9)',
        '10': 'oklch(89.9% 0.0935 326.3)',
        '20': 'oklch(81.84% 0.1554 322)',
        '30': 'oklch(74.78% 0.2085 319.1)',
        '40': 'oklch(67.61% 0.25 316.5)',
        '50': 'oklch(62.91% 0.25 316.7)',
        '60': 'oklch(58.72% 0.25 311.8)',
        '70': 'oklch(53.61% 0.25 312.8)',
        '80': 'oklch(47.9% 0.2382 313.2)',
        '90': 'oklch(38.62% 0.1895 315.8)',
        '95': 'oklch(27.75% 0.1357 316.4)',
        '100': 'oklch(23.7% 0.1162 315.9)'
    },
    'pink': {
        '0': 'oklch(97.07% 0.0259 325.8)',
        '5': 'oklch(94.74% 0.0465 326.5)',
        '10': 'oklch(88.85% 0.0902 332.8)',
        '20': 'oklch(81.57% 0.1379 341.6)',
        '30': 'oklch(74.68% 0.2018 342.5)',
        '40': 'oklch(69.18% 0.2455 347.6)',
        '50': 'oklch(65.84% 0.25 350.7)',
        '60': 'oklch(63.54% 0.25 359.2)',
        '70': 'oklch(58.95% 0.2377 2.647)',
        '80': 'oklch(53% 0.2126 6.362)',
        '90': 'oklch(43.66% 0.1748 8.099)',
        '95': 'oklch(31.48% 0.1261 7.759)',
        '100': 'oklch(27.42% 0.1098 8.521)'
    },
    'crimson': {
        '0': 'oklch(97.07% 0.0259 325.8)',
        '5': 'oklch(94.2% 0.0332 353.2)',
        '10': 'oklch(88.09% 0.0677 1.012)',
        '20': 'oklch(80.33% 0.1184 4.549)',
        '30': 'oklch(72.9% 0.1774 4.449)',
        '40': 'oklch(66.41% 0.2325 8.311)',
        '50': 'oklch(63.55% 0.25 15.3)',
        '60': 'oklch(62.66% 0.25 21.21)',
        '70': 'oklch(58.59% 0.2383 26.22)',
        '80': 'oklch(53.32% 0.2169 26.29)',
        '90': 'oklch(44.03% 0.1783 24.44)',
        '95': 'oklch(31.73% 0.1287 25.13)',
        '100': 'oklch(27.68% 0.1126 26.19)'
    },
    'red': {
        '0': 'oklch(96.63% 0.0166 17.2)',
        '5': 'oklch(94.05% 0.0299 17.02)',
        '10': 'oklch(87.16% 0.0687 17.78)',
        '20': 'oklch(79.39% 0.119 18.78)',
        '30': 'oklch(72.94% 0.1679 17.49)',
        '40': 'oklch(64.7% 0.2399 19.91)',
        '50': 'oklch(62.82% 0.25 28.59)',
        '60': 'oklch(60.94% 0.2501 29.23)',
        '70': 'oklch(57.58% 0.2363 29.23)',
        '80': 'oklch(53.09% 0.2178 29.23)',
        '90': 'oklch(44.45% 0.1824 29.23)',
        '95': 'oklch(32.59% 0.1337 29.23)',
        '100': 'oklch(28.54% 0.1171 29.23)'
    }
}

export default colors
