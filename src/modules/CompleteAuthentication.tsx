
import React from 'react';

function PopupPage() {
  const handleLoginClick = () => {
    const clientId = 'YOUR_GITHUB_CLIENT_ID'; // Replace with your GitHub client ID
    const redirectUri = encodeURIComponent('YOUR_REDIRECT_URI'); // Your encoded redirect URI
    const scope = 'repo'; // Example scope - adjust based on your needs
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    window.open(githubAuthUrl, '_blank'); // Open GitHub login in a new tab
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Login with GitHub</button>
    </div>
  );
}

export default PopupPage;
