import { Dropdown } from "semantic-ui-react"

const options = [
    { key: 0, text: 'Select Level', value: "Select Level" },
    { key: 1, text: 'Temel Seviye ( A1 , A2)', value: "Temel Seviye ( A1 , A2)" },
    { key: 2, text: 'Orta Seviye (B1 , B2)', value: "Orta Seviye (B1 , B2)" },
    { key: 3, text: 'İleri Seviye (C1 , C2)', value: "İleri Seviye (C1 , C2)" },
    { key: 4, text: 'Anadil', value: "Anadil" },
]
const DropdownLevel = () => (
    < Dropdown
    placeholder='Select Level'
    fluid
    search
    selection
    options={options} />
)

export default DropdownLevel
