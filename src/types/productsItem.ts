interface ExtraData {
  firstLabel?: string
  firstValue?: string
  secondLabel?: string
} 

interface Tags {
  tagName?: string
  tagValue?: number
}

interface Tabs {
  soldOut?: string
  specialOffer?: string
  lastCall?: string
  customMade?: string
}

export interface IProduct {
    name: string
    extra?: ExtraData
    image?: string
    description?: string
    category?: string
    tags?: Tags[]
    except?: string 
    referenceText?: string 
    price?: number
    symbol?: string
    tab?: Tabs
}
