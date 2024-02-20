import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';


export default class MyProfileNavbar extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e:any, data:any) => {
    const name = data.name;
    if (name) {
      this.setState({ activeItem: name });
    }
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Menu text vertical > 
     
        <Menu.Item
          href="/profil-bilgilerim"  
          name='Kişisel  Bilgilerim'
          active={activeItem === 'Kişisel  Bilgilerim'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        href="/deneyimlerim"  
          name='Deneyimlerim'
          active={activeItem === 'Deneyimlerim'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        href="/eğitim-hayatım"  
          name='Eğitim Hayatım'
          active={activeItem === 'Eğitim Hayatım'}
          onClick={this.handleItemClick}
        />
         <Menu.Item
        href="/yetkinliklerim"
          name='Yetkinliklerim'
          active={activeItem === 'Yetkinliklerim'}
          onClick={this.handleItemClick}
        />
         <Menu.Item
          name='Sertifikalarım'
          active={activeItem === 'Sertifikalarım'}
          onClick={this.handleItemClick}
        />
         <Menu.Item
          name='Medya Hesaplarım'
          active={activeItem === 'Medya Hesaplarım'}
          onClick={this.handleItemClick}      
        />
         <Menu.Item
          name='Yabancı Dillerim' 
          active={activeItem === 'Yabancı Dillerim'}
          onClick={this.handleItemClick}
        />
         <Menu.Item
          name='Ayarlar'
          active={activeItem === 'Ayarlar'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}