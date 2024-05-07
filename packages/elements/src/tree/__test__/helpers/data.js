export const multiLevelData = [
  {
    value: 'l11',
    label: 'Level 1-1',
    items: [
      {
        value: 'l21',
        label: 'Level 2-1',
        expanded: true,
        items: [
          {
            value: 'l31',
            label: 'Level 3-1'
          },
          {
            value: 'l32',
            label: 'Level 3-2'
          }
        ]
      },
      {
        value: 'l22',
        label: 'Level 2-2',
        expanded: true,
        items: [
          {
            value: 'l33',
            label: 'Level 3-3'
          }
        ]
      }
    ]
  },
  {
    value: 'l12',
    label: 'Level 1-2',
    items: [
      {
        value: 'l23',
        label: 'Level 2-3',
        expanded: true,
        items: [
          {
            value: 'l34',
            label: 'Level 3-4'
          },
          {
            value: 'l35',
            label: 'Level 3-5'
          }
        ]
      },
      {
        value: 'l24',
        label: 'Level 2-4'
      }
    ]
  }
];

export const flatData = [
  {
    icon: 'info',
    label: 'Item 1',
    value: '1'
  },
  {
    icon: '',
    label: 'Item 2',
    value: '2',
    readonly: true
  },
  {
    icon: 'https://cdn.refinitiv.net/public/libs/elf/assets/elf-theme-halo/resources/icons/favorites.svg',
    label: 'Item 3',
    value: '3',
    disabled: true
  },
  {
    label: 'Item 4',
    value: '4',
    selected: true
  }
];

export const nestedData = [
  {
    label: 'Item 1',
    value: '1',
    expanded: true,
    items: [
      {
        label: 'Item 1.1',
        value: '1.1'
      },
      {
        label: 'Item 1.2',
        value: '1.2',
        selected: true
      }
    ]
  },
  {
    label: 'Item 2',
    value: '2',
    readonly: true
  },
  {
    label: 'Item 3',
    value: '3',
    disabled: true
  },
  {
    label: 'Item 4',
    value: '4'
  }
];

export const deepNestedData = [
  {
    label: 'Item 1',
    value: '1',
    items: [
      {
        label: 'Item 1.1',
        value: '1.1'
      },
      {
        label: 'Item 1.2',
        value: '1.2'
      },
      {
        label: 'Item 1.3',
        value: '1.3',
        items: [
          {
            label: 'Item 1.3.1',
            value: '1.3.1',
            items: [
              {
                label: 'Item 1.3.1.1',
                value: '1.3.1.1',
                selected: true
              },
              {
                label: 'Item 1.3.1.2',
                value: '1.3.1.2',
                selected: true
              },
              {
                label: 'Item 1.3.1.3',
                value: '1.3.1.3',
                selected: true
              }
            ]
          },
          {
            label: 'Item 1.3.2',
            value: '1.3.2',
            items: [
              {
                label: 'Item 1.3.2.1',
                value: '1.3.2.1',
                selected: true
              },
              {
                label: 'Item 1.3.2.2',
                value: '1.3.2.2',
                selected: true
              },
              {
                label: 'Item 1.3.2.3',
                value: '1.3.2.3',
                selected: true
              }
            ]
          }
        ]
      }
    ]
  }
];
