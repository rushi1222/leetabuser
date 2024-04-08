import React, { useEffect, useState } from 'react';
import {
  AuthorizeWithGtihub,
  AuthorizeWithLeetCode,
  SelectRepositoryStep,
  StartOnboarding,
} from '../modules/CompleteAuthentication';

type UserGlobalData = {
    github_leetcode_token: string;
    github_username: string;
    github_leetcode_repo: string;
    leetcode_session: string;
};

function Popup() {
    const [isLoading, setIsLoading] = useState(true);
    // Initialize error as a string or null for consistent type use
    const [error, setError] = useState<string | null>(null);
    const [userData, setUserData] = useState<Partial<UserGlobalData>>({});

    // Corrected the function name to match the casing convention and usage
    const hasCompletedRequirements = (data: Partial<UserGlobalData>) => {
        return data.github_leetcode_token && data.github_username && data.github_leetcode_repo && data.leetcode_session;
    }

    useEffect(() => {
        setIsLoading(true);
        chrome.storage.sync.get([
            'github_leetcode_token',
            'github_username',
            'github_leetcode_repo',
            'leetcode_session',
        ], (result) => {
            if (chrome.runtime.lastError) {
                setError('Failed to fetch user data.');
                setIsLoading(false);
                return;
            }

            setUserData({
                github_leetcode_token: result.github_leetcode_token,
                github_username: result.github_username,
                github_leetcode_repo: result.github_leetcode_repo,
                leetcode_session: result.leetcode_session,
            });

            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : hasCompletedRequirements(userData) ? (
                <p>User data is complete.</p>
            ) : (
                <p>User data is incomplete.</p>
            )}
        </div>
    );
}

export default Popup;
