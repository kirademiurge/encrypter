import { EncryptModeButton, SecretCodeInput } from "@/entities/encrypter"

export const Header = () => {
	return (
		<div className="border-b py-2">
			<div className="container flex items-center justify-between">
				<h1 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Encrypter</h1>
				<div className="flex gap-5 items-center">
					<EncryptModeButton />
					<SecretCodeInput />
				</div>
			</div>
		</div>
	)
}
