import { Input } from "@/shared/ui/input"
import { useAction, useAtom } from "@reatom/npm-react"
import { onChangeSecretCode, secretCodeAtom } from "../../model"

export const SecretCodeInput = () => {
	const [secretCode] = useAtom(secretCodeAtom)
	const handleChange = useAction(onChangeSecretCode)

	return (
		<Input
			value={secretCode}
			onChange={handleChange}
			placeholder="secret code..."
			className="w-50"
		/>
	)
}
