export type DirectionType = 'rtl' | 'ltr';

export type ItemType = {
  id: string;
  x: number;
  y: number;
  scale?: number;
  disabled?: boolean;
  imageSrc: string;
  onClick: any;
}