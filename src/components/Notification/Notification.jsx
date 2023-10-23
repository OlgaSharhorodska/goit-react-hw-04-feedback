export default Notification;

import { Message } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};