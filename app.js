const occupations = [
    { id: 1, name: "Engineer", totalScore: 0 },
    { id: 2, name: "Doctor", totalScore: 0 },
    // ...
  ];
  
  const questions = [
    {
      text: "Do you like building Legos?",
      yesScores: {
        Engineer: 9, Doctor: 4, Police: 2, Artist: 6, Chef: 3, Teacher: 5, Veterinarian: 4, Scientist: 8
      },
      noScores: {
        Engineer: 2, Doctor: 5, Police: 5, Artist: 3, Chef: 4, Teacher: 5, Veterinarian: 6, Scientist: 3
      }
    },
    // more questions...
  ];
  