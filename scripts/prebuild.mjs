import { execSync } from 'child_process';

console.log('--- Starting Unovia Prebuild Pipeline ---');

try {
  console.log('1/2 Fetching latest daily market news...');
  execSync('node scripts/fetch-news.mjs', { stdio: 'inherit' });

  console.log('2/2 Checking and generating automated Tax, GST & Wealth blogs...');
  execSync('node scripts/generate-blogs.mjs', { stdio: 'inherit' });

  console.log('--- Prebuild Pipeline Completed Successfully ---');
} catch (error) {
  console.error('Prebuild pipeline encountered an error:', error);
  process.exit(1);
}
