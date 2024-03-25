import { LocationModel } from "./location.model"
import { User } from "./user.model"

export interface Skateboard {
    id?: number
    price: number
    craftedOn: string
    avatar: string
    craftedBy: User
    configuration: number
    location: LocationModel
}