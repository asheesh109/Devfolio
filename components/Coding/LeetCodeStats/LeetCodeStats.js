import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, AlertCircle, XCircle } from "lucide-react";
import StatCard from "../StatCard/StatCard";

const LeetCodeStats = ({ username }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Using alfa-leetcode-api proxy which handles CORS
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
       
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
       
        const data = await response.json();
       
        if (data && data.solvedProblem !== undefined) {
          setStats({
            total: data.solvedProblem || 0,
            easy: data.easySolved || 0,
            medium: data.mediumSolved || 0,
            hard: data.hardSolved || 0,
            ranking: data.ranking || 0
          });
        } else {
          throw new Error('Invalid data format');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching LeetCode stats:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (username) {
      fetchLeetCodeStats();
    }
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-3 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-400 text-sm font-medium">Loading LeetCode stats...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-3 text-center max-w-md">
          <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-yellow-400 text-sm font-medium">
            Unable to fetch LeetCode stats
          </div>
          <div className="text-gray-500 text-xs">
            Please check if the username "{username}" exists on LeetCode
          </div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-400 text-sm">No data available</div>
      </div>
    );
  }

  const progressPercentage = Math.min((stats.total / 3000) * 100, 100);

  // Green gradient colors for progress bar
  const gradientColors = "from-emerald-400 via-green-500 to-teal-500";
  const glowColor = "shadow-green-500/50";
  const textColor = "text-emerald-400";
  const shadowRgb = "16, 185, 129"; // green

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Total Solved"
          value={stats.total}
          icon={<CheckCircle2 className="w-6 h-6" />}
          color="text-green-400"
        />
        <StatCard
          label="Easy"
          value={stats.easy}
          icon={<Circle className="w-6 h-6 fill-green-400" />}
          color="text-green-400"
        />
        <StatCard
          label="Medium"
          value={stats.medium}
          icon={<AlertCircle className="w-6 h-6" />}
          color="text-yellow-400"
        />
        <StatCard
          label="Hard"
          value={stats.hard}
          icon={<XCircle className="w-6 h-6" />}
          color="text-red-400"
        />
      </div>
     
      {/* Enhanced Animated Progress Bar with Loading Effect */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-base font-semibold text-gray-200">Problem Solving Progress</span>
            <p className="text-xs text-gray-500 mt-0.5">Keep grinding! 💪</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-gray-200">
              {stats.total}
            </span>
            <span className="text-sm text-gray-500 ml-1">/3000+</span>
          </div>
        </div>
        
        {/* Progress Bar Container with Loading Effect */}
        <div className="relative w-full h-8 bg-gray-900 rounded-full overflow-hidden border-2 border-gray-700 shadow-inner">
          {/* Animated Gradient Progress Bar with Loading Effect */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ 
              duration: 2, 
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.3 
            }}
            className={`h-full bg-gradient-to-r ${gradientColors} relative shadow-lg ${glowColor}`}
            style={{
              boxShadow: `0 0 20px rgba(${shadowRgb}, 0.4)`
            }}
          >
            {/* Continuous Shine/Loading Effect */}
            <motion.div
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0.5
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40"
              style={{ width: '50%' }}
            />
            
            {/* Pulse Effect for Loading Animation */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-white"
            />
            
            {/* Inner Glow Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20" />
            
            {/* Animated Particles Effect */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
          </motion.div>
          
          {/* Percentage Text Inside Bar */}
          {progressPercentage > 15 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <span className="text-sm font-bold text-white drop-shadow-lg z-10">
                {progressPercentage.toFixed(1)}%
              </span>
            </motion.div>
          )}
        </div>
        
        {/* Progress Info */}
        <div className="flex items-center justify-between mt-3">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-xs font-semibold ${textColor}`}
          >
            🚀 Keep Solving!
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-sm font-bold ${textColor}`}
          >
            {progressPercentage.toFixed(1)}% Complete
          </motion.span>
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="grid grid-cols-3 gap-3">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500/50 transition-all"
        >
          <div className="text-xs text-gray-500 mb-1">Easy Rate</div>
          <div className="text-xl font-bold text-green-400">
            {stats.total > 0 ? ((stats.easy / stats.total) * 100).toFixed(0) : 0}%
          </div>
          <div className="mt-2 w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.total > 0 ? (stats.easy / stats.total) * 100 : 0}%` }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-yellow-500/50 transition-all"
        >
          <div className="text-xs text-gray-500 mb-1">Medium Rate</div>
          <div className="text-xl font-bold text-yellow-400">
            {stats.total > 0 ? ((stats.medium / stats.total) * 100).toFixed(0) : 0}%
          </div>
          <div className="mt-2 w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.total > 0 ? (stats.medium / stats.total) * 100 : 0}%` }}
              transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500/50 transition-all"
        >
          <div className="text-xs text-gray-500 mb-1">Hard Rate</div>
          <div className="text-xl font-bold text-red-400">
            {stats.total > 0 ? ((stats.hard / stats.total) * 100).toFixed(0) : 0}%
          </div>
          <div className="mt-2 w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.total > 0 ? (stats.hard / stats.total) * 100 : 0}%` }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-red-400 to-rose-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeetCodeStats;