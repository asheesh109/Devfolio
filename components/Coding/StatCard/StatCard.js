import { motion } from "framer-motion";

const StatCard = ({ label, value, icon, color = "text-blue-400" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gray-900 p-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`${typeof icon === 'string' ? 'text-2xl' : color}`}>
          {icon}
        </span>
        <span className={`text-3xl font-bold ${color}`}>{value}</span>
      </div>
      <p className="text-sm text-gray-400">{label}</p>
    </motion.div>
  );
};

export default StatCard;