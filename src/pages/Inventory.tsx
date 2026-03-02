import { mockEquipment } from "../services/mockData.ts";
import type { Equipment } from "../types";
import {useState} from "react";

const StatusBadge = ({ status }: { status: Equipment['status'] }) => {
    switch (status) {
        case 'available':
            return <span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">Available</span>;
        case 'rented':
            return <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">Rented</span>;
        case 'maintenance':
            return <span className="px-3 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">In maintenance</span>;
        default:
            return <span className="px-3 py-1 text-xs font-semibold text-gray-800 bg-gray-100 rounded-full">Unknown</span>;
    }
}

export default function Inventory() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEquipment = mockEquipment.filter((item) => {
            const lowerCaseTerm = searchTerm.toLowerCase();
            return (
                item.name.toLowerCase().includes(lowerCaseTerm) ||
                item.category.toLowerCase().includes(lowerCaseTerm) ||
                item.id.toLowerCase().includes(lowerCaseTerm)
            );
        });

    return (
        <div className="w-full h-full flex flex-col justify-start">
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Equipment storage</h1>

                    <div className="w-full md:w-1/3 relative">
                        <input
                            type="text"
                            placeholder="Search by name, category or ID..."
                            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600 uppercase text-sm leading-normal border-b">
                                <th className="py-3 px-6">ID</th>
                                <th className="py-3 px-6">Name</th>
                                <th className="py-3 px-6">Category</th>
                                <th className="py-3 px-6">Status</th>
                                <th className="py-3 px-6">Price/Day</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {filteredEquipment.map((item: Equipment) => (
                                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                    <td className="py-3 px-6 font-medium">{item.id}</td>
                                    <td className="py-3 px-6">{item.name}</td>
                                    <td className="py-3 px-6">{item.category}</td>
                                    <td className="py-3 px-6">
                                        <StatusBadge status={item.status} />
                                    </td>
                                    <td className="py-3 px-6 font-bold">{item.dailyRate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredEquipment.length === 0 && (
                        <div className="text-center py-8 text-gray-500 font-medium">
                            No equipment matching the phrase: "{searchTerm}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}