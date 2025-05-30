export const dummyScoreData = [
  {
    id: 'hole',
    label: "Hole",
    bgColor: "#4F4F4F",
    textColor: "white",
    fontWeight: "bold",
    fontSize: 14,
    value: [
      { holeNo: 1, val: 1 },
      { holeNo: 2, val: 2 },
      { holeNo: 3, val: 3 },
      { holeNo: 4, val: 4 },
      { holeNo: 5, val: 5 },
      { holeNo: 6, val: 6 },
      { holeNo: 7, val: 7 },
      { holeNo: 8, val: 8 },
      { holeNo: 9, val: 9 },
      { holeNo: 'OUT', val: 'OUT', textColorImp: 'white' },
      { holeNo: 10, val: 10 },
      { holeNo: 11, val: 11 },
      { holeNo: 12, val: 12 },
      { holeNo: 13, val: 13 },
      { holeNo: 14, val: 14 },
      { holeNo: 15, val: 15 },
      { holeNo: 16, val: 16 },
      { holeNo: 17, val: 17 },
      { holeNo: 18, val: 18 },
      { holeNo: 'IN', val: 'IN', textColorImp: 'white' },
      { holeNo: 'total', val: 'Total' },
    ],
  },
  {
    id: 'par',
    label: "PAR",
    bgColor: "#ECF2F5",
    textColor: "black",
    fontWeight: "bold",
    fontSize: 14,
    value: [
      { holeNo: 1, val: 121 },
      { holeNo: 2, val: 222 },
      { holeNo: 3, val: 332 },
      { holeNo: 4, val: 423 },
      { holeNo: 5, val: 543 },
      { holeNo: 6, val: 623 },
      { holeNo: 7, val: 712 },
      { holeNo: 8, val: 856 },
      { holeNo: 9, val: 932 },
      { holeNo: 'OUT', val: '-', textColorImp: 'white' },
      { holeNo: 10, val: 103 },
      { holeNo: 11, val: 111 },
      { holeNo: 12, val: 125 },
      { holeNo: 13, val: 137 },
      { holeNo: 14, val: 814 },
      { holeNo: 15, val: 515 },
      { holeNo: 16, val: 316 },
      { holeNo: 17, val: 217 },
      { holeNo: 18, val: 518 },
      { holeNo: 'IN', val: '-', textColorImp: 'white' },
      { holeNo: 'total', val: '-' },
    ],
  },
  {
    id: 'yard',
    label: "Yard",
    value: [
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 1,
        val: 400 + i * 5,
        textColorImp: 'black',
        textCircleColor: 'white',
      })),
      { holeNo: 'OUT', val: '-', textColorImp: 'white' },
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 10,
        val: 450 + i * 5,
        textColorImp: 'black',
        textCircleColor: 'white',
      })),
      { holeNo: 'IN', val: '-', textColorImp: 'white' },
      { holeNo: 'total', val: '-' },
    ],
  },
  {
    id: 'index',
    label: "Index",
    value: [
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 1,
        val: 0 + i * 2,
        textColorImp: 'black',
        textCircleColor: 'white',
      })),
      { holeNo: 'OUT', val: '-', textColorImp: 'white' },
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 10,
        val: 0 + i * 2,
        textColorImp: 'black',
        textCircleColor: 'white',
      })),
      { holeNo: 'IN', val: '-', textColorImp: 'white' },
      { holeNo: 'total', val: '-' },
    ],
  },
  {
    id: 'name',
    label: "Dinesh Chauwdry",
    bgColor: "#F4F4F4",
    textColor: "black",
    fontWeight: "bold",
    fontSize: 14,
    value: [
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 1,
        val: '',
      })),
      { holeNo: 'OUT', val: '-', textColorImp: 'white' },
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 10,
        val: '',
      })),
      { holeNo: 'IN', val: '-', textColorImp: 'white' },
      { holeNo: 'total', val: '-' },
    ],
  },
  {
    id: 'putts',
    label: "Putts",
    value: [
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 1,
        val: Math.floor(Math.random() * 3) + 1,
      })),
      { holeNo: 'OUT', val: '-', textColorImp: 'white' },
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 10,
        val: Math.floor(Math.random() * 3) + 1,
      })),
      { holeNo: 'IN', val: '-', textColorImp: 'white' },
      { holeNo: 'total', val: '-' },
    ],
  },
  {
    id: 'fir',
    label: "FIR",
    value: [
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 1,
        val: Math.random() > 0.5 ? 1 : 0,
      })),
      { holeNo: 'OUT', val: '-', textColorImp: 'white' },
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 10,
        val: Math.random() > 0.5 ? 1 : 0,
      })),
      { holeNo: 'IN', val: '-', textColorImp: 'white' },
      { holeNo: 'total', val: '-' },
    ],
  },
  {
    id: 'reg',
    label: "REG",
    value: [
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 1,
        val: Math.random() > 0.5 ? 1 : 0,
      })),
      { holeNo: 'OUT', val: '-', textColorImp: 'white' },
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 10,
        val: Math.random() > 0.5 ? 1 : 0,
      })),
      { holeNo: 'IN', val: '-', textColorImp: 'white' },
      { holeNo: 'total', val: '-' },
    ],
  },
  {
    id: 'upDown',
    label: "UP/Down",
    value: [
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 1,
        val: '-',
      })),
      { holeNo: 'OUT', val: '-', textColorImp: 'white' },
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 10,
        val: '-',
      })),
      { holeNo: 'IN', val: '-', textColorImp: 'white' },
      { holeNo: 'total', val: '-' },
    ],
  },
  {
    id: 'penalty',
    label: "Penalty",
    value: [
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 1,
        val: Math.random() > 0.8 ? 1 : 0,
      })),
      { holeNo: 'OUT', val: '-', textColorImp: 'white' },
      ...Array.from({ length: 9 }, (_, i) => ({
        holeNo: i + 10,
        val: Math.random() > 0.8 ? 1 : 0,
      })),
      { holeNo: 'IN', val: '-', textColorImp: 'white' },
      { holeNo: 'total', val: '-' },
    ],
  },
];


export const colorLegend = [
  { title: 'Eagle/Better', color: '#E5C74D' },
  { title: 'Birdie', color: '#DC3735' },
  { title: 'Bogey', color: '#0A599B' },
  { title: 'Double Bogey/Worse', color: '#000000' },
  { title: 'Eagle', color: 'green' },
];