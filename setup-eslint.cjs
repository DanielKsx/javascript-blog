
const fs = require('fs');
const { execSync } = require('child_process');

const ESLINT_CONFIG = 'eslint.config.cjs';

try {
  
  if (!fs.existsSync(ESLINT_CONFIG)) {
    console.log('🧩 Creating eslint.config.cjs...');
    const config = `const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules/**', 'dist/**', 'build/**'] },
  js.configs.recommended,
  {
    files: ['js/**/*.js', 'js/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: { ...globals.browser, console: 'readonly' }
    },
    rules: { semi: ['error', 'always'], quotes: ['warn', 'single'], 'no-unused-vars': 'warn' }
  }
];
`;
    fs.writeFileSync(ESLINT_CONFIG, config);
    console.log('✅ eslint.config.cjs created.');
  } else {
    console.log('ℹ️ eslint.config.cjs already exists — skipping creation.');
  }

  
  try {
    require.resolve('@eslint/js');
    require.resolve('globals');
    console.log('✅ Required packages already installed.');
  } catch {
    console.log('📦 Installing @eslint/js and globals...');
    execSync('npm i -D @eslint/js globals', { stdio: 'inherit' });
  }

  console.log('🎉 ESLint setup completed.');
  process.exit(0);
} catch (err) {
  console.error('❌ Error in setup-eslint.cjs:', err.message || err);
  process.exit(1);
}