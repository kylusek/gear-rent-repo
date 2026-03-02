import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const location = useLocation();

    const getLinkClass = (path: string) => {
        const baseClass = "block py-3 px-4 rounded-lg transition-all duration-200 font-medium flex items-center gap-3";
        if (location.pathname === path) {
            return baseClass + "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
        }
        return baseClass + "text-gray-400 hover:bg-gray-800 hover:text-white"
    }

    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen p-6 flex flex-col shadow-xl sticky top-0">

            <div className="flex items-center gap-3 mb-10 mt-2 px-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center font-bold text-2xl shadow-inner">
                    G
                </div>
                <h2 className="text-2xl font-black tracking-tighter text-white">GearRent</h2>
            </div>

            <nav className="flex flex-col gap-3 flex-1">
                <Link to="/" className={getLinkClass('/')}>
                    <span className="text-xl">📊</span>
                    <span>Dashboard</span>
                </Link>

                <Link to="/inventory" className={getLinkClass('/inventory')}>
                    <span className="text-xl">📦</span>
                    <span>Inventory</span>
                </Link>

                <Link to="/rentals" className={getLinkClass('/rentals')}>
                    <span className="text-xl">🤝</span>
                    <span>Rentals</span>
                </Link>
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-800">
                <div className="bg-gray-800/40 p-4 rounded-2xl border border-gray-800">
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-2">System Status</p>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-gray-300">Operational</span>
                    </div>
                </div>
            </div>
        </div>
    )
}