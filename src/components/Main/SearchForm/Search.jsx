import { useState } from 'react';
import sprite from '../../../icons/sprite.svg';
import { Form, Input, Button, SearchSvg, ErrText } from './SearchForm.styled';

export const Search = () => {
  const [error] = useState(false);
  return (
    <Form>
      <Input type="text" placeholder="Movie search" />
      <Button type="submit">
        <SearchSvg width="12" height="12">
          <use href={sprite + '#icon-search'}></use>
        </SearchSvg>
      </Button>
      {!error && (
        <ErrText>
          Search result not successful. Enter the correct movie name please!
        </ErrText>
      )}
    </Form>
  );
};
