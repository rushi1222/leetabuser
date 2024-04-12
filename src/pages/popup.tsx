import { useEffect, useState } from 'react';

type UserGlobalData = {
    github_leetcode_token: string;
    github_username: string;
    github_leetcode_repo: string;
    leetcode_session: string;
};

function Popup() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [userData, setUserData] = useState<Partial<UserGlobalData>>({});

    useEffect(() => {
        console.log(userData); // Temporary to bypass the TS error
        setIsLoading(true);
        // The rest of your useEffect logic
      }, [userData]); // Adding userData as a dependency might be unnecessary depending on your use case
      
    useEffect(() => {
        setIsLoading(true);
        chrome.storage.sync.get([
            'github_leetcode_token',
            'github_username',
            'github_leetcode_repo',
            'leetcode_session',
        ], (result: any) => { // Consider defining a type for the result if possible
            if (chrome.runtime.lastError) {
                setError('Failed to fetch user data.');
            } else {
                setUserData({
                    github_leetcode_token: result.github_leetcode_token,
                    github_username: result.github_username,
                    github_leetcode_repo: result.github_leetcode_repo,
                    leetcode_session: result.leetcode_session,
                });
            }
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <p>User data is complete or incomplete based on conditions.</p>
            )}
        </div>
    );
}

export default Popup;
