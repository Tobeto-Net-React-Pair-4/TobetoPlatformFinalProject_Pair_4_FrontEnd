import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { FiUser } from "react-icons/fi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { IoBookOutline,IoLanguageOutline} from "react-icons/io5";
import { PiMedalThin,PiCertificateLight } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

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
         
          href="/profilim/profilimi-duzenle/profil-bilgilerim"  
          name='Kişisel  Bilgilerim'
          active={activeItem === 'Kişisel  Bilgilerim'}
          onClick={this.handleItemClick}
        ><FiUser /> Kişisel  Bilgilerim</Menu.Item>
        <Menu.Item
        href="/profilim/profilimi-duzenle/deneyimlerim"  
          name='Deneyimlerim'
          active={activeItem === 'Deneyimlerim'}
          onClick={this.handleItemClick}
        ><BiBriefcaseAlt /> Deneyimlerim</Menu.Item>
        <Menu.Item
        href="/profilim/profilimi-duzenle/eğitim-hayatım"  
          name='Eğitim Hayatım'
          active={activeItem === 'Eğitim Hayatım'}
          onClick={this.handleItemClick}
        ><IoBookOutline /> Eğitim Hayatım</Menu.Item>
         <Menu.Item
        href="/profilim/profilimi-duzenle/yetkinliklerim"
          name='Yetkinliklerim'
          active={activeItem === 'Yetkinliklerim'}
          onClick={this.handleItemClick}
        ><PiMedalThin /> Yetkinliklerim</Menu.Item>
         <Menu.Item
          href="/profilim/profilimi-duzenle/sertifikalar"
          name='Sertifikalarım'
          active={activeItem === 'Sertifikalarım'}
          onClick={this.handleItemClick}
        ><PiCertificateLight /> Sertifikalarım</Menu.Item>
         <Menu.Item
          href="/profilim/profilimi-duzenle/sosyal-medya"
          name='Medya Hesaplarım'
          active={activeItem === 'Medya Hesaplarım'}
          onClick={this.handleItemClick}      
        ><TbWorld /> Medya Hesaplarım</Menu.Item>
         <Menu.Item
          href="/profilim/profilimi-duzenle/dillerim"
          name='Yabancı Dillerim' 
          active={activeItem === 'Yabancı Dillerim'}
          onClick={this.handleItemClick}
        ><IoLanguageOutline /> Yabancı Dillerim</Menu.Item>
         <Menu.Item
          href="/profilim/profilimi-duzenle/ayarlar"
          name='Ayarlar'
          active={activeItem === 'Ayarlar'}
          onClick={this.handleItemClick}
        ><CiSettings /> Ayarlar</Menu.Item>
      </Menu>
    );
  }
}