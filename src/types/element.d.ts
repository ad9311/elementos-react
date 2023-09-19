interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicWeight: number;
  series:
    | 'Alkali Metal'
    | 'Alkaline Earth Metal'
    | 'Lanthanide'
    | 'Actinide'
    | 'Transition Metal'
    | 'Post Transition Metal'
    | 'Metalloid'
    | 'Nonmetal'
    | 'Halogen'
    | 'Noble Gas';
  seriesColor: string;
  description: string;
  state: 'Solid' | 'Liquid' | 'Gas';
  group: number | null;
  period: number;
  density: number | null;
  meltingPoint: number | null;
  bolingPoint: number | null;
  yearDiscovered: string;
  infoUrl: string;
}

export default Element;
