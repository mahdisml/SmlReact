import { entity } from 'simpler-state'

export const counter = entity<number>(0)

// no need for it , you can set it in every where !
export function increase (num:number) {
    counter.set(counter.get() + 1)
}
