import React from 'react';
import {TaskListItem} from '@/components'

const tasks = [
    {
        status: 'ongoing',
        title: 'Focus Locus Ongoing',
        description: 'Create Focus Locus Tracker for tracing..',
        time: '8:45',
        duration: '',
    },
    {
        status: 'completed',
        title: 'Focus Locus Completed',
        description: 'Create Focus Locus Tracker for tracing..',
        time: '7:45 to 8:45',
    },
    {
        status: 'next',
        title: 'Focus Locus Next',
        description: 'Create Focus Locus Tracker for tracing..',
        time: '10:00',
        duration: 'In 15mins',
    },
    {
        status: 'next',
        title: 'Focus Locus Next',
        description: 'Create Focus Locus Tracker for tracing..',
        time: '10:00',
        duration: 'In 15mins',
    },
    {
        status: 'next',
        title: 'Focus Locus Next',
        description: 'Create Focus Locus Tracker for tracing..',
        time: '10:00',
        duration: 'In 15mins',
    },
];

const TaskList: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {tasks.map((task, index) => (
                <TaskListItem
                    key={index}
                    status={task.status as 'ongoing' | 'completed' | 'next'}
                    title={task.title}
                    description={task.description}
                    time={task.time}
                    duration={task.duration}
                />
            ))}
        </div>
    );
};

export default TaskList;
