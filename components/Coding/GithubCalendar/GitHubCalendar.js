import React, { useState, useEffect } from 'react';

const GitHubCalendar = ({ username }) => {
  const [calendarData, setCalendarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setError('Username is required');
      setLoading(false);
      return;
    }

    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    if (!token) {
      setError('GitHub token is required. Set NEXT_PUBLIC_GITHUB_TOKEN in .env.local');
      setLoading(false);
      return;
    }

    const query = `
      query {
        user(login: "${username}") {
          name
          contributionsCollection {
            contributionCalendar {
              colors
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `;

    fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'GitHubCalendarApp',
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (result.errors) {
          throw new Error(result.errors[0].message);
        }
        setCalendarData(result.data.user.contributionsCollection.contributionCalendar);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching GitHub data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="text-gray-400 text-sm font-medium">Loading contributions...</span>
        </div>
      </div>
    );
  }

  if (error || !calendarData) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-red-400 text-sm font-medium">
            {error || 'No data available'}
          </div>
          <div className="text-gray-500 text-xs max-w-xs">
            Make sure your GitHub token is set correctly in .env.local
          </div>
        </div>
      </div>
    );
  }

  const { weeks, totalContributions, colors } = calendarData;

  const getMonthLabel = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short' });
  };

  // Compute month headers with proper spacing
  const monthLabels = [];
  let lastMonth = '';
  
  weeks.forEach((week, index) => {
    const currentMonth = getMonthLabel(week.contributionDays[0].date);
    if (currentMonth !== lastMonth) {
      monthLabels.push({ index, label: currentMonth });
      lastMonth = currentMonth;
    }
  });

  return (
    <div className="w-full select-none">
      {/* Header Section */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-300 text-sm font-medium">
            {totalContributions.toLocaleString()}
          </span>
          <span className="text-gray-500 text-sm">
            contributions in the last year
          </span>
        </div>
        
        {/* Legend */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 font-medium">Less</span>
          <div className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded-sm transition-transform hover:scale-110"
              style={{ 
                backgroundColor: colors[0],
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              title="No contributions"
            />
            {colors.slice(1).map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-sm transition-transform hover:scale-110"
                style={{ 
                  backgroundColor: color,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                title={`${index + 1}+ contributions`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">More</span>
        </div>
      </div>
      
      {/* Calendar Container - Full Width */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-2 w-full">
          {/* Fixed Day Labels Column */}
          <div className="flex flex-col justify-start flex-shrink-0" style={{ paddingTop: '22px' }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
              // Show only Mon, Wed, Fri, Sun
              const showDay = index === 0 || index === 2 || index === 4 || index === 6;
              return (
                <div 
                  key={index} 
                  className="flex items-center justify-end"
                  style={{ 
                    height: '11px',
                    marginBottom: '2px',
                    width: '28px',
                    paddingRight: '4px'
                  }}
                >
                  <span className="text-[10px] leading-none text-gray-500 font-normal">
                    {showDay ? day : ''}
                  </span>
                </div>
              );
            })}
          </div>
          
          {/* Scrollable Calendar Area - Takes remaining space */}
          <div className="overflow-x-auto overflow-y-hidden flex-1 custom-scrollbar" style={{ paddingBottom: '8px' }}>
            <div style={{ minWidth: 'max-content' }}>
              {/* Month Headers Row */}
              <div className="flex mb-1" style={{ height: '16px', gap: '2px' }}>
                {weeks.map((week, weekIndex) => {
                  const monthLabel = monthLabels.find(m => m.index === weekIndex);
                  return (
                    <div
                      key={weekIndex}
                      className="text-[10px] leading-none text-gray-400 font-medium flex items-center"
                      style={{ width: '11px' }}
                    >
                      {monthLabel ? monthLabel.label : ''}
                    </div>
                  );
                })}
              </div>
              
              {/* Calendar Grid - 7 rows */}
              <div className="flex flex-col" style={{ gap: '2px' }}>
                {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
                  <div key={dayIndex} className="flex" style={{ gap: '2px', height: '11px' }}>
                    {weeks.map((week, weekIndex) => {
                      const day = week.contributionDays[dayIndex];
                      
                      if (!day) {
                        return (
                          <div 
                            key={weekIndex} 
                            style={{ width: '11px', height: '11px' }}
                          />
                        );
                      }
                      
                      const bgColor = day.color || colors[0];
                      const hasContribution = day.contributionCount > 0;
                      
                      return (
                        <div
                          key={weekIndex}
                          className="group relative rounded-sm flex-shrink-0 cursor-pointer transition-all duration-150 hover:ring-2 hover:ring-gray-400"
                          style={{ 
                            width: '11px',
                            height: '11px',
                            backgroundColor: bgColor,
                            border: hasContribution ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                            boxSizing: 'border-box'
                          }}
                        >
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1.5 bg-gray-800 text-white text-xs rounded shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50 border border-gray-700">
                            <div className="font-semibold">
                              {day.contributionCount} contribution{day.contributionCount !== 1 ? 's' : ''}
                            </div>
                            <div className="text-gray-400 text-[10px] mt-0.5">
                              {new Date(day.date).toLocaleDateString('en-US', { 
                                weekday: 'short', 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                            {/* Tooltip arrow */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.2);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(107, 114, 128, 0.5);
          border-radius: 3px;
          transition: background 0.2s;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(107, 114, 128, 0.7);
        }
        
        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(107, 114, 128, 0.5) rgba(55, 65, 81, 0.2);
        }
      `}</style>
    </div>
  );
};

export default GitHubCalendar;