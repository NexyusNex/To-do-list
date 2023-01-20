const list = (index, name) => {
  const taskList = [];
  return {
    index: index,
    name: name,
    taskList,
  };
};

export default list;
