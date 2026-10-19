'use client'

import type { ImageLoaderProps } from 'next/image'

/**
 * Site images live on Cloudinary (folder zanga-site) and are referenced by full URL with a default
 * size cap of `c_limit,w_1600,h_1600`. For next/image, swap that cap for the width Next asks for,
 * so each screen gets an appropriately sized file. Anything else (e.g. local SVGs) is passed through.
 */
const DEFAULT_TRANSFORM = 'f_auto,q_auto,c_limit,w_1600,h_1600'

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
  if (!src.includes('res.cloudinary.com') || !src.includes(DEFAULT_TRANSFORM)) return src
  return src.replace(DEFAULT_TRANSFORM, `f_auto,q_${quality ?? 'auto'},c_limit,w_${width}`)
}
