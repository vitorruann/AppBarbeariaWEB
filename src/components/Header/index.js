import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logoPurple from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  console.log(profile)

  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="Gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://i.pinimg.com/236x/91/aa/ef/91aaeffeaf6b29fe0a044568eea90be1.jpg'
              }
              alt="Vitor Ruan"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
