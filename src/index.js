import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Gantt from 'frappe-gantt-with-roles'

import { exampleTask } from './examples'

const GanttComponent = ({
  onTasksChange,
  onDateChange,
  onProgressChange,
  onViewChange,
  viewMode,
  onClick,
  tasks,
  ganttOptions,
  customStyle
}) => {
  const target = useRef(null)
  const svg = useRef(null)

  useEffect(() => {
    const gantt = new Gantt(svg.current, tasks, {
      on_click: onClick,
      on_view_change: onViewChange,
      on_progress_change: (task, progress) => {
        onProgressChange(task, progress)
        onTasksChange(tasks)
      },
      on_date_change: (task, start, end) => {
        onDateChange(task, start, end)
        onTasksChange(tasks)
      },
      ...ganttOptions
    })

    if (gantt) {
      gantt.change_view_mode(viewMode)
    }

    const midOfSvg = svg.current.clientWidth * 0.5
    target.current.scrollLeft = midOfSvg
    // eslint-disable-next-line
  }, [tasks, ganttOptions])

  return (
    <div className={customStyle || styles.container} ref={target}>
      <svg
        ref={svg}
        width='100%'
        height='100%'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      />
    </div>
  )
}

GanttComponent.defaultProps = {
  onTasksChange: () => {},
  onClick: () => {},
  onDateChange: () => {},
  onProgressChange: () => {},
  onViewChange: () => {},
  viewMode: 'Day',
  tasks: [...exampleTask],
  ganttOptions: {
    header_height: 50,
    column_width: 30,
    step: 24,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    bar_height: 20,
    bar_corner_radius: 3,
    arrow_curve: 5,
    padding: 18,
    view_mode: 'Day',
    date_format: 'YYYY-MM-DD',
    custom_popup_html: null,
    role: 'viewer'
  }
}

export default GanttComponent
