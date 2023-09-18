export const taskFirst = () => {
    const task = 'I prefer const when I can.';
    return task;
  };
  
  export const getLast = () => ' is okay';
  
  export const taskNext = () => {
    const combination = 'But sometimes let';
    return combination + getLast();
  };
  