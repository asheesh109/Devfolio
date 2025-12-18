import { useState, useEffect } from "react";
import { GitFork, Users, Star, Code } from "lucide-react";
import StatCard from "../StatCard/StatCard";

const GitHubStats = ({ username }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const data = await response.json();
        
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const repos = await reposResponse.json();
        
        const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const languages = {};
        
        // Fetch languages for top 10 repos
        const languagePromises = repos.slice(0, 10).map(async (repo) => {
          try {
            const langResponse = await fetch(repo.languages_url);
            return await langResponse.json();
          } catch {
            return {};
          }
        });
        
        const languageResults = await Promise.all(languagePromises);
        
        languageResults.forEach(langData => {
          Object.entries(langData).forEach(([lang, bytes]) => {
            languages[lang] = (languages[lang] || 0) + bytes;
          });
        });
        
        setStats({
          followers: data.followers,
          repos: data.public_repos,
          stars: totalStars,
          languages: Object.keys(languages).slice(0, 5)
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setError(true);
        setLoading(false);
      }
    };

    if (username && username !== 'your-github-username') {
      fetchGitHubStats();
    } else {
      setLoading(false);
      setError(true);
    }
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-32 text-gray-400">
        <p>Unable to load GitHub stats. Please check username.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard 
        label="Repositories" 
        value={stats?.repos || 0} 
        icon={<GitFork className="w-6 h-6" />}
        color="text-blue-400"
      />
      <StatCard 
        label="Followers" 
        value={stats?.followers || 0} 
        icon={<Users className="w-6 h-6" />}
        color="text-purple-400"
      />
      <StatCard 
        label="Stars" 
        value={stats?.stars || 0} 
        icon={<Star className="w-6 h-6" />}
        color="text-yellow-400"
      />
      <StatCard 
        label="Languages" 
        value={stats?.languages?.length || 0} 
        icon={<Code className="w-6 h-6" />}
        color="text-green-400"
      />
    </div>
  );
};

export default GitHubStats;