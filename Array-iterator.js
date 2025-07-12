const students = [
    {name : "Brian",score : 45 },
    {name : "Chole" ,score : 78},
    {name : "Diana" ,score : 92}
  ];
  //shortlisted name of students via .map method
  const learners = students.map(students=>students.name);
  //shortlisted students with scores > 50 via .filter method
  const scores = students.filter(students=>students.score>=50);  
  //calculated total score of students via .reduce method
  const totalScore = students.reduce((sum, student)=>sum + student.score, 0);
  //output
  console.log(learners)
  console.log(scores);
  console.log("Cumulative Score =",totalScore);