// Test script to verify Sanity connection
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'i8rl0x39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

async function testConnection() {
  try {
    console.log('Testing Sanity connection...');
    console.log('Project ID: i8rl0x39');
    console.log('Dataset: production');
    console.log('');

    // Test 1: Fetch all heroSlider documents
    console.log('Test 1: Fetching all heroSlider documents...');
    const allSliders = await client.fetch(`*[_type == "heroSlider"]`);
    console.log('Found documents:', allSliders.length);
    console.log('Data:', JSON.stringify(allSliders, null, 2));
    console.log('');

    // Test 2: Fetch the first heroSlider with slides
    console.log('Test 2: Fetching first heroSlider with slides...');
    const sliderData = await client.fetch(`*[_type == "heroSlider"][0]{ slides[]{ _key, image, alt } }`);
    console.log('Slider data:', JSON.stringify(sliderData, null, 2));
    console.log('');

    // Test 3: Check all document types
    console.log('Test 3: Fetching all document types...');
    const types = await client.fetch(`array::unique(*[]._type)`);
    console.log('Available document types:', types);

  } catch (error) {
    console.error('Error:', error.message);
    console.error('Full error:', error);
  }
}

testConnection();
