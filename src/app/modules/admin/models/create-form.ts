
export interface Address {
  address: string
  address2: string
  district: string
  postal_code: string
  city: string
  phone: string
  country: string
}

export interface CreateForm {
  store_id: number
  first_name: string
  last_name: string
  email: string
  activebool: boolean
  address: Address
}
