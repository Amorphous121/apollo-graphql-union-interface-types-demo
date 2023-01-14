let data = [
  {
    id: '1',
    name: 'Prathamesh'
  },
  {
    id: '2',
    name: 'Prasad'
  },
  {
    id: '1',
    publication: 'Navneet'
  },
  {
    id: '1',
    publication: 'Cosmos'
  },
];

const results = [
  {
    id: 1,
    degree: 'Ph.d',
    cgpa: 8.9
  },
  {
    id: 2,
    degree: '10th',
    percentage: 89
  }
]

exports.resolvers = {
  Data: {
    __resolveType: (obj, contextValue, info) => obj.name ? 'Author' : 'Book'
  },

  Result: {
    __resolveType: (obj, contextValue, info) => obj.cgpa ? 'CollegeDegree' : 'SchoolMarksheet'
  },

  Query: {
    getData: () => data,
    getResults: () => results
  }
}