import { atom, action } from "@reatom/framework"
import { encryptMsg, descryptMsg } from "../lib"

export const inputAtom = atom("")
export const outputAtom = atom("")
export const secretCodeAtom = atom("")
export const isEncryptModeAtom = atom(true)

export const encryptedMsgAtom = atom( (ctx) => {
	if (ctx.get(isEncryptModeAtom)) return encryptMsg( ctx.get(inputAtom), ctx.get(secretCodeAtom) )
	return descryptMsg( ctx.get(inputAtom), ctx.get(secretCodeAtom) )
})


export const onChangeInput = action( (ctx, event) => {
	inputAtom(ctx, event.currentTarget.value)
	outputAtom(ctx, ctx.get(encryptedMsgAtom))
})

export const onChangeOutput = action( (ctx, event) => {
	outputAtom( ctx, ctx.get(encryptedMsgAtom))
	outputAtom(ctx, event.currentTarget.value)
})

export const onChangeSecretCode = action( (ctx, event) => {
	console.log(event.currentTarget.value)
	secretCodeAtom(ctx, event.currentTarget.value)
	outputAtom(ctx, ctx.get(encryptedMsgAtom))
})

export const onClickMode = action( (ctx) => {
	isEncryptModeAtom(ctx, !ctx.get(isEncryptModeAtom))
	inputAtom(ctx, ctx.get(outputAtom))
	outputAtom(ctx, ctx.get(encryptedMsgAtom))
})
