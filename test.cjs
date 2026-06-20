const fs = require('fs');
const crypto = require('crypto');

async function decryptFile(filePath, password) {
  const encryptedData = fs.readFileSync(filePath);
  const iv = encryptedData.slice(0, 16);
  const data = encryptedData.slice(16);
  
  const passwordBuffer = Buffer.from(password);
  const hash = crypto.createHash('sha256').update(passwordBuffer).digest();
  const key = hash.slice(0, 32);
  
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
  
  fs.writeFileSync('decrypted_character.glb', decrypted);
  console.log('Decrypted to decrypted_character.glb');
}

decryptFile('public/models/character.enc', 'Character3D#@').catch(console.error);
