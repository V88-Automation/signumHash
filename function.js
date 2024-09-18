window.function = function (message,key)
{
    // Step 1: Convert the key (hex string) into a CryptoJS format
    //const keyBytes = CryptoJS.enc.Hex.parse(key);

    // Step 2: Compute HMAC-SHA256 using CryptoJS
    //const hmac = CryptoJS.HmacSHA256(message, keyBytes);

    // Step 3: Convert the result to a Base64 string
    //const hashValue = CryptoJS.enc.Base64.stringify(hmac);

    // Step 4: Return the Base64-encoded hash
    //return hashValue;

   try {
        // Step 1: Manually convert the hex string to a byte array
        const keyBytes = hexStringToByteArray(key);
        
        // Log the keyBytes for debugging
        console.log("Key Bytes:", keyBytes);

        // Step 2: Convert the keyBytes into a CryptoJS WordArray
        const keyWordArray = CryptoJS.lib.WordArray.create(keyBytes);
        
        // If sigBytes is not automatically set, manually set it
        if (keyWordArray.sigBytes === undefined || keyWordArray.sigBytes === NaN) {
            keyWordArray.sigBytes = keyBytes.length;  // Set it to the actual length of the key
        }

        // Step 3: Compute HMAC-SHA256 using CryptoJS
        const hmac = CryptoJS.HmacSHA256(message, keyWordArray);

        // Step 4: Convert the result to a Base64 string
        const hashValue = CryptoJS.enc.Base64.stringify(hmac);

        // Step 5: Return the Base64-encoded hash
        return hashValue;
    } catch (error) {
        console.error("Error in signumHash function:", error.message);
        return null;
    }
}

// Helper function to manually convert hex string to byte array
function hexStringToByteArray(hex) {
    const byteArray = [];
    for (let i = 0; i < hex.length; i += 2) {
        byteArray.push(parseInt(hex.substr(i, 2), 16));
    }
    return byteArray;

    
}
