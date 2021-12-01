export function getBiggerImg(imgSrc: string): string {
  return imgSrc.replace(/\/\d*x\d*bb.png$/, '1000x1000bb.webp');
}
