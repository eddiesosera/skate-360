import { User } from "./user.model"

export interface LocationModel {
    id?: number
    name: string
    street: string
    city: string
    description: string
    stockAmount: number
    avatar: string
    users: User[]
    skateboards: []
}