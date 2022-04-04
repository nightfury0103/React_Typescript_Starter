import {
  IMobileMenu,
  FaqContent,
  IProduct,
  PriceItem,
  FeatureItems,
  SortItems,
  MoreImages,
  InputGroup,
} from '@root/types'

export const CONTACT_PHONE = '054-3456244'
export const CONTACT_EMAIL = 'hello@kookoo.co.il'

export const MMenus: IMobileMenu = {
  general: [
    {
      name: '2022 חספ',
      label: '!הנמזהל חתפנ',
      link: '#',
    },
    {
      name: 'תואמצעה םוי',
      label: '!בורקב',
      link: '#',
    },
    {
      name: 'ץיק יזראמ',
      label: '!בורקב',
      link: '#',
    },
    {
      name: 'הוואגה שדוח',
      label: '!בורקב',
      link: '#',
    },
  ],
  external: [
    { label: 'KOOKOO תודוא', link: '#' },
    { label: 'תוקתנתה', link: '#' },
  ],
  info: [
    { label: CONTACT_PHONE, link: `tel:${CONTACT_PHONE}` },
    { label: CONTACT_EMAIL, link: `mailto:${CONTACT_EMAIL}` },
  ],
}

export const Faq: FaqContent[] = [
  {
    question: 'םידבוע תופדעהו תויושיגרל המאתה תויורשפא',
    answer:
      'רשק ונתיא רוציל שי ןירדהמל רשכהב ךרוצ שיו הדימב .דבלב םייבלח םירצומ ליכמו חספל רשכ טיקה',
  },
  {
    question: 'םידבועה יתבל תורישי וא הרבחה ידרשמל חוליש תודוא עדימ',
    answer:
      'רשק ונתיא רוציל שי ןירדהמל רשכהב ךרוצ שיו הדימב .דבלב םייבלח םירצומ ליכמו חספל רשכ טיקה',
  },
  {
    question: 'םולשת תויורשפא',
    answer:
      'רשק ונתיא רוציל שי ןירדהמל רשכהב ךרוצ שיו הדימב .דבלב םייבלח םירצומ ליכמו חספל רשכ טיקה',
  },
  {
    question: 'תויורשכו םיביכרמ טוריפ',
    answer:
      'רשק ונתיא רוציל שי ןירדהמל רשכהב ךרוצ שיו הדימב .דבלב םייבלח םירצומ ליכמו חספל רשכ טיקה',
  },
]

export const Products: IProduct[] = [
  {
    name: 'The blackout',
    extra: {
      firstLabel: 'חיל מ"עמ + ',
      firstValue: 'ח"ש 180',
      secondLabel: 'תודיחי 320',
    },
    image: require('@assets/images/products/02.png'),
    description:
      'טיקה תודוא רצק טוריפ טיקה תודוא רצק טוריפ תודוא רצק טוריפ טיקה תודוא רצק טוריפ',
    category: ':םיפסונ םישגד',
    tags: [
      {
        tagName: 'תורשכ',
        tagValue: 4,
      },
      {
        tagName: 'ןטולגל תושיגר',
        tagValue: 5,
      },
      {
        tagName: 'ינועבט',
        tagValue: 0,
      },
    ],
    except: '',
    referenceText: '',
  },
  {
    name: '*םניחב הרבחה ידרשמל חולשמ',
    extra: {
      firstLabel: 'חיל מ"עמ + ',
      firstValue: '0',
      secondLabel: '',
    },
    image: require('@assets/images/products/02.png'),
    description:
      'טיקה תודוא רצק טוריפ טיקה תודוא רצק טוריפ תודוא רצק טוריפ טיקה תודוא רצק טוריפ',
    category: ':םיפסונ םישגד',
    tags: [],
    except: "ביבא לת ,12 הריד 5 המוק ,35 לזרבה 'חר",
    referenceText:
      '.םיפסונ םיטרפל רשק ונתיא ורצ אנא .םולשת תפסותב וניה םידבועה יתבל חוליש *',
  },
]

export const Price: PriceItem[] = [
  {
    name: 'כ"הס',
    price: 40000,
  },
  {
    name: 'מ"עמ',
    price: 6800,
  },
]

export const LihpProducts: IProduct[] = [
  {
    name: 'The blackout',
    image: require('@assets/images/products/02.png'),
    description: 'תודיחי תומכ',
    price: 300,
    symbol: 'מ"עמ + ח"ש',
    tab: {
      soldOut: 'Sold Out',
      specialOffer: 'Special Offer',
    },
  },
  {
    name: 'The blackout',
    image: require('@assets/images/products/02.png'),
    description: 'תודיחי תומכ',
    price: 300,
    symbol: 'מ"עמ + ח"ש',
    tab: {
      soldOut: 'Sold Out',
      lastCall: 'Last Call',
      customMade: 'Custom Made',
      specialOffer: 'Special Offer',
    },
  },
  {
    name: 'The blackout',
    image: require('@assets/images/products/02.png'),
    description: 'תודיחי תומכ',
    price: 300,
    symbol: 'מ"עמ + ח"ש',
    tab: {
      soldOut: 'Sold Out',
      lastCall: 'Last Call',
    },
  },
  {
    name: 'The blackout',
    image: require('@assets/images/products/02.png'),
    description: 'תודיחי תומכ',
    price: 300,
    symbol: 'מ"עמ + ח"ש',
    tab: {},
  },
]
export const Features: FeatureItems[] = [
  {
    title: 'הקפסא דעומ',
    description: '12.4.2022 ד םוי (גח ברע)',
  },
  {
    title: 'הקפסא דעומ',
    description: '12.4.2022 ד םוי (גח ברע)',
  },
  {
    title: 'הקפסא דעומ',
    description: '12.4.2022 ד םוי (גח ברע)',
  },
  {
    title: 'הקפסא דעומ',
    description: '12.4.2022 ד םוי (גח ברע)',
  },
]

export const Sorts: SortItems[] = [
  {
    name: 'ןירדהמל רשכ',
    value: 2,
  },
  {
    name: 'לוהוכלא אלל',
    value: 0,
  },
  {
    name: 'ינועבט זראמ',
    value: 2,
  },
  {
    name: 'ןטולגל םישיגר',
    value: 5,
  },
  {
    name: 'דבלב םירשכ םירצומ',
    value: 0,
  },
]

export const Images: MoreImages[] = [
  {
    url: require('@assets/images/product-img.png'),
    link: 'assets/images/product-img.png',
  },
  {
    url: require('@assets/images/products/01.png'),
    link: 'assets/images/product-img.png',
  },
  {
    url: require('@assets/images/products/02.png'),
    link: 'assets/images/product-img.png',
  },
  {
    url: require('@assets/images/product-img.png'),
    link: 'assets/images/product-img.png',
  },
  {
    url: require('@assets/images/products/01.png'),
    link: 'assets/images/product-img.png',
  },
  {
    url: require('@assets/images/products/02.png'),
    link: 'assets/images/product-img.png',
  },
]

export const GalleryImages = [
  require('@assets/images/product-img.png'),
  require('@assets/images/products/01.png'),
  require('@assets/images/products/02.png'),
  require('@assets/images/product-img.png'),
  require('@assets/images/products/01.png'),
  require('@assets/images/products/02.png'),
  require('@assets/images/product-img.png'),
]

export const SelectValue = [
  'ןיינע ימוחת',
  'ןיינע ימוחת',
  'ןיינע ימוחת',
  'ןיינע ימוחת',
  'ןיינע ימוחת',
]

export const InputGroupValue: InputGroup[] = [
  {
    placeholder: 'הרבחה םש',
    warning: 'םודאב הדשה תחת עיפוי היצדילו טסקט',
  },
  {
    placeholder: 'יטרפ םש',
    warning: 'םודאב הדשה תחת עיפוי היצדילו טסקט',
  },
  {
    placeholder: 'החפשמ םש',
    warning: 'םודאב הדשה תחת עיפוי היצדילו טסקט',
  },
  {
    placeholder: 'דיקפת',
    warning: 'םודאב הדשה תחת עיפוי היצדילו טסקט',
  },
  {
    placeholder: 'דיינ רפסמ',
    warning: 'םודאב הדשה תחת עיפוי היצדילו טסקט',
  },
  {
    placeholder: 'ליימ תבותכ',
    warning: 'םודאב הדשה תחת עיפוי היצדילו טסקט',
  },
]
