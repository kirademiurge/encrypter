import { EncrypterInput, EncrypterOutput } from "@/entities/encrypter"

export const EncrypterSection = () => {
	return (
		<div className="container flex flex-col gap-5 lg:w-[50%] mt-20 lg:mt-40">
			<EncrypterInput />
			<EncrypterOutput />
		</div>
	)
}
