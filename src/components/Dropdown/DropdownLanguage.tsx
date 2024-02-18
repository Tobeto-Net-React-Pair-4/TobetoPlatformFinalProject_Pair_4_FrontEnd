
import { Dropdown } from 'semantic-ui-react'
const languageOptions = [
  { key: 'null', value: '',  text: 'Dil Seçin' },
  { key: 'de', value: 'de', flag: 'de', text: 'Almanca' },
  { key: 'cz', value: 'cz', flag: 'cz', text: 'Çekçe' },
  { key: 'ws', value: 'ws', flag: 'ws', text: 'American Samoa' },
  { key: 'fi', value: 'fi', flag: 'fi', text: 'Fince' },
  { key: 'fr', value: 'fr', flag: 'fr', text: 'Fransızca' },
  { key: 'tr', value: 'tr', flag: 'tr', text: 'Türkçe' },
  { key: 'an', value: 'an', flag: 'an', text: 'Hollandaca' },
  { key: 'gb', value: 'gb', flag: 'gb', text: 'İngilizce' },
  { key: 'es', value: 'es', flag: 'es', text: 'İspanyolca' },
  { key: 'se', value: 'se', flag: 'se', text: 'İsveççe' },
  { key: 'it', value: 'it', flag: 'it', text: 'İtalyanca' },
  { key: 'jp', value: 'jp', flag: 'jp', text: 'Japonca' },
  { key: 'kr', value: 'kr', flag: 'kr', text: 'Korece' },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Lehçe' },
  { key: 'hu', value: 'hu', flag: 'hu', text: 'Macarca' },
  { key: 'no', value: 'no', flag: 'no', text: 'Norveççe' },
  { key: 'pt', value: 'pt', flag: 'pt', text: 'Portekizce' },
  { key: 'ro', value: 'ro', flag: 'ro', text: 'Romence' },
  { key: 'ru', value: 'ru', flag: 'ru', text: 'Rusça' },
  { key: 'vi', value: 'vi', flag: 'vi', text: 'Vietnamca' },
  { key: 'gr', value: 'gr', flag: 'gr', text: 'Yunanca' },
]

const DropdownLanguage = () => (
  <Dropdown
    placeholder='Dil Seçin'
    fluid
    search
    selection
    options={languageOptions}
  />
)

export default DropdownLanguage