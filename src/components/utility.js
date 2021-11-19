import { nanoid } from 'nanoid';

export const compareById = (targetID) => (item) => item.id === targetID;

export const addNewMessage = (author, text, className) => ({
    id: nanoid(10),
    author,
    text,
    className,
});

export const addNewChat = (name) => ({
    id: nanoid(10),
    name,
});