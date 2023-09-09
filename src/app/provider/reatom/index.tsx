import { createCtx } from "@reatom/framework"
import { reatomContext } from "@reatom/npm-react"

export interface ReatomProviderProps {
	children: React.ReactNode,
}

const ctx = createCtx()

export const ReatomProvider = (props: ReatomProviderProps) => {
	return (
		<reatomContext.Provider value={ctx}>
			{props.children}
		</reatomContext.Provider>
	)
}
