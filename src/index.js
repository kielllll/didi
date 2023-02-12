/**
 * index.js
 */

import { computeMaxChar } from './util.js'

const TEXT =
  "'Di kita matitiis Kahit na ako ay mainis sa'yo Ako'y manunuyo pa rin Sa mga araw na ika'y matampuhin Dahil ikaw ang aking tahanan Ikaw pa rin ang aking uuwian Pilit mang itulak palayo Hihilahin ng tadhana pabalik sa'yo Dahil sa minsan mong pag-ngiti Alam kong ako'y manantili Dahil ikaw ang aking kanlungan Ako naman ang iyong sandalan Umabot man sa puntong kailangan mo akong iwan Ay bibitaw na rin labag man sa'king kalooban Dahil ika'y aking mahal At kung may susunod mang buhay para sa atin Hihilinging makilala muli Ikaw pa rin ang aking uuwian"
const textCount = TEXT.length
const textPortrait = document.getElementById('text')

const setText = () => {
  const maxChar = computeMaxChar()

  // apply correct repeat count to text
  textPortrait.innerHTML = `${TEXT} `
    // textPortrait.innerHTML = `Didi `
    .repeat(Math.ceil(maxChar / textCount))
    .substring(0, maxChar + 1)
}

window.addEventListener('load', setText)

// dynamically set text on resize/zoom to ensure
// the entire viewport is covered with text
window.addEventListener('resize', setText)
