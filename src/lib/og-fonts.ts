import { readFile } from 'fs/promises';
import path from 'path';

const FONTS_DIR = path.join(process.cwd(), 'public/fonts');

export async function interFont(weight: 400 | 500 = 400): Promise<ArrayBuffer> {
  const file = weight === 500 ? 'inter-500.ttf' : 'inter-400.ttf';
  const buf = await readFile(path.join(FONTS_DIR, file));
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}

export async function ibmPlexArabicFont(weight: 400 | 500): Promise<ArrayBuffer> {
  const file = weight === 500 ? 'ibm-plex-arabic-500.ttf' : 'ibm-plex-arabic-400.ttf';
  const buf = await readFile(path.join(FONTS_DIR, file));
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}
