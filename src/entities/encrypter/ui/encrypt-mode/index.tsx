import { useAction, useAtom } from "@reatom/npm-react"
import { isEncryptModeAtom, onClickMode } from "../../model"
import { Button } from "@/shared/ui/button"

export const EncryptModeButton = () => {
	const [isEncryptMode] = useAtom(isEncryptModeAtom)
	const handleChange = useAction(onClickMode)

	return (
		<Button
			onClick={handleChange}
			variant="outline">
				{isEncryptMode ? "encrypt mode" : "descript mode"}
		</Button>
	)
}
