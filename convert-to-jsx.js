const fs = require('fs');
const path = require('path');

// List of files to exclude from conversion
const EXCLUDED_FILES = [
  'index.js',
  'reportWebVitals.js',
  'setupTests.js',
  'App.test.js'
];

// Function to update imports in a file
function updateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update import/require statements to use .jsx for React components
    content = content.replace(/from\s+['"](\..*?)(?<!\.jsx?)(?=['"])/g, 'from "$1.jsx"');
    
    // Special case for .jsx files in the same directory
    content = content.replace(/from\s+['"]\.\/([^.'"\/]+)(?<!\.jsx?)(?=['"])/g, 'from "./$1.jsx"');
    
    fs.writeFileSync(filePath, content, 'utf8');
  } catch (error) {
    console.error(`Error updating imports in ${filePath}:`, error);
  }
}

// Function to convert .js files to .jsx
function convertToJSX(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      convertToJSX(fullPath);
    } else if (path.extname(file) === '.js' && !EXCLUDED_FILES.includes(file)) {
      // Only process .js files that are not in the excluded list
      const newPath = fullPath.replace(/\.js$/, '.jsx');
      
      try {
        // Rename the file
        fs.renameSync(fullPath, newPath);
        console.log(`Renamed: ${fullPath} -> ${newPath}`);
        
        // Update imports in the renamed file
        updateImports(newPath);
      } catch (error) {
        console.error(`Error renaming ${fullPath}:`, error);
      }
    }
  });
}

// Start conversion from the src directory
convertToJSX(path.join(__dirname, 'src'));

console.log('Conversion to JSX completed!');
