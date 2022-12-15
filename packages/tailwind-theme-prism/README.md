
### Quick Setup

Add the theme as a dependency

```
pnpm add @prism2/tailwind-theme
```

Then configure Tailwind to use it.

```
// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: require('@prism2/tailwind-theme)
  },
  plugins: []
}
```


### Manheim Theme Colors

| Token     | Hue     | Preview       |
| --------- | ------- | ------------- |
| .blue-000 | #EBF6FF | ![#EBF6FF](https://via.placeholder.com/15/EBF6FF/000000?text=+) |
| .blue-100 | #CCE8FF | ![#CCE8FF](https://via.placeholder.com/15/CCE8FF/000000?text=+) |
| .blue-200 | #A3D0F5 | ![#A3D0F5](https://via.placeholder.com/15/A3D0F5/000000?text=+) |
| .blue-300 | #81B7E4 | ![#81B7E4](https://via.placeholder.com/15/81B7E4/000000?text=+) |
| .blue-400 | #57A0DB | ![#57A0DB](https://via.placeholder.com/15/57A0DB/000000?text=+) |
| .blue-500 | #318AD3 | ![#318AD3](https://via.placeholder.com/15/318AD3/000000?text=+) |
| .blue-600 | #2372B8 | ![#2372B8](https://via.placeholder.com/15/2372B8/000000?text=+) |
| .blue-700 | #005BA8 | ![#005BA8](https://via.placeholder.com/15/005BA8/000000?text=+) |
| .blue-800 | #004986 | ![#004986](https://via.placeholder.com/15/004986/000000?text=+) |
| .blue-900 | #003468 | ![#003468](https://via.placeholder.com/15/003468/000000?text=+) |
| .blue-1000 | #001B35 | ![#001B35](https://via.placeholder.com/15/001B35/000000?text=+) |
| .fuchsia-000 | #fcf1f7 | ![#fcf1f7](https://via.placeholder.com/15/fcf1f7/000000?text=+) |
| .fuchsia-100 | #F8DAEB | ![#F8DAEB](https://via.placeholder.com/15/F8DAEB/000000?text=+) |
| .fuchsia-200 | #F2BDDB | ![#F2BDDB](https://via.placeholder.com/15/F2BDDB/000000?text=+) |
| .fuchsia-300 | #EB9AC8 | ![#EB9AC8](https://via.placeholder.com/15/EB9AC8/000000?text=+) |
| .fuchsia-400 | #E474B2 | ![#E474B2](https://via.placeholder.com/15/E474B2/000000?text=+) |
| .fuchsia-500 | #DC4A9B | ![#DC4A9B](https://via.placeholder.com/15/DC4A9B/000000?text=+) |
| .fuchsia-600 | #CA2780 | ![#CA2780](https://via.placeholder.com/15/CA2780/000000?text=+) |
| .fuchsia-700 | #A9216A | ![#A9216A](https://via.placeholder.com/15/A9216A/000000?text=+) |
| .fuchsia-800 | #8C1D58 | ![#8C1D58](https://via.placeholder.com/15/8C1D58/000000?text=+) |
| .fuchsia-900 | #62133D | ![#62133D](https://via.placeholder.com/15/62133D/000000?text=+) |
| .gray-000 | #F4F4F4 | ![#F4F4F4](https://via.placeholder.com/15/F4F4F4/000000?text=+) |
| .gray-100 | #E3E3E3 | ![#E3E3E3](https://via.placeholder.com/15/E3E3E3/000000?text=+) |
| .gray-200 | #CCCCCC | ![#CCCCCC](https://via.placeholder.com/15/CCCCCC/000000?text=+) |
| .gray-300 | #B2B2B2 | ![#B2B2B2](https://via.placeholder.com/15/B2B2B2/000000?text=+) |
| .gray-400 | #999999 | ![#999999](https://via.placeholder.com/15/999999/000000?text=+) |
| .gray-500 | #828282 | ![#828282](https://via.placeholder.com/15/828282/000000?text=+) |
| .gray-600 | #6D6D6D | ![#6D6D6D](https://via.placeholder.com/15/6D6D6D/000000?text=+) |
| .gray-700 | #5A5A5A | ![#5A5A5A](https://via.placeholder.com/15/5A5A5A/000000?text=+) |
| .gray-800 | #4A4A4A | ![#4A4A4A](https://via.placeholder.com/15/4A4A4A/000000?text=+) |
| .gray-900 | #333333 | ![#333333](https://via.placeholder.com/15/333333/000000?text=+) |
| .yellow-000 | #FFF7E0 | ![#FFF7E0](https://via.placeholder.com/15/FFF7E0/000000?text=+) |
| .yellow-100 | #FFF0C2 | ![#FFF0C2](https://via.placeholder.com/15/FFF0C2/000000?text=+) |
| .yellow-200 | #FFE699 | ![#FFE699](https://via.placeholder.com/15/FFE699/000000?text=+) |
| .yellow-300 | #FFD966 | ![#FFD966](https://via.placeholder.com/15/FFD966/000000?text=+) |
| .yellow-400 | #FFC20E | ![#FFC20E](https://via.placeholder.com/15/FFC20E/000000?text=+) |
| .yellow-500 | #EBB000 | ![#EBB000](https://via.placeholder.com/15/EBB000/000000?text=+) |
| .yellow-600 | #B38600 | ![#B38600](https://via.placeholder.com/15/B38600/000000?text=+) |
| .yellow-700 | #8F6B00 | ![#8F6B00](https://via.placeholder.com/15/8F6B00/000000?text=+) |
| .yellow-800 | #664D00 | ![#664D00](https://via.placeholder.com/15/664D00/000000?text=+) |
| .yellow-900 | #4D3900 | ![#4D3900](https://via.placeholder.com/15/4D3900/000000?text=+) |
| .red-000 | #FFEAE7 | ![#FFEAE7](https://via.placeholder.com/15/FFEAE7/000000?text=+) |
| .red-100 | #FFD6CF | ![#FFD6CF](https://via.placeholder.com/15/FFD6CF/000000?text=+) |
| .red-200 | #FFB6AA | ![#FFB6AA](https://via.placeholder.com/15/FFB6AA/000000?text=+) |
| .red-300 | #F99384 | ![#F99384](https://via.placeholder.com/15/F99384/000000?text=+) |
| .red-400 | #F06F61 | ![#F06F61](https://via.placeholder.com/15/F06F61/000000?text=+) |
| .red-500 | #E44941 | ![#E44941](https://via.placeholder.com/15/E44941/000000?text=+) |
| .red-600 | #D41E27 | ![#D41E27](https://via.placeholder.com/15/D41E27/000000?text=+) |
| .red-700 | #B11D23 | ![#B11D23](https://via.placeholder.com/15/B11D23/000000?text=+) |
| .red-800 | #94141B | ![#94141B](https://via.placeholder.com/15/94141B/000000?text=+) |
| .red-900 | #6F0000 | ![#6F0000](https://via.placeholder.com/15/6F0000/000000?text=+) |
| .green-000 | #E9F6E5 | ![#E9F6E5](https://via.placeholder.com/15/E9F6E5/000000?text=+) |
| .green-100 | #C9EABF | ![#C9EABF](https://via.placeholder.com/15/C9EABF/000000?text=+) |
| .green-200 | #9FDA8E | ![#9FDA8E](https://via.placeholder.com/15/9FDA8E/000000?text=+) |
| .green-300 | #6CC651 | ![#6CC651](https://via.placeholder.com/15/6CC651/000000?text=+) |
| .green-400 | #53AC39 | ![#53AC39](https://via.placeholder.com/15/53AC39/000000?text=+) |
| .green-500 | #479230 | ![#479230](https://via.placeholder.com/15/479230/000000?text=+) |
| .green-600 | #3C7B29 | ![#3C7B29](https://via.placeholder.com/15/3C7B29/000000?text=+) |
| .green-700 | #326622 | ![#326622](https://via.placeholder.com/15/326622/000000?text=+) |
| .green-800 | #28541A | ![#28541A](https://via.placeholder.com/15/28541A/000000?text=+) |
| .green-900 | #203A17 | ![#203A17](https://via.placeholder.com/15/203A17/000000?text=+) |
| .orange-000 | #FFF0E6 | ![#FFF0E6](https://via.placeholder.com/15/FFF0E6/000000?text=+) |
| .orange-100 | #FFDBC3 | ![#FFDBC3](https://via.placeholder.com/15/FFDBC3/000000?text=+) |
| .orange-200 | #FFBD93 | ![#FFBD93](https://via.placeholder.com/15/FFBD93/000000?text=+) |
| .orange-300 | #FF995A | ![#FF995A](https://via.placeholder.com/15/FF995A/000000?text=+) |
| .orange-400 | #F87216 | ![#F87216](https://via.placeholder.com/15/F87216/000000?text=+) |
| .orange-500 | #D26217 | ![#D26217](https://via.placeholder.com/15/D26217/000000?text=+) |
| .orange-600 | #B05417 | ![#B05417](https://via.placeholder.com/15/B05417/000000?text=+) |
| .orange-700 | #924719 | ![#924719](https://via.placeholder.com/15/924719/000000?text=+) |
| .orange-800 | #773A15 | ![#773A15](https://via.placeholder.com/15/773A15/000000?text=+) |
| .orange-900 | #512912 | ![#512912](https://via.placeholder.com/15/512912/000000?text=+) |
| .cerulean-000 | #EBF6FF | ![#EBF6FF](https://via.placeholder.com/15/EBF6FF/000000?text=+) |
| .cerulean-100 | #CCE8FF | ![#CCE8FF](https://via.placeholder.com/15/CCE8FF/000000?text=+) |
| .cerulean-200 | #A3D0F5 | ![#A3D0F5](https://via.placeholder.com/15/A3D0F5/000000?text=+) |
| .cerulean-300 | #81B7E4 | ![#81B7E4](https://via.placeholder.com/15/81B7E4/000000?text=+) |
| .cerulean-400 | #57A0DB | ![#57A0DB](https://via.placeholder.com/15/57A0DB/000000?text=+) |
| .cerulean-500 | #318AD3 | ![#318AD3](https://via.placeholder.com/15/318AD3/000000?text=+) |
| .cerulean-600 | #2372B8 | ![#2372B8](https://via.placeholder.com/15/2372B8/000000?text=+) |
| .cerulean-700 | #005BA8 | ![#005BA8](https://via.placeholder.com/15/005BA8/000000?text=+) |
| .cerulean-800 | #004986 | ![#004986](https://via.placeholder.com/15/004986/000000?text=+) |
| .cerulean-900 | #003468 | ![#003468](https://via.placeholder.com/15/003468/000000?text=+) |
| .cerulean-1000 | #001B35 | ![#001B35](https://via.placeholder.com/15/001B35/000000?text=+) |
| .sky-000 | #EBF6FF | ![#EBF6FF](https://via.placeholder.com/15/EBF6FF/000000?text=+) |
| .sky-100 | #CCE8FF | ![#CCE8FF](https://via.placeholder.com/15/CCE8FF/000000?text=+) |
| .sky-200 | #A3D0F5 | ![#A3D0F5](https://via.placeholder.com/15/A3D0F5/000000?text=+) |
| .sky-300 | #81B7E4 | ![#81B7E4](https://via.placeholder.com/15/81B7E4/000000?text=+) |
| .sky-400 | #57A0DB | ![#57A0DB](https://via.placeholder.com/15/57A0DB/000000?text=+) |
| .sky-500 | #318AD3 | ![#318AD3](https://via.placeholder.com/15/318AD3/000000?text=+) |
| .sky-600 | #2372B8 | ![#2372B8](https://via.placeholder.com/15/2372B8/000000?text=+) |
| .sky-700 | #005BA8 | ![#005BA8](https://via.placeholder.com/15/005BA8/000000?text=+) |
| .sky-800 | #004986 | ![#004986](https://via.placeholder.com/15/004986/000000?text=+) |
| .sky-900 | #003468 | ![#003468](https://via.placeholder.com/15/003468/000000?text=+) |
| .sky-1000 | #001B35 | ![#001B35](https://via.placeholder.com/15/001B35/000000?text=+) |
| .navy-000 | #EBF6FF | ![#EBF6FF](https://via.placeholder.com/15/EBF6FF/000000?text=+) |
| .navy-100 | #CCE8FF | ![#CCE8FF](https://via.placeholder.com/15/CCE8FF/000000?text=+) |
| .navy-200 | #A3D0F5 | ![#A3D0F5](https://via.placeholder.com/15/A3D0F5/000000?text=+) |
| .navy-300 | #81B7E4 | ![#81B7E4](https://via.placeholder.com/15/81B7E4/000000?text=+) |
| .navy-400 | #57A0DB | ![#57A0DB](https://via.placeholder.com/15/57A0DB/000000?text=+) |
| .navy-500 | #318AD3 | ![#318AD3](https://via.placeholder.com/15/318AD3/000000?text=+) |
| .navy-600 | #2372B8 | ![#2372B8](https://via.placeholder.com/15/2372B8/000000?text=+) |
| .navy-700 | #005BA8 | ![#005BA8](https://via.placeholder.com/15/005BA8/000000?text=+) |
| .navy-800 | #004986 | ![#004986](https://via.placeholder.com/15/004986/000000?text=+) |
| .navy-900 | #003468 | ![#003468](https://via.placeholder.com/15/003468/000000?text=+) |
| .navy-1000 | #001B35 | ![#001B35](https://via.placeholder.com/15/001B35/000000?text=+) |
| .amber-000 | #FFF0E6 | ![#FFF0E6](https://via.placeholder.com/15/FFF0E6/000000?text=+) |
| .amber-100 | #FFDBC3 | ![#FFDBC3](https://via.placeholder.com/15/FFDBC3/000000?text=+) |
| .amber-200 | #FFBD93 | ![#FFBD93](https://via.placeholder.com/15/FFBD93/000000?text=+) |
| .amber-300 | #FF995A | ![#FF995A](https://via.placeholder.com/15/FF995A/000000?text=+) |
| .amber-400 | #F87216 | ![#F87216](https://via.placeholder.com/15/F87216/000000?text=+) |
| .amber-500 | #D26217 | ![#D26217](https://via.placeholder.com/15/D26217/000000?text=+) |
| .amber-600 | #B05417 | ![#B05417](https://via.placeholder.com/15/B05417/000000?text=+) |
| .amber-700 | #924719 | ![#924719](https://via.placeholder.com/15/924719/000000?text=+) |
| .amber-800 | #773A15 | ![#773A15](https://via.placeholder.com/15/773A15/000000?text=+) |
| .amber-900 | #512912 | ![#512912](https://via.placeholder.com/15/512912/000000?text=+) |
| .saffron-000 | #FFF0E6 | ![#FFF0E6](https://via.placeholder.com/15/FFF0E6/000000?text=+) |
| .saffron-100 | #FFDBC3 | ![#FFDBC3](https://via.placeholder.com/15/FFDBC3/000000?text=+) |
| .saffron-200 | #FFBD93 | ![#FFBD93](https://via.placeholder.com/15/FFBD93/000000?text=+) |
| .saffron-300 | #FF995A | ![#FF995A](https://via.placeholder.com/15/FF995A/000000?text=+) |
| .saffron-400 | #F87216 | ![#F87216](https://via.placeholder.com/15/F87216/000000?text=+) |
| .saffron-500 | #D26217 | ![#D26217](https://via.placeholder.com/15/D26217/000000?text=+) |
| .saffron-600 | #B05417 | ![#B05417](https://via.placeholder.com/15/B05417/000000?text=+) |
| .saffron-700 | #924719 | ![#924719](https://via.placeholder.com/15/924719/000000?text=+) |
| .saffron-800 | #773A15 | ![#773A15](https://via.placeholder.com/15/773A15/000000?text=+) |
| .saffron-900 | #512912 | ![#512912](https://via.placeholder.com/15/512912/000000?text=+) |
| .gold-000 | #FFF7E0 | ![#FFF7E0](https://via.placeholder.com/15/FFF7E0/000000?text=+) |
| .gold-100 | #FFF0C2 | ![#FFF0C2](https://via.placeholder.com/15/FFF0C2/000000?text=+) |
| .gold-200 | #FFE699 | ![#FFE699](https://via.placeholder.com/15/FFE699/000000?text=+) |
| .gold-300 | #FFD966 | ![#FFD966](https://via.placeholder.com/15/FFD966/000000?text=+) |
| .gold-400 | #FFC20E | ![#FFC20E](https://via.placeholder.com/15/FFC20E/000000?text=+) |
| .gold-500 | #EBB000 | ![#EBB000](https://via.placeholder.com/15/EBB000/000000?text=+) |
| .gold-600 | #B38600 | ![#B38600](https://via.placeholder.com/15/B38600/000000?text=+) |
| .gold-700 | #8F6B00 | ![#8F6B00](https://via.placeholder.com/15/8F6B00/000000?text=+) |
| .gold-800 | #664D00 | ![#664D00](https://via.placeholder.com/15/664D00/000000?text=+) |
| .gold-900 | #4D3900 | ![#4D3900](https://via.placeholder.com/15/4D3900/000000?text=+) |
| .meadow-000 | #E9F6E5 | ![#E9F6E5](https://via.placeholder.com/15/E9F6E5/000000?text=+) |
| .meadow-100 | #C9EABF | ![#C9EABF](https://via.placeholder.com/15/C9EABF/000000?text=+) |
| .meadow-200 | #9FDA8E | ![#9FDA8E](https://via.placeholder.com/15/9FDA8E/000000?text=+) |
| .meadow-300 | #6CC651 | ![#6CC651](https://via.placeholder.com/15/6CC651/000000?text=+) |
| .meadow-400 | #53AC39 | ![#53AC39](https://via.placeholder.com/15/53AC39/000000?text=+) |
| .meadow-500 | #479230 | ![#479230](https://via.placeholder.com/15/479230/000000?text=+) |
| .meadow-600 | #3C7B29 | ![#3C7B29](https://via.placeholder.com/15/3C7B29/000000?text=+) |
| .meadow-700 | #326622 | ![#326622](https://via.placeholder.com/15/326622/000000?text=+) |
| .meadow-800 | #28541A | ![#28541A](https://via.placeholder.com/15/28541A/000000?text=+) |
| .meadow-900 | #203A17 | ![#203A17](https://via.placeholder.com/15/203A17/000000?text=+) |