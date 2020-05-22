
export interface IBrief{
    Picture: string
    Description: string
    Name: string
    LastName: string
  }
  
  export interface IExperience {
    EntityName: string
    StartDate: string
    EndDate: string
    Role: string
    Description: string
  }
  
  export interface IQuickExperience{
    Name: string
    Level: number
    certificationUrl?: string
    certificationContent?:string
  }
  
  export interface IInterest{
    Name: string
    Description: string
  }
  
  export interface ISkill{
    Name: string
    Level: number
  }
  
  export interface ILanguageSkill extends ISkill{
    Native: boolean
  }
  
  export interface IPersonalInfo{
    BirthDate: string
    Nationality: string
    Gender: string
    Email: string
    Telephone: string
    Status: string
    Kids: number
  }
  
  export interface ISection{
    Title: string
    IsVisible: boolean
    Content: IBrief | IPersonalInfo | ILanguageSkill[] | IInterest[] | IExperience[] | string | string[] | IQuickExperience[]
  }
  
export interface ICvType{
    QuickInfo?: ISection[]
    JobRelatedInfo?: ISection[]
}