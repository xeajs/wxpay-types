declare global {
  export interface IType {
    name: string
    description: string
    required: boolean
    type: string
    children?: IType[]
  }

  export interface IDesc {
    title: string
    subTitle: string
    supportMerch: string
    method: string
    path: string
    pathName: string
    fileName: string
    domain: string
  }
}

export {}
