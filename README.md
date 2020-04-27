# gantt-wrapper

> wrapper of frappe-gantt package

[![NPM](https://img.shields.io/npm/v/gantt-wrapper.svg)](https://www.npmjs.com/package/gantt-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save gantt-wrapper or yarn add gantt-wrapper
```

## Usage

```jsx
import React from 'react'
import GanttWrapper from 'gantt-wrapper'

import styles from './styles.module.css'

const tasks = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    progress: 10,
    dependencies: ''
  }
]

const Example = (props) => {
  return (
    <div className={styles.container}>
      <GanttWrapper
        customStyle={styles.custom}
        tasks={tasks}
        viewMode='Day'
        onClick={(task) => console.log(task)}
        onDateChange={(task, start, end) => console.log(task, start, end)}
        onProgressChange={(task, progress) => console.log(task, progress)}
        onTasksChange={(tasks) => console.log(tasks)}
      />
    </div>
  )
}

export default Example
```

## License

MIT ©
