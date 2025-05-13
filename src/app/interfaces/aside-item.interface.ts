export interface AsideItem {
  type: 'announcement' | 'tip' | 'contact' | string;
  title: string;
  content: string;
  icon: string;
  color?: string;
}
