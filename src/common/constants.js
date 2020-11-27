import helpers from './helpers';

const {wp} = helpers;

export default {
  taskType: Object.freeze({
    active: 'Active',
    completed: 'Completed',
  }),
  icons: {
    clipBoard: 'clipboard-list',
    clipBoardCheck: 'clipboard-check',
    checkCircle: 'check-circle',
    crossCircle: 'times-circle',
  },
  fontSize: {
    tiny: wp(3.2),
    small: wp(3.7),
    medium: wp(3.9),
    big: wp(4.1),
    large: wp(5),
    huge: wp(8),
  },
};
