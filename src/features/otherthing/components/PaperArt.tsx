'use client'
import { motion, useReducedMotion } from 'framer-motion'
import files from '../content/referenceFiles.json'

export function PaperArt() {
  const art = ['15e11e24bce94a05', '6f93e4184c559736', 'ee69a7393749ef34', 'ad7be67bae17b5dc', '37ee0ec311b10899', '4f2c0333ca86d344']
  return <div className="ot-paper-art" aria-hidden="true">{art.map((id, index) => <img key={id} src={`/templates/otherthing/reference/${id}.avif`} alt="" style={{ left: `${[8, 72, 88, 25, 3, 65][index]}%`, top: `${[20, 70, 350, 780, 1180, 1650][index]}px`, transform: `rotate(${index * 17 - 30}deg)` }} />)}</div>
}
const doodles = [
  ['qxXnaWnlD7k4pcjHlnxQQOf75IY.png', 58, 35, 250, -15],
  ['IBi5qLJnCFhvgs9VVK8rw60dU.png', 25, 83, 300, 0],
  ['Bo6IrT0jNVWLbYX4Xgj4ux30w.png', 45, 4, 320, -30],
  ['gPP2UpfVcQaTV4zZTBXdZ2aG0Cc.png', 70, 18, 210, 0],
  ['stWaGBuxCxZiNXPYLotExPREw.png', -12, 32, 230, -20],
  ['kC22NWNgDgSMs1vJOG44vVatmHE.png', -2, 70, 240, 10],
  ['XFDYr6yRgZhq0sPUTevLOz3l44.png', 68, 55, 250, 15],
  ['FtgXMVOqM0f575ZDnnZXUosSZpI.png', 80, 38, 150, 0],
  ['VMttQ15icQSXTdPbVGHYc5Jornc.png', 8, 13, 220, -75],
  ['80NjJMWuWDlvKemSNLI1cTdys.png', 70, 76, 180, -20],
  ['XeHtd8kXEzGSCHS4SWw2BGslXqo.png', 22, 9, 240, 0],
  ['7ZP3YSsLIzQyyBrEiVOA61VZVI.png', 6, 6, 200, -20],
  ['fNkGFJazhJVnZGvQVdVJnQyCM.png', 8, 62, 150, 15],
] as const
export function ContactDoodles() {
  const reduced = useReducedMotion()
  return <div className="ot-contact-art" aria-hidden="true">{doodles.map(([file, x, y, width, rotate], index) => <motion.img src={files[file]} key={file} alt="" style={{ left: `${x}%`, top: `${y}%`, width }} initial={reduced ? false : { opacity: 0, scale: .8, rotate: rotate - 10 }} animate={{ opacity: 1, scale: 1, rotate }} transition={{ type: 'spring', stiffness: 170, damping: 20, delay: index * .035 }} />)}</div>
}
