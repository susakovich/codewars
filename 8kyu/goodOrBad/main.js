// TODO
/*
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

// PREP
// P: x an array of strings
// R: if there are no good ideas, return str Fail, if there is one or two return Publish, if more than two return I smell a series
// E: well(['good', 'bad', 'good', 'good']); // returns 'I smell a series!'
//    well(['bad', 'bad', 'bad']); // returns 'Fail!'
//    well(['good', 'bad']); // returns 'Publish!'
// P: we need variable goodIdeas, than filter it to check for length and word good, after that make if/else condition

function well(x) {
  const goodIdeas = x.filter((idea) => idea === "good").length;
  if (goodIdeas === 0) {
    return "Fail!";
  } else if (goodIdeas <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}
