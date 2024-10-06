import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const repoList = [
    "ComicFix-com/Corn.ai",
    "ComicFix-com/AI-tools-for-you",
    "ComicFix-com/FinSage-",
    "ComicFix-com/UniW",
    "ComicFix-com/ZoXach",
    "ComicFix-com/Law-Buddy-",
    "ComicFix-com/Widgets"
  ];

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const repoDataPromises = repoList.map((repo) =>
          fetch(`https://api.github.com/repos/${repo}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Error fetching ${repo}: ${response.statusText}`);
              }
              return response.json();
            })
        );
        const reposData = await Promise.all(repoDataPromises);
        setRepos(reposData);
      } catch (err) {
        setError(`Failed to load repositories: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  if (loading) {
    return <div className="text-white px-10 py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-white px-10 py-10">{error}</div>;
  }

  return (
    <div id="ep" className="px-10 py-10 md:px-20 text-white bg-black">
      <h1 className="text-3xl mb-8 font-bold">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

const RepoCard = ({ repo }) => (
  <div className="bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2 text-white">{repo.name}</h2>
      <p className="text-gray-400 mb-4 line-clamp-5">
        {repo.description || "No description available"}
      </p>
      <RepoStats stargazersCount={repo.stargazers_count} forksCount={repo.forks_count} />
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-500 hover:underline mt-4 block"
      >
        View Project
      </a>
    </div>
  </div>
);

const RepoStats = ({ stargazersCount, forksCount }) => (
  <div className="flex items-center space-x-4 text-sm text-gray-400">
    <StatItem count={stargazersCount} label="Stars" iconPath="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.907c.958 0 1.356 1.233.588 1.81l-3.973 2.906a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.973-2.906a1 1 0 00-1.175 0l-3.973 2.906c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.993 9.1c-.768-.577-.37-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.518-4.674z" />
    <StatItem count={forksCount} label="Forks" iconPath="M6 3v12M18 3v12M9 15V9m6 6V9M3 21h18" />
  </div>
);

const StatItem = ({ count, label, iconPath }) => (
  <span className="flex items-center">
    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
    </svg>
    {count} {label}
  </span>
);

export default Projects;
