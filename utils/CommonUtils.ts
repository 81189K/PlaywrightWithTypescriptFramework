import CryptoJs from 'crypto-js';

export default class CommonUtils {

    private readonly secretKey: string;

    constructor() {
        if (process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY;
        } else {
            throw new Error("SECRET_KEY environment variable is missing. Please provide it while starting the execution")
        }
    }

    /**
     * Encrypt plain text using AES
     * @param plainText 
     * @returns encrypted string
     */
    public encrypt(plainText: string): string {
        return CryptoJs.AES.encrypt(plainText, this.secretKey).toString();
    }

    /**
     * Decrypt encrypted text
     * @param encryptedText 
     * @returns decrypted string
     */
    public decrypt(encryptedText: string): string {
        return CryptoJs.AES.decrypt(encryptedText, this.secretKey).toString(CryptoJs.enc.Utf8);
    }
}