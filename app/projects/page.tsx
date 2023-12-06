"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Repo {
  name: string;
  description: string;
  html_url: string;
}

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const username = "Uditya69"; 
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projets</h2>
      <div className="flex flex-wrap gap-4">
        {repos.map((repo) => (
          <Link
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 border border-gray-500 p-4  rounded-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4 hover:text-violet-500"
        >
          <div>
            <strong className="block text-lg mb-2">{repo.name}</strong>
            <p className="text-gray-700">
              {repo.description || "No description available"}
            </p>
            <br />
            
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GitHubRepos;
