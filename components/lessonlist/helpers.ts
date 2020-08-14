export const calculateCompleted = (lessons: any) => {
  const total = lessons.length;
  if(total === 0) return 0
  const completed = lessons.filter((item: any) => item.complete).length;
  return Math.floor((completed * 100) / total);
}

export const calculateNext = (lessons: any) => {
  const noCompleted = lessons.find((item: any) => !item.complete)
  return lessons.indexOf(noCompleted) + 1;
}