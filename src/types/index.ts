export interface Equipment {
    id: string;
    name: string;
    category: string;
    status: 'available' | 'rented' | 'maintenance';
    dailyRate: number;
    condition: string;
}