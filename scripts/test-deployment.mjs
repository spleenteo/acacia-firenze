import fetch from 'node-fetch';

async function testDeployment() {
  const deploymentUrl = 'https://acacia-firenze.pages.dev';
  
  console.log('Testing deployment at:', deploymentUrl);
  
  try {
    // Test homepage
    const response = await fetch(`${deploymentUrl}/en`);
    const html = await response.text();
    
    console.log('\nResponse status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    // Check for key content
    const hasTitle = html.includes('Acacia');
    const hasApartments = html.includes('apartment') || html.includes('accommodation');
    const hasMoods = html.includes('mood');
    
    console.log('\nContent checks:');
    console.log('- Has title:', hasTitle);
    console.log('- Has apartments:', hasApartments);
    console.log('- Has moods:', hasMoods);
    
    // Check for empty sections
    const emptyPattern = /<section[^>]*>[\s\n]*<\/section>/g;
    const emptyDivPattern = /<div[^>]*class="[^"]*grid[^"]*"[^>]*>[\s\n]*<\/div>/g;
    
    const hasEmptySections = emptyPattern.test(html);
    const hasEmptyGrids = emptyDivPattern.test(html);
    
    console.log('\nEmpty content checks:');
    console.log('- Has empty sections:', hasEmptySections);
    console.log('- Has empty grids:', hasEmptyGrids);
    
    // Extract any error messages
    if (html.includes('error') || html.includes('Error')) {
      console.log('\nPossible errors found in HTML');
    }
    
    // Test API endpoint directly if available
    console.log('\n--- Testing API endpoint ---');
    const apiTest = await fetch(`${deploymentUrl}/api/test-datocms`);
    if (apiTest.ok) {
      const apiData = await apiTest.json();
      console.log('API test response:', apiData);
    } else {
      console.log('No API test endpoint available');
    }
    
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

testDeployment();