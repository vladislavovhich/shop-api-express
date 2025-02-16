export interface ICreateReviewDto {
    rating: number
    text: string
    date: Date
    userId: number
    productId: number
    images?: string[]
}

export class CreateReviewDto implements ICreateReviewDto {
    public rating: number
    public text: string
    public date: Date
    public userId: number
    public productId: number
    public images?: string[] | undefined

    constructor(data: ICreateReviewDto) {
        this.rating = data.rating
        this.text = data.text
        this.date = data.date
        this.userId = data.userId
        this.productId = data.productId
        this.images = data.images
    }
}