export const exampleTask = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    progress: 10,
    dependencies: '',
  },
  {
    id: 'Task 2',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    progress: 20,
    dependencies: 'Task 1',
  },
  {
    id: 'Task 3',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    progress: 0,
    dependencies: 'Task 2, Task 1',
  },
]
