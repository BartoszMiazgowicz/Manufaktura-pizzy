export type MenuCategory = 'pizze' | 'przekaski' | 'salatki' | 'desery' | 'napoje';

export type DietaryTag = 'vegetarian' | 'vegan' | 'spicy';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tags?: DietaryTag[];
  image?: string;
}

export const menuItems: MenuItem[] = [
  // PIZZE
  {
    id: 1,
    name: 'Marinara',
    description: 'Bez sera, sos pomidorowy, oregano, zabki czosnku, oliwa',
    price: 19.90,
    category: 'pizze',
    tags: ['vegan']
  },
  {
    id: 2,
    name: 'Margherita',
    description: 'Sos pomidorowy, mozzarella, grana padano, listki bazylii, oliwa',
    price: 34.90,
    category: 'pizze',
    tags: ['vegetarian']
  },
  {
    id: 3,
    name: 'Lucciola',
    description: 'Sos smietanowy, mozzarella, ser provolone, swiezy szpinak, suszone pomidory, marynowana grillowana papryka, czosnek',
    price: 36.90,
    category: 'pizze',
    tags: ['vegetarian']
  },
  {
    id: 4,
    name: 'Burrata',
    description: 'Sos pomidorowy, kulka burraty, ser grana padano, suszone pomidory, zapieczone w piecu pomidorki koktajlowe, oregano, swieza bazylia, oliwa',
    price: 40.90,
    category: 'pizze',
    tags: ['vegetarian']
  },
  {
    id: 5,
    name: 'Funghi',
    description: 'Sos smietanowy, mozzarella, ser gorgonzola, pieczarki, mix marynowanych lesnych grzybow, swieza natka pietruszki, oliwki',
    price: 36.90,
    category: 'pizze',
    tags: ['vegetarian']
  },
  {
    id: 6,
    name: 'Vegetariana',
    description: 'Sos smietanowy, mozzarella, swiezy szpinak, oregano, marynowane: karczoch, papryka, cukinia',
    price: 39.90,
    category: 'pizze',
    tags: ['vegetarian']
  },
  {
    id: 7,
    name: 'Veganismo',
    description: 'Sos pomidorowy, weganska mozzarella, swiezy szpinak, suszone pomidory, marynowane lesne grzyby, grillowana marynowana cukinia, tymianek',
    price: 36.90,
    category: 'pizze',
    tags: ['vegan']
  },
  {
    id: 8,
    name: 'Quattro Formaggi',
    description: 'Sos smietanowy, mozzarella, gorgonzola, provolone, grana padano, pieprz',
    price: 39.90,
    category: 'pizze',
    tags: ['vegetarian']
  },
  {
    id: 9,
    name: 'Amalfi',
    description: 'Sos z bialych trufli, mozzarella, ser provolone, ser grana padano, mix marynowanych lesnych grzybow, pieczarki, marynowana grillowana papryka',
    price: 38.90,
    category: 'pizze',
    tags: ['vegetarian']
  },
  {
    id: 10,
    name: 'Pancetta',
    description: 'Sos smietanowy, mozzarella, pancetta (wloski boczek), cebula',
    price: 37.90,
    category: 'pizze'
  },
  {
    id: 11,
    name: 'Capriciosa',
    description: 'Sos pomidorowy, mozzarella, szynka cotto, pieczarki',
    price: 38.90,
    category: 'pizze'
  },
  {
    id: 12,
    name: 'Salame Napoli',
    description: 'Sos pomidorowy, mozzarella, ser grana padano, lagodne salami',
    price: 38.90,
    category: 'pizze'
  },
  {
    id: 13,
    name: 'Salame Spianata',
    description: 'Sos pomidorowy, mozzarella, pikantne salami, ostre papryczki w oleju',
    price: 38.90,
    category: 'pizze',
    tags: ['spicy']
  },
  {
    id: 14,
    name: 'Piacere',
    description: 'Sos z czarnych trufli, mozzarella, grana padano, pomidorki koktajlowe, szynka parmenska, listki bazylii',
    price: 38.90,
    category: 'pizze'
  },
  {
    id: 15,
    name: 'Carnivore',
    description: 'Sos pomidorowy, mozzarella, pikantne salami, lagodne salami, szynka parmenska',
    price: 38.90,
    category: 'pizze',
    tags: ['spicy']
  },
  {
    id: 16,
    name: 'Bella',
    description: 'Sos pomidorowy, mozzarella, grana padano, mascarpone, szynka cotto',
    price: 38.90,
    category: 'pizze'
  },
  {
    id: 17,
    name: 'Tuna',
    description: 'Sos smietanowy, mozzarella, tunczyk z Morza Srodziemnomorskiego, swieza pietruszka, pomidorki cherry, czerwona cebula',
    price: 37.90,
    category: 'pizze'
  },
  {
    id: 18,
    name: 'Diavola',
    description: 'Sos pomidorowy, mozzarella, pepperoni, nduja (mielona ostra wedlina), jalapeno, pikantne papryczki w oliwie',
    price: 39.90,
    category: 'pizze',
    tags: ['spicy']
  },
  {
    id: 19,
    name: 'Calabrese',
    description: 'Sos pomidorowy, mozzarella, mascarpone, nduja, pancetta, czerwona cebula',
    price: 39.90,
    category: 'pizze',
    tags: ['spicy']
  },
  {
    id: 20,
    name: 'Parma',
    description: 'Sos pomidorowy, mozzarella, parmezan, pomidorki koktajlowe, rukola, szynka parmenska',
    price: 40.90,
    category: 'pizze'
  },
  {
    id: 21,
    name: 'Boscaiola',
    description: 'Sos z czarnych trufli, pancetta, gorgonzola, mix lesnych grzybow, marynowane cebulki borettane',
    price: 37.90,
    category: 'pizze'
  },
  {
    id: 22,
    name: 'Taormina',
    description: 'Sos z czarnych trufli, mozzarella, pepperoni, nduja, pieczarki, mix marynowanych lesnych grzybow',
    price: 38.90,
    category: 'pizze',
    tags: ['spicy']
  },
  {
    id: 23,
    name: 'Bufala',
    description: 'Sos pomidorowy, mozzarella z mleka bawolic, grana padano, swieza bazylia, oliwa',
    price: 36.90,
    category: 'pizze',
    tags: ['vegetarian']
  },
  {
    id: 24,
    name: 'Manufaktura Rossa',
    description: 'Pol: sos pomidorowy, mozzarella, mascarpone, grana padano, szynka cotto. Pol: sos pomidorowy, mozzarella, lagodne salami, pieczarki',
    price: 39.90,
    category: 'pizze'
  },
  {
    id: 25,
    name: 'Tartufata Bianca',
    description: 'Sos z bialych trufli, mozzarella, mix marynowanych lesnych grzybow, pieczarki, lagodne salami',
    price: 38.90,
    category: 'pizze'
  },
  {
    id: 26,
    name: 'Positano',
    description: 'Sos z bialych trufli, mozzarella, mascarpone, szynka parmenska, oliwki, mix marynowanych lesnych grzybow',
    price: 39.90,
    category: 'pizze'
  },
  {
    id: 27,
    name: 'Carbonara',
    description: 'Sos smietanowy, mozzarella, grana padano, Guanciale, czosnek, pieprz',
    price: 36.90,
    category: 'pizze'
  },
  {
    id: 28,
    name: 'Guanciale',
    description: 'Sos smietanowy, mozzarella, Guanciale, pieczarki, cebula, tymianek',
    price: 36.90,
    category: 'pizze'
  },
  {
    id: 29,
    name: 'Tartufo Nero',
    description: 'Sos z czarnych trufli, mozzarella, ser pecorino z truflami, pikantne salami, mix lesnych marynowanych grzybow, cebulki borettane',
    price: 37.90,
    category: 'pizze',
    tags: ['spicy']
  },

  // PRZEKASKI
  {
    id: 30,
    name: 'Focaccia Tradycyjna',
    description: 'Oliwa, rozmaryn, sol morska',
    price: 14.90,
    category: 'przekaski',
    tags: ['vegan']
  },
  {
    id: 31,
    name: 'Focaccia Neapolitanska',
    description: 'Wedzona papryka, oliwa',
    price: 14.90,
    category: 'przekaski',
    tags: ['vegan']
  },
  {
    id: 32,
    name: 'Talerz Wedlin',
    description: 'Szynka parmenska, lagodne salami, pikantne salami, pepperoni',
    price: 29.90,
    category: 'przekaski',
    tags: ['spicy']
  },
  {
    id: 33,
    name: 'Talerz Warzyw',
    description: 'Oliwki, mix marynowanych grzybow, marynowany karczoch, grillowane marynowane cukinia i papryka',
    price: 29.90,
    category: 'przekaski',
    tags: ['vegan']
  },
  {
    id: 34,
    name: 'Talerz Wloskich Specjalow',
    description: 'Selekcja naszych wedlin, warzyw oraz ser niespodzianka, podawane z focaccia tradycyjna',
    price: 38.90,
    category: 'przekaski'
  },
  {
    id: 35,
    name: 'Bruschetta Parma',
    description: 'Szynka parmenska, rukola, parmezan',
    price: 17.90,
    category: 'przekaski'
  },
  {
    id: 36,
    name: 'Bruschetta Tartufata',
    description: 'Pasta z bialych trufli, pikantne salami, mix marynowanych lesnych grzybow',
    price: 17.90,
    category: 'przekaski',
    tags: ['spicy']
  },
  {
    id: 37,
    name: 'Burrata lub Bufala z Bazyliowym Pesto',
    description: 'Bazyliowe pesto, rukola, pomidorki koktajlowe, podawana z focaccia z rozmarynem i sola',
    price: 27.90,
    category: 'przekaski',
    tags: ['vegetarian']
  },

  // SALATKI
  {
    id: 38,
    name: 'Salatka z Kozim Serem',
    description: 'Mix salat (endywia, radicchio, frezejska, rukola), kozi ser, gruszka, nerkowce, czarnuszka, krem balsamiczny, oliwa',
    price: 31.90,
    category: 'salatki',
    tags: ['vegetarian']
  },
  {
    id: 39,
    name: 'Salatka z Szynka Parmenska',
    description: 'Mix salat, szynka parmenska, parmezan, pomidorki cherry, krem balsamiczny',
    price: 33.90,
    category: 'salatki'
  },
  {
    id: 40,
    name: 'Salatka Weganska',
    description: 'Mix salat, grillowana marynowana papryka oraz cukinia, oliwki, marynowany karczoch, oliwa, kawalki pomaranczy, krem balsamiczny',
    price: 27.90,
    category: 'salatki',
    tags: ['vegan']
  },
  {
    id: 41,
    name: 'Salatka z Bufala',
    description: 'Rukola, kulka bufali, pikantne salami, pomidorki cherry, krem balsamiczny, oliwa',
    price: 31.90,
    category: 'salatki',
    tags: ['spicy']
  },
  {
    id: 42,
    name: 'Salatka z Tunczykiem',
    description: 'Mix salat, tunczyk, oliwki, pomidorki cherry, pomarancza, grana padano, oliwa, krem balsamiczny',
    price: 31.90,
    category: 'salatki'
  },
  {
    id: 43,
    name: 'Salatka z Burrata i Melonem',
    description: 'Mix salat, kulka burraty, oliwki, pomidorki cherry, melon, grana padano, marynowana grillowana papryka, pestki dyni, oliwa, krem balsamiczny',
    price: 33.90,
    category: 'salatki',
    tags: ['vegetarian']
  },

  // DESERY
  {
    id: 44,
    name: 'Cannolo Siciliano',
    description: 'Rurka z chrupiacego ciasta nadziana kremem z ricotty z owczego sera, posypana czekolada i cukrem pudrem',
    price: 17.90,
    category: 'desery',
    tags: ['vegetarian']
  },
  {
    id: 45,
    name: 'Cannolo al Pistacchio',
    description: 'Rurka z chrupiacego ciasta nadziana kremem z ricotty z owczego sera z kruszonymi pistacjami i cukrem pudrem',
    price: 17.90,
    category: 'desery',
    tags: ['vegetarian']
  },
  {
    id: 46,
    name: 'Ciastko Dolce',
    description: 'Wypiekane w naszym piecu ciasto do pizzy nadziewane ricotta, oblane nutella i posypane cukrem pudrem',
    price: 17.90,
    category: 'desery',
    tags: ['vegetarian']
  },
  {
    id: 47,
    name: 'Puchar Lodowy',
    description: '3 galki lodow (waniliowe, czekoladowe, truskawkowe) bita smietana, polewa czekoladowa',
    price: 16.90,
    category: 'desery',
    tags: ['vegetarian']
  },
  {
    id: 48,
    name: 'Galka Lodow',
    description: 'Waniliowe, czekoladowe, truskawkowe',
    price: 5.00,
    category: 'desery',
    tags: ['vegetarian']
  },

  // NAPOJE
  {
    id: 49,
    name: 'Cafe Espresso',
    description: 'Klasyczne wloskie espresso',
    price: 9.90,
    category: 'napoje'
  },
  {
    id: 50,
    name: 'Espresso Doppio',
    description: 'Podwojna porcja espresso',
    price: 11.90,
    category: 'napoje'
  },
  {
    id: 51,
    name: 'Cafe Americano',
    description: 'Espresso z goraca woda',
    price: 9.90,
    category: 'napoje'
  },
  {
    id: 52,
    name: 'Kawa z Mlekiem',
    description: 'Espresso z mlekiem',
    price: 9.90,
    category: 'napoje'
  },
  {
    id: 53,
    name: 'Cafe Cappuccino',
    description: 'Espresso ze spieniony mlekiem',
    price: 12.90,
    category: 'napoje'
  },
  {
    id: 54,
    name: 'Cafe Latte',
    description: 'Espresso z duzà iloscia mleka',
    price: 13.90,
    category: 'napoje'
  },
  {
    id: 55,
    name: 'Cafe Freddo',
    description: 'Kawa mrozona, espresso, lody waniliowe, bita smietana, sos czekoladowy',
    price: 14.90,
    category: 'napoje'
  },
  {
    id: 56,
    name: 'Domowa Lemoniada',
    description: 'Swieza lemoniada domowej roboty (0,45l)',
    price: 18.90,
    category: 'napoje'
  },
  {
    id: 57,
    name: 'Sanpellegrino',
    description: 'Wloski sok gazowany - pomarancza, cytryna, gorzka pomarancza (0,25l)',
    price: 11.00,
    category: 'napoje'
  },
  {
    id: 58,
    name: 'Coca-Cola / Coca-Cola Zero',
    description: '0,5l',
    price: 12.00,
    category: 'napoje'
  },
  {
    id: 59,
    name: 'Sok Cappy',
    description: 'Jablko, pomarancza (0,25l)',
    price: 10.00,
    category: 'napoje'
  },
  {
    id: 60,
    name: 'Woda Mineralna Kropla Beskidu',
    description: 'Gazowana, niegazowana (0,33l)',
    price: 10.00,
    category: 'napoje'
  },
  {
    id: 61,
    name: 'Peroni Nastro Azzurro',
    description: 'Jasne, oswiezajace o zrownowazonym goryzcce (0,33l)',
    price: 12.00,
    category: 'napoje'
  },
  {
    id: 62,
    name: 'Aperol Spritz',
    description: '100 ml Prosecco, 50 ml Aperol Spritz, woda gazowana, pomarancza',
    price: 28.90,
    category: 'napoje'
  },
  {
    id: 63,
    name: 'Limoncello Spritz',
    description: '100 ml Prosecco, 50 ml likieru cytrynowego, Sprite, cytryna, swieza mieta',
    price: 28.90,
    category: 'napoje'
  },
  {
    id: 64,
    name: 'Negroni',
    description: 'Campari, Gin, Wermut, pomarancza',
    price: 29.90,
    category: 'napoje'
  }
];

export const categories: { key: MenuCategory; label: string }[] = [
  { key: 'pizze', label: 'Pizze' },
  { key: 'przekaski', label: 'Przekaski' },
  { key: 'salatki', label: 'Salatki' },
  { key: 'desery', label: 'Desery' },
  { key: 'napoje', label: 'Napoje' }
];

export const dietaryLabels: Record<DietaryTag, { label: string; color: string }> = {
  vegetarian: { label: 'Wegetarianska', color: 'bg-green-600' },
  vegan: { label: 'Weganska', color: 'bg-emerald-600' },
  spicy: { label: 'Pikantna', color: 'bg-red-600' }
};
