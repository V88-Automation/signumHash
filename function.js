window.function = function (message,key)
{
    // Step 1: Convert the key (hex string) into a CryptoJS format
    const keyBytes = CryptoJS.enc.Hex.parse(key);

    // Step 2: Compute HMAC-SHA256 using CryptoJS
    const hmac = CryptoJS.HmacSHA256(message, keyBytes);

    // Step 3: Convert the result to a Base64 string
    const hashValue = CryptoJS.enc.Base64.stringify(hmac);

    // Step 4: Return the Base64-encoded hash
    return hashValue;
}
