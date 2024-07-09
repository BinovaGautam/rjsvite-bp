import React from 'react';

interface TaskListItemProps {
    status: 'ongoing' | 'completed' | 'next';
    title: string;
    description: string;
    time: string;
    duration?: string;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ status, title, description, time, duration }) => {
    const getStatusIcon = () => {
        switch (status) {
            case 'ongoing':
                return '🟢'; // Green dot for ongoing
            case 'completed':
                return '✅'; // Checkmark for completed
            case 'next':
                return '⚫'; // Black dot for next
            default:
                return '⚫';
        }
    };

    const statusText = status === 'ongoing' ? 'ongoing' : duration ? `In ${duration}` : '';

    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
                <div className="text-2xl">{getStatusIcon()}</div>
                <div className="ml-4">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold">@ {time}</p>
                {status !== 'completed' && <p className="text-sm text-gray-600">{statusText}</p>}
            </div>
        </div>
    );
};

export default TaskListItem;
