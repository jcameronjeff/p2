### Quickstart
```
pnpm add @prism2/tailwind-theme-manheim
```

```
// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: require('@prism2/tailwind-theme-manheim)
  },
  plugins: []
}
```

### Theme Files

This package includes generated theme files for reference outside of Tailwind in both JSON and JavaScript format.

`./generated/theme.js`
`./generated/theme.json`

Run `build:theme` to update the files based on the current theme content. This is run automatically as part of the `prepare` script.

### Using raw values

`import theme from '@prism2/tailwind-theme-manheim/generated/theme.json'`

### Manheim Theme Colors

| Token     | Hue     | Preview       |
| --------- | ------- | ------------- |
| token         | hex     | sample                                                          |
| ------------- | ------- | --------------------------------------------------------------- |
| slate-50      | #f8fafc | ![#f8fafc](https://via.placeholder.com/15/f8fafc/000000?text=+) |
| slate-100     | #f1f5f9 | ![#f1f5f9](https://via.placeholder.com/15/f1f5f9/000000?text=+) |
| slate-200     | #e2e8f0 | ![#e2e8f0](https://via.placeholder.com/15/e2e8f0/000000?text=+) |
| slate-300     | #cbd5e1 | ![#cbd5e1](https://via.placeholder.com/15/cbd5e1/000000?text=+) |
| slate-400     | #94a3b8 | ![#94a3b8](https://via.placeholder.com/15/94a3b8/000000?text=+) |
| slate-500     | #64748b | ![#64748b](https://via.placeholder.com/15/64748b/000000?text=+) |
| slate-600     | #475569 | ![#475569](https://via.placeholder.com/15/475569/000000?text=+) |
| slate-700     | #334155 | ![#334155](https://via.placeholder.com/15/334155/000000?text=+) |
| slate-800     | #1e293b | ![#1e293b](https://via.placeholder.com/15/1e293b/000000?text=+) |
| slate-900     | #0f172a | ![#0f172a](https://via.placeholder.com/15/0f172a/000000?text=+) |
| gray-50       | #F4F4F4 | ![#F4F4F4](https://via.placeholder.com/15/F4F4F4/000000?text=+) |
| gray-100      | #E3E3E3 | ![#E3E3E3](https://via.placeholder.com/15/E3E3E3/000000?text=+) |
| gray-200      | #CCCCCC | ![#CCCCCC](https://via.placeholder.com/15/CCCCCC/000000?text=+) |
| gray-300      | #B2B2B2 | ![#B2B2B2](https://via.placeholder.com/15/B2B2B2/000000?text=+) |
| gray-400      | #999999 | ![#999999](https://via.placeholder.com/15/999999/000000?text=+) |
| gray-500      | #828282 | ![#828282](https://via.placeholder.com/15/828282/000000?text=+) |
| gray-600      | #6D6D6D | ![#6D6D6D](https://via.placeholder.com/15/6D6D6D/000000?text=+) |
| gray-700      | #5A5A5A | ![#5A5A5A](https://via.placeholder.com/15/5A5A5A/000000?text=+) |
| gray-800      | #4A4A4A | ![#4A4A4A](https://via.placeholder.com/15/4A4A4A/000000?text=+) |
| gray-900      | #333333 | ![#333333](https://via.placeholder.com/15/333333/000000?text=+) |
| zinc-50       | #fafafa | ![#fafafa](https://via.placeholder.com/15/fafafa/000000?text=+) |
| zinc-100      | #f4f4f5 | ![#f4f4f5](https://via.placeholder.com/15/f4f4f5/000000?text=+) |
| zinc-200      | #e4e4e7 | ![#e4e4e7](https://via.placeholder.com/15/e4e4e7/000000?text=+) |
| zinc-300      | #d4d4d8 | ![#d4d4d8](https://via.placeholder.com/15/d4d4d8/000000?text=+) |
| zinc-400      | #a1a1aa | ![#a1a1aa](https://via.placeholder.com/15/a1a1aa/000000?text=+) |
| zinc-500      | #71717a | ![#71717a](https://via.placeholder.com/15/71717a/000000?text=+) |
| zinc-600      | #52525b | ![#52525b](https://via.placeholder.com/15/52525b/000000?text=+) |
| zinc-700      | #3f3f46 | ![#3f3f46](https://via.placeholder.com/15/3f3f46/000000?text=+) |
| zinc-800      | #27272a | ![#27272a](https://via.placeholder.com/15/27272a/000000?text=+) |
| zinc-900      | #18181b | ![#18181b](https://via.placeholder.com/15/18181b/000000?text=+) |
| neutral-50    | #fafafa | ![#fafafa](https://via.placeholder.com/15/fafafa/000000?text=+) |
| neutral-100   | #f5f5f5 | ![#f5f5f5](https://via.placeholder.com/15/f5f5f5/000000?text=+) |
| neutral-200   | #e5e5e5 | ![#e5e5e5](https://via.placeholder.com/15/e5e5e5/000000?text=+) |
| neutral-300   | #d4d4d4 | ![#d4d4d4](https://via.placeholder.com/15/d4d4d4/000000?text=+) |
| neutral-400   | #a3a3a3 | ![#a3a3a3](https://via.placeholder.com/15/a3a3a3/000000?text=+) |
| neutral-500   | #737373 | ![#737373](https://via.placeholder.com/15/737373/000000?text=+) |
| neutral-600   | #525252 | ![#525252](https://via.placeholder.com/15/525252/000000?text=+) |
| neutral-700   | #404040 | ![#404040](https://via.placeholder.com/15/404040/000000?text=+) |
| neutral-800   | #262626 | ![#262626](https://via.placeholder.com/15/262626/000000?text=+) |
| neutral-900   | #171717 | ![#171717](https://via.placeholder.com/15/171717/000000?text=+) |
| stone-50      | #fafaf9 | ![#fafaf9](https://via.placeholder.com/15/fafaf9/000000?text=+) |
| stone-100     | #f5f5f4 | ![#f5f5f4](https://via.placeholder.com/15/f5f5f4/000000?text=+) |
| stone-200     | #e7e5e4 | ![#e7e5e4](https://via.placeholder.com/15/e7e5e4/000000?text=+) |
| stone-300     | #d6d3d1 | ![#d6d3d1](https://via.placeholder.com/15/d6d3d1/000000?text=+) |
| stone-400     | #a8a29e | ![#a8a29e](https://via.placeholder.com/15/a8a29e/000000?text=+) |
| stone-500     | #78716c | ![#78716c](https://via.placeholder.com/15/78716c/000000?text=+) |
| stone-600     | #57534e | ![#57534e](https://via.placeholder.com/15/57534e/000000?text=+) |
| stone-700     | #44403c | ![#44403c](https://via.placeholder.com/15/44403c/000000?text=+) |
| stone-800     | #292524 | ![#292524](https://via.placeholder.com/15/292524/000000?text=+) |
| stone-900     | #1c1917 | ![#1c1917](https://via.placeholder.com/15/1c1917/000000?text=+) |
| red-50        | #FFEAE7 | ![#FFEAE7](https://via.placeholder.com/15/FFEAE7/000000?text=+) |
| red-100       | #FFD6CF | ![#FFD6CF](https://via.placeholder.com/15/FFD6CF/000000?text=+) |
| red-200       | #FFB6AA | ![#FFB6AA](https://via.placeholder.com/15/FFB6AA/000000?text=+) |
| red-300       | #F99384 | ![#F99384](https://via.placeholder.com/15/F99384/000000?text=+) |
| red-400       | #F06F61 | ![#F06F61](https://via.placeholder.com/15/F06F61/000000?text=+) |
| red-500       | #E44941 | ![#E44941](https://via.placeholder.com/15/E44941/000000?text=+) |
| red-600       | #D41E27 | ![#D41E27](https://via.placeholder.com/15/D41E27/000000?text=+) |
| red-700       | #B11D23 | ![#B11D23](https://via.placeholder.com/15/B11D23/000000?text=+) |
| red-800       | #94141B | ![#94141B](https://via.placeholder.com/15/94141B/000000?text=+) |
| red-900       | #6F0000 | ![#6F0000](https://via.placeholder.com/15/6F0000/000000?text=+) |
| orange-50     | #FFF0E6 | ![#FFF0E6](https://via.placeholder.com/15/FFF0E6/000000?text=+) |
| orange-100    | #FFDBC3 | ![#FFDBC3](https://via.placeholder.com/15/FFDBC3/000000?text=+) |
| orange-200    | #FFBD93 | ![#FFBD93](https://via.placeholder.com/15/FFBD93/000000?text=+) |
| orange-300    | #FF995A | ![#FF995A](https://via.placeholder.com/15/FF995A/000000?text=+) |
| orange-400    | #F87216 | ![#F87216](https://via.placeholder.com/15/F87216/000000?text=+) |
| orange-500    | #D26217 | ![#D26217](https://via.placeholder.com/15/D26217/000000?text=+) |
| orange-600    | #B05417 | ![#B05417](https://via.placeholder.com/15/B05417/000000?text=+) |
| orange-700    | #924719 | ![#924719](https://via.placeholder.com/15/924719/000000?text=+) |
| orange-800    | #773A15 | ![#773A15](https://via.placeholder.com/15/773A15/000000?text=+) |
| orange-900    | #512912 | ![#512912](https://via.placeholder.com/15/512912/000000?text=+) |
| amber-50      | #FFF0E6 | ![#FFF0E6](https://via.placeholder.com/15/FFF0E6/000000?text=+) |
| amber-100     | #FFDBC3 | ![#FFDBC3](https://via.placeholder.com/15/FFDBC3/000000?text=+) |
| amber-200     | #FFBD93 | ![#FFBD93](https://via.placeholder.com/15/FFBD93/000000?text=+) |
| amber-300     | #FF995A | ![#FF995A](https://via.placeholder.com/15/FF995A/000000?text=+) |
| amber-400     | #F87216 | ![#F87216](https://via.placeholder.com/15/F87216/000000?text=+) |
| amber-500     | #D26217 | ![#D26217](https://via.placeholder.com/15/D26217/000000?text=+) |
| amber-600     | #B05417 | ![#B05417](https://via.placeholder.com/15/B05417/000000?text=+) |
| amber-700     | #924719 | ![#924719](https://via.placeholder.com/15/924719/000000?text=+) |
| amber-800     | #773A15 | ![#773A15](https://via.placeholder.com/15/773A15/000000?text=+) |
| amber-900     | #512912 | ![#512912](https://via.placeholder.com/15/512912/000000?text=+) |
| yellow-50     | #FFF7E0 | ![#FFF7E0](https://via.placeholder.com/15/FFF7E0/000000?text=+) |
| yellow-100    | #FFF0C2 | ![#FFF0C2](https://via.placeholder.com/15/FFF0C2/000000?text=+) |
| yellow-200    | #FFE699 | ![#FFE699](https://via.placeholder.com/15/FFE699/000000?text=+) |
| yellow-300    | #FFD966 | ![#FFD966](https://via.placeholder.com/15/FFD966/000000?text=+) |
| yellow-400    | #FFC20E | ![#FFC20E](https://via.placeholder.com/15/FFC20E/000000?text=+) |
| yellow-500    | #EBB000 | ![#EBB000](https://via.placeholder.com/15/EBB000/000000?text=+) |
| yellow-600    | #B38600 | ![#B38600](https://via.placeholder.com/15/B38600/000000?text=+) |
| yellow-700    | #8F6B00 | ![#8F6B00](https://via.placeholder.com/15/8F6B00/000000?text=+) |
| yellow-800    | #664D00 | ![#664D00](https://via.placeholder.com/15/664D00/000000?text=+) |
| yellow-900    | #4D3900 | ![#4D3900](https://via.placeholder.com/15/4D3900/000000?text=+) |
| lime-50       | #f7fee7 | ![#f7fee7](https://via.placeholder.com/15/f7fee7/000000?text=+) |
| lime-100      | #ecfccb | ![#ecfccb](https://via.placeholder.com/15/ecfccb/000000?text=+) |
| lime-200      | #d9f99d | ![#d9f99d](https://via.placeholder.com/15/d9f99d/000000?text=+) |
| lime-300      | #bef264 | ![#bef264](https://via.placeholder.com/15/bef264/000000?text=+) |
| lime-400      | #a3e635 | ![#a3e635](https://via.placeholder.com/15/a3e635/000000?text=+) |
| lime-500      | #84cc16 | ![#84cc16](https://via.placeholder.com/15/84cc16/000000?text=+) |
| lime-600      | #65a30d | ![#65a30d](https://via.placeholder.com/15/65a30d/000000?text=+) |
| lime-700      | #4d7c0f | ![#4d7c0f](https://via.placeholder.com/15/4d7c0f/000000?text=+) |
| lime-800      | #3f6212 | ![#3f6212](https://via.placeholder.com/15/3f6212/000000?text=+) |
| lime-900      | #365314 | ![#365314](https://via.placeholder.com/15/365314/000000?text=+) |
| green-50      | #E9F6E5 | ![#E9F6E5](https://via.placeholder.com/15/E9F6E5/000000?text=+) |
| green-100     | #C9EABF | ![#C9EABF](https://via.placeholder.com/15/C9EABF/000000?text=+) |
| green-200     | #9FDA8E | ![#9FDA8E](https://via.placeholder.com/15/9FDA8E/000000?text=+) |
| green-300     | #6CC651 | ![#6CC651](https://via.placeholder.com/15/6CC651/000000?text=+) |
| green-400     | #53AC39 | ![#53AC39](https://via.placeholder.com/15/53AC39/000000?text=+) |
| green-500     | #479230 | ![#479230](https://via.placeholder.com/15/479230/000000?text=+) |
| green-600     | #3C7B29 | ![#3C7B29](https://via.placeholder.com/15/3C7B29/000000?text=+) |
| green-700     | #326622 | ![#326622](https://via.placeholder.com/15/326622/000000?text=+) |
| green-800     | #28541A | ![#28541A](https://via.placeholder.com/15/28541A/000000?text=+) |
| green-900     | #203A17 | ![#203A17](https://via.placeholder.com/15/203A17/000000?text=+) |
| emerald-50    | #ecfdf5 | ![#ecfdf5](https://via.placeholder.com/15/ecfdf5/000000?text=+) |
| emerald-100   | #d1fae5 | ![#d1fae5](https://via.placeholder.com/15/d1fae5/000000?text=+) |
| emerald-200   | #a7f3d0 | ![#a7f3d0](https://via.placeholder.com/15/a7f3d0/000000?text=+) |
| emerald-300   | #6ee7b7 | ![#6ee7b7](https://via.placeholder.com/15/6ee7b7/000000?text=+) |
| emerald-400   | #34d399 | ![#34d399](https://via.placeholder.com/15/34d399/000000?text=+) |
| emerald-500   | #10b981 | ![#10b981](https://via.placeholder.com/15/10b981/000000?text=+) |
| emerald-600   | #059669 | ![#059669](https://via.placeholder.com/15/059669/000000?text=+) |
| emerald-700   | #047857 | ![#047857](https://via.placeholder.com/15/047857/000000?text=+) |
| emerald-800   | #065f46 | ![#065f46](https://via.placeholder.com/15/065f46/000000?text=+) |
| emerald-900   | #064e3b | ![#064e3b](https://via.placeholder.com/15/064e3b/000000?text=+) |
| teal-50       | #f0fdfa | ![#f0fdfa](https://via.placeholder.com/15/f0fdfa/000000?text=+) |
| teal-100      | #ccfbf1 | ![#ccfbf1](https://via.placeholder.com/15/ccfbf1/000000?text=+) |
| teal-200      | #99f6e4 | ![#99f6e4](https://via.placeholder.com/15/99f6e4/000000?text=+) |
| teal-300      | #5eead4 | ![#5eead4](https://via.placeholder.com/15/5eead4/000000?text=+) |
| teal-400      | #2dd4bf | ![#2dd4bf](https://via.placeholder.com/15/2dd4bf/000000?text=+) |
| teal-500      | #14b8a6 | ![#14b8a6](https://via.placeholder.com/15/14b8a6/000000?text=+) |
| teal-600      | #0d9488 | ![#0d9488](https://via.placeholder.com/15/0d9488/000000?text=+) |
| teal-700      | #0f766e | ![#0f766e](https://via.placeholder.com/15/0f766e/000000?text=+) |
| teal-800      | #115e59 | ![#115e59](https://via.placeholder.com/15/115e59/000000?text=+) |
| teal-900      | #134e4a | ![#134e4a](https://via.placeholder.com/15/134e4a/000000?text=+) |
| cyan-50       | #ecfeff | ![#ecfeff](https://via.placeholder.com/15/ecfeff/000000?text=+) |
| cyan-100      | #cffafe | ![#cffafe](https://via.placeholder.com/15/cffafe/000000?text=+) |
| cyan-200      | #a5f3fc | ![#a5f3fc](https://via.placeholder.com/15/a5f3fc/000000?text=+) |
| cyan-300      | #67e8f9 | ![#67e8f9](https://via.placeholder.com/15/67e8f9/000000?text=+) |
| cyan-400      | #22d3ee | ![#22d3ee](https://via.placeholder.com/15/22d3ee/000000?text=+) |
| cyan-500      | #06b6d4 | ![#06b6d4](https://via.placeholder.com/15/06b6d4/000000?text=+) |
| cyan-600      | #0891b2 | ![#0891b2](https://via.placeholder.com/15/0891b2/000000?text=+) |
| cyan-700      | #0e7490 | ![#0e7490](https://via.placeholder.com/15/0e7490/000000?text=+) |
| cyan-800      | #155e75 | ![#155e75](https://via.placeholder.com/15/155e75/000000?text=+) |
| cyan-900      | #164e63 | ![#164e63](https://via.placeholder.com/15/164e63/000000?text=+) |
| sky-50        | #EBF6FF | ![#EBF6FF](https://via.placeholder.com/15/EBF6FF/000000?text=+) |
| sky-100       | #CCE8FF | ![#CCE8FF](https://via.placeholder.com/15/CCE8FF/000000?text=+) |
| sky-200       | #A3D0F5 | ![#A3D0F5](https://via.placeholder.com/15/A3D0F5/000000?text=+) |
| sky-300       | #81B7E4 | ![#81B7E4](https://via.placeholder.com/15/81B7E4/000000?text=+) |
| sky-400       | #57A0DB | ![#57A0DB](https://via.placeholder.com/15/57A0DB/000000?text=+) |
| sky-500       | #318AD3 | ![#318AD3](https://via.placeholder.com/15/318AD3/000000?text=+) |
| sky-600       | #2372B8 | ![#2372B8](https://via.placeholder.com/15/2372B8/000000?text=+) |
| sky-700       | #005BA8 | ![#005BA8](https://via.placeholder.com/15/005BA8/000000?text=+) |
| sky-800       | #004986 | ![#004986](https://via.placeholder.com/15/004986/000000?text=+) |
| sky-900       | #003468 | ![#003468](https://via.placeholder.com/15/003468/000000?text=+) |
| sky-1000      | #001B35 | ![#001B35](https://via.placeholder.com/15/001B35/000000?text=+) |
| blue-50       | #EBF6FF | ![#EBF6FF](https://via.placeholder.com/15/EBF6FF/000000?text=+) |
| blue-100      | #CCE8FF | ![#CCE8FF](https://via.placeholder.com/15/CCE8FF/000000?text=+) |
| blue-200      | #A3D0F5 | ![#A3D0F5](https://via.placeholder.com/15/A3D0F5/000000?text=+) |
| blue-300      | #81B7E4 | ![#81B7E4](https://via.placeholder.com/15/81B7E4/000000?text=+) |
| blue-400      | #57A0DB | ![#57A0DB](https://via.placeholder.com/15/57A0DB/000000?text=+) |
| blue-500      | #318AD3 | ![#318AD3](https://via.placeholder.com/15/318AD3/000000?text=+) |
| blue-600      | #2372B8 | ![#2372B8](https://via.placeholder.com/15/2372B8/000000?text=+) |
| blue-700      | #005BA8 | ![#005BA8](https://via.placeholder.com/15/005BA8/000000?text=+) |
| blue-800      | #004986 | ![#004986](https://via.placeholder.com/15/004986/000000?text=+) |
| blue-900      | #003468 | ![#003468](https://via.placeholder.com/15/003468/000000?text=+) |
| blue-1000     | #001B35 | ![#001B35](https://via.placeholder.com/15/001B35/000000?text=+) |
| indigo-50     | #eef2ff | ![#eef2ff](https://via.placeholder.com/15/eef2ff/000000?text=+) |
| indigo-100    | #e0e7ff | ![#e0e7ff](https://via.placeholder.com/15/e0e7ff/000000?text=+) |
| indigo-200    | #c7d2fe | ![#c7d2fe](https://via.placeholder.com/15/c7d2fe/000000?text=+) |
| indigo-300    | #a5b4fc | ![#a5b4fc](https://via.placeholder.com/15/a5b4fc/000000?text=+) |
| indigo-400    | #818cf8 | ![#818cf8](https://via.placeholder.com/15/818cf8/000000?text=+) |
| indigo-500    | #6366f1 | ![#6366f1](https://via.placeholder.com/15/6366f1/000000?text=+) |
| indigo-600    | #4f46e5 | ![#4f46e5](https://via.placeholder.com/15/4f46e5/000000?text=+) |
| indigo-700    | #4338ca | ![#4338ca](https://via.placeholder.com/15/4338ca/000000?text=+) |
| indigo-800    | #3730a3 | ![#3730a3](https://via.placeholder.com/15/3730a3/000000?text=+) |
| indigo-900    | #312e81 | ![#312e81](https://via.placeholder.com/15/312e81/000000?text=+) |
| violet-50     | #f5f3ff | ![#f5f3ff](https://via.placeholder.com/15/f5f3ff/000000?text=+) |
| violet-100    | #ede9fe | ![#ede9fe](https://via.placeholder.com/15/ede9fe/000000?text=+) |
| violet-200    | #ddd6fe | ![#ddd6fe](https://via.placeholder.com/15/ddd6fe/000000?text=+) |
| violet-300    | #c4b5fd | ![#c4b5fd](https://via.placeholder.com/15/c4b5fd/000000?text=+) |
| violet-400    | #a78bfa | ![#a78bfa](https://via.placeholder.com/15/a78bfa/000000?text=+) |
| violet-500    | #8b5cf6 | ![#8b5cf6](https://via.placeholder.com/15/8b5cf6/000000?text=+) |
| violet-600    | #7c3aed | ![#7c3aed](https://via.placeholder.com/15/7c3aed/000000?text=+) |
| violet-700    | #6d28d9 | ![#6d28d9](https://via.placeholder.com/15/6d28d9/000000?text=+) |
| violet-800    | #5b21b6 | ![#5b21b6](https://via.placeholder.com/15/5b21b6/000000?text=+) |
| violet-900    | #4c1d95 | ![#4c1d95](https://via.placeholder.com/15/4c1d95/000000?text=+) |
| purple-50     | #faf5ff | ![#faf5ff](https://via.placeholder.com/15/faf5ff/000000?text=+) |
| purple-100    | #f3e8ff | ![#f3e8ff](https://via.placeholder.com/15/f3e8ff/000000?text=+) |
| purple-200    | #e9d5ff | ![#e9d5ff](https://via.placeholder.com/15/e9d5ff/000000?text=+) |
| purple-300    | #d8b4fe | ![#d8b4fe](https://via.placeholder.com/15/d8b4fe/000000?text=+) |
| purple-400    | #c084fc | ![#c084fc](https://via.placeholder.com/15/c084fc/000000?text=+) |
| purple-500    | #a855f7 | ![#a855f7](https://via.placeholder.com/15/a855f7/000000?text=+) |
| purple-600    | #9333ea | ![#9333ea](https://via.placeholder.com/15/9333ea/000000?text=+) |
| purple-700    | #7e22ce | ![#7e22ce](https://via.placeholder.com/15/7e22ce/000000?text=+) |
| purple-800    | #6b21a8 | ![#6b21a8](https://via.placeholder.com/15/6b21a8/000000?text=+) |
| purple-900    | #581c87 | ![#581c87](https://via.placeholder.com/15/581c87/000000?text=+) |
| fuchsia-50    | #fcf1f7 | ![#fcf1f7](https://via.placeholder.com/15/fcf1f7/000000?text=+) |
| fuchsia-100   | #F8DAEB | ![#F8DAEB](https://via.placeholder.com/15/F8DAEB/000000?text=+) |
| fuchsia-200   | #F2BDDB | ![#F2BDDB](https://via.placeholder.com/15/F2BDDB/000000?text=+) |
| fuchsia-300   | #EB9AC8 | ![#EB9AC8](https://via.placeholder.com/15/EB9AC8/000000?text=+) |
| fuchsia-400   | #E474B2 | ![#E474B2](https://via.placeholder.com/15/E474B2/000000?text=+) |
| fuchsia-500   | #DC4A9B | ![#DC4A9B](https://via.placeholder.com/15/DC4A9B/000000?text=+) |
| fuchsia-600   | #CA2780 | ![#CA2780](https://via.placeholder.com/15/CA2780/000000?text=+) |
| fuchsia-700   | #A9216A | ![#A9216A](https://via.placeholder.com/15/A9216A/000000?text=+) |
| fuchsia-800   | #8C1D58 | ![#8C1D58](https://via.placeholder.com/15/8C1D58/000000?text=+) |
| fuchsia-900   | #62133D | ![#62133D](https://via.placeholder.com/15/62133D/000000?text=+) |
| pink-50       | #fdf2f8 | ![#fdf2f8](https://via.placeholder.com/15/fdf2f8/000000?text=+) |
| pink-100      | #fce7f3 | ![#fce7f3](https://via.placeholder.com/15/fce7f3/000000?text=+) |
| pink-200      | #fbcfe8 | ![#fbcfe8](https://via.placeholder.com/15/fbcfe8/000000?text=+) |
| pink-300      | #f9a8d4 | ![#f9a8d4](https://via.placeholder.com/15/f9a8d4/000000?text=+) |
| pink-400      | #f472b6 | ![#f472b6](https://via.placeholder.com/15/f472b6/000000?text=+) |
| pink-500      | #ec4899 | ![#ec4899](https://via.placeholder.com/15/ec4899/000000?text=+) |
| pink-600      | #db2777 | ![#db2777](https://via.placeholder.com/15/db2777/000000?text=+) |
| pink-700      | #be185d | ![#be185d](https://via.placeholder.com/15/be185d/000000?text=+) |
| pink-800      | #9d174d | ![#9d174d](https://via.placeholder.com/15/9d174d/000000?text=+) |
| pink-900      | #831843 | ![#831843](https://via.placeholder.com/15/831843/000000?text=+) |
| rose-50       | #fff1f2 | ![#fff1f2](https://via.placeholder.com/15/fff1f2/000000?text=+) |
| rose-100      | #ffe4e6 | ![#ffe4e6](https://via.placeholder.com/15/ffe4e6/000000?text=+) |
| rose-200      | #fecdd3 | ![#fecdd3](https://via.placeholder.com/15/fecdd3/000000?text=+) |
| rose-300      | #fda4af | ![#fda4af](https://via.placeholder.com/15/fda4af/000000?text=+) |
| rose-400      | #fb7185 | ![#fb7185](https://via.placeholder.com/15/fb7185/000000?text=+) |
| rose-500      | #f43f5e | ![#f43f5e](https://via.placeholder.com/15/f43f5e/000000?text=+) |
| rose-600      | #e11d48 | ![#e11d48](https://via.placeholder.com/15/e11d48/000000?text=+) |
| rose-700      | #be123c | ![#be123c](https://via.placeholder.com/15/be123c/000000?text=+) |
| rose-800      | #9f1239 | ![#9f1239](https://via.placeholder.com/15/9f1239/000000?text=+) |
| rose-900      | #881337 | ![#881337](https://via.placeholder.com/15/881337/000000?text=+) |
| cerulean-50   | #EBF6FF | ![#EBF6FF](https://via.placeholder.com/15/EBF6FF/000000?text=+) |
| cerulean-100  | #CCE8FF | ![#CCE8FF](https://via.placeholder.com/15/CCE8FF/000000?text=+) |
| cerulean-200  | #A3D0F5 | ![#A3D0F5](https://via.placeholder.com/15/A3D0F5/000000?text=+) |
| cerulean-300  | #81B7E4 | ![#81B7E4](https://via.placeholder.com/15/81B7E4/000000?text=+) |
| cerulean-400  | #57A0DB | ![#57A0DB](https://via.placeholder.com/15/57A0DB/000000?text=+) |
| cerulean-500  | #318AD3 | ![#318AD3](https://via.placeholder.com/15/318AD3/000000?text=+) |
| cerulean-600  | #2372B8 | ![#2372B8](https://via.placeholder.com/15/2372B8/000000?text=+) |
| cerulean-700  | #005BA8 | ![#005BA8](https://via.placeholder.com/15/005BA8/000000?text=+) |
| cerulean-800  | #004986 | ![#004986](https://via.placeholder.com/15/004986/000000?text=+) |
| cerulean-900  | #003468 | ![#003468](https://via.placeholder.com/15/003468/000000?text=+) |
| cerulean-1000 | #001B35 | ![#001B35](https://via.placeholder.com/15/001B35/000000?text=+) |
| saffron-50    | #FFF0E6 | ![#FFF0E6](https://via.placeholder.com/15/FFF0E6/000000?text=+) |
| saffron-100   | #FFDBC3 | ![#FFDBC3](https://via.placeholder.com/15/FFDBC3/000000?text=+) |
| saffron-200   | #FFBD93 | ![#FFBD93](https://via.placeholder.com/15/FFBD93/000000?text=+) |
| saffron-300   | #FF995A | ![#FF995A](https://via.placeholder.com/15/FF995A/000000?text=+) |
| saffron-400   | #F87216 | ![#F87216](https://via.placeholder.com/15/F87216/000000?text=+) |
| saffron-500   | #D26217 | ![#D26217](https://via.placeholder.com/15/D26217/000000?text=+) |
| saffron-600   | #B05417 | ![#B05417](https://via.placeholder.com/15/B05417/000000?text=+) |
| saffron-700   | #924719 | ![#924719](https://via.placeholder.com/15/924719/000000?text=+) |
| saffron-800   | #773A15 | ![#773A15](https://via.placeholder.com/15/773A15/000000?text=+) |
| saffron-900   | #512912 | ![#512912](https://via.placeholder.com/15/512912/000000?text=+) |
| gold-50       | #FFF7E0 | ![#FFF7E0](https://via.placeholder.com/15/FFF7E0/000000?text=+) |
| gold-100      | #FFF0C2 | ![#FFF0C2](https://via.placeholder.com/15/FFF0C2/000000?text=+) |
| gold-200      | #FFE699 | ![#FFE699](https://via.placeholder.com/15/FFE699/000000?text=+) |
| gold-300      | #FFD966 | ![#FFD966](https://via.placeholder.com/15/FFD966/000000?text=+) |
| gold-400      | #FFC20E | ![#FFC20E](https://via.placeholder.com/15/FFC20E/000000?text=+) |
| gold-500      | #EBB000 | ![#EBB000](https://via.placeholder.com/15/EBB000/000000?text=+) |
| gold-600      | #B38600 | ![#B38600](https://via.placeholder.com/15/B38600/000000?text=+) |
| gold-700      | #8F6B00 | ![#8F6B00](https://via.placeholder.com/15/8F6B00/000000?text=+) |
| gold-800      | #664D00 | ![#664D00](https://via.placeholder.com/15/664D00/000000?text=+) |
| gold-900      | #4D3900 | ![#4D3900](https://via.placeholder.com/15/4D3900/000000?text=+) |
| meadow-50     | #E9F6E5 | ![#E9F6E5](https://via.placeholder.com/15/E9F6E5/000000?text=+) |
| meadow-100    | #C9EABF | ![#C9EABF](https://via.placeholder.com/15/C9EABF/000000?text=+) |
| meadow-200    | #9FDA8E | ![#9FDA8E](https://via.placeholder.com/15/9FDA8E/000000?text=+) |
| meadow-300    | #6CC651 | ![#6CC651](https://via.placeholder.com/15/6CC651/000000?text=+) |
| meadow-400    | #53AC39 | ![#53AC39](https://via.placeholder.com/15/53AC39/000000?text=+) |
| meadow-500    | #479230 | ![#479230](https://via.placeholder.com/15/479230/000000?text=+) |
| meadow-600    | #3C7B29 | ![#3C7B29](https://via.placeholder.com/15/3C7B29/000000?text=+) |
| meadow-700    | #326622 | ![#326622](https://via.placeholder.com/15/326622/000000?text=+) |
| meadow-800    | #28541A | ![#28541A](https://via.placeholder.com/15/28541A/000000?text=+) |
| meadow-900    | #203A17 | ![#203A17](https://via.placeholder.com/15/203A17/000000?text=+) |
| jungle-50     | #ecfdf5 | ![#ecfdf5](https://via.placeholder.com/15/ecfdf5/000000?text=+) |
| jungle-100    | #d1fae5 | ![#d1fae5](https://via.placeholder.com/15/d1fae5/000000?text=+) |
| jungle-200    | #a7f3d0 | ![#a7f3d0](https://via.placeholder.com/15/a7f3d0/000000?text=+) |
| jungle-300    | #6ee7b7 | ![#6ee7b7](https://via.placeholder.com/15/6ee7b7/000000?text=+) |
| jungle-400    | #34d399 | ![#34d399](https://via.placeholder.com/15/34d399/000000?text=+) |
| jungle-500    | #10b981 | ![#10b981](https://via.placeholder.com/15/10b981/000000?text=+) |
| jungle-600    | #059669 | ![#059669](https://via.placeholder.com/15/059669/000000?text=+) |
| jungle-700    | #047857 | ![#047857](https://via.placeholder.com/15/047857/000000?text=+) |
| jungle-800    | #065f46 | ![#065f46](https://via.placeholder.com/15/065f46/000000?text=+) |
| jungle-900    | #064e3b | ![#064e3b](https://via.placeholder.com/15/064e3b/000000?text=+) |
| ocean-50      | #f0fdfa | ![#f0fdfa](https://via.placeholder.com/15/f0fdfa/000000?text=+) |
| ocean-100     | #ccfbf1 | ![#ccfbf1](https://via.placeholder.com/15/ccfbf1/000000?text=+) |
| ocean-200     | #99f6e4 | ![#99f6e4](https://via.placeholder.com/15/99f6e4/000000?text=+) |
| ocean-300     | #5eead4 | ![#5eead4](https://via.placeholder.com/15/5eead4/000000?text=+) |
| ocean-400     | #2dd4bf | ![#2dd4bf](https://via.placeholder.com/15/2dd4bf/000000?text=+) |
| ocean-500     | #14b8a6 | ![#14b8a6](https://via.placeholder.com/15/14b8a6/000000?text=+) |
| ocean-600     | #0d9488 | ![#0d9488](https://via.placeholder.com/15/0d9488/000000?text=+) |
| ocean-700     | #0f766e | ![#0f766e](https://via.placeholder.com/15/0f766e/000000?text=+) |
| ocean-800     | #115e59 | ![#115e59](https://via.placeholder.com/15/115e59/000000?text=+) |
| ocean-900     | #134e4a | ![#134e4a](https://via.placeholder.com/15/134e4a/000000?text=+) |

