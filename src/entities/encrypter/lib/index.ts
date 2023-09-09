import { AES, enc } from "crypto-js"

export const encryptMsg = (plainText: string, secretCode: string): string => {
	try {
		if (plainText === "") return ""
		return AES.encrypt(plainText, secretCode).toString()
	} catch (error) {
		return ""
	}
}

export const descryptMsg = (encryptedMsg: string, secretCode: string): string => {
	try {
		if (encryptedMsg === "") return ""
		return AES.decrypt(encryptedMsg, secretCode).toString(enc.Utf8)
	} catch (error) {
		return ""
	}
}
