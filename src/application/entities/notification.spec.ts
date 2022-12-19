import { Content } from './content';
import { Notification } from './Notification';

describe('Notification Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade.'),
      category: 'Social',
      recipientId: 'example-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
