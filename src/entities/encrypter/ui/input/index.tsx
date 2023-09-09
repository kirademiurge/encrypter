import { Textarea } from "@/shared/ui/textarea"
import { useAtom, useAction } from "@reatom/npm-react"
import { inputAtom, onChangeInput } from "../../model"

export const EncrypterInput = () => {
	const [input] = useAtom(inputAtom)
	const handleChange = useAction(onChangeInput)

	return (
		<div className="space-y-2">
			<p>input:</p>
			<Textarea
				value={input}
				onChange={handleChange}
				placeholder="Enter your message here..."
			/>
		</div>
	)
}
