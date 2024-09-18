window.function = function (message,key)
{
try {
        // Step 1: Validate and convert the key (hex string) into a CryptoJS format
        if (!/^[0-9a-fA-F]+$/.test(key) || key.length % 2 !== 0) {
            throw new Error("Invalid hex string for key");
        }
        const keyBytes = CryptoJS.enc.Hex.parse(key);
        
        // Log the keyBytes for debugging
        console.log("Key Bytes:", keyBytes);

        // Step 2: Compute HMAC-SHA256 using CryptoJS
        const hmac = CryptoJS.HmacSHA256(message, keyBytes);

        // Step 3: Convert the result to a Base64 string
        const hashValue = CryptoJS.enc.Base64.stringify(hmac);

        // Step 4: Return the Base64-encoded hash
        return hashValue;
    } catch (error) {
        console.error("Error in signumHash function:", error.message);
        return null;
    }
}
