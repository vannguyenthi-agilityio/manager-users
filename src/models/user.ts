export interface User {
  id: number
  fullName: string
  userName: string
  plan: string
  email: string
  role: string
  status: string
  taxId: number
  language?: string
  country?: string
  totalProject?: number
  totalTask?: number
}
