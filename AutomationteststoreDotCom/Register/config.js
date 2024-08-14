export function generateRandomUsername(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let username = '';
    for (let i = 0; i < length; i++) {
      username += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return username;
  }
  
// -------------------------------------------

  const generatedEmails = new Set();

  export function generateRandomEmail(baseName = 'ralphleynes') {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    // Function to generate random 4-digit alphanumeric string
    const generateRandomSuffix = () => {
      let suffix = '';
      for (let i = 0; i < 4; i++) {
        suffix += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return suffix;
    };
  
    let randomSuffix;
    do {
      randomSuffix = generateRandomSuffix();
    } while (generatedEmails.has(randomSuffix)); // Ensure it's unique
  
    generatedEmails.add(randomSuffix);
  
    return `${baseName}${randomSuffix}@mailnesia.com`;
  }
   