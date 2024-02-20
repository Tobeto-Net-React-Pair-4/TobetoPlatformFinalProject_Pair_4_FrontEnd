import { Dropdown } from "semantic-ui-react"

const options = [
    { key: 0, text: 'Seviye Seçin', value: "" },
    { key: 1, text: 'Lisans', value: "Lisans" },
    { key: 2, text: 'Ön Lisans', value: "Ön Lisans" },
    { key: 3, text: 'Yüksek Lisans', value: "Yüksek Lisans" },
    { key: 4, text: 'Doktora', value: "Doktora" },
]
const DropdownEducationLevel = () => (
    < Dropdown
    placeholder='Seviye Seçin'
    fluid
    search
    selection
    options={options} />
)

export default DropdownEducationLevel;
