// config.example.ts
interface Config {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string; // Consider removing or not using client secret in client-side code
  GITHUB_REDIRECT_URI: string;
}

const config: Config = {
  GITHUB_CLIENT_ID: 'd911823a4bde72f39bb3',
  GITHUB_CLIENT_SECRET: '8b529fc8816906196c4e1ffd843647dcfd07d689', // Again, be cautious with secrets in client-side code
  GITHUB_REDIRECT_URI: 'https://rushi1222.github.io/leetabuser/proxy.html',
};

export default config;

