
import HeartIcon from 'public/assets/svgs/icons/heart.svg';
import PollIcon from 'public/assets/svgs/icons/poll.svg';
import CalendarIcon from 'public/assets/svgs/icons/calendar.svg';
import DotCircleIcon from 'public/assets/svgs/icons/dot-circle.svg';

import MenuItemWrapper from './MenuItemWrapper';
import STATIC_MOVIE_CATEGORIES from 'utils/constants/static-movie-categories';

const renderIcon = title => {
  switch (title) {
    case STATIC_MOVIE_CATEGORIES[0].name:
      return (
        <HeartIcon
          style={{marginRight: '10px'}}
          fill='currentColor'
          width='1em' />
      );
    case STATIC_MOVIE_CATEGORIES[1].name:
      return (
        <PollIcon
          style={{marginRight: '10px'}}
          fill='currentColor'
          width='0.875em' />
      );
    case STATIC_MOVIE_CATEGORIES[2].name:
      return (
        <CalendarIcon
          style={{marginRight: '10px'}}
          fill='currentColor'
          width='0.875em' />
      );
    default:
      return (
        <DotCircleIcon
          style={{marginRight: '10px'}}
          fill='currentColor'
          width='1em' />
      );
  }
};

const MenuItem = ({
  title,
  selected
}) => (
  <MenuItemWrapper selected={selected}>
    {renderIcon(title)}
    {title}
  </MenuItemWrapper>
);

export default MenuItem;
