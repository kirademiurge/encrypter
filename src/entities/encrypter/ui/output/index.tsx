import { useAction, useAtom } from "@reatom/npm-react"
import { onChangeOutput, outputAtom } from "../../model"
import { Textarea } from "@/shared/ui/textarea"

export const EncrypterOutput = () => {
	const [output] = useAtom(outputAtom)
	const handleChange = useAction(onChangeOutput)

	return (
		<div className="space-y-2">
			<p>output:</p>
			<Textarea
				value={output}
				onChange={handleChange}
			/>
		</div>
	)
}
