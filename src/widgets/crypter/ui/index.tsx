import { DescrypterInput } from "@/entities/decrypter"
import { EncrypterInput } from "@/entities/encrypter"

export const Crypter = () => {
	return (
		<div className="container flex flex-col sm:flex-row gap-5">
			<EncrypterInput />
			<DescrypterInput />
		</div>
	)
}
