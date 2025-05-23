const colors = {
    'stone': {
        '0': 'rgb(99% 99% 98%)',
        '5': 'rgb(94% 93% 92%)',
        '10': 'rgb(91% 87% 83%)',
        '20': 'rgb(82% 77% 70%)',
        '30': 'rgb(74% 66% 57%)',
        '40': 'rgb(64% 56% 46%)',
        '50': 'rgb(55% 46% 37%)',
        '60': 'rgb(43% 38% 31%)',
        '70': 'rgb(34% 29% 23%)',
        '80': 'rgb(24% 21% 16%)',
        '90': 'rgb(15% 13% 11%)',
        '95': 'rgb(11% 9.4% 8.1%)',
        '100': 'rgb(6.6% 5.9% 5.1%)'
    },
    'gray': {
        '0': 'rgb(98% 98% 98%)',
        '5': 'rgb(95% 95% 95%)',
        '10': 'rgb(87% 87% 87%)',
        '20': 'rgb(77% 77% 77%)',
        '30': 'rgb(66% 66% 66%)',
        '40': 'rgb(56% 56% 56%)',
        '50': 'rgb(45% 45% 45%)',
        '60': 'rgb(37% 37% 37%)',
        '70': 'rgb(28% 28% 28%)',
        '80': 'rgb(19% 19% 19%)',
        '90': 'rgb(12% 12% 12%)',
        '95': 'rgb(7.3% 7.3% 7.3%)',
        '100': 'rgb(3.9% 3.9% 3.9%)'
    },
    'grey': {
        '0': 'rgb(97% 98% 99%)',
        '5': 'rgb(93% 94% 97%)',
        '10': 'rgb(86% 87% 91%)',
        '20': 'rgb(75% 77% 82%)',
        '30': 'rgb(64% 66% 73%)',
        '40': 'rgb(53% 56% 64%)',
        '50': 'rgb(42% 44% 53%)',
        '60': 'rgb(34% 36% 44%)',
        '70': 'rgb(26% 27% 33%)',
        '80': 'rgb(17% 19% 23%)',
        '90': 'rgb(11% 12% 15%)',
        '95': 'rgb(6.6% 7.2% 9.5%)',
        '100': 'rgb(3.5% 3.9% 5.5%)'
    },
    'slate': {
        '0': 'rgb(96% 98% 100%)',
        '5': 'rgb(93% 95% 100%)',
        '10': 'rgb(83% 87% 97%)',
        '20': 'rgb(72% 77% 89%)',
        '30': 'rgb(60% 67% 85%)',
        '40': 'rgb(46% 55% 74%)',
        '50': 'rgb(34% 45% 67%)',
        '60': 'rgb(25% 33% 51%)',
        '70': 'rgb(19% 27% 42%)',
        '80': 'rgb(14% 20% 32%)',
        '90': 'rgb(10% 15% 26%)',
        '95': 'rgb(5.4% 9.1% 20%)',
        '100': 'rgb(1.8% 4.8% 18%)'
    },
    'brown': {
        '0': 'rgb(100% 95% 93%)',
        '5': 'rgb(100% 92% 90%)',
        '10': 'rgb(100% 80% 75%)',
        '20': 'rgb(100% 66% 58%)',
        '30': 'rgb(93% 56% 48%)',
        '40': 'rgb(84% 48% 40%)',
        '50': 'rgb(77% 41% 34%)',
        '60': 'rgb(68% 33% 27%)',
        '70': 'rgb(60% 26% 20%)',
        '80': 'rgb(51% 18% 12%)',
        '90': 'rgb(42% 9.3% 3.3%)',
        '95': 'rgb(27% 1.4% 0%)',
        '100': 'rgb(21% 0.91% 0%)'
    },
    'orange': {
        '0': 'rgb(100% 95% 86%)',
        '5': 'rgb(100% 92% 78%)',
        '10': 'rgb(100% 84% 62%)',
        '20': 'rgb(100% 71% 37%)',
        '30': 'rgb(100% 55% 0%)',
        '40': 'rgb(100% 45% 0%)',
        '50': 'rgb(100% 30% 0%)',
        '60': 'rgb(95% 14% 0%)',
        '70': 'rgb(81% 0% 0%)',
        '80': 'rgb(67% 0.01% 0.02%)',
        '90': 'rgb(48% 0.01% 0.01%)',
        '95': 'rgb(29% 0% 0%)',
        '100': 'rgb(22% 0% 0%)'
    },
    'amber': {
        '0': 'rgb(100% 97% 82%)',
        '5': 'rgb(100% 96% 74%)',
        '10': 'rgb(100% 92% 58%)',
        '20': 'rgb(100% 83% 27%)',
        '30': 'rgb(100% 79% 20%)',
        '40': 'rgb(100% 73% 4.1%)',
        '50': 'rgb(100% 65% 0%)',
        '60': 'rgb(98% 52% 0%)',
        '70': 'rgb(86% 37% 0%)',
        '80': 'rgb(72% 24% 0.04%)',
        '90': 'rgb(54% 16% 0%)',
        '95': 'rgb(32% 7.5% 0%)',
        '100': 'rgb(24% 4% 0%)'
    },
    'yellow': {
        '0': 'rgb(100% 100% 82%)',
        '5': 'rgb(100% 100% 70%)',
        '10': 'rgb(100% 100% 43%)',
        '20': 'rgb(100% 98% 0.37%)',
        '30': 'rgb(100% 94% 0%)',
        '40': 'rgb(100% 90% 0%)',
        '50': 'rgb(99% 83% 0%)',
        '60': 'rgb(98% 72% 0%)',
        '70': 'rgb(90% 56% 0%)',
        '80': 'rgb(80% 47% 0%)',
        '90': 'rgb(60% 34% 0%)',
        '95': 'rgb(34% 16% 0%)',
        '100': 'rgb(23% 10% 0%)'
    },
    'lime': {
        '0': 'rgb(96% 100% 80%)',
        '5': 'rgb(91% 100% 70%)',
        '10': 'rgb(87% 100% 51%)',
        '20': 'rgb(76% 100% 17%)',
        '30': 'rgb(69% 94% 0%)',
        '40': 'rgb(56% 88% 0%)',
        '50': 'rgb(43% 78% 0%)',
        '60': 'rgb(34% 67% 0.17%)',
        '70': 'rgb(26% 57% 0%)',
        '80': 'rgb(17% 48% 0%)',
        '90': 'rgb(10% 40% 0%)',
        '95': 'rgb(3.5% 22% 0%)',
        '100': 'rgb(1.6% 18% 0.01%)'
    },
    'green': {
        '0': 'rgb(88% 100% 88%)',
        '5': 'rgb(79% 100% 79%)',
        '10': 'rgb(64% 100% 66%)',
        '20': 'rgb(44% 100% 45%)',
        '30': 'rgb(29% 95% 33%)',
        '40': 'rgb(2.4% 86% 20%)',
        '50': 'rgb(0% 79% 0%)',
        '60': 'rgb(0% 72% 0%)',
        '70': 'rgb(0% 59% 0%)',
        '80': 'rgb(0% 50% 0%)',
        '90': 'rgb(0% 40% 0%)',
        '95': 'rgb(0% 23% 0%)',
        '100': 'rgb(0% 18% 0%)'
    },
    'beryl': {
        '0': 'rgb(84% 100% 92%)',
        '5': 'rgb(74% 100% 87%)',
        '10': 'rgb(56% 100% 79%)',
        '20': 'rgb(43% 100% 74%)',
        '30': 'rgb(0% 98% 58%)',
        '40': 'rgb(0% 92% 56%)',
        '50': 'rgb(0.35% 84% 49%)',
        '60': 'rgb(0% 74% 40%)',
        '70': 'rgb(0% 61% 31%)',
        '80': 'rgb(0% 53% 27%)',
        '90': 'rgb(0% 42% 20%)',
        '95': 'rgb(0% 23% 6.7%)',
        '100': 'rgb(0% 19% 1.9%)'
    },
    'teal': {
        '0': 'rgb(86% 100% 97%)',
        '5': 'rgb(68% 100% 94%)',
        '10': 'rgb(52% 100% 92%)',
        '20': 'rgb(40% 100% 92%)',
        '30': 'rgb(26% 100% 93%)',
        '40': 'rgb(0% 100% 93%)',
        '50': 'rgb(0% 94% 91%)',
        '60': 'rgb(0% 84% 84%)',
        '70': 'rgb(0% 68% 70%)',
        '80': 'rgb(0% 58% 62%)',
        '90': 'rgb(0% 47% 52%)',
        '95': 'rgb(0% 22% 28%)',
        '100': 'rgb(0% 18% 24%)'
    },
    'cyan': {
        '0': 'rgb(86% 100% 100%)',
        '5': 'rgb(70% 100% 100%)',
        '10': 'rgb(50% 99% 100%)',
        '20': 'rgb(38% 97% 100%)',
        '30': 'rgb(24% 94% 100%)',
        '40': 'rgb(16% 90% 100%)',
        '50': 'rgb(0.36% 85% 100%)',
        '60': 'rgb(0% 78% 100%)',
        '70': 'rgb(0% 67% 94%)',
        '80': 'rgb(0% 57% 86%)',
        '90': 'rgb(0% 43% 70%)',
        '95': 'rgb(0% 24% 42%)',
        '100': 'rgb(0% 19% 34%)'
    },
    'sky': {
        '0': 'rgb(90% 99% 100%)',
        '5': 'rgb(80% 96% 100%)',
        '10': 'rgb(66% 93% 100%)',
        '20': 'rgb(56% 88% 100%)',
        '30': 'rgb(18% 78% 100%)',
        '40': 'rgb(0.37% 69% 100%)',
        '50': 'rgb(0% 60% 100%)',
        '60': 'rgb(0% 51% 100%)',
        '70': 'rgb(0% 37% 100%)',
        '80': 'rgb(0.26% 25% 99%)',
        '90': 'rgb(0% 14% 80%)',
        '95': 'rgb(1.5% 0% 53%)',
        '100': 'rgb(1.5% 0% 47%)'
    },
    'blue': {
        '0': 'rgb(92% 98% 100%)',
        '5': 'rgb(82% 94% 100%)',
        '10': 'rgb(73% 90% 100%)',
        '20': 'rgb(56% 79% 100%)',
        '30': 'rgb(33% 68% 100%)',
        '40': 'rgb(22% 54% 100%)',
        '50': 'rgb(19% 42% 100%)',
        '60': 'rgb(14% 28% 100%)',
        '70': 'rgb(12% 6% 100%)',
        '80': 'rgb(9.2% 0% 92%)',
        '90': 'rgb(11% 0% 81%)',
        '95': 'rgb(6.8% 0% 52%)',
        '100': 'rgb(5.3% 0.01% 44%)'
    },
    'indigo': {
        '0': 'rgb(94% 96% 100%)',
        '5': 'rgb(91% 92% 100%)',
        '10': 'rgb(79% 83% 100%)',
        '20': 'rgb(66% 68% 100%)',
        '30': 'rgb(57% 56% 100%)',
        '40': 'rgb(48% 40% 100%)',
        '50': 'rgb(44% 30% 100%)',
        '60': 'rgb(36% 7.1% 100%)',
        '70': 'rgb(33% 0.08% 100%)',
        '80': 'rgb(30% 0% 100%)',
        '90': 'rgb(23% 0% 82%)',
        '95': 'rgb(14% 0% 51%)',
        '100': 'rgb(11% 0% 41%)'
    },
    'violet': {
        '0': 'rgb(100% 96% 100%)',
        '5': 'rgb(93% 90% 100%)',
        '10': 'rgb(88% 82% 100%)',
        '20': 'rgb(78% 69% 100%)',
        '30': 'rgb(70% 53% 100%)',
        '40': 'rgb(61% 34% 100%)',
        '50': 'rgb(56% 15% 100%)',
        '60': 'rgb(48% 0% 100%)',
        '70': 'rgb(43% 0% 100%)',
        '80': 'rgb(39% 0% 94%)',
        '90': 'rgb(31% 0% 74%)',
        '95': 'rgb(18% 0% 45%)',
        '100': 'rgb(14% 0% 36%)'
    },
    'purple': {
        '0': 'rgb(100% 94% 100%)',
        '5': 'rgb(97% 90% 100%)',
        '10': 'rgb(94% 80% 100%)',
        '20': 'rgb(88% 66% 100%)',
        '30': 'rgb(82% 48% 100%)',
        '40': 'rgb(73% 25% 100%)',
        '50': 'rgb(67% 0% 100%)',
        '60': 'rgb(59% 0% 100%)',
        '70': 'rgb(55% 0% 100%)',
        '80': 'rgb(47% 0% 87%)',
        '90': 'rgb(35% 0% 64%)',
        '95': 'rgb(22% 0% 39%)',
        '100': 'rgb(18% 0% 32%)'
    },
    'fuchsia': {
        '0': 'rgb(100% 94% 100%)',
        '5': 'rgb(100% 89% 100%)',
        '10': 'rgb(100% 79% 100%)',
        '20': 'rgb(95% 63% 100%)',
        '30': 'rgb(89% 48% 100%)',
        '40': 'rgb(82% 33% 98%)',
        '50': 'rgb(76% 26% 92%)',
        '60': 'rgb(67% 21% 90%)',
        '70': 'rgb(62% 11% 82%)',
        '80': 'rgb(54% 0% 72%)',
        '90': 'rgb(41% 0% 52%)',
        '95': 'rgb(25% 0% 33%)',
        '100': 'rgb(20% 0% 26%)'
    },
    'pink': {
        '0': 'rgb(100% 94% 100%)',
        '5': 'rgb(100% 89% 100%)',
        '10': 'rgb(100% 77% 96%)',
        '20': 'rgb(100% 62% 86%)',
        '30': 'rgb(100% 44% 81%)',
        '40': 'rgb(100% 26% 72%)',
        '50': 'rgb(97% 18% 65%)',
        '60': 'rgb(96% 9.1% 53%)',
        '70': 'rgb(89% 0% 44%)',
        '80': 'rgb(78% 0% 34%)',
        '90': 'rgb(60% 0% 25%)',
        '95': 'rgb(38% 0% 15%)',
        '100': 'rgb(31% 0% 11%)'
    },
    'crimson': {
        '0': 'rgb(100% 94% 100%)',
        '5': 'rgb(100% 89% 93%)',
        '10': 'rgb(100% 78% 84%)',
        '20': 'rgb(100% 62% 71%)',
        '30': 'rgb(100% 44% 60%)',
        '40': 'rgb(100% 22% 47%)',
        '50': 'rgb(99% 5.8% 34%)',
        '60': 'rgb(99% 3.1% 24%)',
        '70': 'rgb(91% 0% 12%)',
        '80': 'rgb(80% 0% 10%)',
        '90': 'rgb(62% 0% 9.7%)',
        '95': 'rgb(39% 0% 3.9%)',
        '100': 'rgb(32% 0% 1.9%)'
    },
    'red': {
        '0': 'rgb(100% 94% 94%)',
        '5': 'rgb(100% 89% 89%)',
        '10': 'rgb(100% 77% 77%)',
        '20': 'rgb(100% 61% 62%)',
        '30': 'rgb(100% 46% 50%)',
        '40': 'rgb(100% 17% 30%)',
        '50': 'rgb(99% 8.8% 8.7%)',
        '60': 'rgb(96% 0% 0%)',
        '70': 'rgb(89% 0% 0.01%)',
        '80': 'rgb(80% 0% 0%)',
        '90': 'rgb(63% 0% 0.01%)',
        '95': 'rgb(41% 0% 0%)',
        '100': 'rgb(34% 0% 0%)'
    }
}

export default colors