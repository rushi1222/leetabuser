// Assuming config is now a TS file and properly typed, holding only client-safe values
import { GITHUB_CLIENT_ID, GITHUB_REDIRECT_URI } from '../constants';


function PopupPage() {
  const handleLoginClick = () => {
    const clientId = GITHUB_CLIENT_ID; 
    const redirectUri = encodeURIComponent(GITHUB_REDIRECT_URI);
    const scope = 'repo';
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    window.open(githubAuthUrl, '_blank');
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Login with GitHub</button>
    </div>
  );
}

export default PopupPage;
