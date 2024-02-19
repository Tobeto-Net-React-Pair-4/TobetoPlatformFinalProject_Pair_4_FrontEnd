import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const city = [
    { key: '0', text: '', value: 'İl Seçin' },
    { key: '1', text: 'Adana', value: 'Adana' },
    { key: '2', text: 'Adıyaman', value: 'Adıyaman' },
    { key: '3', text: 'Afyon', value: 'Afyon' },
    { key: '4', text: 'Ağrı', value: 'Ağrı' },
    { key: '5', text: 'Amasya', value: 'Amasya' },
    { key: '6', text: 'Ankara', value: 'Ankara' },
    { key: '7', text: 'Antalya', value: 'Antalya' },
    { key: '8', text: 'Artvin', value: 'Artvin' },
    { key: '9', text: 'Aydın', value: 'Aydın' },
    { key: '10', text: 'Balıkesir', value: 'Balıkesir' },
    { key: '11', text: 'Bilecik', value: 'Bilecik' },
    { key: '12', text: 'Bingöl', value: 'Bingöl' },
    { key: '13', text: 'Bitlis', value: 'Bitlis' },
    { key: '14', text: 'Bolu', value: 'Bolu' },
    { key: '15', text: 'Burdur', value: 'Burdur' },
    { key: '16', text: 'Bursa', value: 'Bursa' },
    { key: '17', text: 'Çanakkale', value: 'Çanakkale' },
    { key: '18', text: 'Çankırı', value: 'Çankırı' },
    { key: '19', text: 'Çorum', value: 'Çorum' },
    { key: '20', text: 'Denizli', value: 'Denizli' },
    { key: '21', text: 'Diyarbakır', value: 'Diyarbakır' },
    { key: '22', text: 'Edirne', value: 'Edirne' },
    { key: '23', text: 'Elazığ', value: 'Elazığ' },
    { key: '24', text: 'Erzincan', value: 'Erzincan' },
    { key: '25', text: 'Erzurum', value: 'Erzurum' },
    { key: '26', text: 'Eskişehir', value: 'Eskişehir' },
    { key: '27', text: 'Gaziantep', value: 'Gaziantep' },
    { key: '28', text: 'Giresun', value: 'Giresun' },
    { key: '29', text: 'Gümüşhane', value: 'Gümüşhane' },
    { key: '30', text: 'Hakkari', value: 'Hakkari' },
    { key: '31', text: 'Hatay', value: 'Hatay' },
    { key: '32', text: 'Isparta', value: 'Isparta' },
    { key: '33', text: 'İçel', value: 'İçel' },
    { key: '34', text: 'İstanbul ', value: 'İstanbul' },
    { key: '35', text: 'İzmir', value: 'İzmir' },
    { key: '36', text: 'Kars', value: 'Kars' },
    { key: '37', text: 'Kastamonu', value: 'Kastamonu' },
    { key: '38', text: 'Kayseri', value: 'Kayseri' },
    { key: '39', text: 'Kırklareli', value: 'Kırklareli' },
    { key: '40', text: 'Kırşehir', value: 'Kırşehir' },
    { key: '41', text: 'Kocaeli', value: 'Kocaeli' },
    { key: '42', text: 'Konya', value: 'Konya' },
    { key: '43', text: 'Kütahya', value: 'Kütahya' },
    { key: '44', text: 'Malatya', value: 'Malatya' },
    { key: '45', text: 'Manisa', value: 'Manisa' },
    { key: '46', text: 'K.Maraş', value: 'K.Maraş' },
    { key: '47', text: 'Mardin', value: 'Mardin' },
    { key: '48', text: 'Muğla', value: 'Muğla' },
    { key: '49', text: 'Muş', value: 'Muş' },
    { key: '50', text: 'Nevşehir', value: 'Nevşehir' },
    { key: '51', text: 'Niğde', value: 'Niğde' },
    { key: '52', text: 'Ordu', value: 'Ordu' },
    { key: '53', text: 'Rize', value: 'Rize' },
    { key: '54', text: 'Sakarya', value: 'Sakarya' },
    { key: '55', text: 'Samsun', value: 'Samsun' },
    { key: '56', text: 'Siirt', value: 'Siirt' },
    { key: '57', text: 'Sinop', value: 'Sinop' },
    { key: '58', text: 'Sivas', value: 'Sivas' },
    { key: '59', text: 'Tekirdağ', value: 'Tekirdağ' },
    { key: '60', text: 'Tokat', value: 'Tokat' },
    { key: '61', text: 'Trabzon', value: 'Trabzon' },
    { key: '62', text: 'Tunceli', value: 'Tunceli' },
    { key: '63', text: 'Şanlıurfa', value: 'Şanlıurfa' },
    { key: '64', text: 'Uşak', value: 'Uşak' },
    { key: '65', text: 'Van', value: 'Van' },
    { key: '66', text: 'Yozgat', value: 'Yozgat' },
    { key: '67', text: 'Zonguldak', value: 'Zonguldak' },
    { key: '68', text: 'Aksaray', value: 'Aksaray' },
    { key: '69', text: 'Bayburt', value: 'Bayburt' },
    { key: '70', text: 'Karaman', value: 'Karaman' },
    { key: '71', text: 'Kırıkkale', value: 'Kırıkkale' },
    { key: '72', text: 'Batman', value: 'Batman' },
    { key: '73', text: 'Şırnak', value: 'Şırnak' },
    { key: '74', text: 'Bartın', value: 'Bartın' },
    { key: '75', text: 'Ardahan', value: 'Ardahan' },
    { key: '76', text: 'Iğdır', value: 'Iğdır' },
    { key: '77', text: 'Yalova', value: 'Yalova' },
    { key: '78', text: 'Karabük', value: 'Karabük' },
    { key: '79', text: 'Kilis', value: 'Kilis' },
    { key: '80', text: 'Osmaniye', value: 'Osmaniye' },
    { key: '81', text: 'Düzce', value: 'Düzce' },

]

const DropdownCity = () => {
    return (
        <Dropdown
            placeholder='İl Seçin'
            fluid
            search
            selection
            options={city}
        />
    )
}

export default DropdownCity