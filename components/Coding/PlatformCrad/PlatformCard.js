import { motion } from "framer-motion";

const PlatformCard = ({ icon, name, username, rating, color }) => {
  return (
    <motion.a
      href={`#${name.toLowerCase()}`}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h4 className="text-xl font-semibold text-white">{name}</h4>
      </div>
      <p className="text-gray-400 text-sm mb-2">@{username}</p>
      <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${color} text-white text-sm font-medium`}>
        {rating}
      </div>
    </motion.a>
  );
};

export default PlatformCard;