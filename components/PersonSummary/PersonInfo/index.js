
import InfoWrapper from 'parts/InfoWrapper';
import Header from 'parts/Header';
import TheBiographySection from './TheBiographySection';
import PersonAdSection from './PersonAdSection';
import SIZE_TYPES from 'utils/constants/size-types';

const renderSubtitle = (birthday, deathday) => {
  if (!birthday) {
    return null;
  } else if (birthday && deathday) {
    return `${birthday} - ${deathday}`;
  } else {
    return birthday;
  }
};

const PersonInfo = ({ person }) => (
  <>
    <InfoWrapper>
      <Header
        className='header-bottom-margin'
        size={SIZE_TYPES.LARGE}
        title={person.name}
        subtitle={renderSubtitle(person.birthday, person.deathday)} />
      <TheBiographySection
        className='the-biography-section-bottom-margin'
        synopsis={person.biography || 'There is no biography available...'} />
      <PersonAdSection
        websiteUrl={person.homepage}
        imdbId={person.imdb_id} />
    </InfoWrapper>
    <style jsx>{`
      :global(.header-bottom-margin) {
        margin-bottom: 5rem !important;
      }

      :global(.the-biography-section-bottom-margin) {
        margin-bottom: 3rem;
      }
    `}</style>
  </>
);

export default PersonInfo;
