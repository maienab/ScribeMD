import React from "react";


interface UserInfoProps {
    name: string;
    date: string;
    phone: string;
    reason: string;
    urgency: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, date, phone, reason, urgency }) => {
    return (
        <div className="user-info">
            <div><strong>Name:</strong> {name}</div>
            <div><strong>Date:</strong> {date}</div>
            <div><strong>Phone:</strong> {phone}</div>
            <div><strong>Reason:</strong> {reason}</div>
            <div><strong>Urgency:</strong> {urgency}</div>
        </div>
    );
};

export default UserInfo;
