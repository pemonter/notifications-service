import {
  Notification,
  NotificationProps,
} from '@application/entities/Notification';
import { Content } from '@application/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('This is a notification'),
    category: 'Social',
    recipientId: 'recipient-1',
    ...override,
  });
}
