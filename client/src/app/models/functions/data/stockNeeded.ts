import { Skateboard } from "./skateboard.model"

export interface StockNeeded {
    id?: number
    skateboard_type: string
    board_type: number
    board_skin: number
    truck: number
    wheels: number
    bearings: number
    skateboards: Skateboard[]
}