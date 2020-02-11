const intitialState = [
  {
    title: "bathroom remodel",
    id: 0,
    cards: [
      {
        id: 0,
        text: "demolition"
      },
      {
        id: 1,
        text: "clean up"
      }
    ]
  },
  {
    title: "landscaping",
    id: 1,
    cards: [
      {
        id: 0,
        text: "demolition"
      },
      {
        id: 1,
        text: "clean up"
      }
    ]
  }
];

const projectListReducer = (state = intitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectListReducer;
