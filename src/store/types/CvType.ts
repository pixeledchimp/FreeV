export interface IPersonalData{
    Name?: string
    LastName?: string
    BirthDate?: string
    Nationality?: string
    Email?: string
    Telephone?: string
    Status?: string
    Kids?: string
    Gender?: string
    Picture?: string
}
export interface IQuickSkill{
    Name?: string
    Level?: number
}
export interface ILanguageSkill extends IQuickSkill{
    Native?: boolean
}
export interface IInterest{
    Name?: string
    Description?: string
}
export interface IEntityInfo{
    EntityName?: string
    StartDate?: string
    EndDate?: string
    Role?: string
    Description?: string
}
export interface ISection{
    Title?: string
    IsVisible?: boolean
    Content?: IPersonalData | IQuickSkill[] | IInterest[] | ILanguageSkill[] | IEntityInfo[] | string
}
export interface ICvType{
    QuickInfo?: ISection[]
    JobRelatedInfo?: ISection[]
}