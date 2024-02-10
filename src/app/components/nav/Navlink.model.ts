export interface NavLink{
    url? : string
    title : string
    children? : NavLink[]
    isChildrenVisible? : boolean
  }