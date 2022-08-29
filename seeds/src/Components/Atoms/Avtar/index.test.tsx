import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AvatarIcon from '.';
const avatarImage =
  require('../../../../public/images/Avatar/Golden path/title-bar/avatarImage.svg') as string;

it('renders an avatar', () => {
  render(<AvatarIcon src={avatarImage} alt="avatar" />);
  const avatarElement = screen.getByTestId('avatar');
  expect(avatarElement).toBeInTheDocument();
});
