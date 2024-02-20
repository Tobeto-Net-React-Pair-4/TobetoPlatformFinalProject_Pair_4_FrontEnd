import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 0, text: 'Seçin', value: "" },
    { key: 1, text: 'Instagram', value: "Instagram" },
    { key: 2, text: 'Twitter', value: "Twitter" },
    { key: 3, text: 'LinkedIn', value: "LinkedIn" },
    { key: 4, text: 'Behance', value: "Behance" },
    { key: 5, text: 'Dribble', value: "Dribble" },
    { key: 6, text: 'Github', value: "Github" },

]

const DropdownSocialMedia = () => {
    return (
        <>
            < Dropdown
                placeholder='Seçin'
                fluid
                search
                selection
                options={options} />
        </>
    )
}

export default DropdownSocialMedia