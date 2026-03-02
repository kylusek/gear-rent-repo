import type {Equipment} from "../types";

export const mockEquipment: Equipment[] = [
  {
    id: "EQ-001",
    name: "Kamera Sony FX3",
    category: "Kamery",
    status: "available",
    dailyRate: 350,
    condition: "Doskonały"
  },
  {
    id: "EQ-002",
    name: "Obiektyw Sigma 24-70mm f/2.8",
    category: "Obiektywy",
    status: "rented",
    dailyRate: 120,
    condition: "Dobry"
  },
  {
    id: "EQ-003",
    name: "Dron DJI Mavic 3 Cine",
    category: "Drony",
    status: "maintenance",
    dailyRate: 450,
    condition: "Wymaga przeglądu"
  },
  {
    id: "EQ-004",
    name: "Mikrofon Rode NTG4+",
    category: "Audio",
    status: "available",
    dailyRate: 80,
    condition: "Doskonały"
  },
  {
    id: "EQ-005",
    name: "Gimbal DJI RS 3 Pro",
    category: "Akcesoria",
    status: "rented",
    dailyRate: 150,
    condition: "Dostateczny"
  }
];