import { BtnList, LibraryLink } from './ButtonList.styled';

export const ButtonList = () => {
  return (
    <BtnList>
      <li>
        <LibraryLink type="button" to="/library/watched">
          WATCHED
        </LibraryLink>
      </li>
      <li>
        <LibraryLink type="button" to="/library/queue">
          QUEUE
        </LibraryLink>
      </li>
    </BtnList>
  );
};
