const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'MyFolder');

try {
  if (fs.existsSync(folderPath)) {
    fs.rmdirSync(folderPath);
    console.log('Folder has been deleted successfully');
  } else {
    console.log('Folder does not exist');
  }
} catch (err) {
  console.error('An error occurred while deleting the folder:', err);
}