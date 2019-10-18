export const state = {
  users: {
    'e2b87e10-225f-11e9-8214-d7cf0f457f0f': {
      email: 'ramiz.rahman@example.com',
      firstName: 'Ramiz',
      lastName: 'Rahman'
    },
    'e5da5780-225f-11e9-8214-d7cf0f457f0f': {
      email: 'rana@example.com',
      firstName: 'Rana',
      lastName: 'Rashid'
    },
    'e4fc3710-2260-11e9-8214-d7cf0f457f0f': {
      email: 'wasimn@example.com',
      firstName: 'Wasim',
      lastName: 'Osman'
    },
    'fae66a00-2260-11e9-8214-d7cf0f457f0f': {
      email: 'imran@example.com',
      firstName: 'Imran',
      lastName: 'Alam'
    },
    'e5c80b30-2263-11e9-8214-d7cf0f457f0f': {
      email: 'raian@example.com',
      firstName: 'Raian',
      lastName: 'Kabir'
    },
    '57498220-2264-11e9-8214-d7cf0f457f0f': {
      email: 'rhythm@example.com',
      firstName: 'Rhythm',
      lastName: 'Shariar'
    },
    '11ff8000-2261-11e9-8214-d7cf0f457f0f': {
      email: 'shuhel@example.com',
      firstName: 'Shuhel',
      lastName: 'Rana'
    },
    '222d3170-2261-11e9-8214-d7cf0f457f0f': {
      email: 'neloy@example.com',
      firstName: 'Neloy',
      lastName: 'Zaman'
    },
    '5a6ed370-2263-11e9-8214-d7cf0f457f0f': {
      email: 'pratik@example.com',
      firstName: 'Pratik',
      lastName: 'Joy'
    },
    '5f97c780-2263-11e9-8214-d7cf0f457f0f': {
      email: 'rezwana@example.com',
      firstName: 'Reawana',
      lastName: 'Raza'
    },
    '59ee91d0-2261-11e9-8214-d7cf0f457f0f': {
      email: 'mifta@example.com',
      firstName: 'Mifta',
      lastName: 'Sintaha'
    },
    '74dec780-2261-11e9-8214-d7cf0f457f0f': {
      email: 'nabila@example.com',
      firstName: 'Nabila',
      lastName: 'Ahmed'
    },
    '8dcac8c0-2261-11e9-8214-d7cf0f457f0f': {
      email: 'Mayisha@example.com',
      firstName: 'Mayisha',
      lastName: 'Alam'
    },
    '9d720c20-2261-11e9-8214-d7cf0f457f0f': {
      email: 'shorna@example.com',
      firstName: 'Shorna',
      lastName: 'Sriti'
    }
  },

  bills: {
    'e09230c0-2261-11e9-8214-d7cf0f457f0f': {
      title: 'Nandos & Crimson Cup',
      date: '2018-12-24',
      paidBy: 'e5da5780-225f-11e9-8214-d7cf0f457f0f'
    },
    'fbdd57b0-2261-11e9-8214-d7cf0f457f0f': {
      title: 'Art Cafe',
      date: '2018-11-06',
      paidBy: 'fae66a00-2260-11e9-8214-d7cf0f457f0f'
    },
    '00cb8cb0-2262-11e9-8214-d7cf0f457f0f': {
      title: 'KFD & CHEEZ',
      date: '2018-11-26',
      paidBy: '9d720c20-2261-11e9-8214-d7cf0f457f0f'
    },
    '05d84630-2262-11e9-8214-d7cf0f457f0f': {
      title: 'WoodHouse Grill',
      date: '2018-10-18',
      paidBy: 'e5da5780-225f-11e9-8214-d7cf0f457f0f'
    }
  },

  expenses: {
    'cf6394a0-2262-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: 'fae66a00-2260-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    },
    '72f2a790-2264-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: 'e5da5780-225f-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    },
    '79a5be10-2264-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: 'e5c80b30-2263-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    },
    '7e349500-2264-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: '5a6ed370-2263-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    },
    '85c58860-2264-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: 'e4fc3710-2260-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    },

    'f0095c10-2264-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: 'fae66a00-2260-11e9-8214-d7cf0f457f0f',
      billId: 'fbdd57b0-2261-11e9-8214-d7cf0f457f0f'
    },
    'f9f09b80-2264-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: 'e5c80b30-2263-11e9-8214-d7cf0f457f0f',
      billId: 'fbdd57b0-2261-11e9-8214-d7cf0f457f0f'
    },
    'feaf3500-2264-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: '57498220-2264-11e9-8214-d7cf0f457f0f',
      billId: 'fbdd57b0-2261-11e9-8214-d7cf0f457f0f'
    },
    '0653d770-2265-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: 'e5c80b30-2263-11e9-8214-d7cf0f457f0f',
      billId: 'fbdd57b0-2261-11e9-8214-d7cf0f457f0f'
    },
    '0bab2e80-2265-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: 'e4fc3710-2260-11e9-8214-d7cf0f457f0f',
      billId: 'fbdd57b0-2261-11e9-8214-d7cf0f457f0f'
    },

    'a38b2fc0-2265-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: '59ee91d0-2261-11e9-8214-d7cf0f457f0f',
      billId: '00cb8cb0-2262-11e9-8214-d7cf0f457f0f'
    },
    'ac42a1c0-2265-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: '74dec780-2261-11e9-8214-d7cf0f457f0f',
      billId: '00cb8cb0-2262-11e9-8214-d7cf0f457f0f'
    },
    'b0cce4d0-2265-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: '8dcac8c0-2261-11e9-8214-d7cf0f457f0f',
      billId: '00cb8cb0-2262-11e9-8214-d7cf0f457f0f'
    },
    'b741b9d0-2265-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: '5f97c780-2263-11e9-8214-d7cf0f457f0f',
      billId: '00cb8cb0-2262-11e9-8214-d7cf0f457f0f'
    },
    'bcf93240-2265-11e9-8214-d7cf0f457f0f': {
      cleared: false,
      userId: '9d720c20-2261-11e9-8214-d7cf0f457f0f',
      billId: '00cb8cb0-2262-11e9-8214-d7cf0f457f0f'
    }
  },

  items: {
    'cd37d3a0-2265-11e9-8214-d7cf0f457f0f': {
      name: 'Chicken Tenders',
      price: '483',
      expenseId: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f'
    },
    '2aa84470-2266-11e9-8214-d7cf0f457f0f': {
      name: 'Caramel Latte',
      price: '242',
      expenseId: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f'
    },
    '2fc99760-2266-11e9-8214-d7cf0f457f0f': {
      name: 'Peri Soup',
      price: '172',
      expenseId: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f'
    },

    '63f9bab0-2266-11e9-8214-d7cf0f457f0f': {
      name: 'Chicken Butterfly',
      price: '604',
      expenseId: '72f2a790-2264-11e9-8214-d7cf0f457f0f'
    },
    '6893dc40-2266-11e9-8214-d7cf0f457f0f': {
      name: 'Crimson Mocha',
      price: '402',
      expenseId: '72f2a790-2264-11e9-8214-d7cf0f457f0f'
    },

    'af6b1570-2266-11e9-8214-d7cf0f457f0f': {
      name: '1/4 Quarter Chicken Meal with 2 sides',
      price: '673',
      expenseId: '79a5be10-2264-11e9-8214-d7cf0f457f0f'
    },
    'b648e570-2266-11e9-8214-d7cf0f457f0f': {
      name: 'Crimson Mocha',
      price: '402',
      expenseId: '79a5be10-2264-11e9-8214-d7cf0f457f0f'
    },

    'e6a54470-2266-11e9-8214-d7cf0f457f0f': {
      name: '1/4 Quarter Chicken Meal with 1 side',
      price: '570',
      expenseId: '7e349500-2264-11e9-8214-d7cf0f457f0f'
    },

    '13970130-2267-11e9-8214-d7cf0f457f0f': {
      name: '1/4 Quarter Chicken Meal with 2 sides',
      price: '673',
      expenseId: '85c58860-2264-11e9-8214-d7cf0f457f0f'
    },
    '1c707a20-2267-11e9-8214-d7cf0f457f0f': {
      name: 'Chicken Tenders',
      price: '242',
      expenseId: '85c58860-2264-11e9-8214-d7cf0f457f0f'
    },

    '6fdea970-2267-11e9-8214-d7cf0f457f0f': {
      name: 'Americano',
      price: '165',
      expenseId: 'f0095c10-2264-11e9-8214-d7cf0f457f0f'
    },
    '74416750-2267-11e9-8214-d7cf0f457f0f': {
      name: 'Chamcham',
      price: '66',
      expenseId: 'f0095c10-2264-11e9-8214-d7cf0f457f0f'
    },

    '9069cee0-2267-11e9-8214-d7cf0f457f0f': {
      name: 'Americano',
      price: '165',
      expenseId: 'f9f09b80-2264-11e9-8214-d7cf0f457f0f'
    },
    '96b2b1e0-2267-11e9-8214-d7cf0f457f0f': {
      name: 'Chamcham',
      price: '66',
      expenseId: 'f9f09b80-2264-11e9-8214-d7cf0f457f0f'
    },

    'c8376440-2267-11e9-8214-d7cf0f457f0f': {
      name: 'Cappucino',
      price: '220',
      expenseId: 'feaf3500-2264-11e9-8214-d7cf0f457f0f'
    },
    'cd4de1c0-2267-11e9-8214-d7cf0f457f0f': {
      name: 'Chamcham',
      price: '66',
      expenseId: 'feaf3500-2264-11e9-8214-d7cf0f457f0f'
    },

    '08872ad0-2268-11e9-8214-d7cf0f457f0f': {
      name: 'Iced Latte',
      price: '220',
      expenseId: '0653d770-2265-11e9-8214-d7cf0f457f0f'
    },

    '0de33cd0-2268-11e9-8214-d7cf0f457f0f': {
      name: 'Chamcham',
      price: '66',
      expenseId: '0bab2e80-2265-11e9-8214-d7cf0f457f0f'
    },

    '476f4b10-2268-11e9-8214-d7cf0f457f0f': {
      name: 'KFD',
      price: '315',
      expenseId: 'a38b2fc0-2265-11e9-8214-d7cf0f457f0f'
    },
    '4c4defb0-2268-11e9-8214-d7cf0f457f0f': {
      name: 'Cheez',
      price: '92',
      expenseId: 'a38b2fc0-2265-11e9-8214-d7cf0f457f0f'
    },

    '61ea02a0-2268-11e9-8214-d7cf0f457f0f': {
      name: 'KFD',
      price: '315',
      expenseId: 'ac42a1c0-2265-11e9-8214-d7cf0f457f0f'
    },
    '66eb7180-2268-11e9-8214-d7cf0f457f0f': {
      name: 'Cheez',
      price: '92',
      expenseId: 'ac42a1c0-2265-11e9-8214-d7cf0f457f0f'
    },

    '7eb7f900-2268-11e9-8214-d7cf0f457f0f': {
      name: 'KFD',
      price: '315',
      expenseId: 'b0cce4d0-2265-11e9-8214-d7cf0f457f0f'
    },
    '844d1c60-2268-11e9-8214-d7cf0f457f0f': {
      name: 'Cheez',
      price: '92',
      expenseId: 'b0cce4d0-2265-11e9-8214-d7cf0f457f0f'
    },

    'a2c42ee0-2268-11e9-8214-d7cf0f457f0f': {
      name: 'KFD',
      price: '315',
      expenseId: 'b741b9d0-2265-11e9-8214-d7cf0f457f0f'
    },
    'a7a51d70-2268-11e9-8214-d7cf0f457f0f': {
      name: 'Cheez',
      price: '92',
      expenseId: 'b741b9d0-2265-11e9-8214-d7cf0f457f0f'
    },

    'bceb9650-2268-11e9-8214-d7cf0f457f0f': {
      name: 'KFD',
      price: '315',
      expenseId: 'bcf93240-2265-11e9-8214-d7cf0f457f0f'
    },
    'c2397780-2268-11e9-8214-d7cf0f457f0f': {
      name: 'Cheez',
      price: '92',
      expenseId: 'bcf93240-2265-11e9-8214-d7cf0f457f0f'
    }
  }
};
