export interface BalanceData {
  dueAmount?: string
  [key: string]: any
}

export interface AmountOption {
  value: string
  validity: number
}

export interface PaymentFormData {
  phoneNumber: string
  selectedAmount: number |string,
  numberType: string
  fees: string
  total: string
}
